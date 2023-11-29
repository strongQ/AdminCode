/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysLogVis } from './sql-sugar-paged-list-sys-log-vis';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysLogVis
 */
export interface AdminResultSqlSugarPagedListSysLogVis {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysLogVis
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysLogVis
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysLogVis
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysLogVis}
     * @memberof AdminResultSqlSugarPagedListSysLogVis
     */
    result?: SqlSugarPagedListSysLogVis;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysLogVis
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysLogVis
     */
    time?: Date;
}
