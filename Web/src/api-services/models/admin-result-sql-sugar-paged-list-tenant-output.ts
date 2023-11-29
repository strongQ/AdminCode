/* tslint:disable */
/* eslint-disable */

import { SqlSugarPagedListTenantOutput } from './sql-sugar-paged-list-tenant-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSqlSugarPagedListTenantOutput
 */
export interface AdminResultSqlSugarPagedListTenantOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListTenantOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListTenantOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListTenantOutput
     */
    message?: string | null;
    /**
     * 
     * @type {SqlSugarPagedListTenantOutput}
     * @memberof AdminResultSqlSugarPagedListTenantOutput
     */
    result?: SqlSugarPagedListTenantOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListTenantOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListTenantOutput
     */
    time?: Date;
}
