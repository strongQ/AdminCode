

using Admin.NET.Core.Module.Bpm.Proc.Main;
using Admin.NET.Core.Module.Bpm.Task.Main;
using Admin.NET.Core.Module.Todo.Done;
using Admin.NET.Core.Module.Todo.Main.Dto;
using Admin.NET.Core.Module.Todo.User;
using Furion.EventBus;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;
using System;
using System.Collections.Generic;
using System.Formats.Asn1;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static SKIT.FlurlHttpClient.Wechat.Api.Models.ProductLimitedDiscountGetListResponse.Types;
using Task = System.Threading.Tasks.Task;

namespace Admin.NET.Core.Module.Todo.Main;
/// <summary>
/// 流程待办服务
/// </summary>
[ApiDescriptionSettings(Order = 100)]
public class SysTodoMainService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<SysTodoMain> _rep;
    private readonly SqlSugarRepository<SysTodoUser> _repUser;
    private readonly IEventPublisher _eventPublisher;
    public SysTodoMainService(SqlSugarRepository<SysTodoMain> rep,SqlSugarRepository<SysTodoUser> todoUserRep,IEventPublisher eventPublisher)
    {
        _rep = rep;
        _repUser = todoUserRep;
        _eventPublisher = eventPublisher;
    }

    /// <summary>
    /// 分页查询流程待办
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<SysTodoMainOutput>> Page([FromQuery] SysTodoMainInput input)
    {
       

        if (input.Type == 1)
        {
          return await  _rep.AsQueryable().Where(x => !x.IsDelete)
                   .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim())).InnerJoin<SysTodoDone>((x, y) => x.Id == y.Todid).InnerJoin<SysUser>((x, y, z) => z.Id == y.Userid)
                    .Where((x, y, z) => y.Userid == _rep.CurrentUserID)
                    .Select<SysTodoMainOutput>((x, y, z) =>

                        new SysTodoMainOutput
                        {
                            id = x.Id,
                            name = x.Name,
                            createtime = x.CreateTime,
                            link = x.Link,
                            HandleName = z.RealName,
                            remark = x.Remark
                        }
                    ).OrderBuilder(input).ToPagedListAsync(input.Page, input.PageSize); 
        }
        else
        {
          return await  _rep.AsQueryable().Where(x => !x.IsDelete)
                     .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim())).InnerJoin<SysTodoUser>((x, y) => x.Id == y.Todid).InnerJoin<SysUser>((x, y, z) => z.Id == y.Useid)
                    .Where((x, y, z) => y.Useid == _rep.CurrentUserID)
                    .Select<SysTodoMainOutput>((x, y, z) =>

                        new SysTodoMainOutput
                        {
                            id = x.Id,
                            name = x.Name,
                            createtime = x.CreateTime,
                            link = x.Link,
                            HandleName = z.RealName,
                            remark = x.Remark
                        }
                    ).OrderBuilder(input).ToPagedListAsync(input.Page, input.PageSize);
        }
              
