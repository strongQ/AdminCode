

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Node.Main;

/// <summary>
/// 流程节点
/// </summary>
[SugarTable("net_bpm_node_main", TableDescription = "流程节点表")]
[SystemTable]
public class BpmNodeMain: EntityBaseId
{
    
    /// <summary>
    /// 当前结点编号
    /// </summary>
    [SugarColumn(ColumnDescription = "当前节点编号", IsNullable = true, Length = 32)]
    public string Facno { get; set; }
    /// <summary>
    /// 当前节点
    /// </summary>
    [SugarColumn(ColumnDescription = "当前节点", IsNullable = true, Length = 126)]
    public string Facna { get; set; }
    /// <summary>
    /// 当前节点类型
    /// </summary>
    [SugarColumn(ColumnDescription = "当前节点类型", IsNullable = true, Length = 32)]
    public string Facty { get; set; }
    /// <summary>
    /// 流转方式
    /// </summary>
    [SugarColumn(ColumnDescription = "流转方式", IsNullable = true, Length = 32)]
    public string Flway { get; set; }
    /// <summary>
    /// 流程实例ID
    /// </summary>
    [SugarColumn(ColumnDescription = "流程实例id", IsNullable = true)]
    public long? Proid { get; set; }
    /// <summary>
    /// 状态
    /// </summary>
    [SugarColumn(ColumnDescription = "状态", IsNullable = true, Length = 8)]
    public string State { get; set; }
    /// <summary>
    /// 开始时间
    /// </summary>
    [SugarColumn(ColumnDescription = "开始时间", IsNullable = true, IsOnlyIgnoreUpdate = true)]
    public DateTime? Sttim { get; set; } = DateTime.Now;

    /// <summary>
    /// 是否激活
    /// </summary>
    [SugarColumn(ColumnDescription = "是否激活", IsNullable = true)]
    public int? Actag { get; set; }
}
