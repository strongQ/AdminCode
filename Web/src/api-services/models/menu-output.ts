/* tslint:disable */
/* eslint-disable */

import { MenuOutput } from './menu-output';
import { MenuTypeEnum } from './menu-type-enum';
import { StatusEnum } from './status-enum';
import { SysMenuMeta } from './sys-menu-meta';
/**
 * 系统菜单返回结果
 * @export
 * @interface MenuOutput
 */
export interface MenuOutput {
    /**
     * Id
     * @type {number}
     * @memberof MenuOutput
     */
    id?: number;
    /**
     * 父Id
     * @type {number}
     * @memberof MenuOutput
     */
    pid?: number;
    /**
     * 
     * @type {MenuTypeEnum}
     * @memberof MenuOutput
     */
    type?: MenuTypeEnum;
    /**
     * 名称
     * @type {string}
     * @memberof MenuOutput
     */
    name?: string | null;
    /**
     * 路由地址
     * @type {string}
     * @memberof MenuOutput
     */
    path?: string | null;
    /**
     * 组件路径
     * @type {string}
     * @memberof MenuOutput
     */
    component?: string | null;
    /**
     * 权限标识
     * @type {string}
     * @memberof MenuOutput
     */
    permission?: string | null;
    /**
     * 重定向
     * @type {string}
     * @memberof MenuOutput
     */
    redirect?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof MenuOutput
     */
    orderNo?: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof MenuOutput
     */
    status?: StatusEnum;
    /**
     * 备注
     * @type {string}
     * @memberof MenuOutput
     */
    remark?: string | null;
    /**
     * 
     * @type {SysMenuMeta}
     * @memberof MenuOutput
     */
    meta?: SysMenuMeta;
    /**
     * 菜单子项
     * @type {Array<MenuOutput>}
     * @memberof MenuOutput
     */
    children?: Array<MenuOutput> | null;
}
