

using Admin.NET.Core.Module.Bpm.Proc.Temp.Dto;
using NewLife.Xml;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Temp;
[ApiDescriptionSettings("Bpm", Tag = "流程引擎-模板")]
public class BpmProcTempController : IDynamicApiController
{
    private readonly BpmProcTempService _service;

    public BpmProcTempController(BpmProcTempService service)
    {
        _service = service;
    }
    /// <summary>
    /// 根据类型获取模板列表
    /// </summary>
    /// <param name="type"></param>
    /// <returns></returns>
    [QueryParameters]
    [HttpGet("list")]
    public async Task<List<ZidNamePid>> GetList(string type)
    {
       

       return await _service.GetList(type);
    }
    /// <summary>
    /// 分页
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [QueryParameters]
    [HttpGet]
    public async Task<SqlSugarPagedList<BpmProcTempDto>> GetPage(ProcTempInputDto input)
    {
        return await _service.GetPage(input);
    }

    /// <summary>
    /// 获取单条
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    public async Task<BpmProcTemp> GetOne(long id)
    {
        var main = await _service.GetDetail(id);
        return main;
    }
    /// <summary>
    /// 添加
    /// </summary>
    /// <param name="main"></param>
    /// <returns></returns>
    public async Task<bool> Post(BpmProcTemp main)
    {
        main.Chxml = "<?xml version=\"1.0\" encoding=\"gb2312\"?>"
                     + "\n<process" + main.Orxml.Split("bpmn2:process")[1]
                         .Replace("bpmn2:", "").Replace("activiti:", "") + "process>";
        return await _service.Add(main);
    }
    /// <summary>
    /// 更新
    /// </summary>
    /// <param name="main"></param>
    /// <returns></returns>
    public async Task<bool> Put(BpmProcTemp main)
    {
        main.Chxml = "<?xml version=\"1.0\" encoding=\"gb2312\"?>"
                     + "\n<process" + main.Orxml.Split("bpmn2:process")[1]
                         .Replace("bpmn2:", "").Replace("activiti:", "") + "process>";
        return await _service.Update(main);
    }
    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="ids"></param>
    /// <returns></returns>
    public async Task<bool> Delete(long ids)
    {
      return  await _service.Delete(ids);
    }
}
