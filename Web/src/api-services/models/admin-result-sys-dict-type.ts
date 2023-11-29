/* tslint:disable */
/* eslint-disable */

import { SysDictType } from './sys-dict-type';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSysDictType
 */
export interface AdminResultSysDictType {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSysDictType
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSysDictType
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSysDictType
     */
    message?: string | null;
    /**
     * 
     * @type {SysDictType}
     * @memberof AdminResultSysDictType
     */
    result?: SysDictType;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSysDictType
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSysDictType
     */
    time?: Date;
}
