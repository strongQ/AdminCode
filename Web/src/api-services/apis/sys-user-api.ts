/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddUserInput } from '../models';
import { AdminResultInt32 } from '../models';
import { AdminResultListInt64 } from '../models';
import { AdminResultListSysUserExtOrg } from '../models';
import { AdminResultSqlSugarPagedListSysUser } from '../models';
import { AdminResultSysUser } from '../models';
import { ChangePwdInput } from '../models';
import { DeleteUserInput } from '../models';
import { ResetPwdUserInput } from '../models';
import { SysUser } from '../models';
import { UpdateUserInput } from '../models';
import { UserInput } from '../models';
import { UserRoleInput } from '../models';
/**
 * SysUserApi - axios parameter creator
 * @export
 */
export const SysUserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加用户
         * @param {AddUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserAddPost: async (body?: AddUserInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/add`;
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
         * @summary 查看用户基本信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserBaseInfoGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/baseInfo`;
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
         * @summary 更新用户基本信息
         * @param {SysUser} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserBaseInfoPost: async (body?: SysUser, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/baseInfo`;
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
         * @summary 修改用户密码
         * @param {ChangePwdInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserChangePwdPost: async (body?: ChangePwdInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/changePwd`;
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
         * @summary 删除用户
         * @param {DeleteUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserDeletePost: async (body?: DeleteUserInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/delete`;
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
         * @summary 授权用户角色
         * @param {UserRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserGrantRolePost: async (body?: UserRoleInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/grantRole`;
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
         * @summary 获取用户扩展机构集合
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserOwnExtOrgListUserIdGet: async (userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling apiSysUserOwnExtOrgListUserIdGet.');
            }
            const localVarPath = `/api/sysUser/ownExtOrgList/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * @summary 获取用户拥有角色集合
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserOwnRoleListUserIdGet: async (userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling apiSysUserOwnRoleListUserIdGet.');
            }
            const localVarPath = `/api/sysUser/ownRoleList/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * @summary 获取用户分页列表
         * @param {string} [account] 账号
         * @param {string} [realName] 姓名
         * @param {string} [phone] 手机号
         * @param {number} [orgId] 查询时所选机构Id
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserPageGet: async (account?: string, realName?: string, phone?: string, orgId?: number, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/page`;
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

            if (account !== undefined) {
                localVarQueryParameter['Account'] = account;
            }

            if (realName !== undefined) {
                localVarQueryParameter['RealName'] = realName;
            }

            if (phone !== undefined) {
                localVarQueryParameter['Phone'] = phone;
            }

            if (orgId !== undefined) {
                localVarQueryParameter['OrgId'] = orgId;
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
         * @summary 重置用户密码
         * @param {ResetPwdUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserResetPwdPost: async (body?: ResetPwdUserInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/resetPwd`;
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
         * @summary 设置用户状态
         * @param {UserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserSetStatusPost: async (body?: UserInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/setStatus`;
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
         * @summary 更新用户
         * @param {UpdateUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUserUpdatePost: async (body?: UpdateUserInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUser/update`;
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
 * SysUserApi - functional programming interface
 * @export
 */
export const SysUserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加用户
         * @param {AddUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserAddPost(body?: AddUserInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 查看用户基本信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserBaseInfoGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSysUser>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserBaseInfoGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新用户基本信息
         * @param {SysUser} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserBaseInfoPost(body?: SysUser, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt32>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserBaseInfoPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 修改用户密码
         * @param {ChangePwdInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserChangePwdPost(body?: ChangePwdInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt32>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserChangePwdPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除用户
         * @param {DeleteUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserDeletePost(body?: DeleteUserInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 授权用户角色
         * @param {UserRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserGrantRolePost(body?: UserRoleInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserGrantRolePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取用户扩展机构集合
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserOwnExtOrgListUserIdGet(userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysUserExtOrg>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserOwnExtOrgListUserIdGet(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取用户拥有角色集合
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserOwnRoleListUserIdGet(userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListInt64>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserOwnRoleListUserIdGet(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取用户分页列表
         * @param {string} [account] 账号
         * @param {string} [realName] 姓名
         * @param {string} [phone] 手机号
         * @param {number} [orgId] 查询时所选机构Id
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserPageGet(account?: string, realName?: string, phone?: string, orgId?: number, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysUser>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserPageGet(account, realName, phone, orgId, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 重置用户密码
         * @param {ResetPwdUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserResetPwdPost(body?: ResetPwdUserInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt32>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserResetPwdPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 设置用户状态
         * @param {UserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserSetStatusPost(body?: UserInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt32>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserSetStatusPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新用户
         * @param {UpdateUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserUpdatePost(body?: UpdateUserInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysUserApiAxiosParamCreator(configuration).apiSysUserUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysUserApi - factory interface
 * @export
 */
export const SysUserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加用户
         * @param {AddUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserAddPost(body?: AddUserInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysUserApiFp(configuration).apiSysUserAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 查看用户基本信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserBaseInfoGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSysUser>> {
            return SysUserApiFp(configuration).apiSysUserBaseInfoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新用户基本信息
         * @param {SysUser} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserBaseInfoPost(body?: SysUser, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt32>> {
            return SysUserApiFp(configuration).apiSysUserBaseInfoPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 修改用户密码
         * @param {ChangePwdInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserChangePwdPost(body?: ChangePwdInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt32>> {
            return SysUserApiFp(configuration).apiSysUserChangePwdPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除用户
         * @param {DeleteUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserDeletePost(body?: DeleteUserInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysUserApiFp(configuration).apiSysUserDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 授权用户角色
         * @param {UserRoleInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserGrantRolePost(body?: UserRoleInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysUserApiFp(configuration).apiSysUserGrantRolePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取用户扩展机构集合
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserOwnExtOrgListUserIdGet(userId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysUserExtOrg>> {
            return SysUserApiFp(configuration).apiSysUserOwnExtOrgListUserIdGet(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取用户拥有角色集合
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserOwnRoleListUserIdGet(userId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListInt64>> {
            return SysUserApiFp(configuration).apiSysUserOwnRoleListUserIdGet(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取用户分页列表
         * @param {string} [account] 账号
         * @param {string} [realName] 姓名
         * @param {string} [phone] 手机号
         * @param {number} [orgId] 查询时所选机构Id
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserPageGet(account?: string, realName?: string, phone?: string, orgId?: number, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysUser>> {
            return SysUserApiFp(configuration).apiSysUserPageGet(account, realName, phone, orgId, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 重置用户密码
         * @param {ResetPwdUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserResetPwdPost(body?: ResetPwdUserInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt32>> {
            return SysUserApiFp(configuration).apiSysUserResetPwdPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 设置用户状态
         * @param {UserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserSetStatusPost(body?: UserInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt32>> {
            return SysUserApiFp(configuration).apiSysUserSetStatusPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新用户
         * @param {UpdateUserInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUserUpdatePost(body?: UpdateUserInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysUserApiFp(configuration).apiSysUserUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysUserApi - object-oriented interface
 * @export
 * @class SysUserApi
 * @extends {BaseAPI}
 */
export class SysUserApi extends BaseAPI {
    /**
     * 
     * @summary 增加用户
     * @param {AddUserInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserAddPost(body?: AddUserInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysUserApiFp(this.configuration).apiSysUserAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 查看用户基本信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserBaseInfoGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSysUser>> {
        return SysUserApiFp(this.configuration).apiSysUserBaseInfoGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新用户基本信息
     * @param {SysUser} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserBaseInfoPost(body?: SysUser, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt32>> {
        return SysUserApiFp(this.configuration).apiSysUserBaseInfoPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 修改用户密码
     * @param {ChangePwdInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserChangePwdPost(body?: ChangePwdInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt32>> {
        return SysUserApiFp(this.configuration).apiSysUserChangePwdPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除用户
     * @param {DeleteUserInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserDeletePost(body?: DeleteUserInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysUserApiFp(this.configuration).apiSysUserDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 授权用户角色
     * @param {UserRoleInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserGrantRolePost(body?: UserRoleInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysUserApiFp(this.configuration).apiSysUserGrantRolePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取用户扩展机构集合
     * @param {number} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserOwnExtOrgListUserIdGet(userId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysUserExtOrg>> {
        return SysUserApiFp(this.configuration).apiSysUserOwnExtOrgListUserIdGet(userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取用户拥有角色集合
     * @param {number} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserOwnRoleListUserIdGet(userId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListInt64>> {
        return SysUserApiFp(this.configuration).apiSysUserOwnRoleListUserIdGet(userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取用户分页列表
     * @param {string} [account] 账号
     * @param {string} [realName] 姓名
     * @param {string} [phone] 手机号
     * @param {number} [orgId] 查询时所选机构Id
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserPageGet(account?: string, realName?: string, phone?: string, orgId?: number, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysUser>> {
        return SysUserApiFp(this.configuration).apiSysUserPageGet(account, realName, phone, orgId, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 重置用户密码
     * @param {ResetPwdUserInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserResetPwdPost(body?: ResetPwdUserInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt32>> {
        return SysUserApiFp(this.configuration).apiSysUserResetPwdPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 设置用户状态
     * @param {UserInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserSetStatusPost(body?: UserInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt32>> {
        return SysUserApiFp(this.configuration).apiSysUserSetStatusPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新用户
     * @param {UpdateUserInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUserApi
     */
    public async apiSysUserUpdatePost(body?: UpdateUserInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysUserApiFp(this.configuration).apiSysUserUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
