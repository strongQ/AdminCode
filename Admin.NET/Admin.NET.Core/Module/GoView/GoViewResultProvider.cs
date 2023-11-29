

using Furion.UnifyResult;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static SKIT.FlurlHttpClient.Wechat.Api.Models.ComponentTCBBatchCreateContainerServiceVersionRequest.Types;

namespace Admin.NET.Core.Module.GoView;
[UnifyModel(typeof(GoResult<>))]
public class GoViewResultProvider : IUnifyResultProvider
{
    public IActionResult OnException(ExceptionContext context, ExceptionMetadata metadata)
    {
        // 参考上面的规范化处理写法
        return new JsonResult(GoResult(metadata.StatusCode, message: metadata?.Errors?.ToString()));
    }

    public IActionResult OnSucceeded(ActionExecutedContext context, object data)
    {
        // 参考上面的规范化处理写法
        return new JsonResult(GoResult(StatusCodes.Status200OK, true, data));
    }

    public IActionResult OnValidateFailed(ActionExecutingContext context, ValidationMetadata metadata)
    {
        // 参考上面的规范化处理写法
        return new JsonResult(GoResult(StatusCodes.Status400BadRequest, message: metadata.Message));
    }

    public async Task OnResponseStatusCodes(HttpContext context, int statusCode, UnifyResultSettingsOptions unifyResultSettings)
    {
        // 参考上面的规范化处理写法
        // 设置响应状态码
        UnifyContext.SetResponseStatusCodes(context, statusCode, unifyResultSettings);

        switch (statusCode)
        {
            // 处理 401 状态码
            case StatusCodes.Status401Unauthorized:
                await context.Response.WriteAsJsonAsync(GoResult(statusCode, message: "授权失败，请重新登录")
                    , App.GetOptions<JsonOptions>()?.JsonSerializerOptions);
                break;
            // 处理 403 状态码
            case StatusCodes.Status403Forbidden:
                await context.Response.WriteAsJsonAsync(GoResult(statusCode, message: "403 Forbidden")
                    , App.GetOptions<JsonOptions>()?.JsonSerializerOptions);
                break;
            default: break;
        }
    }

    /// <summary>
    /// 返回 RESTful 风格结果集
    /// </summary>
    /// <param name="code"></param>
    /// <param name="success"></param>
    /// <param name="data"></param>
    /// <param name="errors"></param>
    /// <returns></returns>
    private static GoResult<object> GoResult(int code, bool success = default, object? data = default, string? message = "")
    {
        return new GoResult<object>
        {
            Code = code,
            // success = success,
            Data = data,
            Msg = message
        };
    }
}

public class GoResult<T>
{
    /// <summary>
    /// 数据
    /// </summary>
    public T Data { get; set; }

    public int Code { get; set; }

    public string Msg { get; set; }
}