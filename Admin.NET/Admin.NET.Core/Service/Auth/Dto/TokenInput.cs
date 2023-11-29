

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Service.Auth.Dto;
public class TokenInput
{
    /// <summary>
    /// 过期token
    /// </summary>
    public string Token { get; set; }
    public string RefreshToken { get; set; }
}
