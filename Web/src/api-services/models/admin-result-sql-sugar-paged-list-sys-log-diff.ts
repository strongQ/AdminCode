/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysLogDiff } from './sql-sugar-paged-list-sys-log-diff';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysLogDiff
 */
export interface AdminResultSqlSugarPagedListSysLogDiff {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysLogDiff}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    result?: SqlSugarPagedListSysLogDiff;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    time?: Date;
}
