/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysCodeGen } from './sql-sugar-paged-list-sys-code-gen';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysCodeGen
 */
export interface AdminResultSqlSugarPagedListSysCodeGen {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysCodeGen
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysCodeGen
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysCodeGen
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysCodeGen}
     * @memberof AdminResultSqlSugarPagedListSysCodeGen
     */
    result?: SqlSugarPagedListSysCodeGen;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysCodeGen
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysCodeGen
     */
    time?: Date;
}
