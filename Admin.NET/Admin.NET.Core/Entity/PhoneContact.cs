using System;
using SqlSugar;
using System.ComponentModel;

namespace Admin.NET.Core;

     /// <summary>
     /// 通讯录表
     /// </summary>
      [SugarTable("net_phonecontact","通讯录表")]
      public class PhoneContact  : EntityBase
      {
          /// <summary>
          /// 号码
          /// </summary>
          public decimal? PHONE { get; set; }
          /// <summary>
          /// 名称
          /// </summary>
          public string? NAME { get; set; }
          /// <summary>
          /// 关联号码
          /// </summary>
          public decimal? RELATIONPHONE { get; set; }
          /// <summary>
          /// 地址
          /// </summary>
          public string? ADDRESS { get; set; }
          
	
}