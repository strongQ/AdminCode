/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultObject } from '../models';
import { AdminResultString } from '../models';
import { GenAuthUrlInput } from '../models';
import { SignatureInput } from '../models';
import { WechatUserLogin } from '../models';
/**
 * SysWechatApi - axios parameter creator
 * @export
 */
export const SysWechatApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 生成网页授权Url
         * @param {GenAuthUrlInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatGenAuthUrlPost: async (body?: GenAuthUrlInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWechat/genAuthUrl`;
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
         * @summary 获取配置签名参数(wx.config)
         * @param {SignatureInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatGenConfigParaPost: async (body?: SignatureInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWechat/genConfigPara`;
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
         * @summary 微信用户登录OpenId
         * @param {WechatUserLogin} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatOpenIdLoginPost: async (body?: WechatUserLogin, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWechat/openIdLogin`;
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
         * @summary 获取微信用户OpenId
         * @param {string} code Code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatSnsOAuth2Post: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling apiSysWechatSnsOAuth2Post.');
            }
            const localVarPath = `/api/sysWechat/snsOAuth2`;
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

            if (code !== undefined) {
                localVarQueryParameter['Code'] = code;
            }

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
 * SysWechatApi - functional programming interface
 * @export
 */
export const SysWechatApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 生成网页授权Url
         * @param {GenAuthUrlInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatGenAuthUrlPost(body?: GenAuthUrlInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultString>>> {
            const localVarAxiosArgs = await SysWechatApiAxiosParamCreator(configuration).apiSysWechatGenAuthUrlPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取配置签名参数(wx.config)
         * @param {SignatureInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatGenConfigParaPost(body?: SignatureInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWechatApiAxiosParamCreator(configuration).apiSysWechatGenConfigParaPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信用户登录OpenId
         * @param {WechatUserLogin} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatOpenIdLoginPost(body?: WechatUserLogin, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWechatApiAxiosParamCreator(configuration).apiSysWechatOpenIdLoginPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取微信用户OpenId
         * @param {string} code Code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatSnsOAuth2Post(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultString>>> {
            const localVarAxiosArgs = await SysWechatApiAxiosParamCreator(configuration).apiSysWechatSnsOAuth2Post(code, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysWechatApi - factory interface
 * @export
 */
export const SysWechatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 生成网页授权Url
         * @param {GenAuthUrlInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatGenAuthUrlPost(body?: GenAuthUrlInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultString>> {
            return SysWechatApiFp(configuration).apiSysWechatGenAuthUrlPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取配置签名参数(wx.config)
         * @param {SignatureInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatGenConfigParaPost(body?: SignatureInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWechatApiFp(configuration).apiSysWechatGenConfigParaPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信用户登录OpenId
         * @param {WechatUserLogin} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatOpenIdLoginPost(body?: WechatUserLogin, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWechatApiFp(configuration).apiSysWechatOpenIdLoginPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取微信用户OpenId
         * @param {string} code Code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatSnsOAuth2Post(code: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultString>> {
            return SysWechatApiFp(configuration).apiSysWechatSnsOAuth2Post(code, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysWechatApi - object-oriented interface
 * @export
 * @class SysWechatApi
 * @extends {BaseAPI}
 */
export class SysWechatApi extends BaseAPI {
    /**
     * 
     * @summary 生成网页授权Url
     * @param {GenAuthUrlInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatApi
     */
    public async apiSysWechatGenAuthUrlPost(body?: GenAuthUrlInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultString>> {
        return SysWechatApiFp(this.configuration).apiSysWechatGenAuthUrlPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取配置签名参数(wx.config)
     * @param {SignatureInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatApi
     */
    public async apiSysWechatGenConfigParaPost(body?: SignatureInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWechatApiFp(this.configuration).apiSysWechatGenConfigParaPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信用户登录OpenId
     * @param {WechatUserLogin} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatApi
     */
    public async apiSysWechatOpenIdLoginPost(body?: WechatUserLogin, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWechatApiFp(this.configuration).apiSysWechatOpenIdLoginPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取微信用户OpenId
     * @param {string} code Code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatApi
     */
    public async apiSysWechatSnsOAuth2Post(code: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultString>> {
        return SysWechatApiFp(this.configuration).apiSysWechatSnsOAuth2Post(code, options).then((request) => request(this.axios, this.basePath));
    }
}
