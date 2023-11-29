/* tslint:disable */
/* eslint-disable */

import { SysRole } from './sys-role';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysRole
 */
export interface SqlSugarPagedListSysRole {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysRole
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysRole
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysRole
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysRole
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysRole>}
     * @memberof SqlSugarPagedListSysRole
     */
    items?: Array<SysRole> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysRole
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysRole
     */
    hasNextPage?: boolean;
}
