/* tslint:disable */
/* eslint-disable */

/**
 * 全局返回结果
 * @export
 * @interface AdminResultBoolean
 */
export interface AdminResultBoolean {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultBoolean
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultBoolean
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultBoolean
     */
    message?: string | null;
    /**
     * 数据
     * @type {boolean}
     * @memberof AdminResultBoolean
     */
    result?: boolean;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultBoolean
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultBoolean
     */
    time?: Date;
}
