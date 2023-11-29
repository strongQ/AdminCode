

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core;
/// <summary>
/// 诗
/// </summary>
[SugarTable("poetry", "诗集")]
public class Poetry
{
    [SugarColumn(ColumnDescription = "Id", IsPrimaryKey = true, IsIdentity = true)]
    public long Id { get; set; }
    /// <summary>
    /// 标题
    /// </summary>
    [SugarColumn(ColumnDescription = "标题", Length = 200)]
    public string Title { get; set; }
    /// <summary>
    /// 朝代
    /// </summary>
    [SugarColumn(ColumnDescription = "朝代", Length = 50)]
    public string Dynasty { get; set; }
    /// <summary>
    /// 诗人
    /// </summary>
    [SugarColumn(ColumnDescription = "诗人", Length = 100)]
    public string Author { get; set; }
    /// <summary>
    /// 内容
    /// </summary>
    [SugarColumn(ColumnDescription = "内容", ColumnDataType = "varchar(max)")]
    public string Content { get; set; }
}
