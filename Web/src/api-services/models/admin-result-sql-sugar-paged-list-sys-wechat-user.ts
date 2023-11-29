/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysWechatUser } from './sql-sugar-paged-list-sys-wechat-user';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysWechatUser
 */
export interface AdminResultSqlSugarPagedListSysWechatUser {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysWechatUser
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysWechatUser
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysWechatUser
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysWechatUser}
     * @memberof AdminResultSqlSugarPagedListSysWechatUser
     */
    result?: SqlSugarPagedListSysWechatUser;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysWechatUser
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysWechatUser
     */
    time?: Date;
}
