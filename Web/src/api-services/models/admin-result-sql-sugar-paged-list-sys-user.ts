/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysUser } from './sql-sugar-paged-list-sys-user';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysUser
 */
export interface AdminResultSqlSugarPagedListSysUser {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysUser
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysUser
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysUser
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysUser}
     * @memberof AdminResultSqlSugarPagedListSysUser
     */
    result?: SqlSugarPagedListSysUser;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysUser
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysUser
     */
    time?: Date;
}
