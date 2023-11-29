/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddCodeGenInput } from '../models';
import { AdminResultListColumnOuput } from '../models';
import { AdminResultListDatabaseOutput } from '../models';
import { AdminResultListTableOutput } from '../models';
import { AdminResultSqlSugarPagedListSysCodeGen } from '../models';
import { AdminResultSysCodeGen } from '../models';
import { DeleteCodeGenInput } from '../models';
import { SysCodeGen } from '../models';
import { UpdateCodeGenInput } from '../models';
/**
 * SysCodeGenApi - axios parameter creator
 * @export
 */
export const SysCodeGenApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加代码生成
         * @param {AddCodeGenInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenAddPost: async (body?: AddCodeGenInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGen/add`;
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
         * @summary 根据表名获取列集合
         * @param {string} tableName 
         * @param {string} configId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenColumnListByTableNameTableNameConfigIdGet: async (tableName: string, configId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tableName' is not null or undefined
            if (tableName === null || tableName === undefined) {
                throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling apiSysCodeGenColumnListByTableNameTableNameConfigIdGet.');
            }
            // verify required parameter 'configId' is not null or undefined
            if (configId === null || configId === undefined) {
                throw new RequiredError('configId','Required parameter configId was null or undefined when calling apiSysCodeGenColumnListByTableNameTableNameConfigIdGet.');
            }
            const localVarPath = `/api/sysCodeGen/columnListByTableName/{tableName}/{configId}`
                .replace(`{${"tableName"}}`, encodeURIComponent(String(tableName)))
                .replace(`{${"configId"}}`, encodeURIComponent(String(configId)));
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
         * @summary 获取数据库库集合
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenDatabaseListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGen/databaseList`;
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
         * @summary 删除代码生成
         * @param {Array<DeleteCodeGenInput>} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenDeletePost: async (body?: Array<DeleteCodeGenInput>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGen/delete`;
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
         * @summary 获取代码生成详情
         * @param {number} id 代码生成器Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenDetailGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiSysCodeGenDetailGet.');
            }
            const localVarPath = `/api/sysCodeGen/detail`;
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
         * @summary 获取代码生成分页列表
         * @param {string} [authorName] 作者姓名
         * @param {string} [className] 类名
         * @param {string} [tablePrefix] 是否移除表前缀
         * @param {string} [configId] 库定位器名
         * @param {string} [dbName] 数据库名(保留字段)
         * @param {string} [dbType] 数据库类型
         * @param {string} [connectionString] 数据库链接
         * @param {string} [generateType] 生成方式
         * @param {string} [tableName] 数据库表名
         * @param {string} [nameSpace] 命名空间
         * @param {string} [busName] 业务名（业务代码包名称）
         * @param {string} [tableComment] 功能名（数据库表名称）
         * @param {string} [menuApplication] 菜单应用分类（应用编码）
         * @param {number} [menuPid] 菜单父级
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenPageGet: async (authorName?: string, className?: string, tablePrefix?: string, configId?: string, dbName?: string, dbType?: string, connectionString?: string, generateType?: string, tableName?: string, nameSpace?: string, busName?: string, tableComment?: string, menuApplication?: string, menuPid?: number, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGen/page`;
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

            if (authorName !== undefined) {
                localVarQueryParameter['AuthorName'] = authorName;
            }

            if (className !== undefined) {
                localVarQueryParameter['ClassName'] = className;
            }

            if (tablePrefix !== undefined) {
                localVarQueryParameter['TablePrefix'] = tablePrefix;
            }

            if (configId !== undefined) {
                localVarQueryParameter['ConfigId'] = configId;
            }

            if (dbName !== undefined) {
                localVarQueryParameter['DbName'] = dbName;
            }

            if (dbType !== undefined) {
                localVarQueryParameter['DbType'] = dbType;
            }

            if (connectionString !== undefined) {
                localVarQueryParameter['ConnectionString'] = connectionString;
            }

            if (generateType !== undefined) {
                localVarQueryParameter['GenerateType'] = generateType;
            }

            if (tableName !== undefined) {
                localVarQueryParameter['TableName'] = tableName;
            }

            if (nameSpace !== undefined) {
                localVarQueryParameter['NameSpace'] = nameSpace;
            }

            if (busName !== undefined) {
                localVarQueryParameter['BusName'] = busName;
            }

            if (tableComment !== undefined) {
                localVarQueryParameter['TableComment'] = tableComment;
            }

            if (menuApplication !== undefined) {
                localVarQueryParameter['MenuApplication'] = menuApplication;
            }

            if (menuPid !== undefined) {
                localVarQueryParameter['MenuPid'] = menuPid;
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
         * @summary 代码生成到本地
         * @param {SysCodeGen} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenRunLocalPost: async (body?: SysCodeGen, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGen/runLocal`;
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
         * @summary 获取数据库表(实体)集合
         * @param {string} configId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenTableListConfigIdGet: async (configId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'configId' is not null or undefined
            if (configId === null || configId === undefined) {
                throw new RequiredError('configId','Required parameter configId was null or undefined when calling apiSysCodeGenTableListConfigIdGet.');
            }
            const localVarPath = `/api/sysCodeGen/tableList/{configId}`
                .replace(`{${"configId"}}`, encodeURIComponent(String(configId)));
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
         * @summary 更新代码生成
         * @param {UpdateCodeGenInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenUpdatePost: async (body?: UpdateCodeGenInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGen/update`;
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
 * SysCodeGenApi - functional programming interface
 * @export
 */
export const SysCodeGenApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加代码生成
         * @param {AddCodeGenInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenAddPost(body?: AddCodeGenInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 根据表名获取列集合
         * @param {string} tableName 
         * @param {string} configId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(tableName: string, configId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListColumnOuput>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(tableName, configId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取数据库库集合
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenDatabaseListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListDatabaseOutput>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenDatabaseListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除代码生成
         * @param {Array<DeleteCodeGenInput>} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenDeletePost(body?: Array<DeleteCodeGenInput>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取代码生成详情
         * @param {number} id 代码生成器Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenDetailGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSysCodeGen>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenDetailGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取代码生成分页列表
         * @param {string} [authorName] 作者姓名
         * @param {string} [className] 类名
         * @param {string} [tablePrefix] 是否移除表前缀
         * @param {string} [configId] 库定位器名
         * @param {string} [dbName] 数据库名(保留字段)
         * @param {string} [dbType] 数据库类型
         * @param {string} [connectionString] 数据库链接
         * @param {string} [generateType] 生成方式
         * @param {string} [tableName] 数据库表名
         * @param {string} [nameSpace] 命名空间
         * @param {string} [busName] 业务名（业务代码包名称）
         * @param {string} [tableComment] 功能名（数据库表名称）
         * @param {string} [menuApplication] 菜单应用分类（应用编码）
         * @param {number} [menuPid] 菜单父级
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenPageGet(authorName?: string, className?: string, tablePrefix?: string, configId?: string, dbName?: string, dbType?: string, connectionString?: string, generateType?: string, tableName?: string, nameSpace?: string, busName?: string, tableComment?: string, menuApplication?: string, menuPid?: number, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysCodeGen>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenPageGet(authorName, className, tablePrefix, configId, dbName, dbType, connectionString, generateType, tableName, nameSpace, busName, tableComment, menuApplication, menuPid, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 代码生成到本地
         * @param {SysCodeGen} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenRunLocalPost(body?: SysCodeGen, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenRunLocalPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取数据库表(实体)集合
         * @param {string} configId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenTableListConfigIdGet(configId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListTableOutput>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenTableListConfigIdGet(configId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新代码生成
         * @param {UpdateCodeGenInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenUpdatePost(body?: UpdateCodeGenInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysCodeGenApiAxiosParamCreator(configuration).apiSysCodeGenUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysCodeGenApi - factory interface
 * @export
 */
export const SysCodeGenApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加代码生成
         * @param {AddCodeGenInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenAddPost(body?: AddCodeGenInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 根据表名获取列集合
         * @param {string} tableName 
         * @param {string} configId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(tableName: string, configId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListColumnOuput>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(tableName, configId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取数据库库集合
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenDatabaseListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListDatabaseOutput>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenDatabaseListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除代码生成
         * @param {Array<DeleteCodeGenInput>} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenDeletePost(body?: Array<DeleteCodeGenInput>, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取代码生成详情
         * @param {number} id 代码生成器Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenDetailGet(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSysCodeGen>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenDetailGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取代码生成分页列表
         * @param {string} [authorName] 作者姓名
         * @param {string} [className] 类名
         * @param {string} [tablePrefix] 是否移除表前缀
         * @param {string} [configId] 库定位器名
         * @param {string} [dbName] 数据库名(保留字段)
         * @param {string} [dbType] 数据库类型
         * @param {string} [connectionString] 数据库链接
         * @param {string} [generateType] 生成方式
         * @param {string} [tableName] 数据库表名
         * @param {string} [nameSpace] 命名空间
         * @param {string} [busName] 业务名（业务代码包名称）
         * @param {string} [tableComment] 功能名（数据库表名称）
         * @param {string} [menuApplication] 菜单应用分类（应用编码）
         * @param {number} [menuPid] 菜单父级
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenPageGet(authorName?: string, className?: string, tablePrefix?: string, configId?: string, dbName?: string, dbType?: string, connectionString?: string, generateType?: string, tableName?: string, nameSpace?: string, busName?: string, tableComment?: string, menuApplication?: string, menuPid?: number, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysCodeGen>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenPageGet(authorName, className, tablePrefix, configId, dbName, dbType, connectionString, generateType, tableName, nameSpace, busName, tableComment, menuApplication, menuPid, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 代码生成到本地
         * @param {SysCodeGen} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenRunLocalPost(body?: SysCodeGen, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenRunLocalPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取数据库表(实体)集合
         * @param {string} configId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenTableListConfigIdGet(configId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListTableOutput>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenTableListConfigIdGet(configId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新代码生成
         * @param {UpdateCodeGenInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenUpdatePost(body?: UpdateCodeGenInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysCodeGenApiFp(configuration).apiSysCodeGenUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysCodeGenApi - object-oriented interface
 * @export
 * @class SysCodeGenApi
 * @extends {BaseAPI}
 */
export class SysCodeGenApi extends BaseAPI {
    /**
     * 
     * @summary 增加代码生成
     * @param {AddCodeGenInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenAddPost(body?: AddCodeGenInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 根据表名获取列集合
     * @param {string} tableName 
     * @param {string} configId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(tableName: string, configId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListColumnOuput>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(tableName, configId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取数据库库集合
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenDatabaseListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListDatabaseOutput>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenDatabaseListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除代码生成
     * @param {Array<DeleteCodeGenInput>} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenDeletePost(body?: Array<DeleteCodeGenInput>, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取代码生成详情
     * @param {number} id 代码生成器Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenDetailGet(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSysCodeGen>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenDetailGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取代码生成分页列表
     * @param {string} [authorName] 作者姓名
     * @param {string} [className] 类名
     * @param {string} [tablePrefix] 是否移除表前缀
     * @param {string} [configId] 库定位器名
     * @param {string} [dbName] 数据库名(保留字段)
     * @param {string} [dbType] 数据库类型
     * @param {string} [connectionString] 数据库链接
     * @param {string} [generateType] 生成方式
     * @param {string} [tableName] 数据库表名
     * @param {string} [nameSpace] 命名空间
     * @param {string} [busName] 业务名（业务代码包名称）
     * @param {string} [tableComment] 功能名（数据库表名称）
     * @param {string} [menuApplication] 菜单应用分类（应用编码）
     * @param {number} [menuPid] 菜单父级
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenPageGet(authorName?: string, className?: string, tablePrefix?: string, configId?: string, dbName?: string, dbType?: string, connectionString?: string, generateType?: string, tableName?: string, nameSpace?: string, busName?: string, tableComment?: string, menuApplication?: string, menuPid?: number, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysCodeGen>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenPageGet(authorName, className, tablePrefix, configId, dbName, dbType, connectionString, generateType, tableName, nameSpace, busName, tableComment, menuApplication, menuPid, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 代码生成到本地
     * @param {SysCodeGen} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenRunLocalPost(body?: SysCodeGen, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenRunLocalPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取数据库表(实体)集合
     * @param {string} configId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenTableListConfigIdGet(configId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListTableOutput>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenTableListConfigIdGet(configId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新代码生成
     * @param {UpdateCodeGenInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenApi
     */
    public async apiSysCodeGenUpdatePost(body?: UpdateCodeGenInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysCodeGenApiFp(this.configuration).apiSysCodeGenUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
