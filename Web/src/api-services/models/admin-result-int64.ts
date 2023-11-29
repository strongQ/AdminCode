/* tslint:disable */
/* eslint-disable */

/**
 * 全局返回结果
 * @export
 * @interface AdminResultInt64
 */
export interface AdminResultInt64 {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultInt64
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultInt64
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultInt64
     */
    message?: string | null;
    /**
     * 数据
     * @type {number}
     * @memberof AdminResultInt64
     */
    result?: number;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultInt64
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultInt64
     */
    time?: Date;
}
