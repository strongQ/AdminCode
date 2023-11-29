

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Oa.Flow.Cate;
[SugarTable("net_oa_flow_cate", TableDescription = "OA流程分类表")]
[Description("OA流程分类表")]
public class OaFlowCate : EntityBase
{
    [SugarColumn(ColumnDescription = "备注", IsNullable = true, Length = 255)]
    public  string Remark { get; set; }
    /// <summary>
    /// 名称
    /// </summary>
    /// <example></example>
    [SugarColumn(ColumnDescription = "名称", IsNullable = true, Length = 255)]
    public  string Name { get; set; }
    [SugarColumn(ColumnDescription = "排序号", IsNullable = true)]
    public int Ornum { get; set; }

    [SugarColumn(ColumnDescription = "父ID", IsNullable = true)]
    public long? Pid { get; set; }

    [SqlSugar.SugarColumn(IsIgnore = true)]
    public string Panam { get; set; }

    [SqlSugar.SugarColumn(IsIgnore = true)]
    public OaFlowCate Parent { get; set; }

    [SqlSugar.SugarColumn(IsIgnore = true)]
    public List<OaFlowCate> Children { get; set; }
}
