/* tslint:disable */
/* eslint-disable */

import { SysLogOp } from './sys-log-op';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysLogOp
 */
export interface SqlSugarPagedListSysLogOp {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysLogOp
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysLogOp
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysLogOp
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysLogOp
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysLogOp>}
     * @memberof SqlSugarPagedListSysLogOp
     */
    items?: Array<SysLogOp> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogOp
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogOp
     */
    hasNextPage?: boolean;
}
