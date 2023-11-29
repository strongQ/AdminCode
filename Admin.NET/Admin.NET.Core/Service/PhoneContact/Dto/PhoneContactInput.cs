using System.ComponentModel.DataAnnotations;

namespace Admin.NET.Core.Service;

/// <summary>
/// 通讯录基础输入参数
/// </summary>
public class PhoneContactBaseInput
    {
        /// <summary>
        /// 号码
        /// </summary>
        public virtual decimal PHONE { get; set; }
        
        /// <summary>
        /// 名称
        /// </summary>
        public virtual string NAME { get; set; }
        
        /// <summary>
        /// 关联号码
        /// </summary>
        public virtual decimal RELATIONPHONE { get; set; }
        
        /// <summary>
        /// 地址
        /// </summary>
        public virtual string ADDRESS { get; set; }
        
        /// <summary>
        /// 创建时间
        /// </summary>
        public virtual DateTime CREATETIME { get; set; }
        
        /// <summary>
        /// 更新时间
        /// </summary>
        public virtual DateTime UPDATETIME { get; set; }
        
        /// <summary>
        /// 创建者Id
        /// </summary>
        public virtual decimal CREATEUSERID { get; set; }
        
        /// <summary>
        /// 修改者Id
        /// </summary>
        public virtual decimal UPDATEUSERID { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        public virtual decimal ISDELETE { get; set; }
        
        /// <summary>
        /// 租户Id
        /// </summary>
        public virtual decimal TENANTID { get; set; }
        
    }

    /// <summary>
    /// 通讯录分页查询输入参数
    /// </summary>
    public class PhoneContactInput : BasePageInput
    {
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
         /// 创建时间范围
         /// </summary>
         public List<DateTime?> CREATETIMERange { get; set; } 
    }

    /// <summary>
    /// 通讯录增加输入参数
    /// </summary>
    public class AddPhoneContactInput : PhoneContactBaseInput
    {
    }

    /// <summary>
    /// 通讯录删除输入参数
    /// </summary>
    public class DeletePhoneContactInput : BaseIdInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public decimal ID { get; set; }
        
    }

    /// <summary>
    /// 通讯录更新输入参数
    /// </summary>
    public class UpdatePhoneContactInput : PhoneContactBaseInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public decimal ID { get; set; }
        
    }

    /// <summary>
    /// 通讯录主键查询输入参数
    /// </summary>
    public class QueryByIdPhoneContactInput : DeletePhoneContactInput
    {

    }
