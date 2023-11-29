/* tslint:disable */
/* eslint-disable */

import { CodeGenConfig } from './code-gen-config';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListCodeGenConfig
 */
export interface AdminResultListCodeGenConfig {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListCodeGenConfig
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListCodeGenConfig
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListCodeGenConfig
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<CodeGenConfig>}
     * @memberof AdminResultListCodeGenConfig
     */
    result?: Array<CodeGenConfig> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListCodeGenConfig
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListCodeGenConfig
     */
    time?: Date;
}
