// 

using Admin.NET.Core;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Demo.Entity;
/// <summary>
/// 组装电芯数据
/// </summary>
[SugarTable("NET_PATCELL", "组装电芯数据")]
[Tenant("1300000000001")]
public class PatCell : EntityBase
{
    /// <summary>
    /// 线体
    /// </summary>
    public string? PLINE { get; set; }
    /// <summary>
    /// 型号
    /// </summary>
    public string? MODEL_NO { get; set; }
    /// <summary>
    /// 批次号
    /// </summary>
    public string? LOT_NO { get; set; }
    /// <summary>
    /// 托盘号
    /// </summary>
    public string? TRAYID { get; set; }
    /// <summary>
    /// 通道号
    /// </summary>
    public decimal? CHANNEL { get; set; }
    /// <summary>
    /// 电芯号
    /// </summary>
    public string? CELLID { get; set; }
    /// <summary>
    /// 电阻
    /// </summary>
    public decimal? IR { get; set; }
    /// <summary>
    /// 电压
    /// </summary>
    public decimal? OCV { get; set; }
    /// <summary>
    /// PATID
    /// </summary>
    public decimal? IDXNO { get; set; }
    /// <summary>
    /// 信息
    /// </summary>
    public string Message { get; set; }
    /// <summary>
    /// 时间
    /// </summary>
    public string Date_Time { get; set; }
}
