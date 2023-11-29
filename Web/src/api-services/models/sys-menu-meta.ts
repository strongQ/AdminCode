/* tslint:disable */
/* eslint-disable */

/**
 * 菜单Meta配置
 * @export
 * @interface SysMenuMeta
 */
export interface SysMenuMeta {
    /**
     * 标题
     * @type {string}
     * @memberof SysMenuMeta
     */
    title?: string | null;
    /**
     * 图标
     * @type {string}
     * @memberof SysMenuMeta
     */
    icon?: string | null;
    /**
     * 是否内嵌
     * @type {boolean}
     * @memberof SysMenuMeta
     */
    isIframe?: boolean;
    /**
     * 外链链接
     * @type {string}
     * @memberof SysMenuMeta
     */
    isLink?: string | null;
    /**
     * 是否隐藏
     * @type {boolean}
     * @memberof SysMenuMeta
     */
    isHide?: boolean;
    /**
     * 是否缓存
     * @type {boolean}
     * @memberof SysMenuMeta
     */
    isKeepAlive?: boolean;
    /**
     * 是否固定
     * @type {boolean}
     * @memberof SysMenuMeta
     */
    isAffix?: boolean;
}
