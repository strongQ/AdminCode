

using Admin.NET.Core.Module.Bpm;
using Admin.NET.Core.Module.Bpm.Proc.Main;
using Admin.NET.Core.Module.Bpm.Task.Main;
using Admin.NET.Core.Module.Oa.Flow.Main.Dto;
using Admin.NET.Core.Module.Oa.Flow.Temp;

namespace Admin.NET.Core.Module.Oa.Flow.Main;
/// <summary>
/// 流程实例服务
/// </summary>
[ApiDescriptionSettings( Order = 100)]
public class OaFlowMainService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<OaFlowMain> _rep;
    private readonly BpmProcMainService _procMainService;
    private readonly BpmTaskMainService _taskMainService;
    public OaFlowMainService(SqlSugarRepository<OaFlowMain> rep,BpmProcMainService procMainService,BpmTaskMainService taskMainService)
    {
        _rep = rep;
        _procMainService = procMainService;
        _taskMainService = taskMainService;
    }

    /// <summary>
    /// 分页查询流程实例
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<OaFlowMainOutput>> Page([FromQuery] OaFlowMainInput input)
    {
        var query= _rep.AsQueryable().Where(x=>x.IsDelete==false)
                    .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim()))
                    .InnerJoin<OaFlowTemp>((x,y)=>x.Temid==y.Id).InnerJoin<SysUser>((x,y,z)=>x.CreateUserId==z.Id)
                    .Select<OaFlowMainOutput>((x,y,z)=>new OaFlowMainOutput
                    {
                        Name=x.Name,
                        Id=x.Id,
                        Createtime=x.CreateTime,
                        Updatetime=x.UpdateTime,
                        State=x.State,
                        Remark=x.Remark,
                        TemName=y.Name,
                        CreateUser=z.RealName
                    })
;
        query = query.OrderBuilder(input);
        var pageList= await query.ToPagedListAsync(input.Page, input.PageSize);
      await  _taskMainService.FindCurrentExmen(pageList.Items);

        return pageList;
    }


    /// <summary>
    /// 增加流程实例
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    [UnitOfWork]
    public async Task Add(AddOaFlowMainInput input)
    {

        var entity = input.Adapt<OaFlowMain>();
        // 发起
        entity.State = "20";
      
       var id= await _rep.InsertReturnSnowflakeIdAsync(entity);
        Zbpm zbpm = input.Zbpm;
        zbpm.Modty = "oaFlow";
        zbpm.Remark = input.Remark;
        zbpm.Proid = id;
        zbpm.Prona = input.Name;
        zbpm.Haman = _rep.CurrentUserID;
        zbpm.Temid = input.Protd;
        zbpm.Crman = _rep.CurrentUserID;
        Znode znode = await _procMainService.Start(zbpm);
        if (znode.Facno == "NE")
        {
            entity.State = "30";
            await _rep.AsUpdateable().Where(x => x.Id == id).UpdateColumns(x => x.State == "30").ExecuteCommandAsync();
        }
    }

    /// <summary>
    /// 删除流程实例
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteOaFlowMainInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
    }

    /// <summary>
    /// 更新流程实例
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    [UnitOfWork]
    public async Task Update(UpdateOaFlowMainInput input)
    {
        var entity = input.Adapt<OaFlowMain>();
      

        input.Zbpm.Modty = "oaFlow";
        input.Zbpm.Crman = input.Createuserid;
        if (input.Zbpm.Opkey == BpmOperEnum.Pass.ToString().ToLower())
        {
            Znode znode = await _procMainService.HandlerPass(input.Zbpm);
            if (znode.Facno == "NE")
            {
                entity.State = ((int)BpmNodeEnum.Draft).ToString();
                await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
            }
            else
            {
                entity.State = ((int)BpmNodeEnum.Review).ToString();
                await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
            }
        }
        else if (input.Zbpm.Opkey == BpmOperEnum.Refuse.ToString().ToLower())
        {
            if ("N1" == input.Zbpm.Tarno)
            {
                entity.State = ((int)BpmNodeEnum.Refuse).ToString();
                await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
            }
            await _procMainService.HandlerRefuse(input.Zbpm);
        }
        else if (input.Zbpm.Opkey == BpmOperEnum.Turn.ToString().ToLower())
        {
            await _procMainService.HandlerTurn(input.Zbpm);
        }
        else if (input.Zbpm.Opkey == BpmOperEnum.Communicate.ToString().ToLower())
        {
            await _procMainService.HandlerCommunicate(input.Zbpm);
        }
        else if (input.Zbpm.Opkey == "abandon")
        {
            await _procMainService.HandlerAbandon(input.Zbpm);
            entity.State = "00";
            await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
        }
        else if (input.Zbpm.Opkey == BpmOperEnum.Bacommunicate.ToString().ToLower())
        {
            await _procMainService.HandlerBacommunicate(input.Zbpm);
        }
        else if (input.Zbpm.Opkey == BpmOperEnum.Cacommunicate.ToString().ToLower())
        {
            await _procMainService.HandlerCacommunicate(input.Zbpm);
        }
    }

    /// <summary>
    /// 获取流程实例
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<OaFlowMain> Get([FromQuery] QueryByIdOaFlowMainInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.Id);
    }

    /// <summary>
    /// 获取流程实例列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<OaFlowMainOutput>> List([FromQuery] OaFlowMainInput input)
    {
        return await _rep.AsQueryable().Select<OaFlowMainOutput>().ToListAsync();
    }





}

