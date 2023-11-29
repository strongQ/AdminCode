/* tslint:disable */
/* eslint-disable */

import { WxOpenIdOutput } from './wx-open-id-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultWxOpenIdOutput
 */
export interface AdminResultWxOpenIdOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultWxOpenIdOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultWxOpenIdOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultWxOpenIdOutput
     */
    message?: string | null;
    /**
     * 
     * @type {WxOpenIdOutput}
     * @memberof AdminResultWxOpenIdOutput
     */
    result?: WxOpenIdOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultWxOpenIdOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultWxOpenIdOutput
     */
    time?: Date;
}
