// 注释

using Admin.NET.Core.Entity;
using AngleSharp.Dom;
using Furion.InstantMessaging;

using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Primitives;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Hub;

/// <summary>
/// 在线用户集线器
/// </summary>
[MapHub("/MessageHub")]
public class MessageHub : Hub<IMessageClient>
{
    private IHttpContextAccessor _accessor;
  
    /// <summary>
    /// 登录在线用户
    /// </summary>
    public  ConcurrentDictionary<string, User> MessageClients = new ConcurrentDictionary<string, User>();

    private SqlSugarRepository<ClientLog> _logRepository;

    private IHubContext<OnlineUserHub, IOnlineUserHub> _onlineUserHubContext;





    public MessageHub(IHttpContextAccessor accessor,SqlSugarRepository<ClientLog> log, IHubContext<OnlineUserHub, IOnlineUserHub> onlineUserHubContext)
    {
        _accessor = accessor;

        _logRepository = log;

        _onlineUserHubContext= onlineUserHubContext;

    }


















    /// <summary>
    /// 客户端登陆,直接订阅消息
    /// </summary>
    /// <param name="user">返回在线客户端</param>
    /// <returns></returns>
    public async Task<List<User>> Login(User user)
    {
        if (user == null) return new List<User>();


        await AddUser(user);



        List<User> users = new List<User>(MessageClients.Values);


        return users;
    }

    /// <summary>
    /// 添加用户
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    private async Task AddUser(User user)
    {

        string ip = App.HttpContext.GetRemoteIpAddressToIPv4();



        user.ConnectionID = Context.ConnectionId;

        //没有加入
        if (!MessageClients.ContainsKey(user.Flag))
        {
            MessageClients.TryAdd(user.Flag, user);
            user.IP = ip.ToString();


            await AddClientLog(new RemoteLog
            {
                Content = $"用户{user.ToString()} 登录",
                Title = "DataClient",
                Type = LogEnum.Info,
                IsToRemote = true
            }, user);


        }
        else
        {

            MessageClients[user.Flag].ConnectionID = Context.ConnectionId;
            MessageClients[user.Flag].IP = ip.ToString();
        }

    }
    /// <summary>
    /// 添加Client日志
    /// </summary>
    /// <param name="remoteLog"></param>
    /// <param name="user"></param>
    private async Task AddClientLog(RemoteLog remoteLog, User user)
    {
        remoteLog.CreateTime = DateTime.Now;
        if (remoteLog.IsToRemote)
        {
           
           await _onlineUserHubContext.Clients.All.ReceiveRemoteMessage(remoteLog);
                // 将日志发送给we客户端
            await Clients.All.ReadLog(remoteLog);
            

        }

        if (remoteLog.IsToDB)
        {
           

                await _logRepository.InsertAsync(new ClientLog
                {
                    ClientID = remoteLog.ID,
                    ClientName = remoteLog.ID,
                    CreateTime = DateTime.Now,
                    LogTitle = remoteLog.Title,
                    LogContent = remoteLog.Content,
                    Flag = remoteLog.Flag,
                    LogType = remoteLog.Type.ToString()
                });
          
        }
    }








    /// <summary>
    /// 客户端登出
    /// </summary>
    public async Task Logout()
    {

        var user = MessageClients.FirstOrDefault(x => x.Value.ConnectionID == Context.ConnectionId);
        if (user.Value == null) return;
        await RemoveUser(user.Value);
    }


    /// <summary>
    /// 写日志
    /// </summary>
    /// <param name="log"></param>
    /// <returns></returns>
    public async Task WriteLog(RemoteLog log)
    {
        User userFlag = MessageClients.SingleOrDefault((c) => c.Value.ConnectionID == Context.ConnectionId).Value;
        if (userFlag == null) userFlag = new User { Name = "some" };
        await AddClientLog(log, userFlag);

    }


    /// <summary>
    /// 移除用户
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    /// <exception cref="NotImplementedException"></exception>
    private async Task RemoveUser(User user)
    {
        if (!MessageClients.ContainsKey(user.Flag))
        {
            return;
        }

        MessageClients.Remove(user.Flag, out User? remove);



        await AddClientLog(new RemoteLog
        {
            Content = $"用户{user.ToString()} 退出",
            Title = "DataClient",
            Type = LogEnum.Info,
            IsToRemote = true
        }, user);

        await Task.FromResult("");
    }









