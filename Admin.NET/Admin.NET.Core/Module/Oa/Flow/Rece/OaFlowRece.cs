

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Oa.Flow.Rece;
[SugarTable("net_oa_flow_rece", TableDescription = "流程使用记录")]
[Description("流程使用记录")]
public class OaFlowRece
{
    [SugarColumn(ColumnDescription = "Id主键", IsPrimaryKey = true, IsIdentity = false)]
    public long Id { get; set; }

    [SugarColumn(ColumnDescription = "用户ID")]
    public long Useid { get; set; }

    [SugarColumn(ColumnDescription = "流程模板ID")]
    public long Floid { get; set; }

    [SugarColumn(ColumnDescription = "最近使用时间", IsNullable = true)]
    public virtual DateTime? Uptim { get; set; }
}