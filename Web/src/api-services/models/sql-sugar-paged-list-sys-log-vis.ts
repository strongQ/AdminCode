/* tslint:disable */
/* eslint-disable */

import { SysLogVis } from './sys-log-vis';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysLogVis
 */
export interface SqlSugarPagedListSysLogVis {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysLogVis
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysLogVis
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysLogVis
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysLogVis
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysLogVis>}
     * @memberof SqlSugarPagedListSysLogVis
     */
    items?: Array<SysLogVis> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogVis
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogVis
     */
    hasNextPage?: boolean;
}
