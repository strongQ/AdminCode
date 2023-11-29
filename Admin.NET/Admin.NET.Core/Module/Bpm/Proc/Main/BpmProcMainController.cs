

using Admin.NET.Core.Module.Bpm.Audit.Main;
using Admin.NET.Core.Module.Bpm.Node.Hist;
using Admin.NET.Core.Module.Bpm.Node.Main;
using Admin.NET.Core.Module.Bpm.Proc.Main.Dto;
using Admin.NET.Core.Module.Bpm.Proc.Param;
using Admin.NET.Core.Module.Bpm.Proc.Temp;
using Admin.NET.Core.Module.Bpm.Task.Main;
using FluentEmail.Core;
using Furion.LinqBuilder;
using OfficeOpenXml.FormulaParsing.Excel.Functions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Main;
[ApiDescriptionSettings("Bpm", Tag = "流程引擎-实例")]
public class BpmProcMainController : IDynamicApiController
{
    private readonly BpmProcMainService _service;

    private readonly BpmTaskMainService _taskMainService;

  

    private readonly BpmProcMainHand _hand;

    private readonly SysFileService _fileService;

    private readonly BpmAuditMainService _auditMainService;

    private readonly BpmNodeMainService _nodeMainService;
    private readonly BpmProcParamService _paramService;

    private readonly BpmProcTempService _tempService;

    private readonly BpmNodeHistService _nodeHisService;

    private readonly SysUserService _userService;

  

    public BpmProcMainController(BpmProcMainService service,
        BpmProcMainHand hand,
        BpmAuditMainService auditMainService,
        BpmNodeMainService nodeMainService,
        BpmTaskMainService taskMainService,
        BpmProcParamService paramService,
        BpmNodeHistService nodeHisService,
        SysFileService fileService,
        SysUserService userService,
        BpmProcTempService tempService
       )
    {
        _service = service;
        _hand = hand;
        _auditMainService = auditMainService;
        _taskMainService = taskMainService;
        _fileService = fileService;
        _nodeMainService = nodeMainService;
        _paramService= paramService;
        _nodeHisService = nodeHisService;
        _tempService = tempService;
        _userService = userService;
    }
    /// <summary>
    /// 分页查询
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    public async Task<SqlSugarPagedList<BpmProcMain>> GetPage(ProcMainInputDto input)
    {
        return await _service.GetPage(input);
    }
    /// <summary>
    /// 获取详情
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    public async Task<BpmProcMain> GetDetail(long id)
    {
      return  await _service.GetDetail(id);      
    }
    /// <summary>
    /// 获取数据
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    [HttpGet]
    [QueryParameters]
    public async Task<ProcMainOutDto> GetZbpm(long proid)
    {
        ProcMainOutDto procMainOut = new ProcMainOutDto();
        //审批记录

        List<BpmAuditMain> audits = await _auditMainService.GetAuditsByProid(proid);

      
        
        
        foreach (var audit in audits)
        {
            audit.Atts = new List<SysFile>();
            if (!audit.Atids.IsNullOrEmpty())
            {
               var ids= audit.Atids.Split(',');
                foreach(var id in ids)
                {
                    audit.Atts.Add(await _fileService.GetFile(new FileInput
                    {
                        Id = id.ToLong()
                    }));
                }
                
            }
        }
        procMainOut.Audits = audits;
     

        //历史处理人
        string hiHamen = "";
        foreach (var audit in audits)
        {
            if (!hiHamen.Contains(audit.HamanName))
            {
                hiHamen += audit.HamanName + ";";
            }
        }

        if (hiHamen.Contains(";"))
        {
            hiHamen = hiHamen.Substring(0, hiHamen.Length - 1);
        }
        procMainOut.HiHamen = hiHamen;
     

        //当前处理人与当前用户是否在当前处理人中
        var tasks=await _nodeMainService.GetMainNodesByProid(proid);
        string cuExmen = "";
        bool cutag = false;
        long userId = _service._rep.CurrentUserID;

        //string postSql = "select pid as id from sys_org_post_org where oid=@oid";
        //List<string> postIdList = await _service.repo.Context.Ado.SqlQueryAsync<string>(postSql, new { oid = userId });

        Zbpm zbpm = new Zbpm();
        foreach (var task in tasks)
        {
            if (zbpm.Proid==0)
            {
                zbpm.Proid = task.Proid;
                zbpm.Nodid = task.Nodid;
                zbpm.Facno = task.Facno;
                zbpm.Facna =task.Facna;
            }

            cuExmen += task.Exnam + ";";
            if (userId == task.Exman)
            {
                zbpm.Tasid = task.Taskid;
                zbpm.Tasty = task.Type;
                zbpm.Exman = task.Exman;
                cutag = true;
            }
            //if (!cutag)
            //{
            //    foreach (var postId in postIdList)
            //    {
            //        if (postId == "" + task.exman)
            //        {
            //            zbpm.tasid = "" + task.tasid;
            //            zbpm.tasty = "" + task.tasty;
            //            zbpm.exman = "" + task.exman;
            //            cutag = true;
            //        }
            //    }
            //}
        }

        if (cuExmen.Contains(";"))
        {
            cuExmen = cuExmen.Substring(0, cuExmen.Length - 1);
        }
        procMainOut.CuExmen = cuExmen;
        procMainOut.Cutag = cutag;
        if(!zbpm.Tasty.IsNullOrEmpty())
        zbpm.Tasty = zbpm.Tasty.ToLower();
        procMainOut.Zbpm = zbpm;

        

        return procMainOut;
    }
    /// <summary>
    /// 获取数据
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    [HttpGet]
    [QueryParameters]
    public async Task<ProcMainOutDto> GetZbpmPlus(long proid)
    {
        ProcMainOutDto procMainOut = new ProcMainOutDto();
        var tasks = await _nodeMainService.GetMainNodesByProid(proid);
        Zbpm zbpm = new Zbpm();
        foreach (var task in tasks)
        {
            zbpm.Tasid =  task.Taskid;
            zbpm.Tasty = task.Type;
            zbpm.Exman = task.Exman;
        }
        procMainOut.Zbpm = zbpm;
        return procMainOut;
    }

