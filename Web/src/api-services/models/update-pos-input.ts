/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface UpdatePosInput
 */
export interface UpdatePosInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdatePosInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdatePosInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdatePosInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdatePosInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdatePosInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdatePosInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof UpdatePosInput
     */
    tenantId?: number | null;
    /**
     * 编码
     * @type {string}
     * @memberof UpdatePosInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdatePosInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdatePosInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof UpdatePosInput
     */
    status?: StatusEnum;
    /**
     * 名称
     * @type {string}
     * @memberof UpdatePosInput
     */
    name: string;
}
