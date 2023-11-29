/* tslint:disable */
/* eslint-disable */

import { SysOrg } from './sys-org';
import { SysPos } from './sys-pos';
/**
 * 系统用户扩展机构表
 * @export
 * @interface SysUserExtOrg
 */
export interface SysUserExtOrg {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysUserExtOrg
     */
    id?: number;
    /**
     * 用户Id
     * @type {number}
     * @memberof SysUserExtOrg
     */
    userId?: number;
    /**
     * 机构Id
     * @type {number}
     * @memberof SysUserExtOrg
     */
    orgId?: number;
    /**
     * 
     * @type {SysOrg}
     * @memberof SysUserExtOrg
     */
    sysOrg?: SysOrg;
    /**
     * 职位Id
     * @type {number}
     * @memberof SysUserExtOrg
     */
    posId?: number;
    /**
     * 
     * @type {SysPos}
     * @memberof SysUserExtOrg
     */
    sysPos?: SysPos;
    /**
     * 工号
     * @type {string}
     * @memberof SysUserExtOrg
     */
    jobNum?: string | null;
    /**
     * 职级
     * @type {string}
     * @memberof SysUserExtOrg
     */
    posLevel?: string | null;
    /**
     * 入职日期
     * @type {Date}
     * @memberof SysUserExtOrg
     */
    joinDate?: Date | null;
}
