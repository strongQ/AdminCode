// ע�

using Admin.Demo.Entity;
using Admin.NET.Core;
using Demo.Main.Dto;
using Demo.Main.IService;
using Furion.DependencyInjection;
using Furion.DynamicApiController;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Demo.Service;
/// <summary>
/// DemoService Demo服务
/// </summary>
[ApiDescriptionSettings("Demo应用", Order = 100)]
public class DemoService : IDynamicApiController, ITransient
{ 
    #region 字段
  private readonly SqlSugarRepository<PatCell> _PatRepository;
    #endregion

   
    public DemoService(SqlSugarRepository<PatCell> patRes)
    {
       _PatRepository= patRes;
    }
  


   
    /// <summary>
    /// 获取PLC数据
    /// </summary>
    /// <param name="searchPlc"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("all")]
    [ApiDescriptionSettings(Name = "all")]
    public async Task<List<PatCellOutput>> GetAll()
    {
       var result=  _PatRepository.GetListAsync();

        return result.Adapt<List<PatCellOutput>>();
    }
}

 