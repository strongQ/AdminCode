namespace Admin.NET.Core.Module.Oa.Flow.Cate.Dto;

/// <summary>
/// 流程分类输出参数
/// </summary>
public class OaFlowCateDto
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
        /// 排序号
        /// </summary>
        public int Ornum { get; set; }
        
        /// <summary>
        /// 父ID
        /// </summary>
        public long Pid { get; set; }
        
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
