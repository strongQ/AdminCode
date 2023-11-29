// ע�

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Cond;
[SugarTable("net_bpm_proc_cond", TableDescription = "流程参数表")]
[SystemTable]
public class BpmProcCond: EntityBaseId
{


    [SugarColumn(ColumnDescription = "条件参数", IsNullable = true, Length = 2000)]
    public string Cond { get; set; }
}