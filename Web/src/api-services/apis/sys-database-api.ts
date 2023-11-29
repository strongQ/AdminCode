/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultListDbColumnOutput } from '../models';
import { AdminResultListDbTableInfo } from '../models';
import { AdminResultListObject } from '../models';
import { CreateEntityInput } from '../models';
import { DbColumnInput } from '../models';
import { DbTableInput } from '../models';
import { DeleteDbColumnInput } from '../models';
import { DeleteDbTableInput } from '../models';
import { UpdateDbColumnInput } from '../models';
import { UpdateDbTableInput } from '../models';
/**
 * SysDatabaseApi - axios parameter creator
 * @export
 */
export const SysDatabaseApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加列
         * @param {DbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseAddColumnPost: async (body?: DbColumnInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDatabase/addColumn`;
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
         * @summary 增加表
         * @param {DbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseAddTablePost: async (body?: DbTableInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDatabase/addTable`;
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
         * @summary 获取字段列表
         * @param {string} tableName 表名
         * @param {string} configId ConfigId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseColumnListTableNameConfigIdGet: async (tableName: string, configId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tableName' is not null or undefined
            if (tableName === null || tableName === undefined) {
                throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling apiSysDatabaseColumnListTableNameConfigIdGet.');
            }
            // verify required parameter 'configId' is not null or undefined
            if (configId === null || configId === undefined) {
                throw new RequiredError('configId','Required parameter configId was null or undefined when calling apiSysDatabaseColumnListTableNameConfigIdGet.');
            }
            const localVarPath = `/api/sysDatabase/columnList/{tableName}/{configId}`
                .replace(`{${"tableName"}}`, encodeURIComponent(String(tableName)))
                .replace(`{${"configId"}}`, encodeURIComponent(String(configId)));
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
         * @summary 创建实体
         * @param {CreateEntityInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseCreateEntityPost: async (body?: CreateEntityInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDatabase/createEntity`;
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
         * @summary 删除列
         * @param {DeleteDbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseDeleteColumnPost: async (body?: DeleteDbColumnInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDatabase/deleteColumn`;
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
         * @summary 删除表
         * @param {DeleteDbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseDeleteTablePost: async (body?: DeleteDbTableInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDatabase/deleteTable`;
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
         * @summary 获取库列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDatabase/list`;
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
         * @summary 获取表列表
         * @param {string} configId ConfigId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseTableListConfigIdGet: async (configId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'configId' is not null or undefined
            if (configId === null || configId === undefined) {
                throw new RequiredError('configId','Required parameter configId was null or undefined when calling apiSysDatabaseTableListConfigIdGet.');
            }
            const localVarPath = `/api/sysDatabase/tableList/{configId}`
                .replace(`{${"configId"}}`, encodeURIComponent(String(configId)));
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
         * @summary 编辑列
         * @param {UpdateDbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseUpdateColumnPost: async (body?: UpdateDbColumnInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDatabase/updateColumn`;
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
         * @summary 编辑表
         * @param {UpdateDbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDatabaseUpdateTablePost: async (body?: UpdateDbTableInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDatabase/updateTable`;
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
 * SysDatabaseApi - functional programming interface
 * @export
 */
export const SysDatabaseApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加列
         * @param {DbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseAddColumnPost(body?: DbColumnInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseAddColumnPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 增加表
         * @param {DbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseAddTablePost(body?: DbTableInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseAddTablePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取字段列表
         * @param {string} tableName 表名
         * @param {string} configId ConfigId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseColumnListTableNameConfigIdGet(tableName: string, configId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListDbColumnOutput>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseColumnListTableNameConfigIdGet(tableName, configId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 创建实体
         * @param {CreateEntityInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseCreateEntityPost(body?: CreateEntityInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseCreateEntityPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除列
         * @param {DeleteDbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseDeleteColumnPost(body?: DeleteDbColumnInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseDeleteColumnPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除表
         * @param {DeleteDbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseDeleteTablePost(body?: DeleteDbTableInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseDeleteTablePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取库列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListObject>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取表列表
         * @param {string} configId ConfigId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseTableListConfigIdGet(configId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListDbTableInfo>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseTableListConfigIdGet(configId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 编辑列
         * @param {UpdateDbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseUpdateColumnPost(body?: UpdateDbColumnInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseUpdateColumnPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 编辑表
         * @param {UpdateDbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseUpdateTablePost(body?: UpdateDbTableInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDatabaseApiAxiosParamCreator(configuration).apiSysDatabaseUpdateTablePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysDatabaseApi - factory interface
 * @export
 */
export const SysDatabaseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加列
         * @param {DbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseAddColumnPost(body?: DbColumnInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseAddColumnPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 增加表
         * @param {DbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseAddTablePost(body?: DbTableInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseAddTablePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取字段列表
         * @param {string} tableName 表名
         * @param {string} configId ConfigId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseColumnListTableNameConfigIdGet(tableName: string, configId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListDbColumnOutput>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseColumnListTableNameConfigIdGet(tableName, configId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 创建实体
         * @param {CreateEntityInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseCreateEntityPost(body?: CreateEntityInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseCreateEntityPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除列
         * @param {DeleteDbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseDeleteColumnPost(body?: DeleteDbColumnInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseDeleteColumnPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除表
         * @param {DeleteDbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseDeleteTablePost(body?: DeleteDbTableInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseDeleteTablePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取库列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListObject>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取表列表
         * @param {string} configId ConfigId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseTableListConfigIdGet(configId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListDbTableInfo>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseTableListConfigIdGet(configId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 编辑列
         * @param {UpdateDbColumnInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseUpdateColumnPost(body?: UpdateDbColumnInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseUpdateColumnPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 编辑表
         * @param {UpdateDbTableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDatabaseUpdateTablePost(body?: UpdateDbTableInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDatabaseApiFp(configuration).apiSysDatabaseUpdateTablePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysDatabaseApi - object-oriented interface
 * @export
 * @class SysDatabaseApi
 * @extends {BaseAPI}
 */
export class SysDatabaseApi extends BaseAPI {
    /**
     * 
     * @summary 增加列
     * @param {DbColumnInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseAddColumnPost(body?: DbColumnInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseAddColumnPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 增加表
     * @param {DbTableInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseAddTablePost(body?: DbTableInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseAddTablePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取字段列表
     * @param {string} tableName 表名
     * @param {string} configId ConfigId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseColumnListTableNameConfigIdGet(tableName: string, configId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListDbColumnOutput>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseColumnListTableNameConfigIdGet(tableName, configId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 创建实体
     * @param {CreateEntityInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseCreateEntityPost(body?: CreateEntityInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseCreateEntityPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除列
     * @param {DeleteDbColumnInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseDeleteColumnPost(body?: DeleteDbColumnInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseDeleteColumnPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除表
     * @param {DeleteDbTableInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseDeleteTablePost(body?: DeleteDbTableInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseDeleteTablePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取库列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListObject>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取表列表
     * @param {string} configId ConfigId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseTableListConfigIdGet(configId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListDbTableInfo>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseTableListConfigIdGet(configId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 编辑列
     * @param {UpdateDbColumnInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseUpdateColumnPost(body?: UpdateDbColumnInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseUpdateColumnPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 编辑表
     * @param {UpdateDbTableInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDatabaseApi
     */
    public async apiSysDatabaseUpdateTablePost(body?: UpdateDbTableInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDatabaseApiFp(this.configuration).apiSysDatabaseUpdateTablePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
