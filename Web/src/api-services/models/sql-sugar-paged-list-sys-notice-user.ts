/* tslint:disable */
/* eslint-disable */

import { SysNoticeUser } from './sys-notice-user';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysNoticeUser
 */
export interface SqlSugarPagedListSysNoticeUser {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysNoticeUser>}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    items?: Array<SysNoticeUser> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    hasNextPage?: boolean;
}
