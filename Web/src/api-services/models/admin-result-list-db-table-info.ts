/* tslint:disable */
/* eslint-disable */

import { DbTableInfo } from './db-table-info';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListDbTableInfo
 */
export interface AdminResultListDbTableInfo {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListDbTableInfo
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListDbTableInfo
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListDbTableInfo
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<DbTableInfo>}
     * @memberof AdminResultListDbTableInfo
     */
    result?: Array<DbTableInfo> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListDbTableInfo
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListDbTableInfo
     */
    time?: Date;
}
