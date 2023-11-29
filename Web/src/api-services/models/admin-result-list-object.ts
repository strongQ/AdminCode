/* tslint:disable */
/* eslint-disable */

/**
 * 全局返回结果
 * @export
 * @interface AdminResultListObject
 */
export interface AdminResultListObject {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListObject
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListObject
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListObject
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<any>}
     * @memberof AdminResultListObject
     */
    result?: Array<any> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListObject
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListObject
     */
    time?: Date;
}
