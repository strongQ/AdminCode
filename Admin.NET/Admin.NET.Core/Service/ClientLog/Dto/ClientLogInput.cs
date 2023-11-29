using System.ComponentModel.DataAnnotations;

namespace Admin.NET.Core.Service.ClientLog.Dto;

/// <summary>
/// ClientLogService基础输入参数
/// </summary>
public class ClientLogBaseInput
    {
        /// <summary>
        /// 客户端ID
        /// </summary>
        public virtual string CLIENTID { get; set; }
        
        /// <summary>
        /// 客户端名称
        /// </summary>
        public virtual string CLIENTNAME { get; set; }
        
        /// <summary>
        /// 日志标题
        /// </summary>
        public virtual string LOGTITLE { get; set; }
        
        /// <summary>
        /// 日志内容
        /// </summary>
        public virtual string LOGCONTENT { get; set; }
        
        /// <summary>
        /// 客户端标志
        /// </summary>
        public virtual string FLAG { get; set; }
        
        /// <summary>
        /// 日志类型
        /// </summary>
        public virtual string LOGTYPE { get; set; }
        
        /// <summary>
        /// 备注
        /// </summary>
        public virtual string REMARK { get; set; }
        
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
        public virtual long CREATEUSERID { get; set; }
        
        /// <summary>
        /// 修改者Id
        /// </summary>
        public virtual long UPDATEUSERID { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        public virtual bool ISDELETE { get; set; }
        
    }

    /// <summary>
    /// ClientLogService分页查询输入参数
    /// </summary>
    public class ClientLogInput : BasePageInput
    {
        /// <summary>
        /// 客户端ID
        /// </summary>
        public string CLIENTID { get; set; }
        
        /// <summary>
        /// 客户端名称
        /// </summary>
        public string CLIENTNAME { get; set; }
        
        /// <summary>
        /// 日志标题
        /// </summary>
        public string LOGTITLE { get; set; }
        
        /// <summary>
        /// 日志内容
        /// </summary>
        public string LOGCONTENT { get; set; }
        
        /// <summary>
        /// 客户端标志
        /// </summary>
        public string FLAG { get; set; }
        
        /// <summary>
        /// 日志类型
        /// </summary>
        public string LOGTYPE { get; set; }
        
        /// <summary>
        /// 备注
        /// </summary>
        public string REMARK { get; set; }
        
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CREATETIME { get; set; }
        
        /// <summary>
         /// 创建时间范围
         /// </summary>
         public List<DateTime?> CREATETIMERange { get; set; } 
        /// <summary>
        /// 更新时间
        /// </summary>
        public DateTime UPDATETIME { get; set; }
        
        /// <summary>
         /// 更新时间范围
         /// </summary>
         public List<DateTime?> UPDATETIMERange { get; set; } 
    }

    /// <summary>
    /// ClientLogService增加输入参数
    /// </summary>
    public class AddClientLogInput : ClientLogBaseInput
    {
    }

    /// <summary>
    /// ClientLogService删除输入参数
    /// </summary>
    public class DeleteClientLogInput : BaseIdInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public decimal ID { get; set; }
        
    }

    /// <summary>
    /// ClientLogService更新输入参数
    /// </summary>
    public class UpdateClientLogInput : ClientLogBaseInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public decimal ID { get; set; }
        
    }

    /// <summary>
    /// ClientLogService主键查询输入参数
    /// </summary>
    public class QueryByIdClientLogInput : DeleteClientLogInput
    {

    }
