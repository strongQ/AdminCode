/* tslint:disable */
/* eslint-disable */

import { MenuOutput } from './menu-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListMenuOutput
 */
export interface AdminResultListMenuOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListMenuOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListMenuOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListMenuOutput
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<MenuOutput>}
     * @memberof AdminResultListMenuOutput
     */
    result?: Array<MenuOutput> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListMenuOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListMenuOutput
     */
    time?: Date;
}
