// ע�

using Furion.ConfigurableOptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Demo.Option;
/// <summary>
/// Grpc配置项
/// </summary>
public sealed class DemoOptions : IConfigurableOptions
{
    /// <summary>
    /// 服务地址
    /// </summary>
    public string ServerUrl { get; set; }
    /// <summary>
    /// grpc接口地址
    /// </summary>
    public string GrpcApiUrl { get; set; }
    /// <summary>
    /// FMS项目接口
    /// </summary>
    public string FmsUrl { get; set; }
}

