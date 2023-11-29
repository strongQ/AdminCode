/* tslint:disable */
/* eslint-disable */

import { SysDictType } from './sys-dict-type';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysDictType
 */
export interface AdminResultListSysDictType {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysDictType
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysDictType
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysDictType
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysDictType>}
     * @memberof AdminResultListSysDictType
     */
    result?: Array<SysDictType> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysDictType
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysDictType
     */
    time?: Date;
}
