/* tslint:disable */
/* eslint-disable */

/**
 * 全局返回结果
 * @export
 * @interface AdminResultString
 */
export interface AdminResultString {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultString
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultString
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultString
     */
    message?: string | null;
    /**
     * 数据
     * @type {string}
     * @memberof AdminResultString
     */
    result?: string | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultString
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultString
     */
    time?: Date;
}
