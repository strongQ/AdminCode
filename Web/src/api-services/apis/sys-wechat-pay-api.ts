/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultObject } from '../models';
import { AdminResultSysWechatPay } from '../models';
import { AdminResultWechatPayOutput } from '../models';
import { WechatPayParaInput } from '../models';
import { WechatPayTransactionInput } from '../models';
/**
 * SysWechatPayApi - axios parameter creator
 * @export
 */
export const SysWechatPayApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 生成JSAPI调起支付所需参数
         * @param {WechatPayParaInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatPayGenerateParametersForJsapiPayPost: async (body?: WechatPayParaInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWechatPay/generateParametersForJsapiPay`;
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
         * @summary 微信支付成功回调(商户直连)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatPayPayCallBackPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWechatPay/payCallBack`;
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
         * @summary 获取支付订单详情
         * @param {string} tradeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatPayPayInfoTradeIdGet: async (tradeId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tradeId' is not null or undefined
            if (tradeId === null || tradeId === undefined) {
                throw new RequiredError('tradeId','Required parameter tradeId was null or undefined when calling apiSysWechatPayPayInfoTradeIdGet.');
            }
            const localVarPath = `/api/sysWechatPay/payInfo/{tradeId}`
                .replace(`{${"tradeId"}}`, encodeURIComponent(String(tradeId)));
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
         * @summary 微信支付成功回调(服务商模式)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatPayPayPartnerCallBackPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWechatPay/payPartnerCallBack`;
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
         * @summary 微信支付统一下单获取Id(服务商模式)
         * @param {WechatPayTransactionInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatPayPayPartnerTransactionPost: async (body?: WechatPayTransactionInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWechatPay/payPartnerTransaction`;
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
         * @summary 微信支付统一下单获取Id(商户直连)
         * @param {WechatPayTransactionInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWechatPayPayTransactionPost: async (body?: WechatPayTransactionInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWechatPay/payTransaction`;
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
    }
};

/**
 * SysWechatPayApi - functional programming interface
 * @export
 */
export const SysWechatPayApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 生成JSAPI调起支付所需参数
         * @param {WechatPayParaInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayGenerateParametersForJsapiPayPost(body?: WechatPayParaInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWechatPayApiAxiosParamCreator(configuration).apiSysWechatPayGenerateParametersForJsapiPayPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信支付成功回调(商户直连)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayCallBackPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultWechatPayOutput>>> {
            const localVarAxiosArgs = await SysWechatPayApiAxiosParamCreator(configuration).apiSysWechatPayPayCallBackPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取支付订单详情
         * @param {string} tradeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayInfoTradeIdGet(tradeId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSysWechatPay>>> {
            const localVarAxiosArgs = await SysWechatPayApiAxiosParamCreator(configuration).apiSysWechatPayPayInfoTradeIdGet(tradeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信支付成功回调(服务商模式)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayPartnerCallBackPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysWechatPayApiAxiosParamCreator(configuration).apiSysWechatPayPayPartnerCallBackPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信支付统一下单获取Id(服务商模式)
         * @param {WechatPayTransactionInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayPartnerTransactionPost(body?: WechatPayTransactionInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWechatPayApiAxiosParamCreator(configuration).apiSysWechatPayPayPartnerTransactionPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信支付统一下单获取Id(商户直连)
         * @param {WechatPayTransactionInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayTransactionPost(body?: WechatPayTransactionInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWechatPayApiAxiosParamCreator(configuration).apiSysWechatPayPayTransactionPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysWechatPayApi - factory interface
 * @export
 */
export const SysWechatPayApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 生成JSAPI调起支付所需参数
         * @param {WechatPayParaInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayGenerateParametersForJsapiPayPost(body?: WechatPayParaInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWechatPayApiFp(configuration).apiSysWechatPayGenerateParametersForJsapiPayPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信支付成功回调(商户直连)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayCallBackPost(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultWechatPayOutput>> {
            return SysWechatPayApiFp(configuration).apiSysWechatPayPayCallBackPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取支付订单详情
         * @param {string} tradeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayInfoTradeIdGet(tradeId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSysWechatPay>> {
            return SysWechatPayApiFp(configuration).apiSysWechatPayPayInfoTradeIdGet(tradeId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信支付成功回调(服务商模式)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayPartnerCallBackPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysWechatPayApiFp(configuration).apiSysWechatPayPayPartnerCallBackPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信支付统一下单获取Id(服务商模式)
         * @param {WechatPayTransactionInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayPartnerTransactionPost(body?: WechatPayTransactionInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWechatPayApiFp(configuration).apiSysWechatPayPayPartnerTransactionPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信支付统一下单获取Id(商户直连)
         * @param {WechatPayTransactionInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWechatPayPayTransactionPost(body?: WechatPayTransactionInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWechatPayApiFp(configuration).apiSysWechatPayPayTransactionPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysWechatPayApi - object-oriented interface
 * @export
 * @class SysWechatPayApi
 * @extends {BaseAPI}
 */
export class SysWechatPayApi extends BaseAPI {
    /**
     * 
     * @summary 生成JSAPI调起支付所需参数
     * @param {WechatPayParaInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatPayApi
     */
    public async apiSysWechatPayGenerateParametersForJsapiPayPost(body?: WechatPayParaInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWechatPayApiFp(this.configuration).apiSysWechatPayGenerateParametersForJsapiPayPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信支付成功回调(商户直连)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatPayApi
     */
    public async apiSysWechatPayPayCallBackPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultWechatPayOutput>> {
        return SysWechatPayApiFp(this.configuration).apiSysWechatPayPayCallBackPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取支付订单详情
     * @param {string} tradeId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatPayApi
     */
    public async apiSysWechatPayPayInfoTradeIdGet(tradeId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSysWechatPay>> {
        return SysWechatPayApiFp(this.configuration).apiSysWechatPayPayInfoTradeIdGet(tradeId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信支付成功回调(服务商模式)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatPayApi
     */
    public async apiSysWechatPayPayPartnerCallBackPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysWechatPayApiFp(this.configuration).apiSysWechatPayPayPartnerCallBackPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信支付统一下单获取Id(服务商模式)
     * @param {WechatPayTransactionInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatPayApi
     */
    public async apiSysWechatPayPayPartnerTransactionPost(body?: WechatPayTransactionInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWechatPayApiFp(this.configuration).apiSysWechatPayPayPartnerTransactionPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信支付统一下单获取Id(商户直连)
     * @param {WechatPayTransactionInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWechatPayApi
     */
    public async apiSysWechatPayPayTransactionPost(body?: WechatPayTransactionInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWechatPayApiFp(this.configuration).apiSysWechatPayPayTransactionPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
