/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
import { SysOrg } from './sys-org';
/**
 * 系统机构表
 * @export
 * @interface SysOrg
 */
export interface SysOrg {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysOrg
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysOrg
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysOrg
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysOrg
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysOrg
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysOrg
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof SysOrg
     */
    tenantId?: number | null;
    /**
     * 父Id
     * @type {number}
     * @memberof SysOrg
     */
    pid?: number;
    /**
     * 名称
     * @type {string}
     * @memberof SysOrg
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof SysOrg
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof SysOrg
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysOrg
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof SysOrg
     */
    status?: StatusEnum;
    /**
     * 机构子项
     * @type {Array<SysOrg>}
     * @memberof SysOrg
     */
    children?: Array<SysOrg> | null;
}
