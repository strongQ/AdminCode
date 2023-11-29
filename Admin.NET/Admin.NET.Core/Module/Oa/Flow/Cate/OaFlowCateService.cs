

using Admin.NET.Core.Module.Oa.Flow.Cate.Dto;

namespace Admin.NET.Core.Module.Oa.Flow.Cate;
/// <summary>
/// 流程分类服务
/// </summary>
[ApiDescriptionSettings(Order = 100)]
public class OaFlowCateService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<OaFlowCate> _rep;
    public OaFlowCateService(SqlSugarRepository<OaFlowCate> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询流程分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<List<OaFlowCate>> Page([FromQuery] OaFlowCateInput input)
    {
        var query = _rep.AsQueryable().Where(x=>!x.IsDelete)
                    .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim()));

                    
;
        query = query.OrderBuilder(input);
        var result= await query.ToTreeAsync(it => it.Children, it => it.Pid, null);
        return result;
    }
    /// <summary>
    /// 获取全部流程
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Tree")]
    public async Task<List<OaFlowCate>> GetTree()
    {
        var treeList =await _rep.AsQueryable().Where(x=>!x.IsDelete).OrderBy(x=>x.Ornum)
            .ToTreeAsync(it => it.Children, it => it.Pid, null);
        return treeList;
    }

    /// <summary>
    /// 增加流程分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddOaFlowCateInput input)
    {
        var entity = input.Adapt<OaFlowCate>();
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 删除流程分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteOaFlowCateInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
    }

    /// <summary>
    /// 更新流程分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateOaFlowCateInput input)
    {
        var entity = input.Adapt<OaFlowCate>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取流程分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<OaFlowCate> Get([FromQuery] QueryByIdOaFlowCateInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.Id);
    }

    /// <summary>
    /// 获取流程分类列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<OaFlowCateOutput>> List([FromQuery] OaFlowCateInput input)
    {
        return await _rep.AsQueryable().Select<OaFlowCateOutput>().ToListAsync();
    }





}

