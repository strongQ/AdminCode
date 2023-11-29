/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysNoticeUser } from './sql-sugar-paged-list-sys-notice-user';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysNoticeUser
 */
export interface AdminResultSqlSugarPagedListSysNoticeUser {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysNoticeUser
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysNoticeUser
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysNoticeUser
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysNoticeUser}
     * @memberof AdminResultSqlSugarPagedListSysNoticeUser
     */
    result?: SqlSugarPagedListSysNoticeUser;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysNoticeUser
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysNoticeUser
     */
    time?: Date;
}
