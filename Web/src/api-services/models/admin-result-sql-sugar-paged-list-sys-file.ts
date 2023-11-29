/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysFile } from './sql-sugar-paged-list-sys-file';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysFile
 */
export interface AdminResultSqlSugarPagedListSysFile {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysFile
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysFile
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysFile
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysFile}
     * @memberof AdminResultSqlSugarPagedListSysFile
     */
    result?: SqlSugarPagedListSysFile;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysFile
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysFile
     */
    time?: Date;
}
