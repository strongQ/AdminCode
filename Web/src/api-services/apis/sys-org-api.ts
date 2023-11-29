/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddOrgInput } from '../models';
import { AdminResultInt64 } from '../models';
import { AdminResultListSysOrg } from '../models';
import { DeleteOrgInput } from '../models';
import { UpdateOrgInput } from '../models';
/**
 * SysOrgApi - axios parameter creator
 * @export
 */
export const SysOrgApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加机构
         * @param {AddOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOrgAddPost: async (body?: AddOrgInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysOrg/add`;
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
         * @summary 删除机构
         * @param {DeleteOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOrgDeletePost: async (body?: DeleteOrgInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysOrg/delete`;
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
         * @summary 获取机构列表
         * @param {number} id 主键Id
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOrgListGet: async (id: number, name?: string, code?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiSysOrgListGet.');
            }
            const localVarPath = `/api/sysOrg/list`;
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
         * @summary 更新机构
         * @param {UpdateOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOrgUpdatePost: async (body?: UpdateOrgInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysOrg/update`;
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
 * SysOrgApi - functional programming interface
 * @export
 */
export const SysOrgApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加机构
         * @param {AddOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOrgAddPost(body?: AddOrgInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt64>>> {
            const localVarAxiosArgs = await SysOrgApiAxiosParamCreator(configuration).apiSysOrgAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除机构
         * @param {DeleteOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOrgDeletePost(body?: DeleteOrgInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysOrgApiAxiosParamCreator(configuration).apiSysOrgDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取机构列表
         * @param {number} id 主键Id
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOrgListGet(id: number, name?: string, code?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysOrg>>> {
            const localVarAxiosArgs = await SysOrgApiAxiosParamCreator(configuration).apiSysOrgListGet(id, name, code, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新机构
         * @param {UpdateOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOrgUpdatePost(body?: UpdateOrgInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysOrgApiAxiosParamCreator(configuration).apiSysOrgUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysOrgApi - factory interface
 * @export
 */
export const SysOrgApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加机构
         * @param {AddOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOrgAddPost(body?: AddOrgInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt64>> {
            return SysOrgApiFp(configuration).apiSysOrgAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除机构
         * @param {DeleteOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOrgDeletePost(body?: DeleteOrgInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysOrgApiFp(configuration).apiSysOrgDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取机构列表
         * @param {number} id 主键Id
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOrgListGet(id: number, name?: string, code?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysOrg>> {
            return SysOrgApiFp(configuration).apiSysOrgListGet(id, name, code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新机构
         * @param {UpdateOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOrgUpdatePost(body?: UpdateOrgInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysOrgApiFp(configuration).apiSysOrgUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysOrgApi - object-oriented interface
 * @export
 * @class SysOrgApi
 * @extends {BaseAPI}
 */
export class SysOrgApi extends BaseAPI {
    /**
     * 
     * @summary 增加机构
     * @param {AddOrgInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOrgApi
     */
    public async apiSysOrgAddPost(body?: AddOrgInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt64>> {
        return SysOrgApiFp(this.configuration).apiSysOrgAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除机构
     * @param {DeleteOrgInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOrgApi
     */
    public async apiSysOrgDeletePost(body?: DeleteOrgInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysOrgApiFp(this.configuration).apiSysOrgDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取机构列表
     * @param {number} id 主键Id
     * @param {string} [name] 名称
     * @param {string} [code] 编码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOrgApi
     */
    public async apiSysOrgListGet(id: number, name?: string, code?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysOrg>> {
        return SysOrgApiFp(this.configuration).apiSysOrgListGet(id, name, code, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新机构
     * @param {UpdateOrgInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOrgApi
     */
    public async apiSysOrgUpdatePost(body?: UpdateOrgInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysOrgApiFp(this.configuration).apiSysOrgUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
