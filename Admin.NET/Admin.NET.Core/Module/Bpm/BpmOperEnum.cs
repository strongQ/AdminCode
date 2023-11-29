

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm;
/// <summary>
/// bpm操作类型
/// </summary>
public enum BpmOperEnum
{
    [Description("起草人提交")]
    Dsubmit =0,
    [Description("结束")]
    End,
    [Description("通过")]
    Pass,
    [Description("打回")]
    Refuse,
    [Description("转向")]
    Turn,
    [Description("沟通")]
    Communicate,
    [Description("废弃")]
    Abandon,
    [Description("沟通回复")]
    Bacommunicate,
    [Description("取消沟通")]
    Cacommunicate

}

/// <summary>
/// 节点类型
/// </summary>
public enum BpmNodeEnum
{
   /// <summary>
   /// 开始节点
   /// </summary>
    [Description("开始节点")]
    Start,
    [Description("打回")]
    Refuse=11,
    /// <summary>
    /// 起草节点
    /// </summary>
    [Description("起草节点")]
    Draft=30,
    [Description("审批")]
    Review=20,
    [Description("条件")]
    Condition,
    [Description("沟通")]
    Communicate,
    [Description("转向沟通")]
    To_communicate,
    /// <summary>
    /// 结束节点
    /// </summary>
    [Description("结束节点")]
    End,
    
}
