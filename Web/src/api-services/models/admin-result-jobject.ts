/* tslint:disable */
/* eslint-disable */

import { JToken } from './jtoken';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultJObject
 */
export interface AdminResultJObject {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultJObject
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultJObject
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultJObject
     */
    message?: string | null;
    /**
     * 数据
     * @type {{ [key: string]: JToken; }}
     * @memberof AdminResultJObject
     */
    result?: { [key: string]: JToken; } | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultJObject
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultJObject
     */
    time?: Date;
}
