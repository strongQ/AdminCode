/* tslint:disable */
/* eslint-disable */

import { DataScopeEnum } from './data-scope-enum';
import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface UpdateRoleInput
 */
export interface UpdateRoleInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateRoleInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateRoleInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateRoleInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateRoleInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateRoleInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateRoleInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof UpdateRoleInput
     */
    tenantId?: number | null;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateRoleInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateRoleInput
     */
    orderNo?: number;
    /**
     * 
     * @type {DataScopeEnum}
     * @memberof UpdateRoleInput
     */
    dataScope?: DataScopeEnum;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateRoleInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof UpdateRoleInput
     */
    status?: StatusEnum;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateRoleInput
     */
    name: string;
    /**
     * 菜单Id集合
     * @type {Array<number>}
     * @memberof UpdateRoleInput
     */
    menuIdList?: Array<number> | null;
}
