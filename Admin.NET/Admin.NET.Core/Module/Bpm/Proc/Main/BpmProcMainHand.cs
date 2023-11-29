

using Microsoft.ClearScript.V8;
using NewLife.Xml;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Admin.NET.Core.Module.Bpm.Proc.Main;
/// <summary>
/// bpm过程
/// </summary>
public class BpmProcMainHand : ITransient
{
    /// <summary>
    /// 过程流转
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="list"></param>
    /// <param name="znode"></param>
    /// <returns></returns>
    public async Task<Znode> ProcFlow(Zbpm zbpm, List<Znode> list, Znode znode)
    {
        XmlDocument xmlDoc = new XmlDocument();
        xmlDoc.LoadXml(zbpm.Chxml);
        XmlElement rootNode = xmlDoc.DocumentElement;
        //查找当前节点的目标节点，如果已有（比如是驳回返回的）则不需要额外查找
        if (znode.Tarno == null)
        {
            foreach (XmlElement node in rootNode.ChildNodes)
            {
                if (node.Name == "sequenceFlow")
                {
                    if (znode.Facno == node.GetAttribute("sourceRef"))
                    {
                        // 目标节点
                        znode.Tarno = node.GetAttribute("targetRef");
                        break;
                    }
                }
            }
        }
        Zcond zcond = new Zcond();
        zcond.Proid = zbpm.Proid;
        zcond.Modty = zbpm.Modty;
        zcond.Temid = zbpm.Temid;
        //判断nextNode是否为审批节点
        return await NodeFlow(zcond, rootNode, list, znode);
    }

