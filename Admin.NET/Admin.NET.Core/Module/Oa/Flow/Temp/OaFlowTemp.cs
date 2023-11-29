

using Admin.NET.Core.Module.Bpm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Oa.Flow.Temp;
[SugarTable("net_oa_flow_temp", TableDescription = "OA流程模板表")]
[Description("OA流程模板表")]
public class OaFlowTemp : EntityBase
{
    [SugarColumn(ColumnDescription = "备注", IsNullable = true, Length = 255)]
    public string Remark { get; set; }
    /// <summary>
    /// 名称
    /// </summary>
    /// <example></example>
    [SugarColumn(ColumnDescription = "名称", IsNullable = true, Length = 255)]
    public string Name { get; set; }
    [SugarColumn(ColumnDescription = "分类ID", IsNullable = true)]
    public long Catid { get; set; }

    [SugarColumn(IsIgnore = true)] public ZidNamePid Cate { get; set; }

    [SugarColumn(ColumnDescription = "排序号", IsNullable = true)]
    public int Ornum { get; set; }

    [SugarColumn(ColumnDescription = "全局流程模板ID", IsNullable = true)]
    public long Protd { get; set; }

    [SugarColumn(IsIgnore = true)] public string Prxml { get; set; }

    [SugarColumn(ColumnDescription = "vform", ColumnDataType = "varchar(max)", IsNullable = true)]
    public string Vform { get; set; }
    /// <summary>
    /// 分类名称
    /// </summary>
    [SqlSugar.SugarColumn(IsIgnore = true)]
    public string Catna { get; set; }
    /// <summary>
    /// 是否启用
    /// </summary>
    [SugarColumn(ColumnDescription = "是否启用", IsNullable = true)]
    public int Avtag { get; set; }
    
}
