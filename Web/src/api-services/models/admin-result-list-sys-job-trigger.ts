/* tslint:disable */
/* eslint-disable */

import { SysJobTrigger } from './sys-job-trigger';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysJobTrigger
 */
export interface AdminResultListSysJobTrigger {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysJobTrigger
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysJobTrigger
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysJobTrigger
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysJobTrigger>}
     * @memberof AdminResultListSysJobTrigger
     */
    result?: Array<SysJobTrigger> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysJobTrigger
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysJobTrigger
     */
    time?: Date;
}
