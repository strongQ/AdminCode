/* tslint:disable */
/* eslint-disable */

import { SysConfig } from './sys-config';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSysConfig
 */
export interface AdminResultSysConfig {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSysConfig
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSysConfig
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSysConfig
     */
    message?: string | null;
    /**
     * 
     * @type {SysConfig}
     * @memberof AdminResultSysConfig
     */
    result?: SysConfig;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSysConfig
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSysConfig
     */
    time?: Date;
}
