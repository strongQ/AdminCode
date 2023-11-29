/* tslint:disable */
/* eslint-disable */

import { JobOutput } from './job-output';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListJobOutput
 */
export interface SqlSugarPagedListJobOutput {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListJobOutput
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListJobOutput
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListJobOutput
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListJobOutput
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<JobOutput>}
     * @memberof SqlSugarPagedListJobOutput
     */
    items?: Array<JobOutput> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListJobOutput
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListJobOutput
     */
    hasNextPage?: boolean;
}
