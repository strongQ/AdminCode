

using Admin.NET.Core.Module.Bpm.Proc.Main;
using Admin.NET.Core.Module.Bpm.Proc.Temp.Dto;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Temp;
public class BpmProcTempService : BaseService<BpmProcTemp>, ITransient
{
  
    public BpmProcTempService(SqlSugarRepository<BpmProcTemp> repo):base(repo)
    {
        
    }
    /// <summary>
    /// 获取变动后的xml流程模板
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<string> GetChangeXML(long id)
    {
        return await _rep.AsQueryable().Where(x => x.Id == id).Select(x => x.Chxml).SingleAsync();
    }
    /// <summary>
    /// 获取初始的xml流程模板
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<string> GetOrXML(long id)
    {
        return await _rep.AsQueryable().Where(x => x.Id == id).Select(x => x.Orxml).SingleAsync();
    }
    /// <summary>
    /// 根据实例id获取模板
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<string> GetXMLByProid(long proid)
    {
        return await _rep.AsQueryable().InnerJoin<BpmProcMain>((x,y)=>x.Id==y.Temid).Where((x,y) => y.Id==proid).Select(x => x.Chxml).SingleAsync();
    }
    /// <summary>
    /// 根据实例id获取模板
    /// </summary>
    /// <param name="proid"></param>
    /// <returns></returns>
    public async Task<string> GetOriXMLByProid(long proid)
    {
        return await _rep.AsQueryable().InnerJoin<BpmProcMain>((x, y) => x.Id == y.Temid).Where((x, y) => y.Id == proid).Select(x => x.Orxml).SingleAsync();
    }
    /// <summary>
    /// 根据类型获取模板数据
    /// </summary>
    /// <param name="type"></param>
    /// <returns></returns>
    public async Task<List<ZidNamePid>> GetList(string type)
    {
       var result= await _rep.AsQueryable().Where(x=>x.Type==type).Select(x=>new ZidNamePid
        {
            id = x.Id,
            Name = x.Name
          
        }).ToListAsync();
        return result;
    }
    /// <summary>
    /// 分页查询
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public async Task<SqlSugarPagedList<BpmProcTempDto>> GetPage(ProcTempInputDto input)
    {
        var pp = _rep.CurrentUserID;
        var items = await _rep.Context.Queryable<BpmProcTemp, SysUser, SysUser>
            ((t, o, o2) => new JoinQueryInfos(
                JoinType.Left, o.Id == t.CreateUserId,
                JoinType.Left, o2.Id == t.UpdateUserId))
            .WhereIF(!string.IsNullOrWhiteSpace(input.Type), t => t.Type == input.Type)
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), t => t.Name.Contains(input.Name.Trim()))
            .OrderBy(t => t.CreateTime, OrderByType.Desc)
            .Select((t, o, o2)
                => new BpmProcTempDto { Id=t.Id, Name=t.Name,Crtim=t.CreateTime, Uptim=t.UpdateTime, Crman = o.RealName, Upman = o2.RealName,Notes= t.Notes })
            .ToPagedListAsync(input.Page, input.PageSize);
        return items;
    }
}
