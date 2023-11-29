/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
import { SysOrg } from './sys-org';
/**
 * 
 * @export
 * @interface UpdateOrgInput
 */
export interface UpdateOrgInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateOrgInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateOrgInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateOrgInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateOrgInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateOrgInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateOrgInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof UpdateOrgInput
     */
    tenantId?: number | null;
    /**
     * 父Id
     * @type {number}
     * @memberof UpdateOrgInput
     */
    pid?: number;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateOrgInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateOrgInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateOrgInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof UpdateOrgInput
     */
    status?: StatusEnum;
    /**
     * 机构子项
     * @type {Array<SysOrg>}
     * @memberof UpdateOrgInput
     */
    children?: Array<SysOrg> | null;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateOrgInput
     */
    name: string;
}