    /// <summary>
    /// 连接
    /// </summary>
    /// <returns></returns>
    public override async Task OnConnectedAsync()
    {
        
        
        // 通知客户端回传用户
        await Clients.Client(Context.ConnectionId).GetUser();
        await base.OnConnectedAsync();
    }

    /// <summary>
    /// 失去连接
    /// </summary>
    /// <param name="exception"></param>
    /// <returns></returns>
    public override async Task OnDisconnectedAsync(Exception? exception)
    {

        User userFlag = MessageClients.SingleOrDefault((c) => c.Value.ConnectionID == Context.ConnectionId).Value;

        if (userFlag != null)
        {
           

            await RemoveUser(userFlag);

        }




        await base.OnDisconnectedAsync(exception);
    }
















}

public interface IMessageClient
{
    //发送通知消息
    Task InformMessage(InformModel inform);
    /// <summary>
    /// 读取远程log
    /// </summary>
    /// <param name="log"></param>
    /// <returns></returns>
    Task ReadLog(RemoteLog log);
    /// <summary>
    /// 关闭连接
    /// </summary>
    /// <param name="close">原因</param>
    /// <returns></returns>
    Task Close(CloseModel close);
    /// <summary>
    /// 获取用户
    /// </summary>
    /// <returns></returns>
    Task GetUser();
}

public class InformModel
{
    /// <summary>
    /// 发送者
    /// </summary>
    public string Sender { get; set; }
    /// <summary>
    /// 消息体
    /// </summary>
    public string Message { get; set; }

    /// <summary>
    /// 消息类型
    /// </summary>
    public InformTypeEnum Type { get; set; }
    /// <summary>
    /// 约定的Tag
    /// </summary>
    public int ContractTag { get; set; }
}

/// <summary>
/// 通知类型
/// </summary>
public enum InformTypeEnum
{
    None,
    ReStart,
    Stop,
    Control
}

public class RemoteLog
{
    public string Title { get; set; }

    public string Flag { get; set; }

    public string Content { get; set; }

    public LogEnum Type { get; set; }
    /// <summary>
    /// 保存到数据库
    /// </summary>
    public bool IsToDB { get; set; }
    /// <summary>
    /// 推向Remote
    /// </summary>
    public bool IsToRemote { get; set; }

    public DateTime CreateTime { get; set; }

    public string ID { get; set; } = Guid.NewGuid().ToString();
}

public enum LogEnum
{
    Info = 0,
    Warn = 1,
    Error = 2
}

public class CloseModel
{
    public SignalRFailEnum Type { get; set; }

    public string Reason { get; set; }
}

public enum SignalRFailEnum
{
    /// <summary>
    /// 相同用户
    /// </summary>
    Same,
    /// <summary>
    /// 通用错误
    /// </summary>
    Common,
    /// <summary>
    /// 关闭，客户端重启
    /// </summary>
    Close
}

public class User
{

    public string Name { get; set; }
    public string ID { get; set; }


    public string ConnectionID { get; set; }
    /// <summary>
    /// 用户类型
    /// </summary>
    public DeviceEnum Type { get; set; }
    /// <summary>
    /// 用户标记
    /// </summary>
    public string Flag { get { return $"{ID}*{Type}"; } }
    /// <summary>
    /// IP地址
    /// </summary>
    public string IP { get; set; }
    /// <summary>
    /// 是否重连
    /// </summary>
    public bool Reconnect { get; set; }


    public override string ToString()
    {
        return $"ID:{ID},Name:{Name},IP:{IP},Type:{Type}";
    }
}

public enum DeviceEnum
{
    /// <summary>
    /// Android Client
    /// </summary>
    PDA = 0,

    /// <summary>
    /// WPF Client
    /// </summary>
    CS = 1,

    /// <summary>
    /// Browser Client
    /// </summary>
    BS = 2,

    Service = 3
}
