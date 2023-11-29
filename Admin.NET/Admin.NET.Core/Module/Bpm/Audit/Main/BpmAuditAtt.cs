
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Audit.Main;
[SugarTable("net_bpm_audit_att", TableDescription = "流程评审附件")]
[SystemTable]
public class BpmAuditAtt: EntityBaseId
{
   
    /// <summary>
    /// 文件名称
    /// </summary>
    [SugarColumn(ColumnDescription = "文件全名", IsNullable = true, Length = 255)]
    public string Name { get; set; }
    /// <summary>
    /// 地址
    /// </summary>
    [SugarColumn(ColumnDescription = "地址", IsNullable = true, Length = 255)]
    public string Path { get; set; }
    /// <summary>
    /// 文件id
    /// </summary>
    [SugarColumn(ColumnDescription = "文件ID", IsNullable = true, Length = 32)]
    public string Filid { get; set; }
    /// <summary>
    /// 评审id
    /// </summary>
    [SugarColumn(ColumnDescription = "评审ID", IsNullable = true, Length = 32)]
    public string Audid { get; set; }
    /// <summary>
    /// 排序号
    /// </summary>
    [SugarColumn(ColumnDescription = "排序号", IsNullable = true)]
    public int Ornum { get; set; }

}