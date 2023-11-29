﻿namespace Admin.NET.Core.Service;

public class WechatUserInput : BasePageInput
{
    /// <summary>
    /// 昵称
    /// </summary>
    public string NickName { get; set; }

    /// <summary>
    /// 手机号码
    /// </summary>
    public string PhoneNumber { get; set; }
}

public class DeleteWechatUserInput : BaseIdInput
{
}