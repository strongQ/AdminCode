/* tslint:disable */
/* eslint-disable */

import { SysConfig } from './sys-config';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysConfig
 */
export interface AdminResultListSysConfig {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysConfig
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysConfig
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysConfig
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysConfig>}
     * @memberof AdminResultListSysConfig
     */
    result?: Array<SysConfig> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysConfig
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysConfig
     */
    time?: Date;
}
