

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Node.Main.Dto;
public class TaskMainNodeDto
{
    /// <summary>
    /// 任务id
    /// </summary>
    public long Taskid { get; set; }
    /// <summary>
    /// 节点id
    /// </summary>
    public long Nodid { get; set; }
    /// <summary>
    /// 处理人名称
    /// </summary>
    public string Exnam { get; set; }
    /// <summary>
    /// 处理人id
    /// </summary>
    public long Exman { get; set; }
    /// <summary>
    /// 实例id
    /// </summary>
    public long Proid { get; set; }
    /// <summary>
    /// 目标节点id
    /// </summary>
    public string Facno { get; set; }
    /// <summary>
    /// 目标节点名称
    /// </summary>
    public string Facna { get; set; }
    /// <summary>
    /// 任务类型
    /// </summary>
    public string Type { get; set; }
}
