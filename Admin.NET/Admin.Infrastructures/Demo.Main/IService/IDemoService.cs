// ע�

using Demo.Main.Dto;

using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Demo.Main.IService
{
    public interface IDemoService
    {
        /// <summary>
        /// 获取PLC数据
        /// </summary>
        /// <param name="searchPlc"></param>
        /// <returns></returns>     
        Task<List<PatCellOutput>> GetAll();
       
    }
}
