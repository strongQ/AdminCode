/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultInt32 } from '../models';
import { AdminResultListString } from '../models';
import { AdminResultObject } from '../models';
/**
 * SysCacheApi - axios parameter creator
 * @export
 */
export const SysCacheApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 根据键名前缀删除缓存
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheDeleteByPreKeyPrefixKeyPost: async (prefixKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'prefixKey' is not null or undefined
            if (prefixKey === null || prefixKey === undefined) {
                throw new RequiredError('prefixKey','Required parameter prefixKey was null or undefined when calling apiSysCacheDeleteByPreKeyPrefixKeyPost.');
            }
            const localVarPath = `/api/sysCache/deleteByPreKey/{prefixKey}`
                .replace(`{${"prefixKey"}}`, encodeURIComponent(String(prefixKey)));
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
         * @summary 删除缓存
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheDeleteKeyPost: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiSysCacheDeleteKeyPost.');
            }
            const localVarPath = `/api/sysCache/delete/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
         * @summary 获取缓存键名集合
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheKeyListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCache/keyList`;
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
         * @summary 获取缓存值
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheValueKeyGet: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiSysCacheValueKeyGet.');
            }
            const localVarPath = `/api/sysCache/value/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
 * SysCacheApi - functional programming interface
 * @export
 */
export const SysCacheApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 根据键名前缀删除缓存
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt32>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除缓存
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheDeleteKeyPost(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheDeleteKeyPost(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取缓存键名集合
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheKeyListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListString>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheKeyListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取缓存值
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheValueKeyGet(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheValueKeyGet(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysCacheApi - factory interface
 * @export
 */
export const SysCacheApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 根据键名前缀删除缓存
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt32>> {
            return SysCacheApiFp(configuration).apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除缓存
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheDeleteKeyPost(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysCacheApiFp(configuration).apiSysCacheDeleteKeyPost(key, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取缓存键名集合
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheKeyListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListString>> {
            return SysCacheApiFp(configuration).apiSysCacheKeyListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取缓存值
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheValueKeyGet(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysCacheApiFp(configuration).apiSysCacheValueKeyGet(key, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysCacheApi - object-oriented interface
 * @export
 * @class SysCacheApi
 * @extends {BaseAPI}
 */
export class SysCacheApi extends BaseAPI {
    /**
     * 
     * @summary 根据键名前缀删除缓存
     * @param {string} prefixKey 键名前缀
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt32>> {
        return SysCacheApiFp(this.configuration).apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除缓存
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheDeleteKeyPost(key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysCacheApiFp(this.configuration).apiSysCacheDeleteKeyPost(key, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取缓存键名集合
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheKeyListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListString>> {
        return SysCacheApiFp(this.configuration).apiSysCacheKeyListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取缓存值
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheValueKeyGet(key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysCacheApiFp(this.configuration).apiSysCacheValueKeyGet(key, options).then((request) => request(this.axios, this.basePath));
    }
}
