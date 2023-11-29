namespace Admin.NET.Core.Service.ClientLog.Dto;

/// <summary>
/// ClientLogService输出参数
/// </summary>
public class ClientLogDto
    {
        /// <summary>
        /// Id
        /// </summary>
        public decimal ID { get; set; }
        
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
        /// 更新时间
        /// </summary>
        public DateTime UPDATETIME { get; set; }
        
        /// <summary>
        /// 创建者Id
        /// </summary>
        public long CREATEUSERID { get; set; }
        
        /// <summary>
        /// 修改者Id
        /// </summary>
        public long UPDATEUSERID { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        public bool ISDELETE { get; set; }
        
    }
