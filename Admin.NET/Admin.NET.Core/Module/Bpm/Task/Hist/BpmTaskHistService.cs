

using Admin.NET.Core.Module.Bpm.Task.Main;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Task.Hist;
/// <summary>
/// 历史结点服务
/// </summary>
public class BpmTaskHistService : ITransient
{
    /// <summary>
    /// 创建任务
    /// </summary>
    /// <param name="mainTask"></param>
    /// <returns></returns>
    public async Task<BpmTaskHist> CreateTask(BpmTaskMain mainTask)
    {
        BpmTaskHist histTask = new BpmTaskHist();
        histTask.Id = mainTask.Id;
        histTask.Proid = mainTask.Proid;
        histTask.State = "20";
        histTask.Exman = mainTask.Exman;
        histTask.Nodid = mainTask.Nodid;
        histTask.Type = mainTask.Type;
        await _repo.InsertAsync(histTask);
        return histTask;
    }
    /// <summary>
    /// 创建任务列表
    /// </summary>
    /// <param name="mainTaskList"></param>
    /// <returns></returns>
    public async Task<List<BpmTaskHist>> CreateTaskList(List<BpmTaskMain> mainTaskList)
    {
        List<BpmTaskHist> list = new List<BpmTaskHist>();
        foreach (BpmTaskMain mainTask in mainTaskList)
        {
            if (mainTask.Actag==1)
            {
                BpmTaskHist histTask = new BpmTaskHist();
                histTask.Id = mainTask.Id;
                histTask.Proid = mainTask.Proid;
                histTask.State = ((int)BpmNodeEnum.Review).ToString();
                histTask.Exman = mainTask.Exman;
                histTask.Nodid = mainTask.Nodid;
                histTask.Type = mainTask.Type;
                await _repo.InsertAsync(histTask);
                list.Add(histTask);
            }
        }
        return list;
    }
    /// <summary>
    /// 查找单项
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<BpmTaskHist> FindOne(long? id)
    {
        return await _repo.GetSingleAsync(t => t.Id == id);
    }
    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<bool> Delete(long id)
    {
       var result= await _repo.Context.Deleteable<BpmTaskHist>().Where(it => it.Id == id).ExecuteCommandAsync();
        return result > 0;
    }
    /// <summary>
    /// 删除所有未结束的
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<bool> DeleteAllByProidNotEnd(long proid)
    {
       var result= await _repo.Context.Deleteable<BpmTaskHist>()
            .Where(it => it.Proid == proid)
            .Where(t => t.State == "20")
            .ExecuteCommandAsync();
        return result > 0;
    }

    /// <summary>
    /// 更新
    /// </summary>
    /// <param name="hist"></param>
    /// <returns></returns>
    public async Task<bool> Update(BpmTaskHist hist)
    {
       var result= await _repo.Context.Updateable(hist).ExecuteCommandAsync();
        return result > 0;
    }

    private readonly SqlSugarRepository<BpmTaskHist> _repo;

    public BpmTaskHistService(SqlSugarRepository<BpmTaskHist> repo)
    {
        _repo = repo;
    }
}
