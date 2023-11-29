/* tslint:disable */
/* eslint-disable */

import { TableOutput } from './table-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListTableOutput
 */
export interface AdminResultListTableOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListTableOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListTableOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListTableOutput
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<TableOutput>}
     * @memberof AdminResultListTableOutput
     */
    result?: Array<TableOutput> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListTableOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListTableOutput
     */
    time?: Date;
}
