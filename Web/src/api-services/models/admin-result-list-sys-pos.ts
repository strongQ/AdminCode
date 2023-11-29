/* tslint:disable */
/* eslint-disable */

import { SysPos } from './sys-pos';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysPos
 */
export interface AdminResultListSysPos {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysPos
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysPos
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysPos
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysPos>}
     * @memberof AdminResultListSysPos
     */
    result?: Array<SysPos> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysPos
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysPos
     */
    time?: Date;
}
