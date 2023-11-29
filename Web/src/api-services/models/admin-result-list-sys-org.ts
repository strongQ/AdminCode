/* tslint:disable */
/* eslint-disable */

import { SysOrg } from './sys-org';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysOrg
 */
export interface AdminResultListSysOrg {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysOrg
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysOrg
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysOrg
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysOrg>}
     * @memberof AdminResultListSysOrg
     */
    result?: Array<SysOrg> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysOrg
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysOrg
     */
    time?: Date;
}
