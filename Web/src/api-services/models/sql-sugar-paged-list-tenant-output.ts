/* tslint:disable */
/* eslint-disable */

import { TenantOutput } from './tenant-output';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListTenantOutput
 */
export interface SqlSugarPagedListTenantOutput {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListTenantOutput
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListTenantOutput
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListTenantOutput
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListTenantOutput
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<TenantOutput>}
     * @memberof SqlSugarPagedListTenantOutput
     */
    items?: Array<TenantOutput> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListTenantOutput
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListTenantOutput
     */
    hasNextPage?: boolean;
}
