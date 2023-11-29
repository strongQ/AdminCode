/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysLogOp } from './sql-sugar-paged-list-sys-log-op';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysLogOp
 */
export interface AdminResultSqlSugarPagedListSysLogOp {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysLogOp
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysLogOp
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysLogOp
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysLogOp}
     * @memberof AdminResultSqlSugarPagedListSysLogOp
     */
    result?: SqlSugarPagedListSysLogOp;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysLogOp
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysLogOp
     */
    time?: Date;
}
