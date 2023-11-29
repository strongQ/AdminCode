

using Admin.NET.Core.Module.Bpm.Proc.Temp;
using Admin.NET.Core.Module.Oa.Flow.Cate;
using Admin.NET.Core.Module.Oa.Flow.Temp.Dto;
using NewLife.Xml;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;

namespace Admin.NET.Core.Module.Oa.Flow.Temp;
/// <summary>
/// 流程模板服务
/// </summary>
[ApiDescriptionSettings( Order = 100)]
public class OaFlowTempService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<OaFlowTemp> _rep;
    private readonly SqlSugarRepository<BpmProcTemp> _procRep;
    private readonly OaFlowCateService _flowCateService;
    public OaFlowTempService(SqlSugarRepository<OaFlowTemp> rep,SqlSugarRepository<BpmProcTemp> procRep, OaFlowCateService flowCateService)
    {
        _rep = rep;
        _procRep = procRep;
        _flowCateService = flowCateService;
    }

    /// <summary>
    /// 分页查询流程模板
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<OaFlowTemp>> Page([FromQuery] OaFlowTempInput input)
    {
        var query = _rep.AsQueryable().WhereIF(!string.IsNullOrWhiteSpace(input.name), u => u.Name.Contains(input.name.Trim()));
        if (input.CateId > 0)
        {
            query = query.InnerJoin<OaFlowCate>((x, y) => x.Catid == y.Id || x.Catid == y.Pid).Where((x,y)=>y.Id==input.CateId);
        }
       
       
                    

                    
;
        query = query.OrderBuilder(input);
        var datas= await query.ToPagedListAsync(input.Page, input.PageSize);

        return datas;
    }

    /// <summary>
    /// 查询流程模板列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<OaFlowTemp>> List([FromQuery] OaFlowTempInput input)
    {
        var query = _rep.AsQueryable().WhereIF(!string.IsNullOrWhiteSpace(input.name), u => u.Name.Contains(input.name.Trim()));
        if (input.CateId > 0)
        {
            query = query.InnerJoin<OaFlowCate>((x, y) => x.Catid == y.Id || x.Catid == y.Pid).Where((x, y) => y.Id == input.CateId);
        }





;
        query = query.OrderBuilder(input);
        var datas = await query.ToListAsync();

        return datas;
    }


    /// <summary>
    /// 增加流程模板
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddOaFlowTempInput input)
    {
        BpmProcTemp bpmProcTemp = new BpmProcTemp();
        bpmProcTemp.Name = input.name;
       
        
        bpmProcTemp.Orxml = input.prxml;
        bpmProcTemp.Chxml = "<?xml version=\"1.0\" encoding=\"gb2312\"?>"
                            + "\n<process" + bpmProcTemp.Orxml.Split("bpmn2:process")[1]
                                .Replace("bpmn2:", "").Replace("activiti:", "") + "process>";
       await _rep.Context.Ado.BeginTranAsync();

       var id=await  _procRep.InsertReturnSnowflakeIdAsync(bpmProcTemp);
        
        var entity = input.Adapt<OaFlowTemp>();
        entity.Protd = id;
        await _rep.InsertAsync(entity);

        await _rep.Context.Ado.CommitTranAsync();
    }

    /// <summary>
    /// 删除流程模板
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteOaFlowTempInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
    }

    /// <summary>
    /// 更新流程模板
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateOaFlowTempInput input)
    {
        var entity = input.Adapt<OaFlowTemp>();

        var bpmProcTemp = await _procRep.AsQueryable()
            .Where(it => it.Id == input.protd).FirstAsync();
        if (bpmProcTemp.Orxml != input.Prxml)
        {
           
           
            BpmProcTemp newBpmProcTemp = new BpmProcTemp();
            newBpmProcTemp.Name = input.name;
            newBpmProcTemp.Orxml = input.Prxml;
            string chxml = "<?xml version=\"1.0\" encoding=\"gb2312\"?>"
                           + "\n<process" + newBpmProcTemp.Orxml.Split("bpmn2:process")[1]
                               .Replace("bpmn2:", "")
                               .Replace("activiti:", "") + "process>";
            newBpmProcTemp.Chxml = chxml;
           var id= await _procRep.InsertReturnSnowflakeIdAsync(newBpmProcTemp);

            entity.Protd = id;
        }
        

        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取流程模板
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<OaFlowTemp> Get([FromQuery] QueryByIdOaFlowTempInput input)
    {
        var data= await _rep.GetFirstAsync(u => u.Id == input.id);

        var cate = await _flowCateService.Get(new Cate.Dto.QueryByIdOaFlowCateInput
        {
            Id = data.Catid
        });
        data.Catna = cate.Name;
        data.Prxml = await _procRep.AsQueryable()
           .Where(it => it.Id == data.Protd).Select(it => it.Orxml).SingleAsync();
        return data;
    }

    




}

