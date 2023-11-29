/* tslint:disable */
/* eslint-disable */

import { SysUserExtOrg } from './sys-user-ext-org';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysUserExtOrg
 */
export interface AdminResultListSysUserExtOrg {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysUserExtOrg
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysUserExtOrg
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysUserExtOrg
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysUserExtOrg>}
     * @memberof AdminResultListSysUserExtOrg
     */
    result?: Array<SysUserExtOrg> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysUserExtOrg
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysUserExtOrg
     */
    time?: Date;
}
