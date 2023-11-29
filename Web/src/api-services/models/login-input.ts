/* tslint:disable */
/* eslint-disable */

/**
 * 用户登录参数
 * @export
 * @interface LoginInput
 */
export interface LoginInput {
    /**
     * 账号
     * @type {string}
     * @memberof LoginInput
     */
    account: string;
    /**
     * 密码
     * @type {string}
     * @memberof LoginInput
     */
    password: string;
    /**
     * 验证码Id
     * @type {number}
     * @memberof LoginInput
     */
    codeId?: number;
    /**
     * 验证码
     * @type {string}
     * @memberof LoginInput
     */
    code?: string | null;
}
