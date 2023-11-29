/* tslint:disable */
/* eslint-disable */

/**
 * 授权角色菜单
 * @export
 * @interface RoleMenuInput
 */
export interface RoleMenuInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof RoleMenuInput
     */
    id: number;
    /**
     * 菜单Id集合
     * @type {Array<number>}
     * @memberof RoleMenuInput
     */
    menuIdList?: Array<number> | null;
}
