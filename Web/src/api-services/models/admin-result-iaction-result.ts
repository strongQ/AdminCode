/* tslint:disable */
/* eslint-disable */

import { IActionResult } from './iaction-result';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultIActionResult
 */
export interface AdminResultIActionResult {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultIActionResult
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultIActionResult
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultIActionResult
     */
    message?: string | null;
    /**
     * 
     * @type {IActionResult}
     * @memberof AdminResultIActionResult
     */
    result?: IActionResult;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultIActionResult
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultIActionResult
     */
    time?: Date;
}
