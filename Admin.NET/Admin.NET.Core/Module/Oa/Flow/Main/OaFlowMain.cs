

using Admin.NET.Core.Module.Bpm.Proc.Main;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Oa.Flow.Main;

[SugarTable("net_oa_flow_main", TableDescription = "OA流程实例表")]
[Description("OA流程实例表")]
public class OaFlowMain : EntityBase
{
    [SugarColumn(ColumnDescription = "备注", IsNullable = true, Length = 255)]
    public string Remark { get; set; }
    /// <summary>
    /// 名称
    /// </summary>
    /// <example></example>
    [SugarColumn(ColumnDescription = "名称", IsNullable = true, Length = 255)]
    public string Name { get; set; }
    [SugarColumn(ColumnDescription = "全局流程模板ID", IsNullable = true)]
    public long? Protd { get; set; }

    [SugarColumn(ColumnDescription = "表单数据", ColumnDataType = "varchar(max)", IsNullable = true)]
    public string Zform { get; set; }

    [SugarColumn(ColumnDescription = "全局流程模板ID", IsNullable = true)]
    public long? Temid { get; set; }

    [SugarColumn(IsIgnore = true)] public string Prxml { get; set; }


    [SugarColumn(IsIgnore = true)]
    public Zbpm Zbpm { get; set; }

    [SugarColumn(ColumnDescription = "状态", IsNullable = true, Length = 8)]
    public string State { get; set; }




}
