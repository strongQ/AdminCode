/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultLoginOutput } from '../models';
import { AdminResultLoginUserOutput } from '../models';
import { AdminResultObject } from '../models';
import { AdminResultString } from '../models';
import { LoginInput } from '../models';
/**
 * SysAuthApi - axios parameter creator
 * @export
 */
export const SysAuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary swagger登录检查
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSwaggerCheckUrlPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/swagger/checkUrl`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary swagger登录提交
         * @param {string} [userName] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSwaggerSubmitUrlPostForm: async (userName?: string, password?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/swagger/submitUrl`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required


            if (userName !== undefined) { 
                localVarFormParams.append('UserName', userName as any);
            }

            if (password !== undefined) { 
                localVarFormParams.append('Password', password as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取验证码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysAuthCaptchaGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysAuth/captcha`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取登录配置
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysAuthLoginConfigGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysAuth/loginConfig`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 用户名/密码：superadmin/123456
         * @summary 登录系统
         * @param {LoginInput} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysAuthLoginPost: async (body: LoginInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiSysAuthLoginPost.');
            }
            const localVarPath = `/api/sysAuth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 退出系统
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysAuthLogoutPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysAuth/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取刷新Token
         * @param {string} accessToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysAuthRefreshTokenAccessTokenGet: async (accessToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accessToken' is not null or undefined
            if (accessToken === null || accessToken === undefined) {
                throw new RequiredError('accessToken','Required parameter accessToken was null or undefined when calling apiSysAuthRefreshTokenAccessTokenGet.');
            }
            const localVarPath = `/api/sysAuth/refreshToken/{accessToken}`
                .replace(`{${"accessToken"}}`, encodeURIComponent(String(accessToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取登录账号
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysAuthUserInfoGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
          
            const localVarPath = `/api/sysAuth/userInfo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysAuthApi - functional programming interface
 * @export
 */
export const SysAuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary swagger登录检查
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSwaggerCheckUrlPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await SysAuthApiAxiosParamCreator(configuration).apiSwaggerCheckUrlPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary swagger登录提交
         * @param {string} [userName] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSwaggerSubmitUrlPostForm(userName?: string, password?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await SysAuthApiAxiosParamCreator(configuration).apiSwaggerSubmitUrlPostForm(userName, password, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取验证码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthCaptchaGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysAuthApiAxiosParamCreator(configuration).apiSysAuthCaptchaGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取登录配置
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthLoginConfigGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysAuthApiAxiosParamCreator(configuration).apiSysAuthLoginConfigGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 用户名/密码：superadmin/123456
         * @summary 登录系统
         * @param {LoginInput} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthLoginPost(body: LoginInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultLoginOutput>>> {
            const localVarAxiosArgs = await SysAuthApiAxiosParamCreator(configuration).apiSysAuthLoginPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 退出系统
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthLogoutPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysAuthApiAxiosParamCreator(configuration).apiSysAuthLogoutPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取刷新Token
         * @param {string} accessToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthRefreshTokenAccessTokenGet(accessToken: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultString>>> {
            const localVarAxiosArgs = await SysAuthApiAxiosParamCreator(configuration).apiSysAuthRefreshTokenAccessTokenGet(accessToken, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取登录账号
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthUserInfoGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultLoginUserOutput>>> {
            const localVarAxiosArgs = await SysAuthApiAxiosParamCreator(configuration).apiSysAuthUserInfoGet(options);
           
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysAuthApi - factory interface
 * @export
 */
export const SysAuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary swagger登录检查
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSwaggerCheckUrlPost(options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return SysAuthApiFp(configuration).apiSwaggerCheckUrlPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary swagger登录提交
         * @param {string} [userName] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSwaggerSubmitUrlPostForm(userName?: string, password?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return SysAuthApiFp(configuration).apiSwaggerSubmitUrlPostForm(userName, password, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取验证码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthCaptchaGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysAuthApiFp(configuration).apiSysAuthCaptchaGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取登录配置
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthLoginConfigGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysAuthApiFp(configuration).apiSysAuthLoginConfigGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 用户名/密码：superadmin/123456
         * @summary 登录系统
         * @param {LoginInput} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthLoginPost(body: LoginInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultLoginOutput>> {
            return SysAuthApiFp(configuration).apiSysAuthLoginPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 退出系统
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthLogoutPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysAuthApiFp(configuration).apiSysAuthLogoutPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取刷新Token
         * @param {string} accessToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthRefreshTokenAccessTokenGet(accessToken: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultString>> {
            return SysAuthApiFp(configuration).apiSysAuthRefreshTokenAccessTokenGet(accessToken, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取登录账号
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysAuthUserInfoGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultLoginUserOutput>> {
            return SysAuthApiFp(configuration).apiSysAuthUserInfoGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysAuthApi - object-oriented interface
 * @export
 * @class SysAuthApi
 * @extends {BaseAPI}
 */
export class SysAuthApi extends BaseAPI {
    /**
     * 
     * @summary swagger登录检查
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysAuthApi
     */
    public async apiSwaggerCheckUrlPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return SysAuthApiFp(this.configuration).apiSwaggerCheckUrlPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary swagger登录提交
     * @param {string} [userName] 
     * @param {string} [password] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysAuthApi
     */
    public async apiSwaggerSubmitUrlPostForm(userName?: string, password?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return SysAuthApiFp(this.configuration).apiSwaggerSubmitUrlPostForm(userName, password, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取验证码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysAuthApi
     */
    public async apiSysAuthCaptchaGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysAuthApiFp(this.configuration).apiSysAuthCaptchaGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取登录配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysAuthApi
     */
    public async apiSysAuthLoginConfigGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysAuthApiFp(this.configuration).apiSysAuthLoginConfigGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 用户名/密码：superadmin/123456
     * @summary 登录系统
     * @param {LoginInput} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysAuthApi
     */
    public async apiSysAuthLoginPost(body: LoginInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultLoginOutput>> {
        return SysAuthApiFp(this.configuration).apiSysAuthLoginPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 退出系统
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysAuthApi
     */
    public async apiSysAuthLogoutPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysAuthApiFp(this.configuration).apiSysAuthLogoutPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取刷新Token
     * @param {string} accessToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysAuthApi
     */
    public async apiSysAuthRefreshTokenAccessTokenGet(accessToken: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultString>> {
        return SysAuthApiFp(this.configuration).apiSysAuthRefreshTokenAccessTokenGet(accessToken, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取登录账号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysAuthApi
     */
    public async apiSysAuthUserInfoGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultLoginUserOutput>> {
        return SysAuthApiFp(this.configuration).apiSysAuthUserInfoGet(options).then((request) => request(this.axios, this.basePath));
    }
}
