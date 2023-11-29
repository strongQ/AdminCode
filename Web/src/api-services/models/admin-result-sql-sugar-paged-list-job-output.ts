/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListJobOutput } from './sql-sugar-paged-list-job-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListJobOutput
 */
export interface AdminResultSqlSugarPagedListJobOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListJobOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListJobOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListJobOutput
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListJobOutput}
     * @memberof AdminResultSqlSugarPagedListJobOutput
     */
    result?: SqlSugarPagedListJobOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListJobOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListJobOutput
     */
    time?: Date;
}
