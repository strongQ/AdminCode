

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.GoView.Dtos;
public class goview_project_edit_request
{
    public long id { get; set; }
    public string indexImage { get; set; }
}

public class goview_project_publish_request
{
    public long id { get; set; }
    public int state { get; set; }
}
