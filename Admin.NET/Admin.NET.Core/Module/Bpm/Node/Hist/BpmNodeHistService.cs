
using Admin.NET.Core.Module.Bpm.Node.Main;
using Admin.NET.Core.Module.Bpm.Proc.Main;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Node.Hist;
/// <summary>
/// 历史节点服务
/// </summary>
public class BpmNodeHistService:ITransient
{
    private readonly SqlSugarRepository<BpmNodeHist> _repo;

    public BpmNodeHistService(SqlSugarRepository<BpmNodeHist> repo)
    {
        _repo = repo;
    }
    /// <summary>
    /// 获取节点编号
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<List<string>> GetFacnosByproid(long proid)
    {
        

       return _repo.AsQueryable().Where(x=>x.Proid==proid).Select(x=>x.Facno).Distinct().ToList();
    }

    /// <summary>
    /// 开始节点
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task<bool> SaveStartNode(Zbpm zbpm)
    {
        BpmNodeHist startNode = new BpmNodeHist();
        startNode.Facno = "NS";
        startNode.Facna = BpmNodeEnum.Start.GetDescription();
        startNode.Facty = BpmNodeEnum.Start.ToString();
        startNode.Proid = zbpm.Proid;
        startNode.State = "30";
        startNode.Entim = DateTime.Now;
        startNode.Tarno = "N1";
        startNode.Tarna = BpmNodeEnum.Draft.GetDescription();
    
       return await _repo.InsertAsync(startNode);
    }
    /// <summary>
    /// 起草节点
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="znode"></param>
    /// <returns></returns>
    public async Task<bool> SaveDraftNode(Zbpm zbpm, Znode znode)
    {
        BpmNodeHist draftNode = new BpmNodeHist();
        // id进行赋值
        draftNode.Id = znode.Nodid.Value;
        draftNode.Facno = "N1";
        draftNode.Facna = BpmNodeEnum.Draft.GetDescription();
        draftNode.Facty = BpmNodeEnum.Draft.ToString();
        draftNode.Proid = zbpm.Proid;
        draftNode.State = ((int)BpmNodeEnum.Draft).ToString();    
        draftNode.Entim = DateTime.Now;
        draftNode.Tarno = znode.Tarno;
        draftNode.Tarna = znode.Tarna;
        return  await _repo.InsertAsync(draftNode);
    }

    public async Task<long> SaveEndNode(Zbpm zbpm)
    {
        BpmNodeHist endNode = new BpmNodeHist();
        endNode.Facno = "NE";
        endNode.Facna = BpmNodeEnum.End.GetDescription();
        endNode.Facty = BpmNodeEnum.End.ToString();
        endNode.Proid = zbpm.Proid;
        endNode.State = "30";
      
        endNode.Entim = DateTime.Now;
        
        await _repo.InsertAsync(endNode);
       
        return endNode.Id;
    }
    /// <summary>
    /// 保存流程历史节点
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="list"></param>
    /// <returns></returns>
    public async Task<bool> SaveNodeList(Zbpm zbpm, List<Znode> list)
    {
        if (list.Count == 0) return true;
        List<BpmNodeHist> datas = new List<BpmNodeHist>();
        foreach (Znode znode in list)
        {
            BpmNodeHist node = new BpmNodeHist();
            node.Id = YitIdHelper.NextId();
            node.Facno = znode.Facno;
            node.Facna = znode.Facna;
            node.Facty = znode.Facty;
            node.Proid = zbpm.Proid;
            node.Tarno = znode.Tarno;
            node.Tarna = znode.Tarna;
            node.State = ((int)BpmNodeEnum.Draft).ToString();          
            node.Entim = DateTime.Now;
            datas.Add(node);
            
        }
      return  await _repo.InsertRangeAsync(datas);
    }
    /// <summary>
    /// 保存历史节点
    /// </summary>
    /// <param name="main"></param>
    /// <returns></returns>
    public async Task<bool> SaveNode(BpmNodeMain main)
    {
        BpmNodeHist node = new BpmNodeHist();
        node.Id = main.Id;
        node.Facno = main.Facno;
        node.Facna = main.Facna;
        node.Facty = main.Facty;
        node.Flway = main.Flway;
        node.Proid = main.Proid;
        node.State = ((int)BpmNodeEnum.Review).ToString();
        return await _repo.InsertAsync(node);
        
    }
    /// <summary>
    /// 获取节点
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<BpmNodeHist> FindOne(long id)
    {
        return await _repo.GetSingleAsync(t => t.Id == id);
    }
    /// <summary>
    /// 更新节点
    /// </summary>
    /// <param name="hist"></param>
    /// <returns></returns>
    public async Task<bool> UpdateOne(BpmNodeHist hist)
    {
       var result= await _repo.Context.Updateable(hist).ExecuteCommandAsync();
       return result > 0;
    }
}
