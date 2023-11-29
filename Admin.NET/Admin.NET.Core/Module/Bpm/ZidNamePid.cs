

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm;
/// <summary>
/// 简单属性id，name,pid
/// </summary>
public class ZidNamePid
{
    public long id { get; set; }

    public string Name { get; set; }

    public string Pid { get; set; }
}


public class ProcMainDto
{
    /// <summary>
    /// id
    /// </summary>
    public long Proid { get; set; }
    /// <summary>
    /// 名称
    /// </summary>
    public string Prona { get; set; }
}