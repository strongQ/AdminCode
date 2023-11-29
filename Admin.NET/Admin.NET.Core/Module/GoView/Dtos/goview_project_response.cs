

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.GoView.Dtos;
public class goview_project_list_response
{
    public string id { get; set; }
    public string? projectName { get; set; }
    public DateTime? createTime { get; set; }
    public long? createUserId { get; set; }
    public string? indexImage { get; set; }
    public string? remarks { get; set; }
    public int state { get; set; }
    public int isDelete { get; set; }
}
public class goview_project_data_response
{
    public long id { get; set; }
    public long project_id { get; set; }
    public DateTime? create_time { get; set; }
    public long? create_user_id { get; set; }
    public string content { get; set; }
}
