

using Admin.NET.Core.Module.Bpm.Audit.Main;
using Admin.NET.Core.Module.Bpm.Node.Hist;
using Admin.NET.Core.Module.Bpm.Node.Main;
using Admin.NET.Core.Module.Bpm.Proc.Main.Dto;
using Admin.NET.Core.Module.Bpm.Proc.Param;
using Admin.NET.Core.Module.Bpm.Proc.Temp;
using Admin.NET.Core.Module.Bpm.Task.Hist;
using Admin.NET.Core.Module.Bpm.Task.Main;
using Admin.NET.Core.Module.Todo.Main;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Main;
public class BpmProcMainService :BaseService<BpmProcMain>,  ITransient
{
    /// <summary>
    /// 分页查询
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public async Task<SqlSugarPagedList<BpmProcMain>> GetPage(ProcMainInputDto input)
    {
       
        var items = await _repo.AsQueryable()
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), t => t.Name.Contains(input.Name.Trim()))
            
            .ToPagedListAsync(input.Page, input.PageSize);

        return items;
    }

    /// <summary>
    /// 获取名称
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<string> GetName(long id)
    {
        return await _rep.AsQueryable().Where(x => x.Id == id).Select(x => x.Name).SingleAsync();
    }
    /// <summary>
    /// 获取名称
    /// </summary>
    /// <param name="ids"></param>
    /// <returns></returns>
    public async Task<List<string>> GetNames(List<long> ids)
    {
        return await _rep.AsQueryable().Where(x => ids.Contains(x.Id)).Select(x => x.Name).ToListAsync();
    }

    //启动流程

    public async Task<Znode> Start(Zbpm zbpm)
    {

        //1 保存流程实例
        BpmProcMain bpmProcMain = new BpmProcMain(zbpm);     
        bpmProcMain.Avtag = 1;
        bpmProcMain.State = "20";

      
        await _repo.InsertAsync(bpmProcMain);

        //2 历史节点表保存开始节点
        await _nodeHistService.SaveStartNode(zbpm);

        //3 流程流转（收集流转过的节点，计算出下一个待审批节点）
        Znode draftNode = new Znode("N1");
        draftNode.Facna = BpmNodeEnum.Draft.GetDescription();
        draftNode.Facty = BpmNodeEnum.Draft.ToString();
        List<Znode> list = new List<Znode>();
     
       
        zbpm.Chxml = await _procTempService.GetChangeXML(zbpm.Temid);
        Znode nextNode =await _hand.ProcFlow(zbpm, list, draftNode); //流转核心逻辑
        if (nextNode == null)
        {
            throw Oops.Oh("未找到下一个可流的流程节点");
        }
        await ExmenTran(0, nextNode);//审批人转换

        bool handleResult = false;
        //4.1 历史节点表保存起草节点
        draftNode.Nodid = YitIdHelper.NextId();
        handleResult= await _nodeHistService.SaveDraftNode(zbpm, draftNode);
        if (!handleResult) throw Oops.Oh("起草节点保存失败");
        //4.2 评审表保存起草节点的评审信息
        handleResult= await _auditMainService.SaveDraftAudit(zbpm, draftNode);
        if (!handleResult) throw Oops.Oh("评审信息保存失败");
        //4.3 历史节点表保存其他已流节点（条件分支等非审批节点）
        handleResult = await _nodeHistService.SaveNodeList(zbpm, list);
        if (!handleResult) throw Oops.Oh("其它已流节点信息保存失败");
        //4.4 当前节点表保存下一个待审批节点
        BpmNodeMain nodeMain = await _nodeMainService.SaveNode(zbpm, nextNode);
        if (nodeMain == null) throw Oops.Oh("下一待审批节点保存失败");
        nextNode.Nodid = nodeMain.Id;
        //4.5 历史节点表保存下一个待审批节点
        handleResult= await _nodeHistService.SaveNode(nodeMain);
        if (!handleResult) throw Oops.Oh("其它已流节点信息保存失败");
        //5.1 当前任务表创建待审节点的任务
        List<BpmTaskMain> mainTaskList = await _taskMainService.CreateTaskList(zbpm, nextNode);
        //5.2 历史任务表创建待审节点的任务
        await _taskHistService.CreateTaskList(mainTaskList);

        //6 发起待办
        await _todoService.SendTodos(zbpm, mainTaskList);

      
        return nextNode;
    }

    //通过流程
    public async Task<Znode> HandlerPass(Zbpm zbpm)
    {
        if (zbpm.Haman ==0)
        {
            zbpm.Haman = (long)(App.User?.FindFirst(ClaimConst.UserId)?.Value.ToLong());
        }
       var map=await _repo.AsQueryable().Where(x => x.Id == zbpm.Proid).Select(x => new ProcMainDto { Proid = x.Id, Prona = x.Name }).SingleAsync();
     
        zbpm.Prona = map.Prona;

        BpmProcMain bpmProcMain =await _repo.Context.Queryable<BpmProcMain>()
            .Where(it => it.Id == zbpm.Proid).SingleAsync();

        zbpm.Opkey = BpmOperEnum.Pass.ToString().ToLower();
        zbpm.Opinf = BpmOperEnum.Pass.GetDescription();

        //1 评审表保存当前节点的评审信息
        await _auditMainService.SaveAudit(zbpm);
        if (zbpm.Bacid>0)
        {
            await _paramService.Delete(zbpm.Bacid);
        }

        //2.1 将历史任务变成已办
        BpmTaskHist histTask = await _taskHistService.FindOne(zbpm.Tasid);
        histTask.Haman = zbpm.Haman;
        histTask.Entim = DateTime.Now;
        histTask.State = ((int)BpmNodeEnum.Draft).ToString();
        await _taskHistService.Update(histTask);
        //2.2 删除当前任务表记录
        await _taskMainService.Delete(zbpm.Tasid);

        //3 流程流转
        Znode currNode = new Znode(zbpm.Facno);
        currNode.Nodid = zbpm.Nodid;
        currNode.Facno = zbpm.Facno;
        currNode.Facty = BpmNodeEnum.Review.ToString();
        if (zbpm.Bacid>0)
        {
            currNode.Tarno = zbpm.Tarno;
            currNode.Tarna = zbpm.Tarna;
        }

        BpmNodeMain dbNode = await _nodeMainService.FindOne(currNode.Nodid);
        if ("1" == dbNode.Flway)
        {
            List<BpmTaskMain> bpmTaskMainList = await _taskMainService.FindAllByProidNotActive(zbpm.Proid);
            if (bpmTaskMainList.Count > 0)
            {
                bpmTaskMainList[0].Actag = 1;
                await _taskMainService.Update(bpmTaskMainList[0]);
                await _taskHistService.CreateTask(bpmTaskMainList[0]);
                //7.1 删除之前的待办
                await _todoService.DoneTodos(zbpm);
                //7.2 发起新待办
                await _todoService.SendTodos(zbpm, bpmTaskMainList);
                return currNode;
            }
        }
        else if ("2" == dbNode.Flway)
        {
            List<BpmTaskMain> bpmTaskMainList = await _taskMainService.FindAllByProid(zbpm.Proid);
            foreach (var bpmTaskMain in bpmTaskMainList)
            {
                await _taskMainService.Delete(bpmTaskMain.Id);
                await _taskHistService.Delete(bpmTaskMain.Id);
            }
        }
        else if ("3" == dbNode.Flway)
        {
            List<BpmTaskMain> bpmTaskMainList = await _taskMainService.FindAllByProid(zbpm.Proid);
            if (bpmTaskMainList.Count > 0)
            {
                await _todoService.DoneTodo(zbpm);
                return currNode;
            }
        }

        List<Znode> list = new List<Znode>();

        zbpm.Chxml=await _repo.AsQueryable().InnerJoin<BpmProcTemp>((x, y) => x.Temid == y.Id).Where(x => x.Id == zbpm.Proid).Select((x, y) => y.Chxml).SingleAsync();
       
        Znode nextNode =await _hand.ProcFlow(zbpm, list, currNode); //流转核心逻辑
        if (nextNode == null)
        {
            throw Oops.Oh("未找到下一个可流的流程节点");
        }
        await ExmenTran(zbpm.Proid, nextNode);//审批人转换

        //4.1 将历史节点变成已办
        BpmNodeHist histNode = await _nodeHistService.FindOne(zbpm.Nodid);
        histNode.Entim = DateTime.Now;
        histNode.State = "30";
        histNode.Tarno = currNode.Tarno;
        histNode.Tarna = currNode.Tarna;
        await _nodeHistService.UpdateOne(histNode);
        currNode.Tarno = histNode.Tarno;
        //4.2 历史节点表保存已流节点
        await _nodeHistService.SaveNodeList(zbpm, list);
        //4.3 删除当前节点表记录
        await _nodeMainService.Delete(zbpm.Nodid);

        if (BpmNodeEnum.End.ToString()!= nextNode.Facty)
        {
            //5.1 当前节点表保存下一个待审批节点
            BpmNodeMain nodeMain = await _nodeMainService.SaveNode(zbpm, nextNode);
            nextNode.Nodid = nodeMain.Id;
            //5.2 历史节点表保存下一个待审批节点
            await _nodeHistService.SaveNode(nodeMain);

            //6.1 当前任务表创建待审节点的任务
            List<BpmTaskMain> mainTaskList = await _taskMainService.CreateTaskList(zbpm, nextNode);
            //6.2 历史任务表创建待审节点的任务
            await _taskHistService.CreateTaskList(mainTaskList);

            //7.1 删除之前的待办
            await _todoService.DoneTodos(zbpm);
            //7.2 发起新待办
            await _todoService.SendTodos(zbpm, mainTaskList);

            //8 将流程更新成完结
            bpmProcMain.State = "20";
            await _repo.Context.Updateable(bpmProcMain)
                .UpdateColumns(it => new { it.State }).ExecuteCommandAsync();
        }
        else
        {
            //5 历史节点表保存结束节点
            long endNodeId = await _nodeHistService.SaveEndNode(zbpm);

            //6 评审表保存结束节点的评审信息
            await _auditMainService.SaveEndAudit(zbpm, endNodeId);

            //7 删除之前的待办
            await _todoService.DoneTodos(zbpm);

            //8 将流程更新成完结
            bpmProcMain.State = "30";
            await _repo.Context.Updateable(bpmProcMain)
                .UpdateColumns(it => new { it.State }).ExecuteCommandAsync();
        }

        return nextNode;
    }

    //驳回流程
    public async Task<Znode> HandlerRefuse(Zbpm zbpm)
    {
        zbpm.Haman = (long)(App.User?.FindFirst(ClaimConst.UserId)?.Value.ToLong());
        var map = await _repo.AsQueryable().Where(x => x.Id == zbpm.Proid).Select(x => new ProcMainDto { Proid = x.Id, Prona = x.Name }).SingleAsync();
      
        zbpm.Prona =  map.Prona;

        //驳回: "起草节点"（返回本人）
        if (zbpm.Retag)
        {
            zbpm.Opinf = "驳回: " + zbpm.Tarno + "." + zbpm.Tarna + "（返回本人）";
        }
        else
        {
            zbpm.Opinf = "驳回: " + zbpm.Tarno + "." + zbpm.Tarna;
        }

        //1 评审表保存当前节点的评审信息
        await _auditMainService.SaveAudit(zbpm);

        //2.1 将历史任务变成已办
        BpmTaskHist histTask = await _taskHistService.FindOne(zbpm.Tasid);
        histTask.Haman = zbpm.Haman;
        histTask.Entim = DateTime.Now;
        histTask.State = "30";
        await _taskHistService.Update(histTask);
        //2.2 删除当前任务表记录
        await _taskMainService.DeleteAllByProid(zbpm.Proid);
        //2.3 删除历史任务未结束记录
        await _taskHistService.DeleteAllByProidNotEnd(zbpm.Proid);


        //3 创建驳回节点
        //        Znode refuseNode = hand.getNodeInfo(zbpm,zbpm.getTarno());
        // Znode refuseNode = new Znode();
        // refuseNode.facno = zbpm.tarno;
        // refuseNode.facna = zbpm.tarna;
        // refuseNode.exmen = zbpm.exman;
        // refuseNode.facty = "review";
       
        var xmlMap =await _repo.AsQueryable().InnerJoin<BpmProcTemp>((x, y) => x.Temid == y.Id).Where(x => x.Id == zbpm.Proid).Select((x, y) =>new { x.CreateUserId, y.Chxml }).SingleAsync();

      
        Znode refuseNode = _hand.GetNodeInfo(xmlMap.Chxml + "", zbpm.Tarno);
        if ("N1" == refuseNode.Facno)
        {
            refuseNode.Exmen = xmlMap.CreateUserId.Value.ToString();
        }
        await ExmenTran(zbpm.Proid, refuseNode);


        //4.1 将历史节点变成已办
        BpmNodeHist histNode = await _nodeHistService.FindOne(zbpm.Nodid);
        histNode.Tarno = zbpm.Tarno;
        histNode.Tarna = zbpm.Tarna;
        histNode.Entim = DateTime.Now;
        histNode.State = "30";
        await _nodeHistService.UpdateOne(histNode);
        //4.2 删除当前节点表记录
        await _nodeMainService.Delete(zbpm.Nodid);

        //5.1 当前节点表保存下一个待审批节点
        BpmNodeMain nodeMain = await _nodeMainService.SaveNode(zbpm, refuseNode);
        refuseNode.Nodid = nodeMain.Id;
        //5.2 历史节点表保存下一个待审批节点
        await _nodeHistService.SaveNode(nodeMain);
        //5.3 如果驳回时勾选了 驳回的节点通过后直接返回本节点
        if (zbpm.Retag)
        {
            BpmProcParam param = new BpmProcParam();
           
            param.Proid = zbpm.Proid;
            param.Offty = "proc";
            param.Offid = zbpm.Proid;
            param.Pakey = zbpm.Tarno + "#refuse";
            param.Paval = zbpm.Facno;
            _paramService.Save(param);
        }

        //6.1 当前任务表创建待审节点的任务
        List<BpmTaskMain> mainTaskList = await _taskMainService.CreateTaskList(zbpm, refuseNode);
        //6.2 历史任务表创建待审节点的任务
        await _taskHistService.CreateTaskList(mainTaskList);

        //7.1 删除之前的待办
        await _todoService.DoneTodos(zbpm);
        //7.2 发起新待办
        await _todoService.SendTodos(zbpm, mainTaskList);
        return refuseNode;
    }

    //转办流程
    public async Task<bool> HandlerTurn(Zbpm zbpm)
    {
        zbpm.Haman = _repo.CurrentUserID;

       

        var map = await _repo.AsQueryable().Where(x => x.Id == zbpm.Proid).Select(x => new ProcMainDto { Proid = x.Id, Prona = x.Name }).SingleAsync();
        zbpm.Prona = map.Prona;
        var userName= await _userRep.AsQueryable().Where(x => x.Id == zbpm.Tumid).Select(x => x.RealName).SingleAsync();
       
        if (zbpm.Tutag)
        {
            zbpm.Opinf = "转办: " + userName + "（完整转办）";
        }
        else
        {
            zbpm.Opinf = "转办: " + userName;
        }
        //1 评审表保存当前节点的评审信息
        await _auditMainService.SaveAudit(zbpm);

        BpmTaskMain task = await _taskMainService.FindOne(zbpm.Tasid);
        task.Exman = zbpm.Tumid;
        await _taskMainService.Update(task);

        await _todoService.DoneTodo(zbpm);
        await _todoService.SendTodo(zbpm, zbpm.Tumid);
        return true;

    }

    //沟通流程
    public async Task<bool> HandlerCommunicate(Zbpm zbpm)
    {
        zbpm.Haman = _repo.CurrentUserID;

        var map = await _repo.AsQueryable().Where(x => x.Id == zbpm.Proid).Select(x => new ProcMainDto { Proid = x.Id, Prona = x.Name }).SingleAsync();
       
        zbpm.Prona =  map.Prona;

        string names = await GetOrgNames(zbpm.Coids);

       
        if (zbpm.Cotag)
        {
            zbpm.Opinf = "沟通: " + names + "（隐藏意见）";
        }
        else
        {
            zbpm.Opinf = "沟通: " + names;
        }
        //1 评审表保存当前节点的评审信息
        await _auditMainService.SaveAudit(zbpm);

        Znode currNode = new Znode(zbpm.Facna);
        currNode.Nodid = zbpm.Nodid;
        currNode.Facno = zbpm.Facno;
        currNode.Facty = BpmNodeEnum.Communicate.ToString();
        currNode.Exmen = zbpm.Coids;
        currNode.Flway = "3";

        //6.1 将当前任务置为沟通状态
        await _taskMainService.UpdateType(zbpm.Tasid.Value, BpmNodeEnum.To_communicate.ToString()); 
        //6.2 当前任务表创建待审节点的任务
        List<BpmTaskMain> mainTaskList = await _taskMainService.CreateTaskList(zbpm, currNode);
        //6.3 历史任务表创建待审节点的任务
        await _taskHistService.CreateTaskList(mainTaskList);
        //7.2 发起新待办
        await _todoService.SendTodos(zbpm, mainTaskList);
        return true;

    }

    /// <summary>
    /// 沟通回复,Create
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task<bool> HandlerBacommunicate(Zbpm zbpm)
    {
        zbpm.Haman = _repo.CurrentUserID;

        zbpm.Opinf = "沟通回复";
        //1 评审表保存当前节点的评审信息
        await _auditMainService.SaveAudit(zbpm);

        //2.1 将历史任务变成已办
        BpmTaskHist histTask = await _taskHistService.FindOne(zbpm.Tasid);
        histTask.Haman = zbpm.Haman;
        histTask.Entim = DateTime.Now;
        histTask.State = "30";
        //2.2 删除当前任务表记录
        await _taskMainService.Delete(zbpm.Tasid);

        await _todoService.DoneTodo(zbpm);

        return true;


    }

    /// <summary>
    /// 取消沟通
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task<bool> HandlerCacommunicate(Zbpm zbpm)
    {

        //2.1 将历史任务变成已办
        string[] taskIds = zbpm.Ccids.Split(",");
        string userIds = "";
        foreach (var taskId in taskIds)
        {   
            BpmTaskHist histTask = await _taskHistService.FindOne(taskId.ToLong());
            histTask.Haman = zbpm.Haman;
            histTask.Entim = DateTime.Now;
            histTask.State = "30";
            userIds += histTask.Exman + ";";
            //2.2 删除当前任务表记录
            await _taskMainService.Delete(taskId.ToLong());
        }

        userIds = userIds.Substring(0, userIds.Length - 1);
        zbpm.Haman = _repo.CurrentUserID;
        string names = await GetOrgNames(userIds);
        zbpm.Opinf = "取消沟通：" + names;
        //1 评审表保存当前节点的评审信息
        await _auditMainService.SaveAudit(zbpm);

        await _todoService.DoneTodosByTaskIds(taskIds);//先进行屏蔽
   

        var result =await _taskMainService.IsExistType(BpmNodeEnum.Communicate.ToString(), zbpm.Proid);
        //如果取消了所有沟通人员，则更新状态
        if (!result)
        {
            await _taskMainService.UpdateType(zbpm.Tasid, BpmNodeEnum.Review.ToString());
         
        }
        return true;
    }

    /// <summary>
    /// 废弃流程
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task<bool> HandlerAbandon(Zbpm zbpm)
    {
        zbpm.Haman = _repo.CurrentUserID;
        //        string sql = "select m.id as proid,m.name as prona from bpm_proc_main m where m.id=?";
        //        Map<String, Object> map = jdbcDao.findMap(sql, zbpm.getProid());
        //        zbpm.setProna("" + map.get("prona"));

        zbpm.Opinf = "废弃";
        //1 评审表保存当前节点的评审信息
        await _auditMainService.SaveAudit(zbpm);
        //2.1 将历史任务变成已办
        BpmTaskHist histTask = await _taskHistService.FindOne(zbpm.Tasid);
        histTask.Haman = zbpm.Haman;
        histTask.Entim = DateTime.Now; ;
        histTask.State = "30";
        //2.2 删除当前任务表记录
        await _taskMainService.DeleteAllByProid(zbpm.Proid);
        //2.3 删除历史任务未结束记录
        await _taskHistService.DeleteAllByProidNotEnd(zbpm.Proid);

        //4.1 将历史节点变成已办
        BpmNodeHist histNode = await _nodeHistService.FindOne(zbpm.Nodid);
        histNode.Tarno = zbpm.Tarno;
        histNode.Tarna = zbpm.Tarna;
        histNode.Entim = DateTime.Now;
        histNode.State = "30";
        //4.2 删除当前节点表记录
        await _nodeMainService.Delete(zbpm.Nodid);

        //7.1 删除之前的待办
        await _todoService.DoneTodos(zbpm);
        return true;
    }

    /// <summary>
    /// 审批人转换
    /// </summary>
    /// <param name="proid"></param>
    /// <param name="znode"></param>
    /// <returns></returns>
    private async Task<bool> ExmenTran(long proid, Znode znode)
    {
       
        //var dbOptions =App.GetOptions<DbConnectionOptions>();
     
        string tamen = "";
        if (!znode.Exmen.IsNullOrEmpty())
        {
          
            // 角色审批人查找
            tamen=znode.Exmen;
           
        }
        //else if (!string.IsNullOrEmpty(znode.Exmen) && znode.exmen.Contains(";"))
        //{
        //    string ids = "'" + znode.exmen.Replace(";", "','") + "'";

        //    string sql = "select t.id,t.name,t.type from sys_org t where id in " + "(" + ids + ")";
        //    if (dbOptions.ConnectionConfigs[0].DbType == DbType.MySql)
        //    {
        //        sql += " order by field(id," + ids + ")";
        //    }
        //    else if (dbOptions.ConnectionConfigs[0].DbType == DbType.SqlServer)
        //    {
        //        sql += " order by CHARINDEX(id,'" + ids.Replace("'", "") + "')";
        //    }
        //    else if (dbOptions.ConnectionConfigs[0].DbType == DbType.Oracle)
        //    {
        //        sql += " order by INSTR('" + ids.Replace("'", "") + "',id)";
        //    }
        //    List<SysOrg> list = await repo.Context.Ado.SqlQueryAsync<SysOrg>(sql);
        //    foreach (var sysOrg in list)
        //    {
        //        if (sysOrg.type == 32)
        //        {
        //            string crmid = XuserUtil.getUserId();
        //            if (proid != null)
        //            {
        //                crmid = repo.Context.Ado.SqlQuerySingle<string>("select crmid from bpm_proc_main where id=@proid",
        //                    new { proid });
        //            }
        //            SysOrg org = await _sysOrgRoleTreeService.calc(crmid, sysOrg.id);
        //            tamen += org.id + ";";
        //        }
        //        else
        //        {
        //            tamen += sysOrg.id + ";";
        //        }
        //    }
        //    tamen = tamen.Substring(0, tamen.Length - 1);
        //}
        znode.Exmen = tamen;
        return true;
    }

    /// <summary>
    /// 获取用户名称
    /// </summary>
    /// <param name="ids"></param>
    /// <returns></returns>
    private async Task<string> GetOrgNames(string ids)
    {
      
        List<long> idList=ids.Split(';').Select(x=>x.ToLong()).ToList();

      var names=await _userRep.AsQueryable().Where(x=>idList.Contains(x.Id)).Select(x=>x.RealName).ToListAsync();
        return string.Join(";", names);
    }

    //private readonly SysOrgRoleTreeService _sysOrgRoleTreeService;

    private readonly BpmNodeHistService _nodeHistService;

    private readonly BpmNodeMainService _nodeMainService;

    private readonly BpmAuditMainService _auditMainService;
    
    private readonly BpmTaskHistService _taskHistService;

    private readonly BpmTaskMainService _taskMainService;

    //private readonly SysTodoMainService _todoService;

    private readonly BpmProcParamService _paramService;

    private readonly BpmProcMainHand _hand;
    private readonly BpmProcTempService _procTempService;

    private readonly SqlSugarRepository<BpmProcMain> _repo;
    private readonly SqlSugarRepository<SysUser> _userRep;
    private readonly SysTodoMainService _todoService;
    public BpmProcMainService(SqlSugarRepository<BpmProcMain> repo, SqlSugarRepository<SysUser> sysUserRep,
        BpmProcMainHand hand,
        BpmNodeHistService nodeHistService,
        BpmNodeMainService nodeMainService,
        BpmAuditMainService auditMainService,
        BpmProcTempService bpmProcTempService,
        BpmTaskHistService taskHistService,
        SysTodoMainService todoService,
        BpmTaskMainService taskMainService,
      
        BpmProcParamService paramService
        ):base(repo)
    {
        _repo = repo;
        _hand = hand;
        _userRep = sysUserRep;
        _procTempService = bpmProcTempService;
        _nodeHistService = nodeHistService;
        _nodeMainService = nodeMainService;
        _auditMainService = auditMainService;
        _taskHistService = taskHistService;
        _taskMainService = taskMainService;
       
        _todoService = todoService;
        _paramService = paramService;
       
    }
}
