/* tslint:disable */
/* eslint-disable */

import { SysRegion } from './sys-region';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysRegion
 */
export interface AdminResultListSysRegion {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysRegion
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysRegion
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysRegion
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysRegion>}
     * @memberof AdminResultListSysRegion
     */
    result?: Array<SysRegion> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysRegion
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysRegion
     */
    time?: Date;
}
