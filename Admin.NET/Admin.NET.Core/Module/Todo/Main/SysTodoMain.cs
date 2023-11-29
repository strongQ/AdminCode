

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Todo.Main;
[SugarTable("net_todo_main", TableDescription = "系统待办待阅表")]
[Description("系统待办待阅表")]
public class SysTodoMain : EntityBase
{
    /// <summary>
    /// 名称
    /// </summary>
    /// <example></example>
    [SugarColumn(ColumnDescription = "名称", IsNullable = true, Length = 255)]
    public string Name { get; set; }
    //1：待办；2：待阅
    [SugarColumn(ColumnDescription = "类型", IsNullable = true, Length = 8)]
    public string Type { get; set; }

    [SugarColumn(ColumnDescription = "紧急度", IsNullable = true, Length = 8)]
    public string Grade { get; set; }

    [SugarColumn(ColumnDescription = "模型分类", IsNullable = true, Length = 128)]
    public string Modca { get; set; }
    /// <summary>
    /// 流程实例
    /// </summary>
    [SugarColumn(ColumnDescription = "模型ID", IsNullable = true)]
    public long? Modid { get; set; }

    [SugarColumn(ColumnDescription = "链接", IsNullable = true, Length = 512)]
    public string Link { get; set; }

    [SugarColumn(ColumnDescription = "备注", IsNullable = true, Length = 256)]
    public string Remark { get; set; }

   
}
