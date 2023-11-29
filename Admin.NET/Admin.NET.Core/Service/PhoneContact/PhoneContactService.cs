namespace Admin.NET.Core.Service;
/// <summary>
/// 通讯录服务
/// </summary>
[ApiDescriptionSettings(Order = 100)]
public class PhoneContactService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<PhoneContact> _rep;
    public PhoneContactService(SqlSugarRepository<PhoneContact> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询通讯录
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<PhoneContactOutput>> Page([FromQuery] PhoneContactInput input)
    {
       var tenentID= App.GetRequiredService<UserManager>().TenantId;
        var query= _rep.AsQueryable()
                  
                    .WhereIF(!string.IsNullOrWhiteSpace(input.NAME), u => u.NAME.Contains(input.NAME.Trim()))
                    .WhereIF(!string.IsNullOrWhiteSpace(input.ADDRESS), u => u.ADDRESS.Contains(input.ADDRESS.Trim()))
                    .WhereIF(input.PHONE>0,u=>u.PHONE==input.PHONE)
                    .Select<PhoneContactOutput>()
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
    /// 增加通讯录
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddPhoneContactInput input)
    {      
        var entity = input.Adapt<PhoneContact>();
        //entity.TENANTID= App.GetRequiredService<UserManager>().TenantId;
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 删除通讯录
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeletePhoneContactInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.ID) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
    }

    /// <summary>
    /// 更新通讯录
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdatePhoneContactInput input)
    {
        var entity = input.Adapt<PhoneContact>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取通讯录
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<PhoneContact> Get([FromQuery] QueryByIdPhoneContactInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.ID);
    }

    /// <summary>
    /// 获取通讯录列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<PhoneContactOutput>> List([FromQuery] PhoneContactInput input)
    {
        return await _rep.AsQueryable().Select<PhoneContactOutput>().ToListAsync();
    }





}

