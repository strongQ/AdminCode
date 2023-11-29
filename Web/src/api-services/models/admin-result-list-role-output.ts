/* tslint:disable */
/* eslint-disable */

import { RoleOutput } from './role-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListRoleOutput
 */
export interface AdminResultListRoleOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListRoleOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListRoleOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListRoleOutput
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<RoleOutput>}
     * @memberof AdminResultListRoleOutput
     */
    result?: Array<RoleOutput> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListRoleOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListRoleOutput
     */
    time?: Date;
}
