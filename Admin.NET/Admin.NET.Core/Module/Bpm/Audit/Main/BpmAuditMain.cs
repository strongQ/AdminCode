

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Audit.Main;
[SugarTable("net_bpm_audit_main", TableDescription = "流程审批记录表")]
[SystemTable]
public class BpmAuditMain: EntityBaseId
{

    public BpmAuditMain() { }
   
  


    /// <summary>
    /// 当前节点编号
    /// </summary>
    [SugarColumn(ColumnDescription = "当前节点编号", IsNullable = true, Length = 32)]
    public string Facno { get; set; }
    /// <summary>
    /// 当前节点
    /// </summary>
    [SugarColumn(ColumnDescription = "当前节点", IsNullable = true, Length = 126)]
    public string Facna { get; set; }
    /// <summary>
    /// 开始时间
    /// </summary>
    [SugarColumn(ColumnDescription = "开始时间", IsNullable = true, IsOnlyIgnoreUpdate = true)]
    public DateTime? Crtim { get; set; } = DateTime.Now;
    /// <summary>
    /// 流程实例ID
    /// </summary>
    [SugarColumn(ColumnDescription = "流程实例id", IsNullable = true)]
    public long? Proid { get; set; }
    /// <summary>
    /// 节点ID
    /// </summary>
    [SugarColumn(ColumnDescription = "节点id", IsNullable = true)]
    public long? Nodid { get; set; }
    /// <summary>
    /// 任务ID
    /// </summary>
    [SugarColumn(ColumnDescription = "任务id", IsNullable = true)]
    public long? Tasid { get; set; }
    /// <summary>
    /// 实际处理人
    /// </summary>
    [SugarColumn(ColumnDescription = "实处理人", IsNullable = true)]
    public long? Haman { get; set; }
    /// <summary>
    /// 处理人姓名
    /// </summary>
    [SugarColumn(IsIgnore = true)]
    public string HamanName { get; set; }
    /// <summary>
    /// 操作Key  pass，refuse
    /// </summary>
    [SugarColumn(ColumnDescription = "操作的key：pass，refuse", IsNullable = true, Length = 32)]
    public string Opkey { get; set; }
    /// <summary>
    /// 操作名称   通过，驳回，转办等
    /// </summary>
    [SugarColumn(ColumnDescription = "操作的名称: 通过，驳回，转办等", IsNullable = true, Length = 64)]
    public string Opinf { get; set; }
    /// <summary>
    /// 审核留言
    /// </summary>
    [SugarColumn(ColumnDescription = "审核留言：具体写了什么审核内容", IsNullable = true, Length = 1000)]
    public string Opnot { get; set; }
    /// <summary>
    /// 审核附件
    /// </summary>
    [SugarColumn(ColumnDescription = "审核附件IDS", IsNullable = true, Length = 512)]
    public string Atids { get; set; }
    /// <summary>
    /// 附件
    /// </summary>
    [SugarColumn(IsIgnore = true)]
    public List<SysFile> Atts { get; set; }
}
