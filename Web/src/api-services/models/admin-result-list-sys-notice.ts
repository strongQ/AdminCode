/* tslint:disable */
/* eslint-disable */

import { SysNotice } from './sys-notice';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysNotice
 */
export interface AdminResultListSysNotice {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysNotice
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysNotice
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysNotice
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysNotice>}
     * @memberof AdminResultListSysNotice
     */
    result?: Array<SysNotice> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysNotice
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysNotice
     */
    time?: Date;
}
