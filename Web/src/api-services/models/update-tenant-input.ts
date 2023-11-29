/* tslint:disable */
/* eslint-disable */

import { DbType } from './db-type';
import { StatusEnum } from './status-enum';
import { TenantTypeEnum } from './tenant-type-enum';
/**
 * 
 * @export
 * @interface UpdateTenantInput
 */
export interface UpdateTenantInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateTenantInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateTenantInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateTenantInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateTenantInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateTenantInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateTenantInput
     */
    isDelete?: boolean;
    /**
     * 用户Id
     * @type {number}
     * @memberof UpdateTenantInput
     */
    userId?: number;
    /**
     * 机构Id
     * @type {number}
     * @memberof UpdateTenantInput
     */
    orgId?: number;
    /**
     * 主机
     * @type {string}
     * @memberof UpdateTenantInput
     */
    host?: string | null;
    /**
     * 
     * @type {TenantTypeEnum}
     * @memberof UpdateTenantInput
     */
    tenantType?: TenantTypeEnum;
    /**
     * 
     * @type {DbType}
     * @memberof UpdateTenantInput
     */
    dbType?: DbType;
    /**
     * 数据库连接
     * @type {string}
     * @memberof UpdateTenantInput
     */
    connection?: string | null;
    /**
     * 数据库标识
     * @type {string}
     * @memberof UpdateTenantInput
     */
    configId?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateTenantInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateTenantInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof UpdateTenantInput
     */
    status?: StatusEnum;
    /**
     * 电子邮箱
     * @type {string}
     * @memberof UpdateTenantInput
     */
    email?: string | null;
    /**
     * 电话
     * @type {string}
     * @memberof UpdateTenantInput
     */
    phone?: string | null;
    /**
     * 租户名称
     * @type {string}
     * @memberof UpdateTenantInput
     */
    name: string;
    /**
     * 管理员名称
     * @type {string}
     * @memberof UpdateTenantInput
     */
    adminName: string;
}
