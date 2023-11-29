

using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Main;
/// <summary>
/// 流程实例
/// </summary>
[SugarTable("net_bpm_proc_main", TableDescription = "流程实例表")]
public class BpmProcMain : EntityBase
{
    /// <summary>
    /// 名称
    /// </summary>
    /// <example>API测试</example>
    [SugarColumn(ColumnDescription = "名称", IsNullable = true, Length = 255)]
    public  string Name { get; set; }
    [SugarColumn(ColumnDescription = "modid", IsNullable = true)]
    public long? Modid { get; set; }

    [SugarColumn(ColumnDescription = "modty", IsNullable = true, Length = 32)]
    public string Modty { get; set; }

    [SugarColumn(ColumnDescription = "模板id", IsNullable = true)]
    public long? Temid { get; set; }

    [SugarColumn(ColumnDescription = "状态", IsNullable = true, Length = 8)]
    public string State { get; set; }

    [SugarColumn(ColumnDescription = "是否可用", IsNullable = true)]
    public int Avtag { get; set; }

    public BpmProcMain()
    {

    }

    public BpmProcMain(Zbpm zbpm)
    {
        Id = zbpm.Proid;
        Name = zbpm.Prona;
        Temid = zbpm.Temid;
        CreateUserId = zbpm.Haman;
    }
}