;
       
    }

    /// <summary>
    /// 增加流程待办
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddSysTodoMainInput input)
    {
        var entity = input.Adapt<SysTodoMain>();
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 删除流程待办
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteSysTodoMainInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
    }

    /// <summary>
    /// 更新流程待办
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateSysTodoMainInput input)
    {
        var entity = input.Adapt<SysTodoMain>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取流程待办
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<SysTodoMain> Get([FromQuery] QueryByIdSysTodoMainInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.id);
    }

    /// <summary>
    /// 获取流程待办列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<SysTodoMainOutput>> List([FromQuery] SysTodoMainInput input)
    {
        return await _rep.AsQueryable().Select<SysTodoMainOutput>().ToListAsync();
    }


  
    /// <summary>
    /// 发送待办
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="taskList"></param>
    /// <returns></returns>
    public async Task SendTodos(Zbpm zbpm, List<BpmTaskMain> taskList)
    {
        foreach (var task in taskList)
        {
            if (task.Actag==1)
            {
                SysTodoMain todo = new SysTodoMain();             
                todo.Id = task.Id;
                todo.Name = zbpm.Prona;
                todo.Link = "/#/oa/ofmv?id=" + zbpm.Proid;
                todo.Modid = zbpm.Proid;
                todo.Remark = zbpm.Remark;
                await _rep.InsertAsync(todo);             
                    SysTodoUser todoTarget = new SysTodoUser();                  
                    todoTarget.Todid = todo.Id;
                    todoTarget.Useid = task.Exman.Value;
                    await _repUser.InsertAsync(todoTarget);
               

                    //Ztodo ztodo = new Ztodo();
                    //ztodo.Id = todo.Id;
                    //ztodo.Name = todo.Name;
                    //ztodo.Link = todo.Link;
                    //ztodo.Modid = todo.Modid.Value;
                    //ztodo.Taman = todoTarget.Useid;
                    //ztodo.Crman = zbpm.Crman;
                    //await _eventPublisher.PublishAsync(new ChannelEventSource("Create:SendTodo", ztodo));              
            }
        }
    }
    /// <summary>
    /// 发送待办
    /// </summary>
    /// <param name="zbpm"></param>
    /// <param name="useid"></param>
    /// <returns></returns>
    public async Task SendTodo(Zbpm zbpm, long useid)
    {

        SysTodoMain todo = new SysTodoMain();
        
        todo.Name = zbpm.Prona;
        todo.Link = "/#/oa/ofmv?id=" + zbpm.Proid;
        todo.Modid = zbpm.Proid;
        todo.Remark = zbpm.Remark;
        await _rep.InsertAsync(todo);
        SysTodoUser todoTarget = new SysTodoUser();
        todoTarget.Todid = todo.Id;
        todoTarget.Useid = useid;
        await _repUser.InsertAsync(todoTarget);
    }
    /// <summary>
    /// 更新待办
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task DoneTodo(Zbpm zbpm)
    {

        var mapList = await _rep.AsQueryable().Where(x => x.Modid == zbpm.Proid).InnerJoin<SysTodoUser>((x, y) => x.Id == y.Todid).Select((x, y) => new { y.Useid, y.Todid, y.Id }).ToListAsync();
        foreach (var map in mapList)
        {


            if (zbpm.Haman == map.Useid)
            {
                await _rep.Context.Deleteable<SysTodoUser>().Where(it => it.Id == map.Id).ExecuteCommandAsync();

                SysTodoDone done = new SysTodoDone();

                done.Todid = map.Todid;
                done.Userid = zbpm.Haman;

                await _rep.Context.Insertable(done).ExecuteCommandAsync();

            }

            //Ztodo ztodo = new Ztodo();
            //ztodo.Modid = zbpm.Proid;
            //await _eventPublisher.PublishAsync(new ChannelEventSource("Create:DoneTodo", ztodo));
        }
    }
    /// <summary>
    /// 更新待办用户
    /// </summary>
    /// <param name="zbpm"></param>
    /// <returns></returns>
    public async Task DoneTodos(Zbpm zbpm)
    {
      

        var mapList=await _rep.AsQueryable().Where(x => x.Modid == zbpm.Proid).InnerJoin<SysTodoUser>((x, y) => x.Id == y.Todid).Select((x, y) => new { y.Useid, y.Todid, y.Id }).ToListAsync();
        
        foreach (var map in mapList)
        {
          
            await _rep.Context.Deleteable<SysTodoUser>().Where(it => it.Id == map.Id).ExecuteCommandAsync();

            if (zbpm.Haman == map.Useid)
            {
                SysTodoDone done = new SysTodoDone();
              
                done.Todid =  map.Todid;
                done.Userid = zbpm.Haman;
              
                await _rep.Context.Insertable(done).ExecuteCommandAsync();

            }

            //Ztodo ztodo = new Ztodo();
            //ztodo.Modid = zbpm.Proid;
            //await _eventPublisher.PublishAsync(new ChannelEventSource("Create:DoneTodo", ztodo));
        }
    }

    public async Task DoneTodosByTaskIds(string[] taskIds)
    {
        foreach (var taskId in taskIds)
        {
            

            await _rep.DeleteByIdAsync(taskId);
            

            

            var todid = taskId.ToLong();
            await _rep.Context.Deleteable<SysTodoUser>().Where(x=>x.Todid==todid).ExecuteCommandAsync();
           
        }
    }
}
