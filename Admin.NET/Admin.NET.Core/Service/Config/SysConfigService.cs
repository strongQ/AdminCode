namespace Admin.NET.Core.Service;

/// <summary>
/// 系统参数配置服务
/// </summary>
[ApiDescriptionSettings(Order = 440)]
public class SysConfigService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<SysConfig> _sysConfigRep;
    private readonly SysCacheService _sysCacheService;

    public SysConfigService(SqlSugarRepository<SysConfig> sysConfigRep,
        SysCacheService sysCacheService)
    {
        _sysConfigRep = sysConfigRep;
        _sysCacheService = sysCacheService;
    }

    /// <summary>
    /// 获取参数配置分页列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [DisplayName("获取参数配置分页列表")]
    public async Task<SqlSugarPagedList<SysConfig>> GetPage([FromQuery] PageConfigInput input)
    {
        return await _sysConfigRep.AsQueryable()
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name?.Trim()), u => u.Name.Contains(input.Name))
            .WhereIF(!string.IsNullOrWhiteSpace(input.Code?.Trim()), u => u.Code.Contains(input.Code))
            .WhereIF(!string.IsNullOrWhiteSpace(input.GroupCode?.Trim()), u => u.GroupCode.Equals(input.GroupCode))
            .OrderBy(u => u.OrderNo).ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 获取参数配置列表
    /// </summary>
    /// <returns></returns>
    [DisplayName("获取参数配置列表")]
    public async Task<List<SysConfig>> GetList()
    {
        return await _sysConfigRep.GetListAsync();
    }

    /// <summary>
    /// 增加参数配置
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "Add"), HttpPost]
    [DisplayName("增加参数配置")]
    public async Task AddConfig(AddConfigInput input)
    {
        var isExist = await _sysConfigRep.IsAnyAsync(u => u.Name == input.Name || u.Code == input.Code);
        if (isExist)
            throw Oops.Oh(ErrorCodeEnum.D9000);

        await _sysConfigRep.InsertAsync(input.Adapt<SysConfig>());
    }

    /// <summary>
    /// 更新参数配置
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "Update"), HttpPost]
    [DisplayName("更新参数配置")]
    public async Task UpdateConfig(UpdateConfigInput input)
    {
        var isExist = await _sysConfigRep.IsAnyAsync(u => (u.Name == input.Name || u.Code == input.Code) && u.Id != input.Id);
        if (isExist)
            throw Oops.Oh(ErrorCodeEnum.D9000);

        var config = input.Adapt<SysConfig>();
        await _sysConfigRep.AsUpdateable(config).IgnoreColumns(true).ExecuteCommandAsync();

        _sysCacheService.Remove(config.Code);
    }

    /// <summary>
    /// 删除参数配置
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "Delete"), HttpPost]
    [DisplayName("删除参数配置")]
    public async Task DeleteConfig(DeleteConfigInput input)
    {
        var config = await _sysConfigRep.GetFirstAsync(u => u.Id == input.Id);
        if (config.SysFlag == YesNoEnum.Y) // 禁止删除系统参数
            throw Oops.Oh(ErrorCodeEnum.D9001);

        await _sysConfigRep.DeleteAsync(config);

        _sysCacheService.Remove(config.Code);
    }

    /// <summary>
    /// 获取参数配置详情
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [DisplayName("获取参数配置详情")]
    public async Task<SysConfig> GetDetail([FromQuery] ConfigInput input)
    {
        return await _sysConfigRep.GetFirstAsync(u => u.Id == input.Id);
    }

    /// <summary>
    /// 获取参数配置值
    /// </summary>
    /// <param name="code"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(false)]
    public async Task<T> GetConfigValue<T>(string code)
    {
        var value = _sysCacheService.Get<string>(code);
        if (string.IsNullOrEmpty(value))
        {
            var config = await _sysConfigRep.GetFirstAsync(u => u.Code == code);
            value = config != null ? config.Value : default;
            _sysCacheService.Set(code, value);
        }
        return (T)Convert.ChangeType(value, typeof(T));
    }
}