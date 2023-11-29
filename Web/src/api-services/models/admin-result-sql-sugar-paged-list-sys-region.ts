/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysRegion } from './sql-sugar-paged-list-sys-region';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysRegion
 */
export interface AdminResultSqlSugarPagedListSysRegion {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysRegion
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysRegion
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysRegion
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysRegion}
     * @memberof AdminResultSqlSugarPagedListSysRegion
     */
    result?: SqlSugarPagedListSysRegion;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysRegion
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysRegion
     */
    time?: Date;
}
