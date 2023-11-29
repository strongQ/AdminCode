/* tslint:disable */
/* eslint-disable */

import { SysUser } from './sys-user';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSysUser
 */
export interface AdminResultSysUser {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSysUser
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSysUser
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSysUser
     */
    message?: string | null;
    /**
     * 
     * @type {SysUser}
     * @memberof AdminResultSysUser
     */
    result?: SysUser;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSysUser
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSysUser
     */
    time?: Date;
}
