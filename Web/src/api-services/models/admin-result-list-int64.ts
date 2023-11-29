/* tslint:disable */
/* eslint-disable */

/**
 * 全局返回结果
 * @export
 * @interface AdminResultListInt64
 */
export interface AdminResultListInt64 {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListInt64
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListInt64
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListInt64
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<number>}
     * @memberof AdminResultListInt64
     */
    result?: Array<number> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListInt64
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListInt64
     */
    time?: Date;
}
