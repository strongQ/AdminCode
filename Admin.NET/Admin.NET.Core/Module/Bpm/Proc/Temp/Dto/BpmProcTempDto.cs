

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Temp.Dto;
public class BpmProcTempDto
{
    // t.id, t.name, t.crtim, t.uptim, crman = o.name, upman = o2.name, t.notes 
    public long Id { get; set; }

    /// <summary>
    /// 名称
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// 创建时间
    /// </summary>
    public DateTime? Crtim { get; set; }
    /// <summary>
    /// 更新时间
    /// </summary>
    public DateTime? Uptim { get; set; }
    /// <summary>
    /// 创建人
    /// </summary>
    public string Crman { get; set; }
    /// <summary>
    /// 更新人
    /// </summary>
    public string Upman { get; set; }
    /// <summary>
    /// 备注
    /// </summary>
    public string Notes { get; set; }
}
