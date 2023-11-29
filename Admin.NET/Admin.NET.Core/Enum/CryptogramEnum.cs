﻿namespace Admin.NET.Core;

/// <summary>
/// 密码加密枚举
/// </summary>
public enum CryptogramEnum
{
    /// <summary>
    /// MD5
    /// </summary>
    [Description("MD5")]
    MD5 = 0,

    /// <summary>
    /// SM2（国密）
    /// </summary>
    [Description("SM2")]
    SM2 = 1
}