/* tslint:disable */
/* eslint-disable */

import { SysLogDiff } from './sys-log-diff';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysLogDiff
 */
export interface SqlSugarPagedListSysLogDiff {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysLogDiff
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysLogDiff
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysLogDiff
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysLogDiff
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysLogDiff>}
     * @memberof SqlSugarPagedListSysLogDiff
     */
    items?: Array<SysLogDiff> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogDiff
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogDiff
     */
    hasNextPage?: boolean;
}
