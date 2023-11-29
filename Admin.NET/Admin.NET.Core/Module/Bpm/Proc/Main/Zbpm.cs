

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Main;
/// <summary>
/// 待办数据
/// </summary>
public class Zbpm
{
    /// <summary>
    /// 待办ID
    /// </summary>
    public long Todid { get; set; }//待办ID
    /// <summary>
    /// 业务模型类型
    /// </summary>
    public string Modty { get; set; }//业务模型类型
    /// <summary>
    /// 流程模板ID
    /// </summary>
    public long Temid { get; set; }//流程模板ID
    /// <summary>
    /// 流程实例ID
    /// </summary>
    public long Proid { get; set; }//流程实例ID
    /// <summary>
    /// 流程实例名称
    /// </summary>
    public string Prona { get; set; }//流程实例名称
    /// <summary>
    /// 当前节点ID
    /// </summary>
    public long Nodid { get; set; }//当前节点ID
    /// <summary>
    /// 当前节点编号
    /// </summary>
    public string Facno { get; set; }//当前节点编号
    /// <summary>
    /// 当前节点名称
    /// </summary>
    public string Facna { get; set; }//当前节点名称
    /// <summary>
    /// 目标节点编号
    /// </summary>
    public string Tarno { get; set; }//目标节点编号
    /// <summary>
    /// 目标节点名称
    /// </summary>
    public string Tarna { get; set; }//目标节点名称
    /// <summary>
    /// 驳回标记，驳回的节点通过后直接返回本节点
    /// </summary>
    public bool Retag { get; set; } = true;//驳回标记，驳回的节点通过后直接返回本节点
    /// <summary>
    /// 驳回后的流程重新提交时的bpm_proc_param的id
    /// </summary>
    public long Bacid { get; set; }//驳回后的流程重新提交时的bpm_proc_param的id
    /// <summary>
    /// 转办标记，流程重新流经本节点时，直接由转办人员处理
    /// </summary>
    public bool Tutag { get; set; } = false;//转办标记，流程重新流经本节点时，直接由转办人员处理
    /// <summary>
    /// 转办人员ID
    /// </summary>
    public long Tumid { get; set; }//转办人员ID
    /// <summary>
    /// 沟通标记，是否显示意见
    /// </summary>
    public bool Cotag { get; set; } = false;//沟通标记，是否显示意见
    /// <summary>
    /// 沟通人员IDS
    /// </summary>
    public string Coids { get; set; }//沟通人员IDS
    /// <summary>
    /// 取消沟通的task_id
    /// </summary>
    public string Ccids { get; set; }//取消沟通的task_id
    /// <summary>
    /// 任务ID
    /// </summary>
    public long? Tasid { get; set; }//任务ID
    /// <summary>
    /// 任务类型
    /// </summary>
    public string Tasty { get; set; }//任务类型
    /// <summary>
    /// 操作：处理意见
    /// </summary>
    public string Opnot { get; set; }//操作：处理意见
    /// <summary>
    /// 操作：紧急程度
    /// </summary>
    public string Opurg { get; set; }//操作：紧急程度
    /// <summary>
    /// 操作key:pass, reject
    /// </summary>
    public string Opkey { get; set; }//操作key:pass, reject
    /// <summary>
    /// 操作名称:通过，驳回到谁，沟通谁
    /// </summary>
    public string Opinf { get; set; }//操作名称:通过，驳回到谁，沟通谁
    /// <summary>
    /// 优化过的vboot可解析的的xml
    /// </summary>
    public string Chxml { get; set; }//优化过的vboot可解析的的xml
    /// <summary>
    /// 当前处理人ID
    /// </summary>
    public long Haman { get; set; }//当前处理人ID
    /// <summary>
    /// 应处理人ID
    /// </summary>
    public long Exman { get; set; }//应处理人ID
    /// <summary>
    /// 流程创建人
    /// </summary>
    public long Crman { get; set; }//流程创建人
    /// <summary>
    /// 附件IDS
    /// </summary>
    public string Atids { get; set; }//附件IDS
    /// <summary>
    /// 流程实例备注
    /// </summary>
    public string Remark { get; set; }

}
