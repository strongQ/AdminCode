/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysDictData } from './sql-sugar-paged-list-sys-dict-data';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysDictData
 */
export interface AdminResultSqlSugarPagedListSysDictData {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysDictData
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysDictData
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysDictData
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysDictData}
     * @memberof AdminResultSqlSugarPagedListSysDictData
     */
    result?: SqlSugarPagedListSysDictData;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysDictData
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysDictData
     */
    time?: Date;
}
