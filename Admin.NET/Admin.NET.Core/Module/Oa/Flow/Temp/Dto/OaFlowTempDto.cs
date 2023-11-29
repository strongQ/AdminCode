namespace Admin.NET.Core.Module.Oa.Flow.Temp.Dto;

/// <summary>
/// 流程模板输出参数
/// </summary>
public class OaFlowTempDto
    {
        /// <summary>
        /// Id
        /// </summary>
        public long id { get; set; }
        
        /// <summary>
        /// 备注
        /// </summary>
        public string remark { get; set; }
        
        /// <summary>
        /// 名称
        /// </summary>
        public string name { get; set; }
        
        /// <summary>
        /// 分类ID
        /// </summary>
        public long catid { get; set; }
        
        /// <summary>
        /// 排序号
        /// </summary>
        public int ornum { get; set; }
        
        /// <summary>
        /// 全局流程模板ID
        /// </summary>
        public long protd { get; set; }
        
        /// <summary>
        /// vform
        /// </summary>
        public string vform { get; set; }
        
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime createtime { get; set; }
        
        /// <summary>
        /// 更新时间
        /// </summary>
        public DateTime updatetime { get; set; }
        
        /// <summary>
        /// 创建者Id
        /// </summary>
        public long createuserid { get; set; }
        
        /// <summary>
        /// 修改者Id
        /// </summary>
        public long updateuserid { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        public bool isdelete { get; set; }
        
    }
