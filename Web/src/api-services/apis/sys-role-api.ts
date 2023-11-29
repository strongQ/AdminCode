/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddRoleInput } from '../models';
import { AdminResultInt32 } from '../models';
import { AdminResultListInt64 } from '../models';
import { AdminResultListRoleOutput } from '../models';
import { AdminResultSqlSugarPagedListSysRole } from '../models';
import { DeleteRoleInput } from '../models';
import { RoleInput } from '../models';
import { RoleMenuInput } from '../models';
import { RoleOrgInput } from '../models';
import { StatusEnum } from '../models';
import { UpdateRoleInput } from '../models';
/**
 * SysRoleApi - axios parameter creator
 * @export
 */
export const SysRoleApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加角色
         * @param {AddRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleAddPost: async (body?: AddRoleInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysRole/add`;
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
         * @summary 删除角色
         * @param {DeleteRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleDeletePost: async (body?: DeleteRoleInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysRole/delete`;
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
         * @summary 授权角色数据范围
         * @param {RoleOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleGrantDataScopePost: async (body?: RoleOrgInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysRole/grantDataScope`;
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
         * @summary 授权角色菜单
         * @param {RoleMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleGrantMenuPost: async (body?: RoleMenuInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysRole/grantMenu`;
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
         * @summary 获取角色列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysRole/list`;
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
         * @summary 根据角色Id获取菜单Id集合
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleOwnMenuListGet: async (id: number, status?: StatusEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiSysRoleOwnMenuListGet.');
            }
            const localVarPath = `/api/sysRole/ownMenuList`;
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
         * @summary 根据角色Id获取机构Id集合
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleOwnOrgListGet: async (id: number, status?: StatusEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiSysRoleOwnOrgListGet.');
            }
            const localVarPath = `/api/sysRole/ownOrgList`;
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
         * @summary 获取角色分页列表
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
        apiSysRolePageGet: async (name?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysRole/page`;
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
         * @summary 设置角色状态
         * @param {RoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleSetStatusPost: async (body?: RoleInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysRole/setStatus`;
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
         * @summary 更新角色
         * @param {UpdateRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysRoleUpdatePost: async (body?: UpdateRoleInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysRole/update`;
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
 * SysRoleApi - functional programming interface
 * @export
 */
export const SysRoleApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加角色
         * @param {AddRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleAddPost(body?: AddRoleInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除角色
         * @param {DeleteRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleDeletePost(body?: DeleteRoleInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 授权角色数据范围
         * @param {RoleOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleGrantDataScopePost(body?: RoleOrgInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleGrantDataScopePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 授权角色菜单
         * @param {RoleMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleGrantMenuPost(body?: RoleMenuInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleGrantMenuPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取角色列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListRoleOutput>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 根据角色Id获取菜单Id集合
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleOwnMenuListGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListInt64>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleOwnMenuListGet(id, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 根据角色Id获取机构Id集合
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleOwnOrgListGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListInt64>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleOwnOrgListGet(id, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取角色分页列表
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
        async apiSysRolePageGet(name?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysRole>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRolePageGet(name, code, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 设置角色状态
         * @param {RoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleSetStatusPost(body?: RoleInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt32>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleSetStatusPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新角色
         * @param {UpdateRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleUpdatePost(body?: UpdateRoleInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysRoleApiAxiosParamCreator(configuration).apiSysRoleUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysRoleApi - factory interface
 * @export
 */
export const SysRoleApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加角色
         * @param {AddRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleAddPost(body?: AddRoleInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysRoleApiFp(configuration).apiSysRoleAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除角色
         * @param {DeleteRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleDeletePost(body?: DeleteRoleInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysRoleApiFp(configuration).apiSysRoleDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 授权角色数据范围
         * @param {RoleOrgInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleGrantDataScopePost(body?: RoleOrgInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysRoleApiFp(configuration).apiSysRoleGrantDataScopePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 授权角色菜单
         * @param {RoleMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleGrantMenuPost(body?: RoleMenuInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysRoleApiFp(configuration).apiSysRoleGrantMenuPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取角色列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListRoleOutput>> {
            return SysRoleApiFp(configuration).apiSysRoleListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 根据角色Id获取菜单Id集合
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleOwnMenuListGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListInt64>> {
            return SysRoleApiFp(configuration).apiSysRoleOwnMenuListGet(id, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 根据角色Id获取机构Id集合
         * @param {number} id 主键Id
         * @param {StatusEnum} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleOwnOrgListGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListInt64>> {
            return SysRoleApiFp(configuration).apiSysRoleOwnOrgListGet(id, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取角色分页列表
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
        async apiSysRolePageGet(name?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysRole>> {
            return SysRoleApiFp(configuration).apiSysRolePageGet(name, code, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 设置角色状态
         * @param {RoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleSetStatusPost(body?: RoleInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt32>> {
            return SysRoleApiFp(configuration).apiSysRoleSetStatusPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新角色
         * @param {UpdateRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysRoleUpdatePost(body?: UpdateRoleInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysRoleApiFp(configuration).apiSysRoleUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysRoleApi - object-oriented interface
 * @export
 * @class SysRoleApi
 * @extends {BaseAPI}
 */
export class SysRoleApi extends BaseAPI {
    /**
     * 
     * @summary 增加角色
     * @param {AddRoleInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleAddPost(body?: AddRoleInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysRoleApiFp(this.configuration).apiSysRoleAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除角色
     * @param {DeleteRoleInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleDeletePost(body?: DeleteRoleInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysRoleApiFp(this.configuration).apiSysRoleDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 授权角色数据范围
     * @param {RoleOrgInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleGrantDataScopePost(body?: RoleOrgInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysRoleApiFp(this.configuration).apiSysRoleGrantDataScopePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 授权角色菜单
     * @param {RoleMenuInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleGrantMenuPost(body?: RoleMenuInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysRoleApiFp(this.configuration).apiSysRoleGrantMenuPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取角色列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListRoleOutput>> {
        return SysRoleApiFp(this.configuration).apiSysRoleListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 根据角色Id获取菜单Id集合
     * @param {number} id 主键Id
     * @param {StatusEnum} [status] 状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleOwnMenuListGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListInt64>> {
        return SysRoleApiFp(this.configuration).apiSysRoleOwnMenuListGet(id, status, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 根据角色Id获取机构Id集合
     * @param {number} id 主键Id
     * @param {StatusEnum} [status] 状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleOwnOrgListGet(id: number, status?: StatusEnum, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListInt64>> {
        return SysRoleApiFp(this.configuration).apiSysRoleOwnOrgListGet(id, status, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取角色分页列表
     * @param {string} [name] 名称
     * @param {string} [code] 编码
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRolePageGet(name?: string, code?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysRole>> {
        return SysRoleApiFp(this.configuration).apiSysRolePageGet(name, code, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 设置角色状态
     * @param {RoleInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleSetStatusPost(body?: RoleInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt32>> {
        return SysRoleApiFp(this.configuration).apiSysRoleSetStatusPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新角色
     * @param {UpdateRoleInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysRoleApi
     */
    public async apiSysRoleUpdatePost(body?: UpdateRoleInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysRoleApiFp(this.configuration).apiSysRoleUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
