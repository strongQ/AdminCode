/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface AddDictTypeInput
 */
export interface AddDictTypeInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddDictTypeInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddDictTypeInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddDictTypeInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddDictTypeInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddDictTypeInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddDictTypeInput
     */
    isDelete?: boolean;
    /**
     * 名称
     * @type {string}
     * @memberof AddDictTypeInput
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof AddDictTypeInput
     */
    code: string;
    /**
     * 排序
     * @type {number}
     * @memberof AddDictTypeInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof AddDictTypeInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddDictTypeInput
     */
    status?: StatusEnum;
}
