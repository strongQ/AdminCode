namespace Admin.NET.Core.Module.Todo.Main.Dto;

/// <summary>
/// 流程待办输出参数
/// </summary>
public class SysTodoMainOutput
    {
       /// <summary>
       /// Id
       /// </summary>
       public long id { get; set; }
    
       /// <summary>
       /// 名称
       /// </summary>
       public string name { get; set; }
    
       /// <summary>
       /// 类型
       /// </summary>
       public string type { get; set; }
    
       /// <summary>
       /// 紧急度
       /// </summary>
       public string grade { get; set; }
    
       /// <summary>
       /// 模型分类
       /// </summary>
       public string modca { get; set; }
    
       /// <summary>
       /// 模型ID
       /// </summary>
       public long modid { get; set; }
    
       /// <summary>
       /// 链接
       /// </summary>
       public string link { get; set; }
    
       /// <summary>
       /// 备注
       /// </summary>
       public string remark { get; set; }
    
       /// <summary>
       /// 创建时间
       /// </summary>
       public DateTime? createtime { get; set; }
    
       /// <summary>
       /// 更新时间
       /// </summary>
       public DateTime? updatetime { get; set; }

       /// <summary>
       /// 处理人
       /// </summary>
       public string HandleName { get; set; }





}
 

