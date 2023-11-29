/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface UpdateDictTypeInput
 */
export interface UpdateDictTypeInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateDictTypeInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateDictTypeInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateDictTypeInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateDictTypeInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateDictTypeInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateDictTypeInput
     */
    isDelete?: boolean;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateDictTypeInput
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateDictTypeInput
     */
    code: string;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateDictTypeInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateDictTypeInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof UpdateDictTypeInput
     */
    status?: StatusEnum;
}
