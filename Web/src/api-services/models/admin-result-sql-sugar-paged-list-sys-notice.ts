/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysNotice } from './sql-sugar-paged-list-sys-notice';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysNotice
 */
export interface AdminResultSqlSugarPagedListSysNotice {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysNotice
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysNotice
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysNotice
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysNotice}
     * @memberof AdminResultSqlSugarPagedListSysNotice
     */
    result?: SqlSugarPagedListSysNotice;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysNotice
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysNotice
     */
    time?: Date;
}
