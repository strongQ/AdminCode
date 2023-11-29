/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
import { SysDictType } from './sys-dict-type';
/**
 * 系统字典值表
 * @export
 * @interface SysDictData
 */
export interface SysDictData {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysDictData
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysDictData
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysDictData
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysDictData
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysDictData
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysDictData
     */
    isDelete?: boolean;
    /**
     * 字典类型Id
     * @type {number}
     * @memberof SysDictData
     */
    dictTypeId?: number;
    /**
     * 
     * @type {SysDictType}
     * @memberof SysDictData
     */
    dictType?: SysDictType;
    /**
     * 值
     * @type {string}
     * @memberof SysDictData
     */
    value: string;
    /**
     * 编码
     * @type {string}
     * @memberof SysDictData
     */
    code: string;
    /**
     * 排序
     * @type {number}
     * @memberof SysDictData
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysDictData
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof SysDictData
     */
    status?: StatusEnum;
}
