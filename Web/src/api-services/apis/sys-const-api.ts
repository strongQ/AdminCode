/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultListConstOutput } from '../models';
/**
 * SysConstApi - axios parameter creator
 * @export
 */
export const SysConstApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 根据类名获取常量数据
         * @param {string} typeName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysConstDataTypeNameGet: async (typeName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'typeName' is not null or undefined
            if (typeName === null || typeName === undefined) {
                throw new RequiredError('typeName','Required parameter typeName was null or undefined when calling apiSysConstDataTypeNameGet.');
            }
            const localVarPath = `/api/sysConst/data/{typeName}`
                .replace(`{${"typeName"}}`, encodeURIComponent(String(typeName)));
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
         * @summary 获取所有常量列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysConstListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysConst/list`;
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
 * SysConstApi - functional programming interface
 * @export
 */
export const SysConstApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 根据类名获取常量数据
         * @param {string} typeName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysConstDataTypeNameGet(typeName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListConstOutput>>> {
            const localVarAxiosArgs = await SysConstApiAxiosParamCreator(configuration).apiSysConstDataTypeNameGet(typeName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取所有常量列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysConstListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListConstOutput>>> {
            const localVarAxiosArgs = await SysConstApiAxiosParamCreator(configuration).apiSysConstListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysConstApi - factory interface
 * @export
 */
export const SysConstApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 根据类名获取常量数据
         * @param {string} typeName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysConstDataTypeNameGet(typeName: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListConstOutput>> {
            return SysConstApiFp(configuration).apiSysConstDataTypeNameGet(typeName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取所有常量列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysConstListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListConstOutput>> {
            return SysConstApiFp(configuration).apiSysConstListGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysConstApi - object-oriented interface
 * @export
 * @class SysConstApi
 * @extends {BaseAPI}
 */
export class SysConstApi extends BaseAPI {
    /**
     * 
     * @summary 根据类名获取常量数据
     * @param {string} typeName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysConstApi
     */
    public async apiSysConstDataTypeNameGet(typeName: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListConstOutput>> {
        return SysConstApiFp(this.configuration).apiSysConstDataTypeNameGet(typeName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取所有常量列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysConstApi
     */
    public async apiSysConstListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListConstOutput>> {
        return SysConstApiFp(this.configuration).apiSysConstListGet(options).then((request) => request(this.axios, this.basePath));
    }
}
