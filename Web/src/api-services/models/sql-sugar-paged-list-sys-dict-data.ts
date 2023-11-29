/* tslint:disable */
/* eslint-disable */

import { SysDictData } from './sys-dict-data';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysDictData
 */
export interface SqlSugarPagedListSysDictData {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysDictData
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysDictData
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysDictData
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysDictData
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysDictData>}
     * @memberof SqlSugarPagedListSysDictData
     */
    items?: Array<SysDictData> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysDictData
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysDictData
     */
    hasNextPage?: boolean;
}
