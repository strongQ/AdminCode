

using Admin.NET.Core.Module.Bpm.Node.Main.Dto;
using Admin.NET.Core.Module.Bpm.Proc.Main;
using Admin.NET.Core.Module.Bpm.Task.Main;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Node.Main;
public class BpmNodeMainService : ITransient
{
    /// <summary>
    /// 根据流程实例id获取节点信息
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<List<TaskMainNodeDto>> GetMainNodesByProid(long proid)
    {
        return await _repo.AsQueryable().Where(x => x.Proid == proid && x.Actag == 1).InnerJoin<BpmTaskMain>((x, y) => x.Id == y.Nodid).InnerJoin<SysUser>((x, y, z) => z.Id == y.Exman)
            .OrderBy((x,y,z)=>y.Ornum)
              .Select((x, y, z) => new TaskMainNodeDto
              {
                  Taskid = y.Id,
                  Nodid = x.Id,
                  Exnam = z.RealName,
                  Exman = y.Exman.Value,
                  Proid = x.Proid.Value,
                  Facno = x.Facno,
                  Facna = x.Facna,
                  Type = y.Type
              }).ToListAsync();
    }
    /// <summary>
    /// 保存下一审批节点
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="znode"></param>
    /// <returns></returns>
    public async Task<BpmNodeMain> SaveNode(Zbpm zbpm, Znode znode)
    {
        BpmNodeMain node = new BpmNodeMain();
        node.Facno = znode.Facno;
        node.Facna = znode.Facna;
        node.Facty = znode.Facty;
        node.Flway = znode.Flway;
        node.Proid = zbpm.Proid;
        node.State = ((int)BpmNodeEnum.Review).ToString();
        node.Actag = 1;
       var result= await _repo.InsertAsync(node);
        return result ? node : null;
      
    }

    /// <summary>
    /// 获取节点
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<BpmNodeMain> FindOne(long? id)
    {
        return await _repo.GetSingleAsync(t => t.Id == id);
    }
    /// <summary>
    /// 删除节点
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<bool> Delete(long id)
    {
       var result= await _repo.Context.Deleteable<BpmNodeMain>().Where(it => it.Id == id).ExecuteCommandAsync();
        return result > 0;
    }


    private readonly SqlSugarRepository<BpmNodeMain> _repo;

    public BpmNodeMainService(SqlSugarRepository<BpmNodeMain> repo)
    {
        _repo = repo;
    }
}