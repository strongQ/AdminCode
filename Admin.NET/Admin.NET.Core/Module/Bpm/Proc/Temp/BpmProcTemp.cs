

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Temp;
/// <summary>
/// 流程模板
/// </summary>
[SugarTable("net_bpm_proc_temp", TableDescription = "流程模板表")]
public class BpmProcTemp : EntityBase
{
    /// <summary>
    /// 名称
    /// </summary>
    /// <example></example>
    [SugarColumn(ColumnDescription = "名称", IsNullable = true, Length = 255)]
    public string Name { get; set; }
    /// <summary>
    /// 原始xml
    /// </summary>
    [SugarColumn(ColumnDescription = "原始XML", ColumnDataType = "varchar(max)", IsNullable = true)]
    public string Orxml { get; set; }
    /// <summary>
    /// 变动后的XML
    /// </summary>
    [SugarColumn(ColumnDescription = "变动后的XML", ColumnDataType = "varchar(max)", IsNullable = true)]
    public string Chxml { get; set; }
    /// <summary>
    /// 类别
    /// </summary>
    [SugarColumn(ColumnDescription = "类别", IsNullable = true, Length = 36)]
    public string Type { get; set; }
    /// <summary>
    /// 排序号
    /// </summary>
    [SugarColumn(ColumnDescription = "排序号", IsNullable = true)]
    public int Ornum { get; set; }
    /// <summary>
    /// 版本号
    /// </summary>
    [SugarColumn(ColumnDescription = "版本号", IsNullable = true)]
    public int Venum { get; set; }

    [SugarColumn(ColumnDescription = "备注", IsNullable = true, Length = 255)]
    public  string Notes { get; set; }
}