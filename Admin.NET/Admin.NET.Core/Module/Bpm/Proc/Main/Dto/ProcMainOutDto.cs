

using Admin.NET.Core.Module.Bpm.Audit.Main;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Main.Dto;
public class ProcMainOutDto
{
    /// <summary>
    /// 审批者
    /// </summary>
    public List<BpmAuditMain> Audits { get; set; }
    /// <summary>
    /// 处理人姓名
    /// </summary>
    public string HiHamen { get; set; }
    /// <summary>
    /// 处理人姓名
    /// </summary>
    public string CuExmen { get; set; }

    public bool Cutag { get; set; }

    public Zbpm Zbpm { get; set; }
}

public class ProcNodeOutDto
{
    /// <summary>
    /// 节点号
    /// </summary>
    public string Tarno { get; set; }
    /// <summary>
    /// 节点名称
    /// </summary>
    public string Tarna { get; set; }
    /// <summary>
    /// 处理人
    /// </summary>
    public string Tamen { get; set; }
    /// <summary>
    /// xml审批流
    /// </summary>
    public string Xml { get; set; }
    /// <summary>
    /// Paramid
    /// </summary>
    public long Bacid { get; set; }
}

public class ProcXmlOutDto
{
    public string Xml { get; set; }

    public List<string> NodeList { get; set; }

    public List<long> LineList { get; set; }
}

/// <summary>
/// 沟通人员
/// </summary>
public class CommunicateOutDto
{
    /// <summary>
    /// userid
    /// </summary>
    public long Id { get; set; }
    /// <summary>
    /// 名称
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// 任务id
    /// </summary>
    public long Taskid { get; set; }
}
