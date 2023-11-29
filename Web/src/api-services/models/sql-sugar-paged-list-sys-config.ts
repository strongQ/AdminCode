/* tslint:disable */
/* eslint-disable */

import { SysConfig } from './sys-config';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysConfig
 */
export interface SqlSugarPagedListSysConfig {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysConfig
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysConfig
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysConfig
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysConfig
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysConfig>}
     * @memberof SqlSugarPagedListSysConfig
     */
    items?: Array<SysConfig> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysConfig
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysConfig
     */
    hasNextPage?: boolean;
}
