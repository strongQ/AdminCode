/* tslint:disable */
/* eslint-disable */

import { SysUser } from './sys-user';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysUser
 */
export interface SqlSugarPagedListSysUser {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysUser
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysUser
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysUser
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysUser
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysUser>}
     * @memberof SqlSugarPagedListSysUser
     */
    items?: Array<SysUser> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysUser
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysUser
     */
    hasNextPage?: boolean;
}
