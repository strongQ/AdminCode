/* tslint:disable */
/* eslint-disable */

/**
 * 全局返回结果
 * @export
 * @interface AdminResultObject
 */
export interface AdminResultObject {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultObject
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultObject
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultObject
     */
    message?: string | null;
    /**
     * 数据
     * @type {any}
     * @memberof AdminResultObject
     */
    result?: any | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultObject
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultObject
     */
    time?: Date;
}
