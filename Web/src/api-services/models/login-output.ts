/* tslint:disable */
/* eslint-disable */

/**
 * 用户登录结果
 * @export
 * @interface LoginOutput
 */
export interface LoginOutput {
    /**
     * 令牌Token
     * @type {string}
     * @memberof LoginOutput
     */
    accessToken?: string | null;
    /**
     * 刷新Token
     * @type {string}
     * @memberof LoginOutput
     */
    refreshToken?: string | null;
}
