/* tslint:disable */
/* eslint-disable */

/**
 * 授权用户角色
 * @export
 * @interface UserRoleInput
 */
export interface UserRoleInput {
    /**
     * 用户Id
     * @type {number}
     * @memberof UserRoleInput
     */
    userId?: number;
    /**
     * 角色Id集合
     * @type {Array<number>}
     * @memberof UserRoleInput
     */
    roleIdList?: Array<number> | null;
}
