/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
import { SysDictType } from './sys-dict-type';
/**
 * 
 * @export
 * @interface UpdateDictDataInput
 */
export interface UpdateDictDataInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateDictDataInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateDictDataInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateDictDataInput
     */
    isDelete?: boolean;
    /**
     * 字典类型Id
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    dictTypeId?: number;
    /**
     * 
     * @type {SysDictType}
     * @memberof UpdateDictDataInput
     */
    dictType?: SysDictType;
    /**
     * 值
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    value: string;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    code: string;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof UpdateDictDataInput
     */
    status?: StatusEnum;
}
