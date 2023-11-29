// 注释

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Entity;
/// <summary>
/// 客户端日志表
/// </summary>
[SugarTable("net_log_client", "客户端日志表")]
public class ClientLog : EntityBase
{
    
    /// <summary>
    /// 客户端ID
    /// </summary>
    [SugarColumn(ColumnName = "clientid", IsNullable = true, ColumnDescription = "客户端ID",Length =100)]
    public string? ClientID { get; set; }
    /// <summary>
    /// 客户端名称
    /// </summary>
    [SugarColumn(ColumnName = "clientname", IsNullable = true, ColumnDescription = "客户端名称",Length =100)]
    public string? ClientName { get; set; }

    /// <summary>
    /// 日志标题
    /// </summary>
    [SugarColumn(ColumnName = "title", IsNullable = true, ColumnDescription = "日志标题",Length =100)]
    public string? LogTitle { get; set; }
    /// <summary>
    /// 日志内容
    /// </summary>
    [SugarColumn(ColumnName = "logcontent", IsNullable = true, ColumnDescription = "日志内容", Length = 1000)]
    public string? LogContent { get; set; }
    /// <summary>
    /// 客户端标志
    /// </summary>
    [SugarColumn(ColumnName = "logdata", IsNullable = true, ColumnDescription = "日志数据",Length =100)]
    public string? Flag { get; set; }
    /// <summary>
    /// 日志类型
    /// </summary>
    [SugarColumn(ColumnName = "logtype", IsNullable = true, ColumnDescription = "日志类型",Length =100)]
    public string? LogType { get; set; }





}
