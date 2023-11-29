/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
import { SysDictType } from './sys-dict-type';
/**
 * 
 * @export
 * @interface AddDictDataInput
 */
export interface AddDictDataInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddDictDataInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddDictDataInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddDictDataInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddDictDataInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddDictDataInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddDictDataInput
     */
    isDelete?: boolean;
    /**
     * 字典类型Id
     * @type {number}
     * @memberof AddDictDataInput
     */
    dictTypeId?: number;
    /**
     * 
     * @type {SysDictType}
     * @memberof AddDictDataInput
     */
    dictType?: SysDictType;
    /**
     * 值
     * @type {string}
     * @memberof AddDictDataInput
     */
    value: string;
    /**
     * 编码
     * @type {string}
     * @memberof AddDictDataInput
     */
    code: string;
    /**
     * 排序
     * @type {number}
     * @memberof AddDictDataInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof AddDictDataInput
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddDictDataInput
     */
    status?: StatusEnum;
}
