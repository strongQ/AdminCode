

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Main;
public class Zcond
{
    /// <summary>
    /// 业务模型类型
    /// </summary>
    public string Modty { get; set; }//业务模型类型
    /// <summary>
    /// 流程实例ID
    /// </summary>
    public long Proid { get; set; }//流程实例ID
    /// <summary>
    /// 流程模板ID
    /// </summary>
    public long Temid { get; set; }//流程模板ID
}
