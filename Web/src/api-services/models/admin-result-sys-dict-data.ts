/* tslint:disable */
/* eslint-disable */

import { SysDictData } from './sys-dict-data';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSysDictData
 */
export interface AdminResultSysDictData {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSysDictData
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSysDictData
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSysDictData
     */
    message?: string | null;
    /**
     * 
     * @type {SysDictData}
     * @memberof AdminResultSysDictData
     */
    result?: SysDictData;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSysDictData
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSysDictData
     */
    time?: Date;
}
