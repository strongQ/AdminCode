/* tslint:disable */
/* eslint-disable */

import { DatabaseOutput } from './database-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListDatabaseOutput
 */
export interface AdminResultListDatabaseOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListDatabaseOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListDatabaseOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListDatabaseOutput
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<DatabaseOutput>}
     * @memberof AdminResultListDatabaseOutput
     */
    result?: Array<DatabaseOutput> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListDatabaseOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListDatabaseOutput
     */
    time?: Date;
}
