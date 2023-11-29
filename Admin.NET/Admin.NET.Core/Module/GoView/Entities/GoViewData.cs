

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.GoView.Entities;
[SugarTable("net_goview_data", TableDescription = "goview大屏项目数据表")]
[Description("goview大屏项目数据表")]
public class GoViewData:EntityBase
{
    /// <summary>
    /// 项目id
    /// </summary>
    [SugarColumn(ColumnDescription = "项目id", IsNullable = true)]
    public long ProjectId { get; set; }
    /// <summary>
    /// 数据
    /// </summary>
    [SugarColumn(ColumnDescription ="数据",ColumnDataType = "varchar(max)",IsNullable = true)]
    public string Content { get; set; }
}
