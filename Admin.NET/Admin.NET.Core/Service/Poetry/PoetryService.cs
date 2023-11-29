


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Service;
/// <summary>
/// 诗香文地服务
/// </summary>
[ApiDescriptionSettings( Order = 100)]
public class PoetryService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<Poetry> _rep;
    public PoetryService(SqlSugarRepository<Poetry> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询诗香文地
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<PoetryOutput>> Page([FromQuery] PoetryInput input)
    {
        var query = _rep.AsQueryable()
                    .WhereIF(!string.IsNullOrWhiteSpace(input.title), u => u.Title.Contains(input.title.Trim()))
                    .WhereIF(!string.IsNullOrWhiteSpace(input.dynasty), u => u.Dynasty.Contains(input.dynasty.Trim()))
                    .WhereIF(!string.IsNullOrWhiteSpace(input.author), u => u.Author.Contains(input.author.Trim()))
                    .WhereIF(!string.IsNullOrWhiteSpace(input.content), u => u.Content.Contains(input.content.Trim()))

                    .Select<PoetryOutput>()
;
        query = query.OrderBuilder(input);
        return await query.ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 增加诗香文地
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddPoetryInput input)
    {
        var entity = input.Adapt<Poetry>();
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 删除诗香文地
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeletePoetryInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.DeleteAsync(entity);   //假删除
    }

    /// <summary>
    /// 更新诗香文地
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdatePoetryInput input)
    {
        var entity = input.Adapt<Poetry>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取诗香文地
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<Poetry> Get([FromQuery] QueryByIdPoetryInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.id);
    }

    /// <summary>
    /// 获取诗香文地列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<PoetryOutput>> List([FromQuery] PoetryInput input)
    {
        return await _rep.AsQueryable().Select<PoetryOutput>().ToListAsync();
    }
    [HttpGet]
    [QueryParameters]
    [ApiDescriptionSettings(Name = "Random")]
    public async Task<List<PoetryOutput>> ListRandom(int number)
    {
        return await _rep.Context.SqlQueryable<PoetryOutput>("select * from poetry order by random() limit @Total").AddParameters(new { Total = number }).ToListAsync();
    }





}

