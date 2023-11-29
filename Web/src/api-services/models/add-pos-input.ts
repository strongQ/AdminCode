/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface AddPosInput
 */
export interface AddPosInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddPosInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddPosInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddPosInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddPosInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddPosInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddPosInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof AddPosInput
     */
    tenantId?: number | null;
    /**
     * 编码
     * @type {string}
     * @memberof AddPosInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AddPosInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof AddPosInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddPosInput
     */
    status?: StatusEnum;
    /**
     * 名称
     * @type {string}
     * @memberof AddPosInput
     */
    name: string;
}
