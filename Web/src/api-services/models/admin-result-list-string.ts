/* tslint:disable */
/* eslint-disable */

/**
 * 全局返回结果
 * @export
 * @interface AdminResultListString
 */
export interface AdminResultListString {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListString
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListString
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListString
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<string>}
     * @memberof AdminResultListString
     */
    result?: Array<string> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListString
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListString
     */
    time?: Date;
}
