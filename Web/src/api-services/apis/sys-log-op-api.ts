/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultBoolean } from '../models';
import { AdminResultSqlSugarPagedListSysLogOp } from '../models';
import { LogInput } from '../models';
/**
 * SysLogOpApi - axios parameter creator
 * @export
 */
export const SysLogOpApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空操作日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysLogOpClearPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogOp/clear`;
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
         * @summary 导出操作日志
         * @param {LogInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysLogOpExportPost: async (body?: LogInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogOp/export`;
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
         * @summary 获取操作日志分页列表
         * @param {Date} [startTime] 开始时间
         * @param {Date} [endTime] 结束时间
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysLogOpPageGet: async (startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogOp/page`;
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

            if (startTime !== undefined) {
                localVarQueryParameter['StartTime'] = (startTime as any instanceof Date) ?
                    (startTime as any).toISOString() :
                    startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['EndTime'] = (endTime as any instanceof Date) ?
                    (endTime as any).toISOString() :
                    endTime;
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
    }
};

/**
 * SysLogOpApi - functional programming interface
 * @export
 */
export const SysLogOpApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空操作日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogOpClearPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultBoolean>>> {
            const localVarAxiosArgs = await SysLogOpApiAxiosParamCreator(configuration).apiSysLogOpClearPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 导出操作日志
         * @param {LogInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogOpExportPost(body?: LogInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysLogOpApiAxiosParamCreator(configuration).apiSysLogOpExportPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取操作日志分页列表
         * @param {Date} [startTime] 开始时间
         * @param {Date} [endTime] 结束时间
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogOpPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogOp>>> {
            const localVarAxiosArgs = await SysLogOpApiAxiosParamCreator(configuration).apiSysLogOpPageGet(startTime, endTime, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysLogOpApi - factory interface
 * @export
 */
export const SysLogOpApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 清空操作日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogOpClearPost(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultBoolean>> {
            return SysLogOpApiFp(configuration).apiSysLogOpClearPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 导出操作日志
         * @param {LogInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogOpExportPost(body?: LogInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysLogOpApiFp(configuration).apiSysLogOpExportPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取操作日志分页列表
         * @param {Date} [startTime] 开始时间
         * @param {Date} [endTime] 结束时间
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogOpPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogOp>> {
            return SysLogOpApiFp(configuration).apiSysLogOpPageGet(startTime, endTime, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysLogOpApi - object-oriented interface
 * @export
 * @class SysLogOpApi
 * @extends {BaseAPI}
 */
export class SysLogOpApi extends BaseAPI {
    /**
     * 
     * @summary 清空操作日志
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogOpApi
     */
    public async apiSysLogOpClearPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultBoolean>> {
        return SysLogOpApiFp(this.configuration).apiSysLogOpClearPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 导出操作日志
     * @param {LogInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogOpApi
     */
    public async apiSysLogOpExportPost(body?: LogInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysLogOpApiFp(this.configuration).apiSysLogOpExportPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取操作日志分页列表
     * @param {Date} [startTime] 开始时间
     * @param {Date} [endTime] 结束时间
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogOpApi
     */
    public async apiSysLogOpPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogOp>> {
        return SysLogOpApiFp(this.configuration).apiSysLogOpPageGet(startTime, endTime, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
}
