

using Admin.NET.Core.Module.Bpm.Proc.Main;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;
using System;
using System.Collections.Generic;
using System.Formats.Asn1;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Audit.Main;
/// <summary>
/// 流程审批服务
/// </summary>
public class BpmAuditMainService:ITransient
{
    private readonly SqlSugarRepository<BpmAuditMain> _repo;
    public BpmAuditMainService(SqlSugarRepository<BpmAuditMain> repo)
    {
        _repo = repo;
    }
    /// <summary>
    /// 获取审批数据
    /// </summary>
    /// <returns></returns>
    public async Task<List<BpmAuditMain>> GetAuditsByProid(long proid)
    {
        var datas= await _repo.AsQueryable().Where(x=>x.Proid==proid).InnerJoin<SysUser>((x, y) => x.Haman == y.Id).OrderBy(x => x.Crtim).Select((x, y) => new BpmAuditMain
        {
            HamanName=y.RealName
        },true).ToListAsync();
        return datas;
    }
    /// <summary>
    /// 获取审批数据
    /// </summary>
    /// <param name="proid"></param>
    /// <param name="types"></param>
    /// <returns></returns>
    public async Task<List<BpmAuditMain>> GetAuditsByProid(long proid,List<string> types)
    {
        return await _repo.AsQueryable().Where(x=>x.Proid==proid).WhereIF(types!=null && types.Any(),x=>types.Contains(x.Opkey)).Distinct().OrderBy(x=>x.Crtim).ToListAsync();
    }
    /// <summary>
    /// 起草人提交
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="znode"></param>
    /// <returns></returns>
    public async Task<bool> SaveDraftAudit(Zbpm zbpm, Znode znode)
    {
        BpmAuditMain audit = new BpmAuditMain();
      
        audit.Facno = znode.Facno;
        audit.Facna = znode.Facna;
        audit.Nodid = znode.Nodid;
        audit.Haman = zbpm.Haman;
        audit.Proid = zbpm.Proid;
        audit.Opnot = zbpm.Opnot;
        audit.Atids = zbpm.Atids;
        audit.Opkey = BpmOperEnum.Dsubmit.ToString();
        audit.Opinf = "起草人提交";
       return await _repo.InsertAsync(audit);
       
    }
    /// <summary>
    /// 审批
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task<BpmAuditMain> SaveAudit(Zbpm zbpm)
    {
        BpmAuditMain audit = new BpmAuditMain();
       
        audit.Facno = zbpm.Facno;
        audit.Facna = zbpm.Facna;
        audit.Nodid = zbpm.Nodid;
        audit.Haman = zbpm.Haman;
        audit.Proid = zbpm.Proid;
        audit.Opnot = zbpm.Opnot;
        audit.Opkey = zbpm.Opkey;
        audit.Opinf = zbpm.Opinf;
        audit.Tasid = zbpm.Tasid;
        audit.Atids = zbpm.Atids;
        await _repo.InsertAsync(audit);
        return audit;
    }
    /// <summary>
    /// 最终审批
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="nodid"></param>
    /// <returns></returns>
    public async Task<BpmAuditMain> SaveEndAudit(Zbpm zbpm, long nodid)
    {
        BpmAuditMain audit = new BpmAuditMain();      
        audit.Facno = "NE";
        audit.Facna = "结束节点";
        audit.Nodid = nodid;
        audit.Proid = zbpm.Proid;
        audit.Opkey = BpmOperEnum.End.ToString();
        await _repo.InsertAsync(audit);
        return audit;
    }
}
