// 注释

using Admin.NET.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Job;
/// <summary>
/// 清理日志作业任务
/// </summary>
[JobDetail("clientjob_log", Description = "清理客户端日志", GroupName = "default", Concurrent = true)]
[Daily(TriggerId = "trigger_clientlog", Description = "清理客户端日志", RunOnStart = true)]
public class ClientLogJob : IJob
{
    private readonly IServiceProvider _serviceProvider;

    public ClientLogJob(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task ExecuteAsync(JobExecutingContext context, CancellationToken stoppingToken)
    {
        using var serviceScope = _serviceProvider.CreateScope();
        var db = serviceScope.ServiceProvider.GetService<ISqlSugarClient>();

        var daysAgo = 30; // 删除30天以前
        await db.Deleteable<ClientLog>().Where(u => (DateTime)u.CreateTime < DateTime.Now.AddDays(-daysAgo)).ExecuteCommandAsync(); // 删除访问日志

    }
}
