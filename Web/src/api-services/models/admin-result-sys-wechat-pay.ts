/* tslint:disable */
/* eslint-disable */

import { SysWechatPay } from './sys-wechat-pay';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSysWechatPay
 */
export interface AdminResultSysWechatPay {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSysWechatPay
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSysWechatPay
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSysWechatPay
     */
    message?: string | null;
    /**
     * 
     * @type {SysWechatPay}
     * @memberof AdminResultSysWechatPay
     */
    result?: SysWechatPay;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSysWechatPay
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSysWechatPay
     */
    time?: Date;
}
