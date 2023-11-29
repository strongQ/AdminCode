/* tslint:disable */
/* eslint-disable */

import { WxPhoneOutput } from './wx-phone-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultWxPhoneOutput
 */
export interface AdminResultWxPhoneOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultWxPhoneOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultWxPhoneOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultWxPhoneOutput
     */
    message?: string | null;
    /**
     * 
     * @type {WxPhoneOutput}
     * @memberof AdminResultWxPhoneOutput
     */
    result?: WxPhoneOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultWxPhoneOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultWxPhoneOutput
     */
    time?: Date;
}
