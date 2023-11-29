/* tslint:disable */
/* eslint-disable */

import { SysCodeGen } from './sys-code-gen';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultSysCodeGen
 */
export interface AdminResultSysCodeGen {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultSysCodeGen
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultSysCodeGen
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultSysCodeGen
     */
    message?: string | null;
    /**
     * 
     * @type {SysCodeGen}
     * @memberof AdminResultSysCodeGen
     */
    result?: SysCodeGen;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultSysCodeGen
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultSysCodeGen
     */
    time?: Date;
}
