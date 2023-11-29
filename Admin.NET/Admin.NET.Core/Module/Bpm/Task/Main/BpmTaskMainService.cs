

using Admin.NET.Core.Module.Bpm.Node.Main;
using Admin.NET.Core.Module.Bpm.Proc.Main;
using Admin.NET.Core.Module.Bpm.Proc.Main.Dto;
using Admin.NET.Core.Module.Oa.Flow.Main.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Task.Main;
public class BpmTaskMainService : ITransient
{
    /// <summary>
    /// 获取沟通人员
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<List<CommunicateOutDto>> GetCommunicates(long proid)
    {
        return await _repo.AsQueryable().Where(x => x.Id == proid).InnerJoin<SysUser>((x, y) => x.Exman == y.Id).OrderBy(x => x.Sttim).
              Select((x, y) => new CommunicateOutDto
              {
                  Id = y.Id,
                  Name = y.RealName,
                  Taskid = x.Id
              }).ToListAsync();
            
       
    }
    /// <summary>
    /// 获取用户信息
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<string> GetUserName(long id)
    {
        return await _sysUser.AsQueryable().Where(x => x.Id == id).Select(x => x.RealName).SingleAsync();
    }
    /// <summary>
    /// 获取激活任务
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<List<BpmTaskMain>> FindAllByProidNotActive(long proid)
    {
        return await _repo.Context.Queryable<BpmTaskMain>()
            .Where(t => t.Actag == 1)
            .Where(t => t.Proid == proid)
            .OrderBy(t => t.Ornum)
            .ToListAsync();
    }
    /// <summary>
    /// 获取所有任务
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<List<BpmTaskMain>> FindAllByProid(long proid)
    {
        return await _repo.Context.Queryable<BpmTaskMain>()
            .Where(t => t.Proid == proid)
            .OrderBy(t => t.Ornum)
            .ToListAsync();
    }
    /// <summary>
    /// 创建任务
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="znode"></param>
    /// <returns></returns>
    public async Task<BpmTaskMain> CreateTask(Zbpm zbpm, Znode znode)
    {
        BpmTaskMain task = new BpmTaskMain();
       
        task.Proid = zbpm.Proid;
        task.State = ((int)BpmNodeEnum.Review).ToString();
        task.Exman = znode.Exmen.ToLong();
        task.Ornum = 0;
        task.Actag = 1;
        task.Nodid = znode.Nodid.Value;
        task.Type = znode.Facty;
         await _repo.InsertAsync(task);
        return task;
    }

