/* tslint:disable */
/* eslint-disable */

import { SysCodeGen } from './sys-code-gen';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysCodeGen
 */
export interface SqlSugarPagedListSysCodeGen {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysCodeGen
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysCodeGen
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysCodeGen
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysCodeGen
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysCodeGen>}
     * @memberof SqlSugarPagedListSysCodeGen
     */
    items?: Array<SysCodeGen> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysCodeGen
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysCodeGen
     */
    hasNextPage?: boolean;
}
