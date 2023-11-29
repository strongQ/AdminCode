/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddDictTypeInput } from '../models';
import { AdminResultListSysDictData } from '../models';
import { AdminResultListSysDictType } from '../models';
import { AdminResultSqlSugarPagedListSysDictType } from '../models';
import { AdminResultSysDictType } from '../models';
import { DeleteDictTypeInput } from '../models';
import { DictTypeInput } from '../models';
import { StatusEnum } from '../models';
import { UpdateDictTypeInput } from '../models';
/**
 * SysDictTypeApi - axios parameter creator
 * @export
 */
export const SysDictTypeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 添加字典类型
         * @param {AddDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictTypeAddPost: async (body?: AddDictTypeInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictType/add`;
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
         * @summary 获取字典类型-值列表
         * @param {string} code 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictTypeDataListGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling apiSysDictTypeDataListGet.');
            }
            const localVarPath = `/api/sysDictType/dataList`;
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
        /**
         * 
         * @summary 删除字典类型
         * @param {DeleteDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictTypeDeletePost: async (body?: DeleteDictTypeInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictType/delete`;
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
         * @summary 获取字典类型详情
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictTypeDetailGet: async (id: number, status?: StatusEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiSysDictTypeDetailGet.');
            }
            const localVarPath = `/api/sysDictType/detail`;
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

            if (status !== undefined) {
                localVarQueryParameter['Status'] = status;
            }

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
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
        /**
         * 
         * @summary 获取字典类型列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictTypeListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictType/list`;
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
         * @summary 获取字典类型分页列表
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictTypePageGet: async (name?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictType/page`;
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

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
            }

            if (code !== undefined) {
                localVarQueryParameter['Code'] = code;
            }

            if (page !== undefined) {
                localVarQueryParameter['Page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }

            if (field !== undefined) {
                localVarQueryParameter['Field'] = field;
            }

            if (order !== undefined) {
                localVarQueryParameter['Order'] = order;
            }

            if (descStr !== undefined) {
                localVarQueryParameter['DescStr'] = descStr;
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
        /**
         * 
         * @summary 修改字典类型状态
         * @param {DictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictTypeSetStatusPost: async (body?: DictTypeInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictType/setStatus`;
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
         * @summary 更新字典类型
         * @param {UpdateDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictTypeUpdatePost: async (body?: UpdateDictTypeInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictType/update`;
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
 * SysDictTypeApi - functional programming interface
 * @export
 */
export const SysDictTypeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 添加字典类型
         * @param {AddDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeAddPost(body?: AddDictTypeInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDictTypeApiAxiosParamCreator(configuration).apiSysDictTypeAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取字典类型-值列表
         * @param {string} code 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeDataListGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysDictData>>> {
            const localVarAxiosArgs = await SysDictTypeApiAxiosParamCreator(configuration).apiSysDictTypeDataListGet(code, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除字典类型
         * @param {DeleteDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeDeletePost(body?: DeleteDictTypeInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDictTypeApiAxiosParamCreator(configuration).apiSysDictTypeDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取字典类型详情
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeDetailGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSysDictType>>> {
            const localVarAxiosArgs = await SysDictTypeApiAxiosParamCreator(configuration).apiSysDictTypeDetailGet(id, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取字典类型列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysDictType>>> {
            const localVarAxiosArgs = await SysDictTypeApiAxiosParamCreator(configuration).apiSysDictTypeListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取字典类型分页列表
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypePageGet(name?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysDictType>>> {
            const localVarAxiosArgs = await SysDictTypeApiAxiosParamCreator(configuration).apiSysDictTypePageGet(name, code, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 修改字典类型状态
         * @param {DictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeSetStatusPost(body?: DictTypeInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDictTypeApiAxiosParamCreator(configuration).apiSysDictTypeSetStatusPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新字典类型
         * @param {UpdateDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeUpdatePost(body?: UpdateDictTypeInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDictTypeApiAxiosParamCreator(configuration).apiSysDictTypeUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysDictTypeApi - factory interface
 * @export
 */
export const SysDictTypeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 添加字典类型
         * @param {AddDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeAddPost(body?: AddDictTypeInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDictTypeApiFp(configuration).apiSysDictTypeAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取字典类型-值列表
         * @param {string} code 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeDataListGet(code: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysDictData>> {
            return SysDictTypeApiFp(configuration).apiSysDictTypeDataListGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除字典类型
         * @param {DeleteDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeDeletePost(body?: DeleteDictTypeInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDictTypeApiFp(configuration).apiSysDictTypeDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取字典类型详情
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeDetailGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSysDictType>> {
            return SysDictTypeApiFp(configuration).apiSysDictTypeDetailGet(id, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取字典类型列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysDictType>> {
            return SysDictTypeApiFp(configuration).apiSysDictTypeListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取字典类型分页列表
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypePageGet(name?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysDictType>> {
            return SysDictTypeApiFp(configuration).apiSysDictTypePageGet(name, code, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 修改字典类型状态
         * @param {DictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeSetStatusPost(body?: DictTypeInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDictTypeApiFp(configuration).apiSysDictTypeSetStatusPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新字典类型
         * @param {UpdateDictTypeInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictTypeUpdatePost(body?: UpdateDictTypeInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDictTypeApiFp(configuration).apiSysDictTypeUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysDictTypeApi - object-oriented interface
 * @export
 * @class SysDictTypeApi
 * @extends {BaseAPI}
 */
export class SysDictTypeApi extends BaseAPI {
    /**
     * 
     * @summary 添加字典类型
     * @param {AddDictTypeInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictTypeApi
     */
    public async apiSysDictTypeAddPost(body?: AddDictTypeInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDictTypeApiFp(this.configuration).apiSysDictTypeAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取字典类型-值列表
     * @param {string} code 编码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictTypeApi
     */
    public async apiSysDictTypeDataListGet(code: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysDictData>> {
        return SysDictTypeApiFp(this.configuration).apiSysDictTypeDataListGet(code, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除字典类型
     * @param {DeleteDictTypeInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictTypeApi
     */
    public async apiSysDictTypeDeletePost(body?: DeleteDictTypeInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDictTypeApiFp(this.configuration).apiSysDictTypeDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取字典类型详情
     * @param {number} id 主键Id
     * @param {StatusEnum} [status] 状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictTypeApi
     */
    public async apiSysDictTypeDetailGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSysDictType>> {
        return SysDictTypeApiFp(this.configuration).apiSysDictTypeDetailGet(id, status, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取字典类型列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictTypeApi
     */
    public async apiSysDictTypeListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysDictType>> {
        return SysDictTypeApiFp(this.configuration).apiSysDictTypeListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取字典类型分页列表
     * @param {string} [name] 名称
     * @param {string} [code] 编码
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictTypeApi
     */
    public async apiSysDictTypePageGet(name?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysDictType>> {
        return SysDictTypeApiFp(this.configuration).apiSysDictTypePageGet(name, code, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 修改字典类型状态
     * @param {DictTypeInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictTypeApi
     */
    public async apiSysDictTypeSetStatusPost(body?: DictTypeInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDictTypeApiFp(this.configuration).apiSysDictTypeSetStatusPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新字典类型
     * @param {UpdateDictTypeInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictTypeApi
     */
    public async apiSysDictTypeUpdatePost(body?: UpdateDictTypeInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDictTypeApiFp(this.configuration).apiSysDictTypeUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
