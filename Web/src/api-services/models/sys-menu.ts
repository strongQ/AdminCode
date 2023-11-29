/* tslint:disable */
/* eslint-disable */

import { MenuTypeEnum } from './menu-type-enum';
import { StatusEnum } from './status-enum';
import { SysMenu } from './sys-menu';
/**
 * 系统菜单表
 * @export
 * @interface SysMenu
 */
export interface SysMenu {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysMenu
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysMenu
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysMenu
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysMenu
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysMenu
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysMenu
     */
    isDelete?: boolean;
    /**
     * 父Id
     * @type {number}
     * @memberof SysMenu
     */
    pid?: number;
    /**
     * 
     * @type {MenuTypeEnum}
     * @memberof SysMenu
     */
    type?: MenuTypeEnum;
    /**
     * 名称
     * @type {string}
     * @memberof SysMenu
     */
    name?: string | null;
    /**
     * 路由地址
     * @type {string}
     * @memberof SysMenu
     */
    path?: string | null;
    /**
     * 组件路径
     * @type {string}
     * @memberof SysMenu
     */
    component?: string | null;
    /**
     * 重定向
     * @type {string}
     * @memberof SysMenu
     */
    redirect?: string | null;
    /**
     * 权限标识
     * @type {string}
     * @memberof SysMenu
     */
    permission?: string | null;
    /**
     * 标题
     * @type {string}
     * @memberof SysMenu
     */
    title: string;
    /**
     * 图标
     * @type {string}
     * @memberof SysMenu
     */
    icon?: string | null;
    /**
     * 是否内嵌
     * @type {boolean}
     * @memberof SysMenu
     */
    isIframe?: boolean;
    /**
     * 外链链接
     * @type {string}
     * @memberof SysMenu
     */
    outLink?: string | null;
    /**
     * 是否隐藏
     * @type {boolean}
     * @memberof SysMenu
     */
    isHide?: boolean;
    /**
     * 是否缓存
     * @type {boolean}
     * @memberof SysMenu
     */
    isKeepAlive?: boolean;
    /**
     * 是否固定
     * @type {boolean}
     * @memberof SysMenu
     */
    isAffix?: boolean;
    /**
     * 排序
     * @type {number}
     * @memberof SysMenu
     */
    orderNo?: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof SysMenu
     */
    status?: StatusEnum;
    /**
     * 备注
     * @type {string}
     * @memberof SysMenu
     */
    remark?: string | null;
    /**
     * 菜单子项
     * @type {Array<SysMenu>}
     * @memberof SysMenu
     */
    children?: Array<SysMenu> | null;
}
