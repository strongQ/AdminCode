/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysDictType } from './sql-sugar-paged-list-sys-dict-type';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysDictType
 */
export interface AdminResultSqlSugarPagedListSysDictType {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysDictType
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysDictType
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysDictType
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysDictType}
     * @memberof AdminResultSqlSugarPagedListSysDictType
     */
    result?: SqlSugarPagedListSysDictType;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysDictType
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysDictType
     */
    time?: Date;
}
