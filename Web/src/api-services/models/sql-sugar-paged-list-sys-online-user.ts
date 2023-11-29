/* tslint:disable */
/* eslint-disable */

import { SysOnlineUser } from './sys-online-user';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysOnlineUser
 */
export interface SqlSugarPagedListSysOnlineUser {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysOnlineUser
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysOnlineUser
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysOnlineUser
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysOnlineUser
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysOnlineUser>}
     * @memberof SqlSugarPagedListSysOnlineUser
     */
    items?: Array<SysOnlineUser> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysOnlineUser
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysOnlineUser
     */
    hasNextPage?: boolean;
}
