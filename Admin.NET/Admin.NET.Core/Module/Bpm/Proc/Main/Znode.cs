
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.NET.Core.Module.Bpm.Proc.Main;
/// <summary>
/// 当前节点
/// </summary>
public class Znode
{
    /// <summary>
    /// 节点ID
    /// </summary>
    public long? Nodid { get; set; }
    /// <summary>
    /// 当前节点编号:N1,N2
    /// </summary>
    public string Facno { get; set; }//当前节点编号:N1,N2
    /// <summary>
    /// 当前节点名称
    /// </summary>
    public string Facna { get; set; }//当前节点名称
    /// <summary>
    /// 当前节点类型
    /// </summary>
    public string Facty { get; set; }//当前节点类型
    /// <summary>
    /// 流转方式
    /// </summary>
    public string Flway { get; set; }//流转方式
    /// <summary>
    /// 目标节点编号
    /// </summary>
    public string Tarno { get; set; }//目标节点编号
    /// <summary>
    /// 目标节点名称
    /// </summary>
    public string Tarna { get; set; }//目标节点名称
    /// <summary>
    /// 应处理人
    /// </summary>
    public string Exmen { get; set; }//应处理人
    ///// <summary>
    ///// 应处理角色
    ///// </summary>
    //public long RoleID { get; set; }

    public Znode()
    {
    }

    public Znode(string facno)
    {
        this.Facno = facno;
    }
}
