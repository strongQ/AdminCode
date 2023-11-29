
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Todo.Done;
[SugarTable("net_todo_done", TableDescription = "系统待办完成表")]
[Description("系统待办完成表")]
public class SysTodoDone
{
    [SugarColumn(ColumnDescription = "Id主键", IsPrimaryKey = true)]
    public long Id { get; set; }

    [SugarColumn(ColumnDescription = "待办ID", IsNullable = true)]
    public long Todid { get; set; }

    [SugarColumn(ColumnDescription = "用户ID", IsNullable = true)]
    public long Userid { get; set; }

    [SugarColumn(ColumnDescription = "完成时间", IsNullable = true)]
    public DateTime? EndTime { get; set; } = DateTime.Now;
}
