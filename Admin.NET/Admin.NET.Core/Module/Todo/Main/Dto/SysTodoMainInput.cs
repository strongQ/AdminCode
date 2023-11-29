using System.ComponentModel.DataAnnotations;

namespace Admin.NET.Core.Module.Todo.Main.Dto;

/// <summary>
/// 流程待办基础输入参数
/// </summary>
public class SysTodoMainBaseInput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public virtual string name { get; set; }
        
        /// <summary>
        /// 类型
        /// </summary>
        public virtual string type { get; set; }
        
        /// <summary>
        /// 紧急度
        /// </summary>
        public virtual string grade { get; set; }
        
        /// <summary>
        /// 模型分类
        /// </summary>
        public virtual string modca { get; set; }
        
        /// <summary>
        /// 模型ID
        /// </summary>
        public virtual long modid { get; set; }
        
        /// <summary>
        /// 链接
        /// </summary>
        public virtual string link { get; set; }
        
        /// <summary>
        /// 备注
        /// </summary>
        public virtual string remark { get; set; }
        
        /// <summary>
        /// 创建时间
        /// </summary>
        public virtual DateTime createtime { get; set; }
        
        /// <summary>
        /// 更新时间
        /// </summary>
        public virtual DateTime updatetime { get; set; }
        
        /// <summary>
        /// 创建者Id
        /// </summary>
        public virtual long createuserid { get; set; }
        
        /// <summary>
        /// 修改者Id
        /// </summary>
        public virtual long updateuserid { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        public virtual bool isdelete { get; set; }
        
    }

    /// <summary>
    /// 流程待办分页查询输入参数
    /// </summary>
    public class SysTodoMainInput : BasePageInput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 办理类型，0待办  1已办
        /// </summary>
        public int Type { get; set; }

}

    /// <summary>
    /// 流程待办增加输入参数
    /// </summary>
    public class AddSysTodoMainInput : SysTodoMainBaseInput
    {
    }

    /// <summary>
    /// 流程待办删除输入参数
    /// </summary>
    public class DeleteSysTodoMainInput : BaseIdInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long id { get; set; }
        
    }

    /// <summary>
    /// 流程待办更新输入参数
    /// </summary>
    public class UpdateSysTodoMainInput : SysTodoMainBaseInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long id { get; set; }
        
    }

    /// <summary>
    /// 流程待办主键查询输入参数
    /// </summary>
    public class QueryByIdSysTodoMainInput : DeleteSysTodoMainInput
    {

    }
