

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Service;
/// <summary>
/// 诗香文地基础输入参数
/// </summary>
public class PoetryBaseInput
{
    /// <summary>
    /// 标题
    /// </summary>
    public virtual string title { get; set; }

    /// <summary>
    /// 朝代
    /// </summary>
    public virtual string dynasty { get; set; }

    /// <summary>
    /// 诗人
    /// </summary>
    public virtual string author { get; set; }

    /// <summary>
    /// 内容
    /// </summary>
    public virtual string content { get; set; }

}

/// <summary>
/// 诗香文地分页查询输入参数
/// </summary>
public class PoetryInput : BasePageInput
{
    /// <summary>
    /// 标题
    /// </summary>
    public string title { get; set; }

    /// <summary>
    /// 朝代
    /// </summary>
    public string dynasty { get; set; }

    /// <summary>
    /// 诗人
    /// </summary>
    public string author { get; set; }

    /// <summary>
    /// 内容
    /// </summary>
    public string content { get; set; }

}

/// <summary>
/// 诗香文地增加输入参数
/// </summary>
public class AddPoetryInput : PoetryBaseInput
{
}

/// <summary>
/// 诗香文地删除输入参数
/// </summary>
public class DeletePoetryInput : BaseIdInput
{
    /// <summary>
    /// Id
    /// </summary>
    [Required(ErrorMessage = "Id不能为空")]
    public long id { get; set; }

}

/// <summary>
/// 诗香文地更新输入参数
/// </summary>
public class UpdatePoetryInput : PoetryBaseInput
{
    /// <summary>
    /// Id
    /// </summary>
    [Required(ErrorMessage = "Id不能为空")]
    public long id { get; set; }

}

/// <summary>
/// 诗香文地主键查询输入参数
/// </summary>
public class QueryByIdPoetryInput : DeletePoetryInput
{

}
