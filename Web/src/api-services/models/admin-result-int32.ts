/* tslint:disable */
/* eslint-disable */

/**
 * 全局返回结果
 * @export
 * @interface AdminResultInt32
 */
export interface AdminResultInt32 {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultInt32
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultInt32
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultInt32
     */
    message?: string | null;
    /**
     * 数据
     * @type {number}
     * @memberof AdminResultInt32
     */
    result?: number;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultInt32
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultInt32
     */
    time?: Date;
}
