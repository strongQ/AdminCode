/* tslint:disable */
/* eslint-disable */

import { SysWechatUser } from './sys-wechat-user';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysWechatUser
 */
export interface SqlSugarPagedListSysWechatUser {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysWechatUser
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysWechatUser
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysWechatUser
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysWechatUser
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysWechatUser>}
     * @memberof SqlSugarPagedListSysWechatUser
     */
    items?: Array<SysWechatUser> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysWechatUser
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysWechatUser
     */
    hasNextPage?: boolean;
}
