/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListSysConfig } from './sql-sugar-paged-list-sys-config';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListSysConfig
 */
export interface AdminResultSqlSugarPagedListSysConfig {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysConfig
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysConfig
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysConfig
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListSysConfig}
     * @memberof AdminResultSqlSugarPagedListSysConfig
     */
    result?: SqlSugarPagedListSysConfig;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysConfig
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysConfig
     */
    time?: Date;
}
