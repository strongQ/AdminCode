/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddDictDataInput } from '../models';
import { AdminResultListSysDictData } from '../models';
import { AdminResultSqlSugarPagedListSysDictData } from '../models';
import { AdminResultSysDictData } from '../models';
import { DeleteDictDataInput } from '../models';
import { DictDataInput } from '../models';
import { StatusEnum } from '../models';
import { UpdateDictDataInput } from '../models';
/**
 * SysDictDataApi - axios parameter creator
 * @export
 */
export const SysDictDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加字典值
         * @param {AddDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataAddPost: async (body?: AddDictDataInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictData/add`;
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
         * @summary 根据字典类型编码获取字典值集合
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataDataListCodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling apiSysDictDataDataListCodeGet.');
            }
            const localVarPath = `/api/sysDictData/dataList/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
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
         * @summary 根据查询条件获取字典值集合
         * @param {string} code 编码
         * @param {number} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataDataListGet: async (code: string, status?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling apiSysDictDataDataListGet.');
            }
            const localVarPath = `/api/sysDictData/dataList`;
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

            if (status !== undefined) {
                localVarQueryParameter['Status'] = status;
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
         * @summary 删除字典值
         * @param {DeleteDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataDeletePost: async (body?: DeleteDictDataInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictData/delete`;
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
         * @summary 获取字典值详情
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataDetailGet: async (id: number, status?: StatusEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiSysDictDataDetailGet.');
            }
            const localVarPath = `/api/sysDictData/detail`;
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
         * @summary 获取字典值列表
         * @param {number} dictTypeId 字典类型Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataListGet: async (dictTypeId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'dictTypeId' is not null or undefined
            if (dictTypeId === null || dictTypeId === undefined) {
                throw new RequiredError('dictTypeId','Required parameter dictTypeId was null or undefined when calling apiSysDictDataListGet.');
            }
            const localVarPath = `/api/sysDictData/list`;
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

            if (dictTypeId !== undefined) {
                localVarQueryParameter['DictTypeId'] = dictTypeId;
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
         * @summary 获取字典值分页列表
         * @param {number} [dictTypeId] 字典类型Id
         * @param {string} [value] 值
         * @param {string} [code] 编码
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataPageGet: async (dictTypeId?: number, value?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictData/page`;
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

            if (dictTypeId !== undefined) {
                localVarQueryParameter['DictTypeId'] = dictTypeId;
            }

            if (value !== undefined) {
                localVarQueryParameter['Value'] = value;
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
         * @summary 修改字典值状态
         * @param {DictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataSetStatusPost: async (body?: DictDataInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictData/setStatus`;
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
         * @summary 更新字典值
         * @param {UpdateDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysDictDataUpdatePost: async (body?: UpdateDictDataInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysDictData/update`;
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
 * SysDictDataApi - functional programming interface
 * @export
 */
export const SysDictDataApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加字典值
         * @param {AddDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataAddPost(body?: AddDictDataInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 根据字典类型编码获取字典值集合
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataDataListCodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysDictData>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataDataListCodeGet(code, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 根据查询条件获取字典值集合
         * @param {string} code 编码
         * @param {number} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataDataListGet(code: string, status?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysDictData>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataDataListGet(code, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除字典值
         * @param {DeleteDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataDeletePost(body?: DeleteDictDataInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取字典值详情
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataDetailGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSysDictData>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataDetailGet(id, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取字典值列表
         * @param {number} dictTypeId 字典类型Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataListGet(dictTypeId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysDictData>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataListGet(dictTypeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取字典值分页列表
         * @param {number} [dictTypeId] 字典类型Id
         * @param {string} [value] 值
         * @param {string} [code] 编码
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataPageGet(dictTypeId?: number, value?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysDictData>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataPageGet(dictTypeId, value, code, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 修改字典值状态
         * @param {DictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataSetStatusPost(body?: DictDataInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataSetStatusPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新字典值
         * @param {UpdateDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataUpdatePost(body?: UpdateDictDataInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDictDataApiAxiosParamCreator(configuration).apiSysDictDataUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysDictDataApi - factory interface
 * @export
 */
export const SysDictDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加字典值
         * @param {AddDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataAddPost(body?: AddDictDataInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDictDataApiFp(configuration).apiSysDictDataAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 根据字典类型编码获取字典值集合
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataDataListCodeGet(code: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysDictData>> {
            return SysDictDataApiFp(configuration).apiSysDictDataDataListCodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 根据查询条件获取字典值集合
         * @param {string} code 编码
         * @param {number} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataDataListGet(code: string, status?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysDictData>> {
            return SysDictDataApiFp(configuration).apiSysDictDataDataListGet(code, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除字典值
         * @param {DeleteDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataDeletePost(body?: DeleteDictDataInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDictDataApiFp(configuration).apiSysDictDataDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取字典值详情
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataDetailGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSysDictData>> {
            return SysDictDataApiFp(configuration).apiSysDictDataDetailGet(id, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取字典值列表
         * @param {number} dictTypeId 字典类型Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataListGet(dictTypeId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysDictData>> {
            return SysDictDataApiFp(configuration).apiSysDictDataListGet(dictTypeId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取字典值分页列表
         * @param {number} [dictTypeId] 字典类型Id
         * @param {string} [value] 值
         * @param {string} [code] 编码
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataPageGet(dictTypeId?: number, value?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysDictData>> {
            return SysDictDataApiFp(configuration).apiSysDictDataPageGet(dictTypeId, value, code, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 修改字典值状态
         * @param {DictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataSetStatusPost(body?: DictDataInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDictDataApiFp(configuration).apiSysDictDataSetStatusPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新字典值
         * @param {UpdateDictDataInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysDictDataUpdatePost(body?: UpdateDictDataInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDictDataApiFp(configuration).apiSysDictDataUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysDictDataApi - object-oriented interface
 * @export
 * @class SysDictDataApi
 * @extends {BaseAPI}
 */
export class SysDictDataApi extends BaseAPI {
    /**
     * 
     * @summary 增加字典值
     * @param {AddDictDataInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataAddPost(body?: AddDictDataInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 根据字典类型编码获取字典值集合
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataDataListCodeGet(code: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysDictData>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataDataListCodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 根据查询条件获取字典值集合
     * @param {string} code 编码
     * @param {number} [status] 状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataDataListGet(code: string, status?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysDictData>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataDataListGet(code, status, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除字典值
     * @param {DeleteDictDataInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataDeletePost(body?: DeleteDictDataInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取字典值详情
     * @param {number} id 主键Id
     * @param {StatusEnum} [status] 状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataDetailGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSysDictData>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataDetailGet(id, status, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取字典值列表
     * @param {number} dictTypeId 字典类型Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataListGet(dictTypeId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysDictData>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataListGet(dictTypeId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取字典值分页列表
     * @param {number} [dictTypeId] 字典类型Id
     * @param {string} [value] 值
     * @param {string} [code] 编码
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataPageGet(dictTypeId?: number, value?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysDictData>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataPageGet(dictTypeId, value, code, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 修改字典值状态
     * @param {DictDataInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataSetStatusPost(body?: DictDataInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataSetStatusPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新字典值
     * @param {UpdateDictDataInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDictDataApi
     */
    public async apiSysDictDataUpdatePost(body?: UpdateDictDataInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDictDataApiFp(this.configuration).apiSysDictDataUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
