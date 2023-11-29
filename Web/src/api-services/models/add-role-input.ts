/* tslint:disable */
/* eslint-disable */

import { DataScopeEnum } from './data-scope-enum';
import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface AddRoleInput
 */
export interface AddRoleInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddRoleInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddRoleInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddRoleInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddRoleInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddRoleInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddRoleInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof AddRoleInput
     */
    tenantId?: number | null;
    /**
     * 编码
     * @type {string}
     * @memberof AddRoleInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AddRoleInput
     */
    orderNo?: number;
    /**
     * 
     * @type {DataScopeEnum}
     * @memberof AddRoleInput
     */
    dataScope?: DataScopeEnum;
    /**
     * 备注
     * @type {string}
     * @memberof AddRoleInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddRoleInput
     */
    status?: StatusEnum;
    /**
     * 名称
     * @type {string}
     * @memberof AddRoleInput
     */
    name: string;
    /**
     * 菜单Id集合
     * @type {Array<number>}
     * @memberof AddRoleInput
     */
    menuIdList?: Array<number> | null;
}
