/* tslint:disable */
/* eslint-disable */

import { ConstOutput } from './const-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListConstOutput
 */
export interface AdminResultListConstOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListConstOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListConstOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListConstOutput
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<ConstOutput>}
     * @memberof AdminResultListConstOutput
     */
    result?: Array<ConstOutput> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListConstOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListConstOutput
     */
    time?: Date;
}
