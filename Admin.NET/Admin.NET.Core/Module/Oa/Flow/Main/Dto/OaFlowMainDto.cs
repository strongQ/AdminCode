namespace Admin.NET.Core.Module.Oa.Flow.Main.Dto;

/// <summary>
/// 流程实例输出参数
/// </summary>
public class OaFlowMainDto
    {
        /// <summary>
        /// Id
        /// </summary>
        public long Id { get; set; }
        
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
        
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
        
        /// <summary>
        /// 全局流程模板ID
        /// </summary>
        public long Protd { get; set; }
        
        /// <summary>
        /// 表单数据
        /// </summary>
        public string Zform { get; set; }
        
        /// <summary>
        /// 全局流程模板ID
        /// </summary>
        public long Temid { get; set; }
        
        /// <summary>
        /// 状态
        /// </summary>
        public string State { get; set; }
        
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime Createtime { get; set; }
        
        /// <summary>
        /// 更新时间
        /// </summary>
        public DateTime Updatetime { get; set; }
        
        /// <summary>
        /// 创建者Id
        /// </summary>
        public long Createuserid { get; set; }
        
        /// <summary>
        /// 修改者Id
        /// </summary>
        public long Updateuserid { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        public bool Isdelete { get; set; }
        
    }
