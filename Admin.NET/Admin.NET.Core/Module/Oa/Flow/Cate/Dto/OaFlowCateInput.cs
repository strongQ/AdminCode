using Admin.NET.Core;
using System.ComponentModel.DataAnnotations;

namespace Admin.NET.Core.Module.Oa.Flow.Cate.Dto;

/// <summary>
/// 流程分类基础输入参数
/// </summary>
public class OaFlowCateBaseInput
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
        /// 排序号
        /// </summary>
        public virtual int Ornum { get; set; }
        
        /// <summary>
        /// 父ID
        /// </summary>
        public virtual long Pid { get; set; }
        
      
        
       
     
        
    }

    /// <summary>
    /// 流程分类分页查询输入参数
    /// </summary>
    public class OaFlowCateInput : BasePageInput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
        
    }

    /// <summary>
    /// 流程分类增加输入参数
    /// </summary>
    public class AddOaFlowCateInput : OaFlowCateBaseInput
    {
    }

    /// <summary>
    /// 流程分类删除输入参数
    /// </summary>
    public class DeleteOaFlowCateInput : BaseIdInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long Id { get; set; }
        
    }

    /// <summary>
    /// 流程分类更新输入参数
    /// </summary>
    public class UpdateOaFlowCateInput : OaFlowCateBaseInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long Id { get; set; }
        
    }

    /// <summary>
    /// 流程分类主键查询输入参数
    /// </summary>
    public class QueryByIdOaFlowCateInput : DeleteOaFlowCateInput
    {

    }
