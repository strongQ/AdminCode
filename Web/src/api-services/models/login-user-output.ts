/* tslint:disable */
/* eslint-disable */

/**
 * 用户登录信息
 * @export
 * @interface LoginUserOutput
 */
export interface LoginUserOutput {
    /**
     * 账号名称
     * @type {string}
     * @memberof LoginUserOutput
     */
    account?: string | null;
    /**
     * 真实姓名
     * @type {string}
     * @memberof LoginUserOutput
     */
    realName?: string | null;
    /**
     * 头像
     * @type {string}
     * @memberof LoginUserOutput
     */
    avatar?: string | null;
    /**
     * 个人简介
     * @type {string}
     * @memberof LoginUserOutput
     */
    introduction?: string | null;
    /**
     * 地址
     * @type {string}
     * @memberof LoginUserOutput
     */
    address?: string | null;
    /**
     * 电子签名
     * @type {string}
     * @memberof LoginUserOutput
     */
    signature?: string | null;
    /**
     * 机构Id
     * @type {number}
     * @memberof LoginUserOutput
     */
    orgId?: number;
    /**
     * 机构名称
     * @type {string}
     * @memberof LoginUserOutput
     */
    orgName?: string | null;
    /**
     * 职位名称
     * @type {string}
     * @memberof LoginUserOutput
     */
    posName?: string | null;
    /**
     * 按钮权限集合
     * @type {Array<string>}
     * @memberof LoginUserOutput
     */
    buttons?: Array<string> | null;
}