    /// <summary>
    /// 获取即将流向的节点
    /// </summary>
    /// <param name="proid"></param>
    /// <param name="facno"></param>
    /// <param name="modty"></param>
    /// <returns></returns>
    [HttpGet]
    [QueryParameters]
    public async Task<ProcNodeOutDto> GetTarget(long proid, string facno, string modty)
    {
        ProcNodeOutDto procNodeOut = new ProcNodeOutDto();
        Znode nextNode;
        //如果是之前被驳回的节点则，通过后要判断是否直接返回驳回的节点
        var bacMap= await _paramService.GetProcParam(proid, facno + "#refuse");
       
       

      var chxml=  await _tempService.GetXMLByProid(proid);
        if (bacMap != null && !string.IsNullOrEmpty(bacMap.Paval))
        {
            nextNode = _hand.GetNodeInfo(chxml, bacMap.Paval);
        }
        else
        {
            List<BpmTaskMain> bpmTaskMainList = await _taskMainService.FindAllByProidNotActive(proid);
            if (bpmTaskMainList.Count > 0)
            {
                nextNode = _hand.GetNodeInfo(chxml, facno);
            }
            else
            {
                Zcond zcond = new Zcond();
                zcond.Proid = proid;
                zcond.Modty = modty;
                nextNode =await _hand.CalcTarget(zcond, chxml, facno);
            }
        }

        string tamen = "暂时无法计算";
        if (nextNode == null)
        {
            nextNode = new Znode();
            nextNode.Facno = "NX";
            nextNode.Facna = "未知节点";
        }
        else
        {
            tamen = await CalcTamen(proid, nextNode.Exmen);
        }
        procNodeOut.Tarno = nextNode.Facno;
        procNodeOut.Tarna = nextNode.Facna;
        procNodeOut.Tamen = tamen;

       
       
       
        if (bacMap != null)
        {
            procNodeOut.Bacid = bacMap.Id;
        
        }

        return procNodeOut; 
    }
    /// <summary>
    /// 获取流程模板
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    [HttpGet]
    [QueryParameters]
    public async Task<ProcXmlOutDto> GetXml(long proid)
    {
        ProcXmlOutDto procXmlOut = new ProcXmlOutDto();

        var xml = await _tempService.GetOriXMLByProid(proid);
      

    

       var nodeList= await _nodeHisService.GetFacnosByproid(proid);

        List<ZidNamePid> allLineList = _hand.GetAllLineList(xml);
        List<long> lineSet = new List<long>();
        foreach (var zinp in allLineList)
        {
            foreach (var node in nodeList)
            {
                if (zinp.Name == node)
                {
                    foreach (var node2 in nodeList)
                    {
                        if (zinp.Pid == node2)
                        {
                            lineSet.Add(zinp.id);
                            break;
                        }
                    }

                    break;
                }
            }
        }
        procXmlOut.Xml = xml;
        procXmlOut.NodeList = nodeList;
        procXmlOut.LineList = lineSet;
        return procXmlOut;
    }
    /// <summary>
    /// 获取流程模板
    /// </summary>
    /// <param name="temid"></param>
    /// <returns></returns>
    [HttpGet]
    [QueryParameters]
    public async Task<ProcNodeOutDto> GetTeXml(long temid)
    {
        ProcNodeOutDto procNodeOut = new ProcNodeOutDto();


        var xml=await _tempService.GetOrXML(temid);
        Znode nextNode =await _hand.GetFirstNode(temid, xml, "N1");
        string tamen = "暂时无法计算";
        if (nextNode == null)
        {
            nextNode = new Znode();
            nextNode.Facno = "NX";
            nextNode.Facna = "未知节点";
        }
        else
        {
            tamen = await CalcTamen(0, nextNode.Exmen);
        }
      
        procNodeOut.Xml = xml;
        procNodeOut.Tarna = nextNode.Facna;
        procNodeOut.Tarno = nextNode.Facno;
        procNodeOut.Tamen = tamen;

        return procNodeOut;
    }
    /// <summary>
    /// 通过
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task<bool> PostHandlerPass(Zbpm zbpm)
    {
        zbpm.Haman = _service._rep.CurrentUserID;
       

        var name=await _service.GetName(zbpm.Proid);

        zbpm.Prona = name;
        await _service.HandlerPass(zbpm);
        return true;
    }
    /// <summary>
    /// 打回
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task<bool> PostRefuse(Zbpm zbpm)
    {
        zbpm.Haman = _service._rep.CurrentUserID;


        var name = await _service.GetName(zbpm.Proid);

        zbpm.Prona = name;
        await _service.HandlerRefuse(zbpm);
        return true;
    }

