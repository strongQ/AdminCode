

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.GoView.Entities;
[SugarTable("net_goview_project", TableDescription = "goview大屏项目表")]
[Description("goview大屏项目表")]
public class GoViewProject:EntityBase
{
    /// <summary>
    /// 项目名称
    /// </summary>
    [SugarColumn(ColumnDescription = "项目名称", IsNullable = true, Length = 255)]
    public string ProjectName { get; set; }
    /// <summary>
    /// 图片地址
    /// </summary>
    [SugarColumn(ColumnDescription = "图片地址", IsNullable = true, Length = 255)]
    public string IndexImage { get; set; }
    /// <summary>
    /// 备注
    /// </summary>
    [SugarColumn(ColumnDescription = "备注", IsNullable = true, Length = 1000)]
    public string Remarks { get; set; }
    /// <summary>
    /// 发布状态 项目状态[-1未发布, 1发布]
    /// </summary>
    [SugarColumn(ColumnDescription = "项目状态", IsNullable = true)]
    public int State { get; set; }
}
