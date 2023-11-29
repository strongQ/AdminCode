/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 系统字典类型表
 * @export
 * @interface SysDictType
 */
export interface SysDictType {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysDictType
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysDictType
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysDictType
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysDictType
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysDictType
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysDictType
     */
    isDelete?: boolean;
    /**
     * 名称
     * @type {string}
     * @memberof SysDictType
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof SysDictType
     */
    code: string;
    /**
     * 排序
     * @type {number}
     * @memberof SysDictType
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysDictType
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof SysDictType
     */
    status?: StatusEnum;
}
