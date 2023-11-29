namespace Admin.NET.Core.Service;

/// <summary>
/// 通讯录输出参数
/// </summary>
public class PhoneContactDto
    {
        /// <summary>
        /// Id
        /// </summary>
        public decimal ID { get; set; }
        
        /// <summary>
        /// 号码
        /// </summary>
        public decimal PHONE { get; set; }
        
        /// <summary>
        /// 名称
        /// </summary>
        public string NAME { get; set; }
        
        /// <summary>
        /// 关联号码
        /// </summary>
        public decimal RELATIONPHONE { get; set; }
        
        /// <summary>
        /// 地址
        /// </summary>
        public string ADDRESS { get; set; }
        
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CREATETIME { get; set; }
        
        /// <summary>
        /// 更新时间
        /// </summary>
        public DateTime UPDATETIME { get; set; }
        
        /// <summary>
        /// 创建者Id
        /// </summary>
        public decimal CREATEUSERID { get; set; }
        
        /// <summary>
        /// 修改者Id
        /// </summary>
        public decimal UPDATEUSERID { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        public decimal ISDELETE { get; set; }
        
        /// <summary>
        /// 租户Id
        /// </summary>
        public decimal TENANTID { get; set; }
        
    }