    //节点流转
    //判断节点是否为审批节点，如果为审批节点则取处理人
    //      如果是条件分支，则根据分支条件流转到下一个节点，直到找到审批节点
    private async Task<Znode> NodeFlow(Zcond zcond, XmlElement rootNode, List<Znode> list, Znode znode)
    {
        if ("NE" == znode.Tarno)
        {
            znode.Tarna = "结束节点";
            Znode endNode = new Znode();
            endNode.Facno = "NE";
            endNode.Facna = BpmNodeEnum.End.GetDescription();
            endNode.Facty = BpmNodeEnum.End.ToString();
            return endNode;
        }

        long? userIds = 0;
        foreach (XmlElement node in rootNode.ChildNodes)
        {
            if ("task" == node.Name || "userTask" == node.Name)
            {
                //节点为审批节点
                if (znode.Tarno == node.GetAttribute("id"))
                {
                    string hatyp = node.GetAttribute("hatyp");
                    if ("1" == hatyp)
                    {
                       userIds = node.GetAttribute("hamen").ToLong();
                    }
                    else
                    {
                        if (zcond.Proid>0 && node.GetAttribute("hamen") == "$creator")
                        {
                            // 获取创建用户
                           var user=await _repo.AsQueryable().Where(x => x.Id == zcond.Proid).Select(x => x.CreateUserId).SingleAsync();
                           
                           if(user!=null)
                            {
                                userIds = user.Value;
                            }
                        }

                        if (userIds==0 && zcond.Temid != 0 && node.GetAttribute("hamen") == "$creator")
                        {
                            userIds = App.User?.FindFirst(ClaimConst.UserId)?.Value.ToLong();
                        }
                    }
                    znode.Tarna = node.GetAttribute("name");
                    //list.add(znode);
                    Znode nextNode = new Znode();
                    nextNode.Facno = znode.Tarno;
                    nextNode.Facna = znode.Tarna;
                    nextNode.Facty = BpmNodeEnum.Review.ToString();
                    nextNode.Exmen = userIds.ToString();
                    nextNode.Flway = node.GetAttribute("flway");
                    return nextNode;
                }
            }
            else if ("exclusiveGateway" == node.Name)
            {
                //节点为条件分支
                String nextNodeId = "";
                if (znode.Tarno == node.GetAttribute("id"))
                {
                    znode.Tarna = node.GetAttribute("name");
                    // list.Add(znode);
                    foreach (XmlElement xnode in rootNode.ChildNodes)
                    {
                        if ("sequenceFlow" == xnode.Name)
                        {
                            if (znode.Tarno == xnode.GetAttribute("sourceRef"))
                            {
                                if (CheckConds(zcond, xnode.GetAttribute("conds")))
                                {
                                    nextNodeId = xnode.GetAttribute("targetRef");
                                    Console.WriteLine("条件分支转到:" + nextNodeId);
                                    Znode nextNode = new Znode();
                                    nextNode.Facno = znode.Tarno;
                                    nextNode.Facna = znode.Tarna;
                                    nextNode.Facty = BpmNodeEnum.Condition.ToString();
                                    nextNode.Tarno = nextNodeId;
                                    list.Add(nextNode);
                                    return await NodeFlow(zcond, rootNode, list, nextNode);
                                }

                                // if (checkConds(xnode))
                                // {
                                //     //满足条件时
                                //     nextNodeId = xnode.GetAttribute("targetRef");
                                //     Console.WriteLine("条件分支转到:" + nextNodeId);
                                //     Znode nextNode = new Znode();
                                //     nextNode.facno = znode.tarno;
                                //     nextNode.facna = znode.tarna;
                                //     nextNode.facty = "condtion";
                                //     nextNode.tarno = nextNodeId;
                                //     list.Add(nextNode);
                                //     return NodeFlow(rootNode, list, nextNode);
                                // }
                            }
                        }
                    }

                    break;
                }
            }

            if (userIds!=0)
            {
                break;
            }
        }

        return null;
    }
    /// <summary>
    /// 执行条件
    /// </summary>
    /// <param name="zcond"></param>
    /// <param name="expression"></param>
    /// <returns></returns>
    private bool CheckConds(Zcond zcond, string expression)
    {
        if (string.IsNullOrEmpty(expression))
        {
            return false;
        }
        string zformJson = "";
        if (zcond != null)
        {
            Console.WriteLine("modty:" + zcond.Modty);
            if (zcond.Modty == "oaFlow")
            {
                string sql = "select zform id from oa_flow_main where id=@proid";
                zformJson = _repo.Context.Ado.SqlQuerySingle<string>(sql, new { proid = zcond.Proid });
            }
            else if (zcond.Modty.StartsWith("app_"))
            {
                string sql = "select cond id from bpm_proc_cond where id=@proid";
                zformJson = _repo.Context.Ado.SqlQuerySingle<string>(sql, new { proid = zcond.Proid });
            }
        }
        Console.WriteLine(zformJson);
        if (string.IsNullOrEmpty(zformJson))
        {
            zformJson = "{}";
        }
        string form = "var $=" + zformJson;

        bool flag = false;
        using (var engine = new V8ScriptEngine())
        {
            if (expression.Contains(";"))
            {
                engine.Execute(form + ";var z=false;" + expression);
            }
            else
            {
                engine.Execute(form + ";var z=" + expression + ";");
            }
            flag = engine.Script.z;
        }
        return flag;
    }

