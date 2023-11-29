/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultObject } from '../models';
/**
 * SysServerApi - axios parameter creator
 * @export
 */
export const SysServerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取框架主要程序集
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysServerAssemblyListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysServer/assemblyList`;
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
         * @summary 获取服务器配置信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysServerServerBaseGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysServer/serverBase`;
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
         * @summary 获取服务器磁盘信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysServerServerDiskGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysServer/serverDisk`;
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
         * @summary 获取服务器使用信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysServerServerUsedGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysServer/serverUsed`;
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
 * SysServerApi - functional programming interface
 * @export
 */
export const SysServerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取框架主要程序集
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerAssemblyListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysServerApiAxiosParamCreator(configuration).apiSysServerAssemblyListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取服务器配置信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerBaseGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysServerApiAxiosParamCreator(configuration).apiSysServerServerBaseGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取服务器磁盘信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerDiskGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysServerApiAxiosParamCreator(configuration).apiSysServerServerDiskGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取服务器使用信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerUsedGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysServerApiAxiosParamCreator(configuration).apiSysServerServerUsedGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysServerApi - factory interface
 * @export
 */
export const SysServerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 获取框架主要程序集
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerAssemblyListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysServerApiFp(configuration).apiSysServerAssemblyListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取服务器配置信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerBaseGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysServerApiFp(configuration).apiSysServerServerBaseGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取服务器磁盘信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerDiskGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysServerApiFp(configuration).apiSysServerServerDiskGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取服务器使用信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerUsedGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysServerApiFp(configuration).apiSysServerServerUsedGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysServerApi - object-oriented interface
 * @export
 * @class SysServerApi
 * @extends {BaseAPI}
 */
export class SysServerApi extends BaseAPI {
    /**
     * 
     * @summary 获取框架主要程序集
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysServerApi
     */
    public async apiSysServerAssemblyListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysServerApiFp(this.configuration).apiSysServerAssemblyListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取服务器配置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysServerApi
     */
    public async apiSysServerServerBaseGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysServerApiFp(this.configuration).apiSysServerServerBaseGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取服务器磁盘信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysServerApi
     */
    public async apiSysServerServerDiskGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysServerApiFp(this.configuration).apiSysServerServerDiskGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取服务器使用信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysServerApi
     */
    public async apiSysServerServerUsedGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysServerApiFp(this.configuration).apiSysServerServerUsedGet(options).then((request) => request(this.axios, this.basePath));
    }
}