    public async Task<List<BpmTaskMain>> CreateTaskList(Zbpm zbpm, Znode znode)
    {
        List<BpmTaskMain> list = new List<BpmTaskMain>();
        //if (!string.IsNullOrEmpty(znode.exmen) && !znode.exmen.Contains(";"))
        //{
        //    BpmTaskMain task = new BpmTaskMain();
        //    task.id = YitIdHelper.NextId() + "";
        //    task.proid = zbpm.proid;
        //    task.state = "20";
        //    task.exman = znode.exmen;
        //    task.ornum = 0;
        //    task.actag = true;
        //    task.nodid = znode.nodid;
        //    task.type = znode.facty;
        //    await _repo.InsertAsync(task);
        //    list.Add(task);
        //}
        if ("1" == znode.Flway)
        {
            long[] ids =new long[] { znode.Exmen.ToLong() };
            for (int i = 0; i < ids.Length; i++)
            {
                BpmTaskMain task = new BpmTaskMain();
               
                task.Proid = zbpm.Proid;
                task.State = ((int)BpmNodeEnum.Review).ToString();
                task.Exman = ids[i];
                task.Ornum = i;
                if (i == 0)
                {
                    task.Actag = 1;
                }
                else
                {
                    task.Actag = 0;
                }

                task.Nodid = znode.Nodid;
                task.Type = znode.Facty;
                await _repo.InsertAsync(task);
                list.Add(task);
            }
        }
        else if ("2" == znode.Flway || "3" == znode.Flway)
        {
            long[] ids = new long[] { znode.Exmen.ToLong() };
            for (int i = 0; i < ids.Length; i++)
            {
                BpmTaskMain task = new BpmTaskMain();
               
                task.Proid = zbpm.Proid;
                task.State = ((int)BpmNodeEnum.Review).ToString();
                task.Exman = ids[i];
                task.Ornum = i;
                task.Actag = 1;
                task.Nodid = znode.Nodid;
                task.Type = znode.Facty;
                await _repo.InsertAsync(task);
                list.Add(task);
            }
        }

        return list;
    }
    /// <summary>
    /// 找到当前处理人,过后处理
    /// </summary>
    /// <param name="itemList"></param>
    /// <returns></returns>
    public async Task<bool> FindCurrentExmen(IEnumerable<OaFlowMainOutput> itemList)
    {

        List<long> proids = new List<long>();
        foreach (var item in itemList)
        {
            if (item.State != ((int)BpmNodeEnum.Draft).ToString())
            {
                proids.Add(item.Id);
            }
        }

        if (proids.Count>0)
        {

         var tasks= await  _repo.AsQueryable().InnerJoin<BpmNodeMain>((x, y) => x.Nodid == y.Id).InnerJoin<SysUser>((x, y, z) => z.Id == x.Exman)
                .Where((x, y,z) => proids.Contains(y.Proid.Value) && x.Actag==1).Select((x, y, z) => new { Proid = y.Proid, Facna = y.Facna, Facno = y.Facno, Nodid = y.Id, Exman = x.Exman, HandleName = z.RealName }).ToListAsync();
          
           

            List<ZidNamePid> list = new List<ZidNamePid>();
            long proid = 0;
            foreach (var task in tasks)
            {
                if (task.Proid != proid)
                {
                    ZidNamePid zinp = new ZidNamePid();
                    zinp.id = task.Proid.Value;
                    zinp.Name = task.Facno + "." + task.Facna;
                    zinp.Pid = task.HandleName;
                    list.Add(zinp);
                }
                else
                {
                    list[list.Count - 1].Pid += ";" + task.HandleName;
                }

                proid = task.Proid.Value;
            }

            foreach (var item in itemList)
            {
                foreach (var zinp in list)
                {
                    if (zinp.id == item.Id)
                    {
                        item.Facno = zinp.Name;
                        item.HandleName = zinp.Pid;
                        break;
                    }
                }
            }
        }

        return true;
    }

    public async Task<BpmTaskMain> FindOne(long? id)
    {
        return await _repo.GetByIdAsync(id);
    }
    /// <summary>
    /// 是否存在该类型的数据
    /// </summary>
    /// <param name="type"></param>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<bool> IsExistType(string type,long proid)
    {
        return await _repo.AsQueryable().Where(x=>x.Proid==proid && x.Type==type).AnyAsync();
    }
    /// <summary>
    /// 更新
    /// </summary>
    /// <param name="main"></param>
    /// <returns></returns>
    public async Task<bool> Update(BpmTaskMain main)
    {
        return await _repo.UpdateAsync(main);
    }
    /// <summary>
    /// 更新任务类型
    /// </summary>
    /// <param name="id"></param>
    /// <param name="type"></param>
    /// <returns></returns>
    public async Task<bool> UpdateType(long? id,string type)
    {
        var result= await _repo.AsUpdateable().SetColumns(x => x.Type == type).Where(x => x.Id == id).ExecuteCommandAsync();
        return result > 0;
    }
    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<bool> Delete(long? id)
    {
       return await _repo.DeleteByIdAsync(id);
    }
    /// <summary>
    /// 根据实例删除
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<bool> DeleteAllByProid(long proid)
    {
       var result= await _repo.Context.Deleteable<BpmTaskMain>().Where(it => it.Proid == proid).ExecuteCommandAsync();
        return result > 0;
    }

    private readonly SqlSugarRepository<BpmTaskMain> _repo;
    private readonly SqlSugarRepository<SysUser> _sysUser;

    public BpmTaskMainService(SqlSugarRepository<BpmTaskMain> repo,SqlSugarRepository<SysUser> user)
    {
        _repo = repo;
        _sysUser= user;
    }
}
