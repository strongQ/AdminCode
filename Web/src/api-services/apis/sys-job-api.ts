/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddJobDetailInput } from '../models';
import { AddJobTriggerInput } from '../models';
import { AdminResultListSysJobCluster } from '../models';
import { AdminResultListSysJobTrigger } from '../models';
import { AdminResultSqlSugarPagedListJobOutput } from '../models';
import { DeleteJobDetailInput } from '../models';
import { DeleteJobTriggerInput } from '../models';
import { JobDetailInput } from '../models';
import { JobTriggerInput } from '../models';
import { UpdateJobDetailInput } from '../models';
import { UpdateJobTriggerInput } from '../models';
/**
 * SysJobApi - axios parameter creator
 * @export
 */
export const SysJobApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 添加作业
         * @param {AddJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobAddJobDetailPost: async (body?: AddJobDetailInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/addJobDetail`;
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
         * @summary 添加触发器
         * @param {AddJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobAddJobTriggerPost: async (body?: AddJobTriggerInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/addJobTrigger`;
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
         * @summary 强制唤醒作业调度器
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobCancelSleepPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/cancelSleep`;
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
         * @summary 删除作业
         * @param {DeleteJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobDeleteJobDetailPost: async (body?: DeleteJobDetailInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/deleteJobDetail`;
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
         * @summary 删除触发器
         * @param {DeleteJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobDeleteJobTriggerPost: async (body?: DeleteJobTriggerInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/deleteJobTrigger`;
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
         * @summary 获取集群列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobJobClusterListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/jobClusterList`;
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
         * @summary 获取触发器列表
         * @param {string} [jobId] 作业Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobJobTriggerListGet: async (jobId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/jobTriggerList`;
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

            if (jobId !== undefined) {
                localVarQueryParameter['JobId'] = jobId;
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
         * @summary 获取作业分页列表
         * @param {string} [jobId] 作业Id
         * @param {string} [description] 描述信息
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobPageJobDetailGet: async (jobId?: string, description?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/pageJobDetail`;
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

            if (jobId !== undefined) {
                localVarQueryParameter['JobId'] = jobId;
            }

            if (description !== undefined) {
                localVarQueryParameter['Description'] = description;
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
         * @summary 暂停所有作业
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobPauseAllJobPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/pauseAllJob`;
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
         * @summary 暂停作业
         * @param {JobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobPauseJobPost: async (body?: JobDetailInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/pauseJob`;
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
         * @summary 暂停触发器
         * @param {JobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobPauseTriggerPost: async (body?: JobTriggerInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/pauseTrigger`;
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
         * @summary 强制触发所有作业持久化
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobPersistAllPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/persistAll`;
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
         * @summary 启动所有作业
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobStartAllJobPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/startAllJob`;
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
         * @summary 启动作业
         * @param {JobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobStartJobPost: async (body?: JobDetailInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/startJob`;
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
         * @summary 启动触发器
         * @param {JobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobStartTriggerPost: async (body?: JobTriggerInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/startTrigger`;
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
         * @summary 更新作业
         * @param {UpdateJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobUpdateJobDetailPost: async (body?: UpdateJobDetailInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/updateJobDetail`;
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
         * @summary 更新触发器
         * @param {UpdateJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysJobUpdateJobTriggerPost: async (body?: UpdateJobTriggerInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysJob/updateJobTrigger`;
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
 * SysJobApi - functional programming interface
 * @export
 */
export const SysJobApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 添加作业
         * @param {AddJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobAddJobDetailPost(body?: AddJobDetailInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobAddJobDetailPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 添加触发器
         * @param {AddJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobAddJobTriggerPost(body?: AddJobTriggerInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobAddJobTriggerPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 强制唤醒作业调度器
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobCancelSleepPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobCancelSleepPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除作业
         * @param {DeleteJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobDeleteJobDetailPost(body?: DeleteJobDetailInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobDeleteJobDetailPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除触发器
         * @param {DeleteJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobDeleteJobTriggerPost(body?: DeleteJobTriggerInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobDeleteJobTriggerPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取集群列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobJobClusterListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysJobCluster>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobJobClusterListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取触发器列表
         * @param {string} [jobId] 作业Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobJobTriggerListGet(jobId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysJobTrigger>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobJobTriggerListGet(jobId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取作业分页列表
         * @param {string} [jobId] 作业Id
         * @param {string} [description] 描述信息
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPageJobDetailGet(jobId?: string, description?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListJobOutput>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobPageJobDetailGet(jobId, description, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 暂停所有作业
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPauseAllJobPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobPauseAllJobPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 暂停作业
         * @param {JobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPauseJobPost(body?: JobDetailInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobPauseJobPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 暂停触发器
         * @param {JobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPauseTriggerPost(body?: JobTriggerInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobPauseTriggerPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 强制触发所有作业持久化
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPersistAllPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobPersistAllPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 启动所有作业
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobStartAllJobPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobStartAllJobPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 启动作业
         * @param {JobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobStartJobPost(body?: JobDetailInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobStartJobPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 启动触发器
         * @param {JobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobStartTriggerPost(body?: JobTriggerInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobStartTriggerPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新作业
         * @param {UpdateJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobUpdateJobDetailPost(body?: UpdateJobDetailInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobUpdateJobDetailPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新触发器
         * @param {UpdateJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobUpdateJobTriggerPost(body?: UpdateJobTriggerInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysJobApiAxiosParamCreator(configuration).apiSysJobUpdateJobTriggerPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysJobApi - factory interface
 * @export
 */
export const SysJobApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 添加作业
         * @param {AddJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobAddJobDetailPost(body?: AddJobDetailInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobAddJobDetailPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 添加触发器
         * @param {AddJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobAddJobTriggerPost(body?: AddJobTriggerInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobAddJobTriggerPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 强制唤醒作业调度器
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobCancelSleepPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobCancelSleepPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除作业
         * @param {DeleteJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobDeleteJobDetailPost(body?: DeleteJobDetailInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobDeleteJobDetailPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除触发器
         * @param {DeleteJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobDeleteJobTriggerPost(body?: DeleteJobTriggerInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobDeleteJobTriggerPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取集群列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobJobClusterListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysJobCluster>> {
            return SysJobApiFp(configuration).apiSysJobJobClusterListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取触发器列表
         * @param {string} [jobId] 作业Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobJobTriggerListGet(jobId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysJobTrigger>> {
            return SysJobApiFp(configuration).apiSysJobJobTriggerListGet(jobId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取作业分页列表
         * @param {string} [jobId] 作业Id
         * @param {string} [description] 描述信息
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPageJobDetailGet(jobId?: string, description?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListJobOutput>> {
            return SysJobApiFp(configuration).apiSysJobPageJobDetailGet(jobId, description, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 暂停所有作业
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPauseAllJobPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobPauseAllJobPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 暂停作业
         * @param {JobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPauseJobPost(body?: JobDetailInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobPauseJobPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 暂停触发器
         * @param {JobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPauseTriggerPost(body?: JobTriggerInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobPauseTriggerPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 强制触发所有作业持久化
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobPersistAllPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobPersistAllPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 启动所有作业
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobStartAllJobPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobStartAllJobPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 启动作业
         * @param {JobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobStartJobPost(body?: JobDetailInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobStartJobPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 启动触发器
         * @param {JobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobStartTriggerPost(body?: JobTriggerInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobStartTriggerPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新作业
         * @param {UpdateJobDetailInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobUpdateJobDetailPost(body?: UpdateJobDetailInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobUpdateJobDetailPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新触发器
         * @param {UpdateJobTriggerInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysJobUpdateJobTriggerPost(body?: UpdateJobTriggerInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysJobApiFp(configuration).apiSysJobUpdateJobTriggerPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysJobApi - object-oriented interface
 * @export
 * @class SysJobApi
 * @extends {BaseAPI}
 */
export class SysJobApi extends BaseAPI {
    /**
     * 
     * @summary 添加作业
     * @param {AddJobDetailInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobAddJobDetailPost(body?: AddJobDetailInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobAddJobDetailPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 添加触发器
     * @param {AddJobTriggerInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobAddJobTriggerPost(body?: AddJobTriggerInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobAddJobTriggerPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 强制唤醒作业调度器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobCancelSleepPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobCancelSleepPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除作业
     * @param {DeleteJobDetailInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobDeleteJobDetailPost(body?: DeleteJobDetailInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobDeleteJobDetailPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除触发器
     * @param {DeleteJobTriggerInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobDeleteJobTriggerPost(body?: DeleteJobTriggerInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobDeleteJobTriggerPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取集群列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobJobClusterListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysJobCluster>> {
        return SysJobApiFp(this.configuration).apiSysJobJobClusterListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取触发器列表
     * @param {string} [jobId] 作业Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobJobTriggerListGet(jobId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysJobTrigger>> {
        return SysJobApiFp(this.configuration).apiSysJobJobTriggerListGet(jobId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取作业分页列表
     * @param {string} [jobId] 作业Id
     * @param {string} [description] 描述信息
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobPageJobDetailGet(jobId?: string, description?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListJobOutput>> {
        return SysJobApiFp(this.configuration).apiSysJobPageJobDetailGet(jobId, description, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 暂停所有作业
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobPauseAllJobPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobPauseAllJobPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 暂停作业
     * @param {JobDetailInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobPauseJobPost(body?: JobDetailInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobPauseJobPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 暂停触发器
     * @param {JobTriggerInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobPauseTriggerPost(body?: JobTriggerInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobPauseTriggerPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 强制触发所有作业持久化
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobPersistAllPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobPersistAllPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 启动所有作业
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobStartAllJobPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobStartAllJobPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 启动作业
     * @param {JobDetailInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobStartJobPost(body?: JobDetailInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobStartJobPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 启动触发器
     * @param {JobTriggerInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobStartTriggerPost(body?: JobTriggerInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobStartTriggerPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新作业
     * @param {UpdateJobDetailInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobUpdateJobDetailPost(body?: UpdateJobDetailInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobUpdateJobDetailPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新触发器
     * @param {UpdateJobTriggerInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysJobApi
     */
    public async apiSysJobUpdateJobTriggerPost(body?: UpdateJobTriggerInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysJobApiFp(this.configuration).apiSysJobUpdateJobTriggerPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
