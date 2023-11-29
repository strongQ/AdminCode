/* tslint:disable */
/* eslint-disable */

import { SysFile } from './sys-file';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysFile
 */
export interface SqlSugarPagedListSysFile {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysFile
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysFile
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysFile
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysFile
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysFile>}
     * @memberof SqlSugarPagedListSysFile
     */
    items?: Array<SysFile> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysFile
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysFile
     */
    hasNextPage?: boolean;
}
