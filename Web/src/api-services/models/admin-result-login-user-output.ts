/* tslint:disable */
/* eslint-disable */

import { LoginUserOutput } from './login-user-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultLoginUserOutput
 */
export interface AdminResultLoginUserOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultLoginUserOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultLoginUserOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultLoginUserOutput
     */
    message?: string | null;
    /**
     * 
     * @type {LoginUserOutput}
     * @memberof AdminResultLoginUserOutput
     */
    result?: LoginUserOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultLoginUserOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultLoginUserOutput
     */
    time?: Date;
}
