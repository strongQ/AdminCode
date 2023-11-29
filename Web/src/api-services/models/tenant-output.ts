/* tslint:disable */
/* eslint-disable */

import { DbType } from './db-type';
import { StatusEnum } from './status-enum';
import { TenantTypeEnum } from './tenant-type-enum';
/**
 * 
 * @export
 * @interface TenantOutput
 */
export interface TenantOutput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof TenantOutput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof TenantOutput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof TenantOutput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof TenantOutput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof TenantOutput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof TenantOutput
     */
    isDelete?: boolean;
    /**
     * 用户Id
     * @type {number}
     * @memberof TenantOutput
     */
    userId?: number;
    /**
     * 机构Id
     * @type {number}
     * @memberof TenantOutput
     */
    orgId?: number;
    /**
     * 主机
     * @type {string}
     * @memberof TenantOutput
     */
    host?: string | null;
    /**
     * 
     * @type {TenantTypeEnum}
     * @memberof TenantOutput
     */
    tenantType?: TenantTypeEnum;
    /**
     * 
     * @type {DbType}
     * @memberof TenantOutput
     */
    dbType?: DbType;
    /**
     * 数据库连接
     * @type {string}
     * @memberof TenantOutput
     */
    connection?: string | null;
    /**
     * 数据库标识
     * @type {string}
     * @memberof TenantOutput
     */
    configId?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof TenantOutput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof TenantOutput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof TenantOutput
     */
    status?: StatusEnum;
    /**
     * 租户名称
     * @type {string}
     * @memberof TenantOutput
     */
    name?: string | null;
    /**
     * 管理员
     * @type {string}
     * @memberof TenantOutput
     */
    adminName?: string | null;
    /**
     * 电子邮箱
     * @type {string}
     * @memberof TenantOutput
     */
    email?: string | null;
    /**
     * 电话
     * @type {string}
     * @memberof TenantOutput
     */
    phone?: string | null;
}
