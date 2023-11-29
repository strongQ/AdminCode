/* tslint:disable */
/* eslint-disable */

import { SysMenu } from './sys-menu';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysMenu
 */
export interface AdminResultListSysMenu {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysMenu
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysMenu
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysMenu
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysMenu>}
     * @memberof AdminResultListSysMenu
     */
    result?: Array<SysMenu> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysMenu
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysMenu
     */
    time?: Date;
}
