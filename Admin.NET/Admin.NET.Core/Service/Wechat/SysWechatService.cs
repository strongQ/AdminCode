﻿namespace Admin.NET.Core.Service;

/// <summary>
/// 微信公众号服务
/// </summary>
[ApiDescriptionSettings(Order = 240)]
public class SysWechatService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<SysWechatUser> _sysWechatUserRep;
    private readonly WechatApiClient _wechatApiClient;

    public SysWechatService(SqlSugarRepository<SysWechatUser> sysWechatUserRep,
        WechatApiHttpClient wechatApiHttpClient)
    {
        _sysWechatUserRep = sysWechatUserRep;
        _wechatApiClient = wechatApiHttpClient.CreateWechatClient();
    }

    /// <summary>
    /// 生成网页授权Url
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [AllowAnonymous]
    [DisplayName("生成网页授权Url")]
    public string GenAuthUrl(GenAuthUrlInput input)
    {
        return _wechatApiClient.GenerateParameterizedUrlForConnectOAuth2Authorize(input.RedirectUrl, input.Scope, null);
    }

    /// <summary>
    /// 获取微信用户OpenId
    /// </summary>
    /// <param name="input"></param>
    [AllowAnonymous]
    [DisplayName("获取微信用户OpenId")]
    public async Task<string> SnsOAuth2([FromQuery] WechatOAuth2Input input)
    {
        var reqOAuth2 = new SnsOAuth2AccessTokenRequest()
        {
            Code = input.Code,
        };
        var resOAuth2 = await _wechatApiClient.ExecuteSnsOAuth2AccessTokenAsync(reqOAuth2);
        if (resOAuth2.ErrorCode != (int)WechatReturnCodeEnum.请求成功)
            throw Oops.Oh(resOAuth2.ErrorMessage + " " + resOAuth2.ErrorCode);

        var wxUser = await _sysWechatUserRep.GetFirstAsync(p => p.OpenId == resOAuth2.OpenId);
        if (wxUser == null)
        {
            var reqUserInfo = new SnsUserInfoRequest()
            {
                OpenId = resOAuth2.OpenId,
                AccessToken = resOAuth2.AccessToken,
            };
            var resUserInfo = await _wechatApiClient.ExecuteSnsUserInfoAsync(reqUserInfo);
            wxUser = resUserInfo.Adapt<SysWechatUser>();
            wxUser.Avatar = resUserInfo.HeadImageUrl;
            wxUser.NickName = resUserInfo.Nickname;
            wxUser = await _sysWechatUserRep.AsInsertable(wxUser).ExecuteReturnEntityAsync();
        }
        else
        {
            wxUser.AccessToken = resOAuth2.AccessToken;
            wxUser.RefreshToken = resOAuth2.RefreshToken;
            await _sysWechatUserRep.AsUpdateable(wxUser).IgnoreColumns(true).ExecuteCommandAsync();
        }

        return resOAuth2.OpenId;
    }

    /// <summary>
    /// 微信用户登录OpenId
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [AllowAnonymous]
    [DisplayName("微信用户登录OpenId")]
    public async Task<dynamic> OpenIdLogin(WechatUserLogin input)
    {
        var wxUser = await _sysWechatUserRep.GetFirstAsync(p => p.OpenId == input.OpenId);
        if (wxUser == null)
            throw Oops.Oh("微信用户登录OpenId错误");
        return new
        {
            wxUser.Avatar,
            accessToken = JWTEncryption.Encrypt(new Dictionary<string, object>
            {
                { ClaimConst.UserId, wxUser.Id },
                { ClaimConst.OpenId, wxUser.OpenId },
                { ClaimConst.NickName, wxUser.NickName },
                { ClaimConst.LoginMode, LoginModeEnum.APP },
            })
        };
    }

    /// <summary>
    /// 获取配置签名参数(wx.config)
    /// </summary>
    /// <returns></returns>
    [DisplayName("获取配置签名参数(wx.config)")]
    public async Task<dynamic> GenConfigPara(SignatureInput input)
    {
        var resCgibinToken = await _wechatApiClient.ExecuteCgibinTokenAsync(new CgibinTokenRequest());
        var request = new CgibinTicketGetTicketRequest()
        {
            AccessToken = resCgibinToken.AccessToken
        };
        var response = await _wechatApiClient.ExecuteCgibinTicketGetTicketAsync(request);
        if (!response.IsSuccessful())
            throw Oops.Oh(response.ErrorMessage);
        return _wechatApiClient.GenerateParametersForJSSDKConfig(response.Ticket, input.Url);
    }
}