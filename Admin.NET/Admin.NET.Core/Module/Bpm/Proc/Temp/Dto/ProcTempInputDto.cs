

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Temp.Dto;
public class ProcTempInputDto:BasePageInput
{
    /// <summary>
    /// 类型
    /// </summary>
    public string Type { get; set; }
    /// <summary>
    /// 名称
    /// </summary>
    public string Name { get; set; }
}
