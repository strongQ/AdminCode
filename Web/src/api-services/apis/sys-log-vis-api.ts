/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultBoolean } from '../models';
import { AdminResultSqlSugarPagedListSysLogVis } from '../models';
/**
 * SysLogVisApi - axios parameter creator
 * @export
 */
export const SysLogVisApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空访问日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysLogVisClearPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogVis/clear`;
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
         * @summary 获取访问日志分页列表
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
        apiSysLogVisPageGet: async (startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogVis/page`;
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
 * SysLogVisApi - functional programming interface
 * @export
 */
export const SysLogVisApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空访问日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogVisClearPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultBoolean>>> {
            const localVarAxiosArgs = await SysLogVisApiAxiosParamCreator(configuration).apiSysLogVisClearPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取访问日志分页列表
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
        async apiSysLogVisPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogVis>>> {
            const localVarAxiosArgs = await SysLogVisApiAxiosParamCreator(configuration).apiSysLogVisPageGet(startTime, endTime, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysLogVisApi - factory interface
 * @export
 */
export const SysLogVisApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 清空访问日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogVisClearPost(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultBoolean>> {
            return SysLogVisApiFp(configuration).apiSysLogVisClearPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取访问日志分页列表
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
        async apiSysLogVisPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogVis>> {
            return SysLogVisApiFp(configuration).apiSysLogVisPageGet(startTime, endTime, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysLogVisApi - object-oriented interface
 * @export
 * @class SysLogVisApi
 * @extends {BaseAPI}
 */
export class SysLogVisApi extends BaseAPI {
    /**
     * 
     * @summary 清空访问日志
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogVisApi
     */
    public async apiSysLogVisClearPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultBoolean>> {
        return SysLogVisApiFp(this.configuration).apiSysLogVisClearPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取访问日志分页列表
     * @param {Date} [startTime] 开始时间
     * @param {Date} [endTime] 结束时间
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogVisApi
     */
    public async apiSysLogVisPageGet(startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogVis>> {
        return SysLogVisApiFp(this.configuration).apiSysLogVisPageGet(startTime, endTime, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
}