    /// <summary>
    /// 返回当前节点之前的已走过的节点
    /// </summary>
    /// <param name="proid"></param>
    /// <param name="facno"></param>
    /// <returns></returns>
    [HttpGet]
    [QueryParameters]
    public async Task<List<BpmAuditMain>> GetRefNodes(long proid, string facno)
    {
      var allList= await _auditMainService.GetAuditsByProid(proid, new List<string> { "dsubmit", "pass" });
      
        List<BpmAuditMain> list = new List<BpmAuditMain>();
        foreach (var item in allList)
        {
            if (item.Facno == facno)
            {
                break;
            }
            bool flag = false;
            foreach (var map2 in list)
            {
                if (item.Facno == map2.Facno)
                {
                    flag = true;
                    break;
                }
            }
            if (!flag)
            {
                list.Add(item);
            }
        }

        return list;
    }

    /// <summary>
    /// 返回当前节点沟通人员
    /// </summary>
    /// <param name="proid"></param>
    /// <param name="facno"></param>
    /// <returns></returns>
    [HttpGet]
    [QueryParameters]
    public async Task<List<CommunicateOutDto>> GetCommunicateMen(long proid, string facno)
    {


       return await _taskMainService.GetCommunicates(proid);
       
    }


    private async Task<string> CalcTamen(long proid, string exman)
    {
        string tamen = "";
        if (!string.IsNullOrEmpty(exman) && exman.Contains("$"))
        {
            if ("$creator" == exman)
            {
                var result = await _service.GetDetail(proid);
                if (result != null)
                {
                    exman = result.CreateUserId.ToString();
                }
              
            }
        }
        
        
        tamen = await _userService.GetRealName(exman.ToLong());
        
       
        return tamen;
    }

    public async Task<bool> Post(BpmProcMain main)
    {
        await _service.Add(main);
        return true;
    }

    public async Task<bool> Put(BpmProcMain cate)
    {
        await _service.Update(cate);
        return true;
    }

    public async Task<bool> Delete(long ids)
    {
        await _service.Delete(ids);
        return true;
    }
}
