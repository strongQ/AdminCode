/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultBoolean } from '../models';
import { AdminResultSqlSugarPagedListSysLogDiff } from '../models';
/**
 * SysLogDiffApi - axios parameter creator
 * @export
 */
export const SysLogDiffApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空差异日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysLogDiffClearPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogDiff/clear`;
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
         * @summary 获取差异日志分页列表
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
        apiSysLogDiffPageGet: async (startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogDiff/page`;
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
 * SysLogDiffApi - functional programming interface
 * @export
 */
export const SysLogDiffApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空差异日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogDiffClearPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultBoolean>>> {
            const localVarAxiosArgs = await SysLogDiffApiAxiosParamCreator(configuration).apiSysLogDiffClearPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取差异日志分页列表
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
        async apiSysLogDiffPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogDiff>>> {
            const localVarAxiosArgs = await SysLogDiffApiAxiosParamCreator(configuration).apiSysLogDiffPageGet(startTime, endTime, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysLogDiffApi - factory interface
 * @export
 */
export const SysLogDiffApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 清空差异日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogDiffClearPost(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultBoolean>> {
            return SysLogDiffApiFp(configuration).apiSysLogDiffClearPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取差异日志分页列表
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
        async apiSysLogDiffPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogDiff>> {
            return SysLogDiffApiFp(configuration).apiSysLogDiffPageGet(startTime, endTime, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysLogDiffApi - object-oriented interface
 * @export
 * @class SysLogDiffApi
 * @extends {BaseAPI}
 */
export class SysLogDiffApi extends BaseAPI {
    /**
     * 
     * @summary 清空差异日志
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogDiffApi
     */
    public async apiSysLogDiffClearPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultBoolean>> {
        return SysLogDiffApiFp(this.configuration).apiSysLogDiffClearPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取差异日志分页列表
     * @param {Date} [startTime] 开始时间
     * @param {Date} [endTime] 结束时间
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogDiffApi
     */
    public async apiSysLogDiffPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogDiff>> {
        return SysLogDiffApiFp(this.configuration).apiSysLogDiffPageGet(startTime, endTime, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
}
