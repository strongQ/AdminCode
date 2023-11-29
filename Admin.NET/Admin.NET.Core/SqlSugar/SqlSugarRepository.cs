﻿namespace Admin.NET.Core;

/// <summary>
/// SqlSugar仓储类
/// </summary>
/// <typeparam name="T"></typeparam>
public class SqlSugarRepository<T> : SimpleClient<T> where T : class, new()
{
    protected ITenant iTenant = null; // 多租户事务
    /// <summary>
    /// 当前用户
    /// </summary>
    public long CurrentUserID
    {
        get
        {
            return (long)(App.User?.FindFirst(ClaimConst.UserId)?.Value.ToLong());
        }
    }

    public SqlSugarRepository(ISqlSugarClient context = null) : base(context)
    {
        iTenant = App.GetRequiredService<ISqlSugarClient>().AsTenant();

        // 若实体贴有多库特性，则返回指定的连接
        if (typeof(T).IsDefined(typeof(TenantAttribute), false))
        {
            base.Context = iTenant.GetConnectionScopeWithAttr<T>();
            return;
        }

        // 若实体贴有系统表特性，则返回默认的连接
        if (typeof(T).IsDefined(typeof(SystemTableAttribute), false)) return;

        // 若当前未登录或是默认租户Id，则返回默认的连接
        var tenantId = App.GetRequiredService<UserManager>().TenantId;
        if (tenantId < 1 || tenantId.ToString() == SqlSugarConst.ConfigId) return;

        // 根据租户Id切库
        if (!iTenant.IsAnyConnection(tenantId.ToString()))
        {
            var tenant = App.GetRequiredService<SysCacheService>().Get<List<SysTenant>>(CacheConst.KeyTenant)
                .FirstOrDefault(u => u.Id == tenantId);
            iTenant.AddConnection(new ConnectionConfig()
            {
                ConfigId = tenant.Id,
                DbType = tenant.DbType,
                ConnectionString = tenant.Connection,
                IsAutoCloseConnection = true
            });
            SqlSugarSetup.SetDbAop(iTenant.GetConnectionScope(tenantId.ToString()));
        }
        base.Context = iTenant.GetConnectionScope(tenantId.ToString());
    }
}