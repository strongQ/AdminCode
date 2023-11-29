

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Todo.User;

[SugarTable("net_todo_user", TableDescription = "系统待办用户对象")]
[Description("系统待办用户对象")]
public class SysTodoUser
{
    [SugarColumn(ColumnDescription = "Id主键", IsPrimaryKey = true)]
    public long Id { get; set; }

    [SugarColumn(ColumnDescription = "待办ID", IsNullable = true)]
    public long Todid { get; set; }

    [SugarColumn(ColumnDescription = "用户ID", IsNullable = true)]
    public long Useid { get; set; }

}
