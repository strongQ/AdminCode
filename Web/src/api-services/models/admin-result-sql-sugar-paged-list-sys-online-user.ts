/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysOnlineUser } from './sql-sugar-paged-list-sys-online-user';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysOnlineUser
 */
export interface AdminResultSqlSugarPagedListSysOnlineUser {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysOnlineUser}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    result?: SqlSugarPagedListSysOnlineUser;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    time?: Date;
}