    // private bool checkConds(XmlElement it)
    // {
    //     foreach (XmlElement son in it.ChildNodes)
    //     {
    //         if ("extensionElements" == son.Name)
    //         {
    //             Console.WriteLine("进入了：extensionElements");
    //             foreach (XmlElement sun in son.ChildNodes)
    //             {
    //                 if ("executionListener" == sun.Name)
    //                 {
    //                     Console.WriteLine("进入了：executionListener");
    //                     if (!checkCond(sun.GetAttribute("expression")))
    //                     {
    //                         return false;
    //                     }
    //
    //                     break;
    //                 }
    //             }
    //
    //             break;
    //         }
    //     }
    //
    //     return true;
    // }
    //
    // private bool checkCond(string expression)
    // {
    //     Console.WriteLine("条件为：" + expression);
    //     return true;
    // }
    /// <summary>
    /// 获取Node信息
    /// </summary>
    /// <param name="chxml"></param>
    /// <param name="facno"></param>
    /// <returns></returns>
    public Znode GetNodeInfo(string chxml, string facno)
    {
        //根据temid寻找xml的filename
        //         String xml = "<?xml version=\"1.0\" encoding=\"gb2312\"?>"
        //                      + "\n<process" +
        //                      xmlstr.Split("bpmn2:process")[1].Replace("bpmn2:", "").Replace("activiti:", "") + "process>";
        // //        System.out.println(xml);

        XmlDocument xmlDoc = new XmlDocument();
        xmlDoc.LoadXml(chxml);
        XmlElement rootNode = xmlDoc.DocumentElement;

        foreach (XmlElement node in rootNode.ChildNodes)
        {
            if ("userTask" == node.Name || "task" == node.Name)
            {
                if (facno == node.GetAttribute("id"))
                {
                    Znode znode = new Znode();
                    znode.Facno = facno;
                    znode.Facna = node.GetAttribute("name");
                    znode.Exmen = node.GetAttribute("hamen").ToString();
                    znode.Flway = node.GetAttribute("flway");
                    znode.Facty = BpmNodeEnum.Review.ToString();
                    return znode;
                }
            }
        }

        return null;
    }
    /// <summary>
    /// 计算目标节点
    /// </summary>
    /// <param name="zcond"></param>
    /// <param name="chxml"></param>
    /// <param name="facno"></param>
    /// <returns></returns>
    public async Task<Znode> CalcTarget(Zcond zcond, string chxml, String facno)
    {
        XmlDocument xmlDoc = new XmlDocument();
        xmlDoc.LoadXml(chxml);
        XmlElement rootNode = xmlDoc.DocumentElement;
        Znode currNode = new Znode();
        currNode.Facno = facno;
        foreach (XmlElement node in rootNode.ChildNodes)
        {
            if ("sequenceFlow" == node.Name)
            {
                if (facno == node.GetAttribute("sourceRef"))
                {
                    currNode.Tarno = node.GetAttribute("targetRef");
                    break;
                }
            }
        }

        List<Znode> list = new List<Znode>();
        Znode nextNode =await NodeFlow(zcond, rootNode, list, currNode);
        return nextNode;
    }
    /// <summary>
    /// 获取节点
    /// </summary>
    /// <param name="temid"></param>
    /// <param name="xml"></param>
    /// <param name="facno"></param>
    /// <returns></returns>
    public async Task<Znode> GetFirstNode(long temid, string xml, string facno)
    {
        //根据temid寻找xml的filename
        xml = "<?xml version=\"1.0\" encoding=\"gb2312\"?>"
              + "\n<process" +
              xml.Split("bpmn2:process")[1].Replace("bpmn2:", "").Replace("activiti:", "") + "process>";
        // Console.WriteLine(xml);

        XmlDocument xmlDoc = new XmlDocument();
        xmlDoc.LoadXml(xml);
        XmlElement rootNode = xmlDoc.DocumentElement;


        Znode currNode = new Znode();
        currNode.Facno = facno;
        foreach (XmlElement node in rootNode.ChildNodes)
        {
            if ("sequenceFlow" == node.Name)
            {
                if (facno == node.GetAttribute("sourceRef"))
                {
                    currNode.Tarno = node.GetAttribute("targetRef");
                    break;
                }
            }
        }

        List<Znode> list = new List<Znode>();
        Zcond zcond = new Zcond();
        zcond.Temid = temid;
        Znode nextNode =await NodeFlow(zcond, rootNode, list, currNode);
        return nextNode;
    }
    /// <summary>
    /// 解析所有节点信息
    /// </summary>
    /// <param name="xml"></param>
    /// <returns></returns>
    public List<ZidNamePid> GetAllLineList(string xml)
    {
        //根据temid寻找xml的filename
        xml = "<?xml version=\"1.0\" encoding=\"gb2312\"?>"
              + "\n<process" +
              xml.Split("bpmn2:process")[1].Replace("bpmn2:", "").Replace("activiti:", "") + "process>";
        // Console.WriteLine(xml);

        XmlDocument xmlDoc = new XmlDocument();
        xmlDoc.LoadXml(xml);
        XmlElement rootNode = xmlDoc.DocumentElement;

        List<ZidNamePid> list = new List<ZidNamePid>();
        foreach (XmlElement node in rootNode.ChildNodes)
        {
            if ("sequenceFlow" == node.Name)
            {
                ZidNamePid zinp = new ZidNamePid();
                zinp.id = node.GetAttribute("id").ToLong();
                zinp.Name = node.GetAttribute("sourceRef");
                zinp.Pid = node.GetAttribute("targetRef");
                list.Add(zinp);
            }
        }

        return list;
    }

    private readonly SqlSugarRepository<BpmProcMain> _repo;


    public BpmProcMainHand(SqlSugarRepository<BpmProcMain> repo)
    {
        this._repo = repo;
    }

}
