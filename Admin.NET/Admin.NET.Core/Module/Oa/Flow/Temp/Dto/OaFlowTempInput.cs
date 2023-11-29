namespace Admin.NET.Core.Module.Oa.Flow.Temp.Dto;



    /// <summary>
    /// 流程模板基础输入参数
    /// </summary>
    public class OaFlowTempBaseInput
    {
        /// <summary>
        /// 备注
        /// </summary>
        public virtual string remark { get; set; }
        
        /// <summary>
        /// 名称
        /// </summary>
        public virtual string name { get; set; }
        
        /// <summary>
        /// 分类ID
        /// </summary>
        public virtual long catid { get; set; }
        
        /// <summary>
        /// 排序号
        /// </summary>
        public virtual int ornum { get; set; }
        
        /// <summary>
        /// 全局流程模板ID
        /// </summary>
        public virtual long protd { get; set; }
        
        /// <summary>
        /// vform
        /// </summary>
        public virtual string vform { get; set; }


    /// <summary>
    /// 是否启用
    /// </summary>
    
    public virtual int avtag { get; set; }



}

    /// <summary>
    /// 流程模板分页查询输入参数
    /// </summary>
    public class OaFlowTempInput : BasePageInput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string name { get; set; }

         public long CateId { get; set; }

}

/// <summary>
/// 流程模板增加输入参数
/// </summary>
public class AddOaFlowTempInput : OaFlowTempBaseInput
{
    /// <summary>
    /// 流程模板
    /// </summary>
    public string prxml { get; set; }
}


    /// <summary>
    /// 流程模板删除输入参数
    /// </summary>
    public class DeleteOaFlowTempInput : BaseIdInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long id { get; set; }
        
    }

    /// <summary>
    /// 流程模板更新输入参数
    /// </summary>
    public class UpdateOaFlowTempInput : OaFlowTempBaseInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long id { get; set; }

        /// <summary>
        /// 审批模板
        /// </summary>
        public string Prxml { get; set; }

}

    /// <summary>
    /// 流程模板主键查询输入参数
    /// </summary>
    public class QueryByIdOaFlowTempInput : DeleteOaFlowTempInput
    {

    }
