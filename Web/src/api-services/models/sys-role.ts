/* tslint:disable */
/* eslint-disable */

import { DataScopeEnum } from './data-scope-enum';
import { StatusEnum } from './status-enum';
/**
 * 系统角色表
 * @export
 * @interface SysRole
 */
export interface SysRole {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysRole
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysRole
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysRole
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysRole
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysRole
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysRole
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof SysRole
     */
    tenantId?: number | null;
    /**
     * 名称
     * @type {string}
     * @memberof SysRole
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof SysRole
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof SysRole
     */
    orderNo?: number;
    /**
     * 
     * @type {DataScopeEnum}
     * @memberof SysRole
     */
    dataScope?: DataScopeEnum;
    /**
     * 备注
     * @type {string}
     * @memberof SysRole
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof SysRole
     */
    status?: StatusEnum;
}
