
namespace Admin.NET.Core.Service.ClientLog;
using Admin.NET.Core.Entity;
using Admin.NET.Core.Service.ClientLog.Dto;

/// <summary>
/// ClientLogService服务
/// </summary>
[ApiDescriptionSettings(Order = 220)]
public class ClientLogService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<ClientLog> _rep;
    public ClientLogService(SqlSugarRepository<ClientLog> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询ClientLogService
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<ClientLogOutput>> Page([FromQuery] ClientLogInput input)
    {
        var query= _rep.AsQueryable()
                    .WhereIF(!string.IsNullOrWhiteSpace(input.CLIENTID), u => u.ClientID == input.CLIENTID)
                    .WhereIF(!string.IsNullOrWhiteSpace(input.CLIENTNAME), u => u.ClientName == input.CLIENTNAME)
                    .WhereIF(!string.IsNullOrWhiteSpace(input.LOGTITLE), u => u.LogTitle.Contains(input.LOGTITLE.Trim()))
                    .WhereIF(!string.IsNullOrWhiteSpace(input.LOGCONTENT), u => u.LogContent.Contains(input.LOGCONTENT.Trim()))
                    .WhereIF(!string.IsNullOrWhiteSpace(input.FLAG), u => u.Flag.Contains(input.FLAG.Trim()))
                    .WhereIF(!string.IsNullOrWhiteSpace(input.LOGTYPE), u => u.LogType == input.LOGTYPE)
                   

                    .Select<ClientLogOutput>()
;
        if(input.CREATETIMERange != null && input.CREATETIMERange.Count >0)
        {
                DateTime? start= input.CREATETIMERange[0]; 
                query = query.WhereIF(start.HasValue, u => u.CREATETIME > start);
                if (input.CREATETIMERange.Count >1 && input.CREATETIMERange[1].HasValue)
                {
                    var end = input.CREATETIMERange[1].Value.AddDays(1);
                    query = query.Where(u => u.CREATETIME < end);
                }
        } 
      
        query = query.OrderBuilder(input);
        return await query.ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 增加ClientLogService
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddClientLogInput input)
    {
        var entity = input.Adapt<ClientLog>();
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 删除ClientLogService
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteClientLogInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.ID) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.DeleteAsync(entity);   
    }

    /// <summary>
    /// 更新ClientLogService
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateClientLogInput input)
    {
        var entity = input.Adapt<ClientLog>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取ClientLogService
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<ClientLog> Get([FromQuery] QueryByIdClientLogInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.ID);
    }

    /// <summary>
    /// 获取ClientLogService列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<ClientLogOutput>> List([FromQuery] ClientLogInput input)
    {
        return await _rep.AsQueryable().Select<ClientLogOutput>().ToListAsync();
    }





}

