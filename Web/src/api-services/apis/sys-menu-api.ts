/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddMenuInput } from '../models';
import { AdminResultListMenuOutput } from '../models';
import { AdminResultListString } from '../models';
import { AdminResultListSysMenu } from '../models';
import { DeleteMenuInput } from '../models';
import { MenuTypeEnum } from '../models';
import { UpdateMenuInput } from '../models';
/**
 * SysMenuApi - axios parameter creator
 * @export
 */
export const SysMenuApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加菜单
         * @param {AddMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMenuAddPost: async (body?: AddMenuInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMenu/add`;
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
         * @summary 删除菜单
         * @param {DeleteMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMenuDeletePost: async (body?: DeleteMenuInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMenu/delete`;
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
         * @summary 获取菜单列表
         * @param {string} [title] 标题
         * @param {MenuTypeEnum} [type] 菜单类型（1目录 2菜单 3按钮）
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMenuListGet: async (title?: string, type?: MenuTypeEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMenu/list`;
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

            if (title !== undefined) {
                localVarQueryParameter['Title'] = title;
            }

            if (type !== undefined) {
                localVarQueryParameter['Type'] = type;
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
         * @summary 获取登录菜单树
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMenuLoginMenuTreeGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMenu/loginMenuTree`;
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
         * @summary 获取用户拥有按钮权限集合（缓存）
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMenuOwnBtnPermListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMenu/ownBtnPermList`;
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
         * @summary 更新菜单
         * @param {UpdateMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMenuUpdatePost: async (body?: UpdateMenuInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMenu/update`;
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
 * SysMenuApi - functional programming interface
 * @export
 */
export const SysMenuApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加菜单
         * @param {AddMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuAddPost(body?: AddMenuInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMenuApiAxiosParamCreator(configuration).apiSysMenuAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除菜单
         * @param {DeleteMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuDeletePost(body?: DeleteMenuInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMenuApiAxiosParamCreator(configuration).apiSysMenuDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取菜单列表
         * @param {string} [title] 标题
         * @param {MenuTypeEnum} [type] 菜单类型（1目录 2菜单 3按钮）
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuListGet(title?: string, type?: MenuTypeEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysMenu>>> {
            const localVarAxiosArgs = await SysMenuApiAxiosParamCreator(configuration).apiSysMenuListGet(title, type, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取登录菜单树
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuLoginMenuTreeGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListMenuOutput>>> {
            const localVarAxiosArgs = await SysMenuApiAxiosParamCreator(configuration).apiSysMenuLoginMenuTreeGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取用户拥有按钮权限集合（缓存）
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuOwnBtnPermListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListString>>> {
            const localVarAxiosArgs = await SysMenuApiAxiosParamCreator(configuration).apiSysMenuOwnBtnPermListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新菜单
         * @param {UpdateMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuUpdatePost(body?: UpdateMenuInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMenuApiAxiosParamCreator(configuration).apiSysMenuUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysMenuApi - factory interface
 * @export
 */
export const SysMenuApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加菜单
         * @param {AddMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuAddPost(body?: AddMenuInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMenuApiFp(configuration).apiSysMenuAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除菜单
         * @param {DeleteMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuDeletePost(body?: DeleteMenuInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMenuApiFp(configuration).apiSysMenuDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取菜单列表
         * @param {string} [title] 标题
         * @param {MenuTypeEnum} [type] 菜单类型（1目录 2菜单 3按钮）
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuListGet(title?: string, type?: MenuTypeEnum, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysMenu>> {
            return SysMenuApiFp(configuration).apiSysMenuListGet(title, type, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取登录菜单树
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuLoginMenuTreeGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListMenuOutput>> {
            return SysMenuApiFp(configuration).apiSysMenuLoginMenuTreeGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取用户拥有按钮权限集合（缓存）
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuOwnBtnPermListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListString>> {
            return SysMenuApiFp(configuration).apiSysMenuOwnBtnPermListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新菜单
         * @param {UpdateMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMenuUpdatePost(body?: UpdateMenuInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMenuApiFp(configuration).apiSysMenuUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysMenuApi - object-oriented interface
 * @export
 * @class SysMenuApi
 * @extends {BaseAPI}
 */
export class SysMenuApi extends BaseAPI {
    /**
     * 
     * @summary 增加菜单
     * @param {AddMenuInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMenuApi
     */
    public async apiSysMenuAddPost(body?: AddMenuInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMenuApiFp(this.configuration).apiSysMenuAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除菜单
     * @param {DeleteMenuInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMenuApi
     */
    public async apiSysMenuDeletePost(body?: DeleteMenuInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMenuApiFp(this.configuration).apiSysMenuDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取菜单列表
     * @param {string} [title] 标题
     * @param {MenuTypeEnum} [type] 菜单类型（1目录 2菜单 3按钮）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMenuApi
     */
    public async apiSysMenuListGet(title?: string, type?: MenuTypeEnum, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysMenu>> {
        return SysMenuApiFp(this.configuration).apiSysMenuListGet(title, type, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取登录菜单树
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMenuApi
     */
    public async apiSysMenuLoginMenuTreeGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListMenuOutput>> {
        return SysMenuApiFp(this.configuration).apiSysMenuLoginMenuTreeGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取用户拥有按钮权限集合（缓存）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMenuApi
     */
    public async apiSysMenuOwnBtnPermListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListString>> {
        return SysMenuApiFp(this.configuration).apiSysMenuOwnBtnPermListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新菜单
     * @param {UpdateMenuInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMenuApi
     */
    public async apiSysMenuUpdatePost(body?: UpdateMenuInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMenuApiFp(this.configuration).apiSysMenuUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
