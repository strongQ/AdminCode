/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
import { SysOrg } from './sys-org';
/**
 * 
 * @export
 * @interface AddOrgInput
 */
export interface AddOrgInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddOrgInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddOrgInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddOrgInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddOrgInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddOrgInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddOrgInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof AddOrgInput
     */
    tenantId?: number | null;
    /**
     * 父Id
     * @type {number}
     * @memberof AddOrgInput
     */
    pid?: number;
    /**
     * 编码
     * @type {string}
     * @memberof AddOrgInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AddOrgInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof AddOrgInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddOrgInput
     */
    status?: StatusEnum;
    /**
     * 机构子项
     * @type {Array<SysOrg>}
     * @memberof AddOrgInput
     */
    children?: Array<SysOrg> | null;
    /**
     * 名称
     * @type {string}
     * @memberof AddOrgInput
     */
    name: string;
}
