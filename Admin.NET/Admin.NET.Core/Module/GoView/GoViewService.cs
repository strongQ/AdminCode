

using Admin.NET.Core.Module.GoView.Dtos;
using Admin.NET.Core.Module.GoView.Entities;
using Admin.NET.Core.Module.Oa.Flow.Cate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.GoView;
/// <summary>
/// GoView服务
/// </summary>
[ApiDescriptionSettings(Order = 100)]
public class GoViewService:IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<GoViewProject> _rep;
    private readonly SqlSugarRepository<SysUser> _userRep;
    private readonly SysFileService _fileService;
    public GoViewService(SqlSugarRepository<GoViewProject> rep, SqlSugarRepository<SysUser> userRep
        ,SysFileService sysFileService)
    {
        _rep = rep;
        _userRep = userRep;
        _fileService = sysFileService;
    }

    /// <summary>
    /// 登录
    /// </summary>
    /// <returns></returns>
    [HttpPost("/api/goview/sys/login"), UnifyProvider("GoView")]
    [QueryParameters]
    [AllowAnonymous]
    public async Task<dynamic> Login(LoginView login)
    {
        string username = login.Username;
        string password = login.Password;
        // 账号是否存在
        var user = await _userRep.AsQueryable().Filter(null, true).FirstAsync(u => u.Account.Equals(username));
        _ = user ?? throw Oops.Oh(ErrorCodeEnum.D0009);
        // 账号是否被冻结
        if (user.Status == StatusEnum.Disable)
            throw Oops.Oh(ErrorCodeEnum.D1017);

       

        // 密码是否正确
        if (CryptogramUtil.CryptoType == CryptogramEnum.MD5.ToString())
        {
            if (user.Password != MD5Encryption.Encrypt(password))
                throw Oops.Oh(ErrorCodeEnum.D1000);
        }
        else
        {
            if (CryptogramUtil.Decrypt(user.Password) != password)
                throw Oops.Oh(ErrorCodeEnum.D1000);
        }
        return new
        {
            userinfo = new
            {
                id = user.Id,
                username = user.Account,
                password = "21232f297a57a5a743894a0e4a801fc3",
                nickname = user.NickName,
                depId = "",
                posId = "",
                depName = "",
                posName = ""
            },
            token = new
            {
                tokenName = "satoken",
                tokenValue = "7ce6f8cf-fb02-4225-b160-3caf058e94da",
                isLogin = true,
                loginId = 1,
                loginType = "login",
                tokenTimeout = 2592000,
                sessionTimeout = 2592000,
                tokenSessionTimeout = 2591953,
                tokenActivityTimeout = -1,
                loginDevice = "default-device",
                tag = ""
            }
        };
    }

    /// <summary>
    /// 登出
    /// </summary>
    /// <returns></returns>
    [HttpGet("/api/goview/sys/logout"), UnifyProvider("GoView")]
    [AllowAnonymous]
    public dynamic loginout()
    {
        return true;
    }

    /// <summary>
    /// 上传文件
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [HttpPost("/oss/object/goview"), UnifyProvider("GoView")]
    [AllowAnonymous]
    public async Task<dynamic> GoView(IFormFile file)
    {
        var files = App.HttpContext.Request.Form.Files.ToList();

       var outFile=  await _fileService.UploadFile(files.FirstOrDefault(),"");
       
        return new
        {
            bucketName = "goview",
            key = files[0].FileName,
            objectContent = new
            {
                httpRequest = new
                {
                    uri = outFile.Url
                }
            }
        };

    }

    /// <summary>
    /// 上传文件
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [HttpPost("/api/goview/project/upload"), UnifyProvider("GoView")]
    [AllowAnonymous]
    public async Task<dynamic> Upload(IFormFile file)
    {
        var files = App.HttpContext.Request.Form.Files.ToList();

       var fileout= await _fileService.UploadFile(files.FirstOrDefault(), "");
      
        return new
        {
            bucketName = "",
            createTime = DateTime.Now,
            createUserId = "-",
            createUserName = "-",
            fileName = files.FirstOrDefault().FileName,
            fileSize = 0,
            fileurl = fileout.Url,
            fileSuffix = "image/png",
            id = "",
        };

    }

    /// <summary>
    /// 获取项目列表
    /// </summary>
    /// <param name="page"></param>
    /// <param name="limit"></param>
    /// <returns></returns>
    [HttpGet("/api/goview/project/list"), QueryParameters, NonUnify]
    [AllowAnonymous]
    public async Task<dynamic> List(int page = 1, int limit = 12)
    {
        RefAsync<int> total = 0;
        var res = await _rep.AsQueryable()
            .Select(o => new goview_project_list_response()
            {
                createTime = o.CreateTime,
                createUserId = o.CreateUserId,
                id = o.Id.ToString(),
                indexImage = o.IndexImage,
                isDelete = o.IsDelete?1:0,
                projectName = o.ProjectName,
                remarks = o.Remarks,
                state = o.State
            })
            .ToPageListAsync(page, limit, total);
        return new
        {
            data = res,
            msg = "",
            code = 200,
            count = total.Value
        };
    }

    /// <summary>
    /// 获取项目具体数据
    /// </summary>
    /// <param name="projectId"></param>
    /// <returns></returns>
    [HttpGet("/api/goview/project/getData"), QueryParameters, UnifyProvider("GoView")]
    [AllowAnonymous]
    public async Task<dynamic> GetData(long projectId)
    {
        var data = await _rep.Context.Queryable<GoViewData>().Where(x => x.ProjectId == projectId)
            .Select(x => new goview_project_data_response
            {
                id = x.Id,
                content = x.Content,
                project_id = x.ProjectId,
                create_time = x.CreateTime,
                create_user_id = x.CreateUserId
            }).SingleAsync();
        
        return data;
    }
    /// <summary>
    /// 根据sql获取数据
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost("/api/goview/sql"), UnifyProvider("GoView")]
    [AllowAnonymous]
    public async Task<dynamic> GetSqlData(SqlInput input)
    {
      return await  _rep.Context.Ado.SqlQueryAsync<dynamic>(input.Sql);
    }

    /// <summary>
    /// 获取上传地址
    /// </summary>
    /// <returns></returns>
    [HttpGet("/api/goview/sys/getOssInfo"), UnifyProvider("GoView")]
    [AllowAnonymous]
    public dynamic getOssInfo()
    {
       
        return new
        {
            bucketURL = $"/oss/",
        };
    }

    /// <summary>
    /// 编辑项目
    /// </summary>
    /// <param name="data"></param>
    /// <returns></returns>
    [HttpPost("/api/goview/project/edit"), UnifyProvider("GoView")]
    [AllowAnonymous]
    public async Task<dynamic> edit(goview_project_edit_request data)
    {
        var res = await _rep.AsUpdateable()
                .SetColumns(o => new GoViewProject() { IndexImage = data.indexImage })
                .Where(o => o.Id == data.id)
                .ExecuteCommandAsync();

        return res > 0 ? "操作成功" : throw Oops.Oh("更新失败");
    }

    /// <summary>
    /// 发布项目
    /// </summary>
    /// <param name="data"></param>
    /// <returns></returns>
    [HttpPut("/api/goview/project/publish"), UnifyProvider("GoView")]
    [AllowAnonymous]
    public async Task<dynamic> publish(goview_project_publish_request data)
    {
        var res = await _rep.AsUpdateable()
                .SetColumns(o => new GoViewProject() { State = data.state })
                .Where(o => o.Id == data.id)
                .ExecuteCommandAsync();

        return res > 0 ? "操作成功" : throw Oops.Oh("操作失败");
    }
    /// <summary>
    /// 删除项目
    /// </summary>
    /// <param name="ids"></param>
    /// <returns></returns>
    [HttpDelete("/api/goview/project/delete"), QueryParameters, UnifyProvider("GoView")]
    [AllowAnonymous]
    public async Task<dynamic> delete(long ids)
    {
       
        var res = await _rep.AsDeleteable()
                .Where(o => o.Id == ids)
                .ExecuteCommandAsync();

        return res > 0 ? "操作成功" : throw Oops.Oh("操作失败");
    }

    /// <summary>
    /// 保存项目
    /// </summary>
    /// <returns></returns>
    [HttpPost("/api/goview/project/save/data"), UnifyProvider("GoView"), AllowAnonymous]
    public async Task<dynamic> Save()
    {
        long projectId = App.HttpContext.Request.Form["projectId"].ToLong();
        string str = App.HttpContext.Request.Form["content"];
        //  var content = Encoding.Default.GetBytes(str);
        var res = await _rep.Context.Updateable<GoViewData>()
                .SetColumns(o => new GoViewData() { Content = str })
                .Where(o => o.Id == projectId)
                .ExecuteCommandAsync();

        return res > 0 ? "数据保存成功" : throw Oops.Oh("数据保存失败");
    }

    /// <summary>
    /// 新建项目
    /// </summary>
    /// <returns></returns>
    [HttpPost("/api/goview/project/create"),AllowAnonymous,QueryParameters, UnifyProvider("GoView")]
    [UnitOfWork]
    public async Task<dynamic> Create(string indexImage,string projectName,string remarks)
    {
        string projName = Guid.NewGuid().ToString("N");
        if (!projectName.IsNullOrEmpty())
        {
            projName = projName;
        }
        try
        {
           
            var project = new GoViewProject()
            {


                ProjectName = projName,
                State = -1,
                Remarks = remarks
            };
            var id = await _rep.InsertReturnSnowflakeIdAsync(project);
            var projectData = new GoViewData()
            {
                // content =Encoding.Default.GetBytes(""),
               
                ProjectId = id,
                
            };
           await  _rep.Context.Insertable(projectData).ExecuteCommandAsync();
            
              
                return new goview_project_list_response()
                {
                    createTime = DateTime.Now,
                    state = -1,
                    id = id.ToString(),
                    isDelete = -1,
                };
           

        }
        catch (Exception ex)
        {

            throw Oops.Oh(ex.Message);
        }




    }
}
