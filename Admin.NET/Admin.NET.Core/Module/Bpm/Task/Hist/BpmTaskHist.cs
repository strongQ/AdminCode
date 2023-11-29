

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Task.Hist;
/// <summary>
/// 流程任务历史表
/// </summary>
[SugarTable("net_bpm_task_hist", TableDescription = "流程任务历史表")]
public class BpmTaskHist:EntityBaseId
{ 
    /// <summary>
    /// 任务类型
    /// </summary>
    [SugarColumn(ColumnDescription = "任务类型", IsNullable = true, Length = 32)]
    public string Type { get; set; }
    /// <summary>
    /// 流程实例id
    /// </summary>
    [SugarColumn(ColumnDescription = "流程实例id", IsNullable = true)]
    public long? Proid { get; set; }
    /// <summary>
    /// 流程节点id
    /// </summary>
    [SugarColumn(ColumnDescription = "流程节点id", IsNullable = true)]
    public long? Nodid { get; set; }
    /// <summary>
    /// 开始时间
    /// </summary>
    [SugarColumn(ColumnDescription = "开始时间", IsNullable = true, IsOnlyIgnoreUpdate = true)]
    public DateTime? Sttim { get; set; } = DateTime.Now;
    /// <summary>
    /// 结束时间
    /// </summary>
    [SugarColumn(ColumnDescription = "结束时间", IsNullable = true)]
    public DateTime? Entim { get; set; }
    /// <summary>
    /// 状态
    /// </summary>
    [SugarColumn(ColumnDescription = "状态", IsNullable = true, Length = 8)]
    public string State { get; set; }
    /// <summary>
    /// 消息类型
    /// </summary>
    [SugarColumn(ColumnDescription = "消息类型", IsNullable = true, Length = 8)]
    public string Notty { get; set; }
    /// <summary>
    /// 实处理人
    /// </summary>
    [SugarColumn(ColumnDescription = "实处理人", IsNullable = true)]
    public long? Haman { get; set; }
    /// <summary>
    /// 授权处理人
    /// </summary>
    [SugarColumn(ColumnDescription = "授权处理人", IsNullable = true)]
    public long? Auman { get; set; }
    /// <summary>
    /// 应处理人
    /// </summary>

    [SugarColumn(ColumnDescription = "应处理人", IsNullable = true)]
    public long? Exman { get; set; }
}
