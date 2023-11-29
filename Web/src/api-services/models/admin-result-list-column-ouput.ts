/* tslint:disable */
/* eslint-disable */

import { ColumnOuput } from './column-ouput';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListColumnOuput
 */
export interface AdminResultListColumnOuput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListColumnOuput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListColumnOuput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListColumnOuput
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<ColumnOuput>}
     * @memberof AdminResultListColumnOuput
     */
    result?: Array<ColumnOuput> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListColumnOuput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListColumnOuput
     */
    time?: Date;
}
