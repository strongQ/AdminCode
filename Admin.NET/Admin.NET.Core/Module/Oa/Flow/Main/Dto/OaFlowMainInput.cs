using Admin.NET.Core.Module.Bpm.Proc.Main;
using System.ComponentModel.DataAnnotations;
namespace Admin.NET.Core.Module.Oa.Flow.Main.Dto;


    /// <summary>
    /// 流程实例基础输入参数
    /// </summary>
    public class OaFlowMainBaseInput
    {
        /// <summary>
        /// 备注
        /// </summary>
        public virtual string Remark { get; set; }
        
        /// <summary>
        /// 名称
        /// </summary>
        public virtual string Name { get; set; }
        
        /// <summary>
        /// 全局流程模板ID
        /// </summary>
        public virtual long Protd { get; set; }
        
        /// <summary>
        /// 表单数据
        /// </summary>
        public virtual string Zform { get; set; }
        
        /// <summary>
        /// 全局流程模板ID
        /// </summary>
        public virtual long Temid { get; set; }
        
        /// <summary>
        /// 状态
        /// </summary>
        public virtual string State { get; set; }
        
      
        
        /// <summary>
        /// 创建者Id
        /// </summary>
        public virtual long Createuserid { get; set; }
        
      
        
    }

    /// <summary>
    /// 流程实例分页查询输入参数
    /// </summary>
    public class OaFlowMainInput : BasePageInput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
        
    }

    /// <summary>
    /// 流程实例增加输入参数
    /// </summary>
    public class AddOaFlowMainInput : OaFlowMainBaseInput
    {
    public Zbpm Zbpm { get; set; }
    }

    /// <summary>
    /// 流程实例删除输入参数
    /// </summary>
    public class DeleteOaFlowMainInput : BaseIdInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long Id { get; set; }
        
    }

    /// <summary>
    /// 流程实例更新输入参数
    /// </summary>
    public class UpdateOaFlowMainInput : OaFlowMainBaseInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long Id { get; set; }
        public Zbpm Zbpm { get; set; }

}

    /// <summary>
    /// 流程实例主键查询输入参数
    /// </summary>
    public class QueryByIdOaFlowMainInput : DeleteOaFlowMainInput
    {

    }
