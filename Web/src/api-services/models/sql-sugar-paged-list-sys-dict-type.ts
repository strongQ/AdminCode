/* tslint:disable */
/* eslint-disable */

import { SysDictType } from './sys-dict-type';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysDictType
 */
export interface SqlSugarPagedListSysDictType {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysDictType
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysDictType
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysDictType
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysDictType
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysDictType>}
     * @memberof SqlSugarPagedListSysDictType
     */
    items?: Array<SysDictType> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysDictType
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysDictType
     */
    hasNextPage?: boolean;
}
