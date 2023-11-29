/* tslint:disable */
/* eslint-disable */

import { SysCodeGenConfig } from './sys-code-gen-config';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSysCodeGenConfig
 */
export interface AdminResultSysCodeGenConfig {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSysCodeGenConfig
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSysCodeGenConfig
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSysCodeGenConfig
     */
    message?: string | null;
    /**
     * 
     * @type {SysCodeGenConfig}
     * @memberof AdminResultSysCodeGenConfig
     */
    result?: SysCodeGenConfig;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSysCodeGenConfig
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSysCodeGenConfig
     */
    time?: Date;
}
