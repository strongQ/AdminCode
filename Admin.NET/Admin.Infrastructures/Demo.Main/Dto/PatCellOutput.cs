// ע�

using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Main.Dto
{
    public class PatCellOutput
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
}
