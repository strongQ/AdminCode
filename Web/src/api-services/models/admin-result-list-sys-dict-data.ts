/* tslint:disable */
/* eslint-disable */

import { SysDictData } from './sys-dict-data';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysDictData
 */
export interface AdminResultListSysDictData {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysDictData
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysDictData
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysDictData
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysDictData>}
     * @memberof AdminResultListSysDictData
     */
    result?: Array<SysDictData> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysDictData
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysDictData
     */
    time?: Date;
}
