/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddPosInput } from '../models';
import { AdminResultListSysPos } from '../models';
import { DeletePosInput } from '../models';
import { UpdatePosInput } from '../models';
/**
 * SysPosApi - axios parameter creator
 * @export
 */
export const SysPosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加职位
         * @param {AddPosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysPosAddPost: async (body?: AddPosInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysPos/add`;
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
         * @summary 删除职位
         * @param {DeletePosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysPosDeletePost: async (body?: DeletePosInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysPos/delete`;
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
         * @summary 获取职位列表
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysPosListGet: async (name?: string, code?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysPos/list`;
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
         * @summary 更新职位
         * @param {UpdatePosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysPosUpdatePost: async (body?: UpdatePosInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysPos/update`;
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
 * SysPosApi - functional programming interface
 * @export
 */
export const SysPosApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加职位
         * @param {AddPosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysPosAddPost(body?: AddPosInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysPosApiAxiosParamCreator(configuration).apiSysPosAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除职位
         * @param {DeletePosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysPosDeletePost(body?: DeletePosInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysPosApiAxiosParamCreator(configuration).apiSysPosDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取职位列表
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysPosListGet(name?: string, code?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysPos>>> {
            const localVarAxiosArgs = await SysPosApiAxiosParamCreator(configuration).apiSysPosListGet(name, code, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新职位
         * @param {UpdatePosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysPosUpdatePost(body?: UpdatePosInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysPosApiAxiosParamCreator(configuration).apiSysPosUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysPosApi - factory interface
 * @export
 */
export const SysPosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加职位
         * @param {AddPosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysPosAddPost(body?: AddPosInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysPosApiFp(configuration).apiSysPosAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除职位
         * @param {DeletePosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysPosDeletePost(body?: DeletePosInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysPosApiFp(configuration).apiSysPosDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取职位列表
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysPosListGet(name?: string, code?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysPos>> {
            return SysPosApiFp(configuration).apiSysPosListGet(name, code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新职位
         * @param {UpdatePosInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysPosUpdatePost(body?: UpdatePosInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysPosApiFp(configuration).apiSysPosUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysPosApi - object-oriented interface
 * @export
 * @class SysPosApi
 * @extends {BaseAPI}
 */
export class SysPosApi extends BaseAPI {
    /**
     * 
     * @summary 增加职位
     * @param {AddPosInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysPosApi
     */
    public async apiSysPosAddPost(body?: AddPosInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysPosApiFp(this.configuration).apiSysPosAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除职位
     * @param {DeletePosInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysPosApi
     */
    public async apiSysPosDeletePost(body?: DeletePosInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysPosApiFp(this.configuration).apiSysPosDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取职位列表
     * @param {string} [name] 名称
     * @param {string} [code] 编码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysPosApi
     */
    public async apiSysPosListGet(name?: string, code?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysPos>> {
        return SysPosApiFp(this.configuration).apiSysPosListGet(name, code, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新职位
     * @param {UpdatePosInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysPosApi
     */
    public async apiSysPosUpdatePost(body?: UpdatePosInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysPosApiFp(this.configuration).apiSysPosUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
