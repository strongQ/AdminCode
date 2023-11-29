/* tslint:disable */
/* eslint-disable */

/**
 * 授权角色机构
 * @export
 * @interface RoleOrgInput
 */
export interface RoleOrgInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof RoleOrgInput
     */
    id: number;
    /**
     * 数据范围
     * @type {number}
     * @memberof RoleOrgInput
     */
    dataScope?: number;
    /**
     * 机构Id集合
     * @type {Array<number>}
     * @memberof RoleOrgInput
     */
    orgIdList?: Array<number> | null;
}
