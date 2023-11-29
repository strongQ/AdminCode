/* tslint:disable */
/* eslint-disable */

import { DbType } from './db-type';
import { StatusEnum } from './status-enum';
import { TenantTypeEnum } from './tenant-type-enum';
/**
 * 
 * @export
 * @interface AddTenantInput
 */
export interface AddTenantInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddTenantInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddTenantInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddTenantInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddTenantInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddTenantInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddTenantInput
     */
    isDelete?: boolean;
    /**
     * 用户Id
     * @type {number}
     * @memberof AddTenantInput
     */
    userId?: number;
    /**
     * 机构Id
     * @type {number}
     * @memberof AddTenantInput
     */
    orgId?: number;
    /**
     * 主机
     * @type {string}
     * @memberof AddTenantInput
     */
    host?: string | null;
    /**
     * 
     * @type {TenantTypeEnum}
     * @memberof AddTenantInput
     */
    tenantType?: TenantTypeEnum;
    /**
     * 
     * @type {DbType}
     * @memberof AddTenantInput
     */
    dbType?: DbType;
    /**
     * 数据库连接
     * @type {string}
     * @memberof AddTenantInput
     */
    connection?: string | null;
    /**
     * 数据库标识
     * @type {string}
     * @memberof AddTenantInput
     */
    configId?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AddTenantInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof AddTenantInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddTenantInput
     */
    status?: StatusEnum;
    /**
     * 电子邮箱
     * @type {string}
     * @memberof AddTenantInput
     */
    email?: string | null;
    /**
     * 电话
     * @type {string}
     * @memberof AddTenantInput
     */
    phone?: string | null;
    /**
     * 租户名称
     * @type {string}
     * @memberof AddTenantInput
     */
    name: string;
    /**
     * 管理员名称
     * @type {string}
     * @memberof AddTenantInput
     */
    adminName: string;
}
