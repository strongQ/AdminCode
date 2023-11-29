/* tslint:disable */
/* eslint-disable */

import { LoginOutput } from './login-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultLoginOutput
 */
export interface AdminResultLoginOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultLoginOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultLoginOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultLoginOutput
     */
    message?: string | null;
    /**
     * 
     * @type {LoginOutput}
     * @memberof AdminResultLoginOutput
     */
    result?: LoginOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultLoginOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultLoginOutput
     */
    time?: Date;
}
