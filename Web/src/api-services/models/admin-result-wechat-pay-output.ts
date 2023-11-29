/* tslint:disable */
/* eslint-disable */

import { WechatPayOutput } from './wechat-pay-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultWechatPayOutput
 */
export interface AdminResultWechatPayOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultWechatPayOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultWechatPayOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultWechatPayOutput
     */
    message?: string | null;
    /**
     * 
     * @type {WechatPayOutput}
     * @memberof AdminResultWechatPayOutput
     */
    result?: WechatPayOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultWechatPayOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultWechatPayOutput
     */
    time?: Date;
}
