/* tslint:disable */
/* eslint-disable */

import { SysRegion } from './sys-region';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysRegion
 */
export interface SqlSugarPagedListSysRegion {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysRegion
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysRegion
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysRegion
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysRegion
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysRegion>}
     * @memberof SqlSugarPagedListSysRegion
     */
    items?: Array<SysRegion> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysRegion
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysRegion
     */
    hasNextPage?: boolean;
}
