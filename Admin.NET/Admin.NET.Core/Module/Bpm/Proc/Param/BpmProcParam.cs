

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Param;
/// <summary>
/// 流程参数
/// </summary>
[SugarTable("net_bpm_proc_param", TableDescription = "流程参数表")]
[SystemTable]
public class BpmProcParam:EntityBaseId
{
   

    [SugarColumn(ColumnDescription = "键", IsNullable = true, Length = 64)]
    public string Pakey { get; set; }

    [SugarColumn(ColumnDescription = "值", IsNullable = true, Length = 512)]
    public string Paval { get; set; }

    [SugarColumn(ColumnDescription = "Proc", IsNullable = true, Length = 32)]
    public string Offty { get; set; }

    [SugarColumn(ColumnDescription = "Offid", IsNullable = true)]
    public long? Offid { get; set; }

    [SugarColumn(ColumnDescription = "ProcId", IsNullable = true)]
    public long? Proid { get; set; }
}
