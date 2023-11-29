

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Param;
public class BpmProcParamService : ITransient
{
    public void Save(BpmProcParam param)
    {
        _repo.Insert(param);
    }
    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<bool> Delete(long id)
    {
       var result= await _repo.Context.Deleteable<BpmProcParam>().Where(it => it.Id == id).ExecuteCommandAsync();
        return result > 0;
    }
    /// <summary>
    /// 获取Param数据
    /// </summary>
    /// <param name="proid"></param>
    /// <param name="pakey"></param>
    /// <returns></returns>
    public async Task<BpmProcParam> GetProcParam(long proid,string pakey)
    {
       return await _repo.Context.Queryable<BpmProcParam>().Where(x => x.Proid == proid && x.Pakey == pakey).SingleAsync();
    }

    private readonly SqlSugarRepository<BpmProcParam> _repo;

    public BpmProcParamService(SqlSugarRepository<BpmProcParam> repo)
    {
        _repo = repo;
    }
}