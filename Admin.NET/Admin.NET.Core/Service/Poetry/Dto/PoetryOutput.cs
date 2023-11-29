

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Service;
/// <summary>
/// 诗香文地输出参数
/// </summary>
public class PoetryOutput
{
    /// <summary>
    /// Id
    /// </summary>
    public long id { get; set; }

    /// <summary>
    /// 标题
    /// </summary>
    public string title { get; set; }

    /// <summary>
    /// 朝代
    /// </summary>
    public string dynasty { get; set; }

    /// <summary>
    /// 诗人
    /// </summary>
    public string author { get; set; }

    /// <summary>
    /// 内容
    /// </summary>
    public string content { get; set; }

}

