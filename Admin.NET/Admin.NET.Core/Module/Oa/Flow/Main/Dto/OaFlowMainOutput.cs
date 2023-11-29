namespace Admin.NET.Core.Module.Oa.Flow.Main.Dto;

/// <summary>
/// 流程实例输出参数
/// </summary>
public class OaFlowMainOutput
    {
       /// <summary>
       /// Id
       /// </summary>
       public long Id { get; set; }
    
       /// <summary>
       /// 备注
       /// </summary>
       public string Remark { get; set; }
    
       /// <summary>
       /// 名称
       /// </summary>
       public string Name { get; set; }
    
       /// <summary>
       /// 全局流程模板ID
       /// </summary>
       public long Protd { get; set; }
    
       /// <summary>
       /// 表单数据
       /// </summary>
       public string Zform { get; set; }
    
       /// <summary>
       /// 全局流程模板ID
       /// </summary>
       public long Temid { get; set; }

    /// <summary>
    /// 模板名称
    /// </summary>
       public string TemName { get; set; }
    /// <summary>
    /// 申请人
    /// </summary>
    public string CreateUser { get; set; }

    /// <summary>
    /// 状态
    /// </summary>
    public string State { get; set; }
    
       /// <summary>
       /// 创建时间
       /// </summary>
       public DateTime? Createtime { get; set; }
    
       /// <summary>
       /// 更新时间
       /// </summary>
       public DateTime? Updatetime { get; set; }


    /// <summary>
    /// 所处环节
    /// </summary>
    public string Facno { get; set; }
    /// <summary>
    /// 处理人
    /// </summary>
    public string HandleName { get; set; }

}
 

