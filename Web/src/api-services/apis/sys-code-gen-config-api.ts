/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultListCodeGenConfig } from '../models';
import { AdminResultSysCodeGenConfig } from '../models';
import { CodeGenConfig } from '../models';
/**
 * SysCodeGenConfigApi - axios parameter creator
 * @export
 */
export const SysCodeGenConfigApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取代码生成配置详情
         * @param {number} [id] 主键Id
         * @param {number} [codeGenId] 代码生成主表ID
         * @param {string} [columnName] 数据库字段名
         * @param {string} [lowerColumnName] 数据库字段名(首字母小写)
         * @param {string} [columnComment] 字段描述
         * @param {string} [netType] .NET类型
         * @param {string} [effectType] 作用类型（字典）
         * @param {string} [fkEntityName] 外键实体名称
         * @param {string} [fkTableName] 外键表名称
         * @param {string} [lowerFkEntityName] 外键实体名称(首字母小写)
         * @param {string} [fkColumnName] 外键显示字段
         * @param {string} [lowerFkColumnName] 外键显示字段(首字母小写)
         * @param {string} [fkColumnNetType] 外键显示字段.NET类型
         * @param {string} [dictTypeCode] 字典code
         * @param {string} [whetherRetract] 列表是否缩进（字典）
         * @param {string} [whetherRequired] 是否必填（字典）
         * @param {string} [queryWhether] 是否是查询条件
         * @param {string} [queryType] 查询方式
         * @param {string} [whetherTable] 列表显示
         * @param {string} [whetherAddUpdate] 增改
         * @param {string} [columnKey] 主外键
         * @param {string} [dataType] 数据库中类型（物理类型）
         * @param {string} [whetherCommon] 是否是通用字段
         * @param {string} [tableNickName] 表的别名 Table as XXX
         * @param {string} [displayColumn] 显示文本字段
         * @param {string} [valueColumn] 选中值字段
         * @param {string} [pidColumn] 父级字段
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenConfigDetailGet: async (id?: number, codeGenId?: number, columnName?: string, lowerColumnName?: string, columnComment?: string, netType?: string, effectType?: string, fkEntityName?: string, fkTableName?: string, lowerFkEntityName?: string, fkColumnName?: string, lowerFkColumnName?: string, fkColumnNetType?: string, dictTypeCode?: string, whetherRetract?: string, whetherRequired?: string, queryWhether?: string, queryType?: string, whetherTable?: string, whetherAddUpdate?: string, columnKey?: string, dataType?: string, whetherCommon?: string, tableNickName?: string, displayColumn?: string, valueColumn?: string, pidColumn?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGenConfig/detail`;
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

            if (codeGenId !== undefined) {
                localVarQueryParameter['CodeGenId'] = codeGenId;
            }

            if (columnName !== undefined) {
                localVarQueryParameter['ColumnName'] = columnName;
            }

            if (lowerColumnName !== undefined) {
                localVarQueryParameter['LowerColumnName'] = lowerColumnName;
            }

            if (columnComment !== undefined) {
                localVarQueryParameter['ColumnComment'] = columnComment;
            }

            if (netType !== undefined) {
                localVarQueryParameter['NetType'] = netType;
            }

            if (effectType !== undefined) {
                localVarQueryParameter['EffectType'] = effectType;
            }

            if (fkEntityName !== undefined) {
                localVarQueryParameter['FkEntityName'] = fkEntityName;
            }

            if (fkTableName !== undefined) {
                localVarQueryParameter['FkTableName'] = fkTableName;
            }

            if (lowerFkEntityName !== undefined) {
                localVarQueryParameter['LowerFkEntityName'] = lowerFkEntityName;
            }

            if (fkColumnName !== undefined) {
                localVarQueryParameter['FkColumnName'] = fkColumnName;
            }

            if (lowerFkColumnName !== undefined) {
                localVarQueryParameter['LowerFkColumnName'] = lowerFkColumnName;
            }

            if (fkColumnNetType !== undefined) {
                localVarQueryParameter['FkColumnNetType'] = fkColumnNetType;
            }

            if (dictTypeCode !== undefined) {
                localVarQueryParameter['DictTypeCode'] = dictTypeCode;
            }

            if (whetherRetract !== undefined) {
                localVarQueryParameter['WhetherRetract'] = whetherRetract;
            }

            if (whetherRequired !== undefined) {
                localVarQueryParameter['WhetherRequired'] = whetherRequired;
            }

            if (queryWhether !== undefined) {
                localVarQueryParameter['QueryWhether'] = queryWhether;
            }

            if (queryType !== undefined) {
                localVarQueryParameter['QueryType'] = queryType;
            }

            if (whetherTable !== undefined) {
                localVarQueryParameter['WhetherTable'] = whetherTable;
            }

            if (whetherAddUpdate !== undefined) {
                localVarQueryParameter['WhetherAddUpdate'] = whetherAddUpdate;
            }

            if (columnKey !== undefined) {
                localVarQueryParameter['ColumnKey'] = columnKey;
            }

            if (dataType !== undefined) {
                localVarQueryParameter['DataType'] = dataType;
            }

            if (whetherCommon !== undefined) {
                localVarQueryParameter['WhetherCommon'] = whetherCommon;
            }

            if (tableNickName !== undefined) {
                localVarQueryParameter['TableNickName'] = tableNickName;
            }

            if (displayColumn !== undefined) {
                localVarQueryParameter['DisplayColumn'] = displayColumn;
            }

            if (valueColumn !== undefined) {
                localVarQueryParameter['ValueColumn'] = valueColumn;
            }

            if (pidColumn !== undefined) {
                localVarQueryParameter['PidColumn'] = pidColumn;
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
         * @summary 获取代码生成配置列表
         * @param {number} [id] 主键Id
         * @param {number} [codeGenId] 代码生成主表ID
         * @param {string} [columnName] 数据库字段名
         * @param {string} [lowerColumnName] 数据库字段名(首字母小写)
         * @param {string} [columnComment] 字段描述
         * @param {string} [netType] .NET类型
         * @param {string} [effectType] 作用类型（字典）
         * @param {string} [fkEntityName] 外键实体名称
         * @param {string} [fkTableName] 外键表名称
         * @param {string} [lowerFkEntityName] 外键实体名称(首字母小写)
         * @param {string} [fkColumnName] 外键显示字段
         * @param {string} [lowerFkColumnName] 外键显示字段(首字母小写)
         * @param {string} [fkColumnNetType] 外键显示字段.NET类型
         * @param {string} [dictTypeCode] 字典code
         * @param {string} [whetherRetract] 列表是否缩进（字典）
         * @param {string} [whetherRequired] 是否必填（字典）
         * @param {string} [queryWhether] 是否是查询条件
         * @param {string} [queryType] 查询方式
         * @param {string} [whetherTable] 列表显示
         * @param {string} [whetherAddUpdate] 增改
         * @param {string} [columnKey] 主外键
         * @param {string} [dataType] 数据库中类型（物理类型）
         * @param {string} [whetherCommon] 是否是通用字段
         * @param {string} [tableNickName] 表的别名 Table as XXX
         * @param {string} [displayColumn] 显示文本字段
         * @param {string} [valueColumn] 选中值字段
         * @param {string} [pidColumn] 父级字段
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenConfigListGet: async (id?: number, codeGenId?: number, columnName?: string, lowerColumnName?: string, columnComment?: string, netType?: string, effectType?: string, fkEntityName?: string, fkTableName?: string, lowerFkEntityName?: string, fkColumnName?: string, lowerFkColumnName?: string, fkColumnNetType?: string, dictTypeCode?: string, whetherRetract?: string, whetherRequired?: string, queryWhether?: string, queryType?: string, whetherTable?: string, whetherAddUpdate?: string, columnKey?: string, dataType?: string, whetherCommon?: string, tableNickName?: string, displayColumn?: string, valueColumn?: string, pidColumn?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGenConfig/list`;
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

            if (codeGenId !== undefined) {
                localVarQueryParameter['CodeGenId'] = codeGenId;
            }

            if (columnName !== undefined) {
                localVarQueryParameter['ColumnName'] = columnName;
            }

            if (lowerColumnName !== undefined) {
                localVarQueryParameter['LowerColumnName'] = lowerColumnName;
            }

            if (columnComment !== undefined) {
                localVarQueryParameter['ColumnComment'] = columnComment;
            }

            if (netType !== undefined) {
                localVarQueryParameter['NetType'] = netType;
            }

            if (effectType !== undefined) {
                localVarQueryParameter['EffectType'] = effectType;
            }

            if (fkEntityName !== undefined) {
                localVarQueryParameter['FkEntityName'] = fkEntityName;
            }

            if (fkTableName !== undefined) {
                localVarQueryParameter['FkTableName'] = fkTableName;
            }

            if (lowerFkEntityName !== undefined) {
                localVarQueryParameter['LowerFkEntityName'] = lowerFkEntityName;
            }

            if (fkColumnName !== undefined) {
                localVarQueryParameter['FkColumnName'] = fkColumnName;
            }

            if (lowerFkColumnName !== undefined) {
                localVarQueryParameter['LowerFkColumnName'] = lowerFkColumnName;
            }

            if (fkColumnNetType !== undefined) {
                localVarQueryParameter['FkColumnNetType'] = fkColumnNetType;
            }

            if (dictTypeCode !== undefined) {
                localVarQueryParameter['DictTypeCode'] = dictTypeCode;
            }

            if (whetherRetract !== undefined) {
                localVarQueryParameter['WhetherRetract'] = whetherRetract;
            }

            if (whetherRequired !== undefined) {
                localVarQueryParameter['WhetherRequired'] = whetherRequired;
            }

            if (queryWhether !== undefined) {
                localVarQueryParameter['QueryWhether'] = queryWhether;
            }

            if (queryType !== undefined) {
                localVarQueryParameter['QueryType'] = queryType;
            }

            if (whetherTable !== undefined) {
                localVarQueryParameter['WhetherTable'] = whetherTable;
            }

            if (whetherAddUpdate !== undefined) {
                localVarQueryParameter['WhetherAddUpdate'] = whetherAddUpdate;
            }

            if (columnKey !== undefined) {
                localVarQueryParameter['ColumnKey'] = columnKey;
            }

            if (dataType !== undefined) {
                localVarQueryParameter['DataType'] = dataType;
            }

            if (whetherCommon !== undefined) {
                localVarQueryParameter['WhetherCommon'] = whetherCommon;
            }

            if (tableNickName !== undefined) {
                localVarQueryParameter['TableNickName'] = tableNickName;
            }

            if (displayColumn !== undefined) {
                localVarQueryParameter['DisplayColumn'] = displayColumn;
            }

            if (valueColumn !== undefined) {
                localVarQueryParameter['ValueColumn'] = valueColumn;
            }

            if (pidColumn !== undefined) {
                localVarQueryParameter['PidColumn'] = pidColumn;
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
         * @summary 更新代码生成配置
         * @param {Array<CodeGenConfig>} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCodeGenConfigUpdatePost: async (body?: Array<CodeGenConfig>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCodeGenConfig/update`;
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
 * SysCodeGenConfigApi - functional programming interface
 * @export
 */
export const SysCodeGenConfigApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取代码生成配置详情
         * @param {number} [id] 主键Id
         * @param {number} [codeGenId] 代码生成主表ID
         * @param {string} [columnName] 数据库字段名
         * @param {string} [lowerColumnName] 数据库字段名(首字母小写)
         * @param {string} [columnComment] 字段描述
         * @param {string} [netType] .NET类型
         * @param {string} [effectType] 作用类型（字典）
         * @param {string} [fkEntityName] 外键实体名称
         * @param {string} [fkTableName] 外键表名称
         * @param {string} [lowerFkEntityName] 外键实体名称(首字母小写)
         * @param {string} [fkColumnName] 外键显示字段
         * @param {string} [lowerFkColumnName] 外键显示字段(首字母小写)
         * @param {string} [fkColumnNetType] 外键显示字段.NET类型
         * @param {string} [dictTypeCode] 字典code
         * @param {string} [whetherRetract] 列表是否缩进（字典）
         * @param {string} [whetherRequired] 是否必填（字典）
         * @param {string} [queryWhether] 是否是查询条件
         * @param {string} [queryType] 查询方式
         * @param {string} [whetherTable] 列表显示
         * @param {string} [whetherAddUpdate] 增改
         * @param {string} [columnKey] 主外键
         * @param {string} [dataType] 数据库中类型（物理类型）
         * @param {string} [whetherCommon] 是否是通用字段
         * @param {string} [tableNickName] 表的别名 Table as XXX
         * @param {string} [displayColumn] 显示文本字段
         * @param {string} [valueColumn] 选中值字段
         * @param {string} [pidColumn] 父级字段
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenConfigDetailGet(id?: number, codeGenId?: number, columnName?: string, lowerColumnName?: string, columnComment?: string, netType?: string, effectType?: string, fkEntityName?: string, fkTableName?: string, lowerFkEntityName?: string, fkColumnName?: string, lowerFkColumnName?: string, fkColumnNetType?: string, dictTypeCode?: string, whetherRetract?: string, whetherRequired?: string, queryWhether?: string, queryType?: string, whetherTable?: string, whetherAddUpdate?: string, columnKey?: string, dataType?: string, whetherCommon?: string, tableNickName?: string, displayColumn?: string, valueColumn?: string, pidColumn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSysCodeGenConfig>>> {
            const localVarAxiosArgs = await SysCodeGenConfigApiAxiosParamCreator(configuration).apiSysCodeGenConfigDetailGet(id, codeGenId, columnName, lowerColumnName, columnComment, netType, effectType, fkEntityName, fkTableName, lowerFkEntityName, fkColumnName, lowerFkColumnName, fkColumnNetType, dictTypeCode, whetherRetract, whetherRequired, queryWhether, queryType, whetherTable, whetherAddUpdate, columnKey, dataType, whetherCommon, tableNickName, displayColumn, valueColumn, pidColumn, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取代码生成配置列表
         * @param {number} [id] 主键Id
         * @param {number} [codeGenId] 代码生成主表ID
         * @param {string} [columnName] 数据库字段名
         * @param {string} [lowerColumnName] 数据库字段名(首字母小写)
         * @param {string} [columnComment] 字段描述
         * @param {string} [netType] .NET类型
         * @param {string} [effectType] 作用类型（字典）
         * @param {string} [fkEntityName] 外键实体名称
         * @param {string} [fkTableName] 外键表名称
         * @param {string} [lowerFkEntityName] 外键实体名称(首字母小写)
         * @param {string} [fkColumnName] 外键显示字段
         * @param {string} [lowerFkColumnName] 外键显示字段(首字母小写)
         * @param {string} [fkColumnNetType] 外键显示字段.NET类型
         * @param {string} [dictTypeCode] 字典code
         * @param {string} [whetherRetract] 列表是否缩进（字典）
         * @param {string} [whetherRequired] 是否必填（字典）
         * @param {string} [queryWhether] 是否是查询条件
         * @param {string} [queryType] 查询方式
         * @param {string} [whetherTable] 列表显示
         * @param {string} [whetherAddUpdate] 增改
         * @param {string} [columnKey] 主外键
         * @param {string} [dataType] 数据库中类型（物理类型）
         * @param {string} [whetherCommon] 是否是通用字段
         * @param {string} [tableNickName] 表的别名 Table as XXX
         * @param {string} [displayColumn] 显示文本字段
         * @param {string} [valueColumn] 选中值字段
         * @param {string} [pidColumn] 父级字段
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenConfigListGet(id?: number, codeGenId?: number, columnName?: string, lowerColumnName?: string, columnComment?: string, netType?: string, effectType?: string, fkEntityName?: string, fkTableName?: string, lowerFkEntityName?: string, fkColumnName?: string, lowerFkColumnName?: string, fkColumnNetType?: string, dictTypeCode?: string, whetherRetract?: string, whetherRequired?: string, queryWhether?: string, queryType?: string, whetherTable?: string, whetherAddUpdate?: string, columnKey?: string, dataType?: string, whetherCommon?: string, tableNickName?: string, displayColumn?: string, valueColumn?: string, pidColumn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListCodeGenConfig>>> {
            const localVarAxiosArgs = await SysCodeGenConfigApiAxiosParamCreator(configuration).apiSysCodeGenConfigListGet(id, codeGenId, columnName, lowerColumnName, columnComment, netType, effectType, fkEntityName, fkTableName, lowerFkEntityName, fkColumnName, lowerFkColumnName, fkColumnNetType, dictTypeCode, whetherRetract, whetherRequired, queryWhether, queryType, whetherTable, whetherAddUpdate, columnKey, dataType, whetherCommon, tableNickName, displayColumn, valueColumn, pidColumn, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新代码生成配置
         * @param {Array<CodeGenConfig>} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenConfigUpdatePost(body?: Array<CodeGenConfig>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysCodeGenConfigApiAxiosParamCreator(configuration).apiSysCodeGenConfigUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysCodeGenConfigApi - factory interface
 * @export
 */
export const SysCodeGenConfigApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 获取代码生成配置详情
         * @param {number} [id] 主键Id
         * @param {number} [codeGenId] 代码生成主表ID
         * @param {string} [columnName] 数据库字段名
         * @param {string} [lowerColumnName] 数据库字段名(首字母小写)
         * @param {string} [columnComment] 字段描述
         * @param {string} [netType] .NET类型
         * @param {string} [effectType] 作用类型（字典）
         * @param {string} [fkEntityName] 外键实体名称
         * @param {string} [fkTableName] 外键表名称
         * @param {string} [lowerFkEntityName] 外键实体名称(首字母小写)
         * @param {string} [fkColumnName] 外键显示字段
         * @param {string} [lowerFkColumnName] 外键显示字段(首字母小写)
         * @param {string} [fkColumnNetType] 外键显示字段.NET类型
         * @param {string} [dictTypeCode] 字典code
         * @param {string} [whetherRetract] 列表是否缩进（字典）
         * @param {string} [whetherRequired] 是否必填（字典）
         * @param {string} [queryWhether] 是否是查询条件
         * @param {string} [queryType] 查询方式
         * @param {string} [whetherTable] 列表显示
         * @param {string} [whetherAddUpdate] 增改
         * @param {string} [columnKey] 主外键
         * @param {string} [dataType] 数据库中类型（物理类型）
         * @param {string} [whetherCommon] 是否是通用字段
         * @param {string} [tableNickName] 表的别名 Table as XXX
         * @param {string} [displayColumn] 显示文本字段
         * @param {string} [valueColumn] 选中值字段
         * @param {string} [pidColumn] 父级字段
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenConfigDetailGet(id?: number, codeGenId?: number, columnName?: string, lowerColumnName?: string, columnComment?: string, netType?: string, effectType?: string, fkEntityName?: string, fkTableName?: string, lowerFkEntityName?: string, fkColumnName?: string, lowerFkColumnName?: string, fkColumnNetType?: string, dictTypeCode?: string, whetherRetract?: string, whetherRequired?: string, queryWhether?: string, queryType?: string, whetherTable?: string, whetherAddUpdate?: string, columnKey?: string, dataType?: string, whetherCommon?: string, tableNickName?: string, displayColumn?: string, valueColumn?: string, pidColumn?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSysCodeGenConfig>> {
            return SysCodeGenConfigApiFp(configuration).apiSysCodeGenConfigDetailGet(id, codeGenId, columnName, lowerColumnName, columnComment, netType, effectType, fkEntityName, fkTableName, lowerFkEntityName, fkColumnName, lowerFkColumnName, fkColumnNetType, dictTypeCode, whetherRetract, whetherRequired, queryWhether, queryType, whetherTable, whetherAddUpdate, columnKey, dataType, whetherCommon, tableNickName, displayColumn, valueColumn, pidColumn, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取代码生成配置列表
         * @param {number} [id] 主键Id
         * @param {number} [codeGenId] 代码生成主表ID
         * @param {string} [columnName] 数据库字段名
         * @param {string} [lowerColumnName] 数据库字段名(首字母小写)
         * @param {string} [columnComment] 字段描述
         * @param {string} [netType] .NET类型
         * @param {string} [effectType] 作用类型（字典）
         * @param {string} [fkEntityName] 外键实体名称
         * @param {string} [fkTableName] 外键表名称
         * @param {string} [lowerFkEntityName] 外键实体名称(首字母小写)
         * @param {string} [fkColumnName] 外键显示字段
         * @param {string} [lowerFkColumnName] 外键显示字段(首字母小写)
         * @param {string} [fkColumnNetType] 外键显示字段.NET类型
         * @param {string} [dictTypeCode] 字典code
         * @param {string} [whetherRetract] 列表是否缩进（字典）
         * @param {string} [whetherRequired] 是否必填（字典）
         * @param {string} [queryWhether] 是否是查询条件
         * @param {string} [queryType] 查询方式
         * @param {string} [whetherTable] 列表显示
         * @param {string} [whetherAddUpdate] 增改
         * @param {string} [columnKey] 主外键
         * @param {string} [dataType] 数据库中类型（物理类型）
         * @param {string} [whetherCommon] 是否是通用字段
         * @param {string} [tableNickName] 表的别名 Table as XXX
         * @param {string} [displayColumn] 显示文本字段
         * @param {string} [valueColumn] 选中值字段
         * @param {string} [pidColumn] 父级字段
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenConfigListGet(id?: number, codeGenId?: number, columnName?: string, lowerColumnName?: string, columnComment?: string, netType?: string, effectType?: string, fkEntityName?: string, fkTableName?: string, lowerFkEntityName?: string, fkColumnName?: string, lowerFkColumnName?: string, fkColumnNetType?: string, dictTypeCode?: string, whetherRetract?: string, whetherRequired?: string, queryWhether?: string, queryType?: string, whetherTable?: string, whetherAddUpdate?: string, columnKey?: string, dataType?: string, whetherCommon?: string, tableNickName?: string, displayColumn?: string, valueColumn?: string, pidColumn?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListCodeGenConfig>> {
            return SysCodeGenConfigApiFp(configuration).apiSysCodeGenConfigListGet(id, codeGenId, columnName, lowerColumnName, columnComment, netType, effectType, fkEntityName, fkTableName, lowerFkEntityName, fkColumnName, lowerFkColumnName, fkColumnNetType, dictTypeCode, whetherRetract, whetherRequired, queryWhether, queryType, whetherTable, whetherAddUpdate, columnKey, dataType, whetherCommon, tableNickName, displayColumn, valueColumn, pidColumn, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新代码生成配置
         * @param {Array<CodeGenConfig>} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCodeGenConfigUpdatePost(body?: Array<CodeGenConfig>, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysCodeGenConfigApiFp(configuration).apiSysCodeGenConfigUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysCodeGenConfigApi - object-oriented interface
 * @export
 * @class SysCodeGenConfigApi
 * @extends {BaseAPI}
 */
export class SysCodeGenConfigApi extends BaseAPI {
    /**
     * 
     * @summary 获取代码生成配置详情
     * @param {number} [id] 主键Id
     * @param {number} [codeGenId] 代码生成主表ID
     * @param {string} [columnName] 数据库字段名
     * @param {string} [lowerColumnName] 数据库字段名(首字母小写)
     * @param {string} [columnComment] 字段描述
     * @param {string} [netType] .NET类型
     * @param {string} [effectType] 作用类型（字典）
     * @param {string} [fkEntityName] 外键实体名称
     * @param {string} [fkTableName] 外键表名称
     * @param {string} [lowerFkEntityName] 外键实体名称(首字母小写)
     * @param {string} [fkColumnName] 外键显示字段
     * @param {string} [lowerFkColumnName] 外键显示字段(首字母小写)
     * @param {string} [fkColumnNetType] 外键显示字段.NET类型
     * @param {string} [dictTypeCode] 字典code
     * @param {string} [whetherRetract] 列表是否缩进（字典）
     * @param {string} [whetherRequired] 是否必填（字典）
     * @param {string} [queryWhether] 是否是查询条件
     * @param {string} [queryType] 查询方式
     * @param {string} [whetherTable] 列表显示
     * @param {string} [whetherAddUpdate] 增改
     * @param {string} [columnKey] 主外键
     * @param {string} [dataType] 数据库中类型（物理类型）
     * @param {string} [whetherCommon] 是否是通用字段
     * @param {string} [tableNickName] 表的别名 Table as XXX
     * @param {string} [displayColumn] 显示文本字段
     * @param {string} [valueColumn] 选中值字段
     * @param {string} [pidColumn] 父级字段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenConfigApi
     */
    public async apiSysCodeGenConfigDetailGet(id?: number, codeGenId?: number, columnName?: string, lowerColumnName?: string, columnComment?: string, netType?: string, effectType?: string, fkEntityName?: string, fkTableName?: string, lowerFkEntityName?: string, fkColumnName?: string, lowerFkColumnName?: string, fkColumnNetType?: string, dictTypeCode?: string, whetherRetract?: string, whetherRequired?: string, queryWhether?: string, queryType?: string, whetherTable?: string, whetherAddUpdate?: string, columnKey?: string, dataType?: string, whetherCommon?: string, tableNickName?: string, displayColumn?: string, valueColumn?: string, pidColumn?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSysCodeGenConfig>> {
        return SysCodeGenConfigApiFp(this.configuration).apiSysCodeGenConfigDetailGet(id, codeGenId, columnName, lowerColumnName, columnComment, netType, effectType, fkEntityName, fkTableName, lowerFkEntityName, fkColumnName, lowerFkColumnName, fkColumnNetType, dictTypeCode, whetherRetract, whetherRequired, queryWhether, queryType, whetherTable, whetherAddUpdate, columnKey, dataType, whetherCommon, tableNickName, displayColumn, valueColumn, pidColumn, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取代码生成配置列表
     * @param {number} [id] 主键Id
     * @param {number} [codeGenId] 代码生成主表ID
     * @param {string} [columnName] 数据库字段名
     * @param {string} [lowerColumnName] 数据库字段名(首字母小写)
     * @param {string} [columnComment] 字段描述
     * @param {string} [netType] .NET类型
     * @param {string} [effectType] 作用类型（字典）
     * @param {string} [fkEntityName] 外键实体名称
     * @param {string} [fkTableName] 外键表名称
     * @param {string} [lowerFkEntityName] 外键实体名称(首字母小写)
     * @param {string} [fkColumnName] 外键显示字段
     * @param {string} [lowerFkColumnName] 外键显示字段(首字母小写)
     * @param {string} [fkColumnNetType] 外键显示字段.NET类型
     * @param {string} [dictTypeCode] 字典code
     * @param {string} [whetherRetract] 列表是否缩进（字典）
     * @param {string} [whetherRequired] 是否必填（字典）
     * @param {string} [queryWhether] 是否是查询条件
     * @param {string} [queryType] 查询方式
     * @param {string} [whetherTable] 列表显示
     * @param {string} [whetherAddUpdate] 增改
     * @param {string} [columnKey] 主外键
     * @param {string} [dataType] 数据库中类型（物理类型）
     * @param {string} [whetherCommon] 是否是通用字段
     * @param {string} [tableNickName] 表的别名 Table as XXX
     * @param {string} [displayColumn] 显示文本字段
     * @param {string} [valueColumn] 选中值字段
     * @param {string} [pidColumn] 父级字段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenConfigApi
     */
    public async apiSysCodeGenConfigListGet(id?: number, codeGenId?: number, columnName?: string, lowerColumnName?: string, columnComment?: string, netType?: string, effectType?: string, fkEntityName?: string, fkTableName?: string, lowerFkEntityName?: string, fkColumnName?: string, lowerFkColumnName?: string, fkColumnNetType?: string, dictTypeCode?: string, whetherRetract?: string, whetherRequired?: string, queryWhether?: string, queryType?: string, whetherTable?: string, whetherAddUpdate?: string, columnKey?: string, dataType?: string, whetherCommon?: string, tableNickName?: string, displayColumn?: string, valueColumn?: string, pidColumn?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListCodeGenConfig>> {
        return SysCodeGenConfigApiFp(this.configuration).apiSysCodeGenConfigListGet(id, codeGenId, columnName, lowerColumnName, columnComment, netType, effectType, fkEntityName, fkTableName, lowerFkEntityName, fkColumnName, lowerFkColumnName, fkColumnNetType, dictTypeCode, whetherRetract, whetherRequired, queryWhether, queryType, whetherTable, whetherAddUpdate, columnKey, dataType, whetherCommon, tableNickName, displayColumn, valueColumn, pidColumn, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新代码生成配置
     * @param {Array<CodeGenConfig>} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCodeGenConfigApi
     */
    public async apiSysCodeGenConfigUpdatePost(body?: Array<CodeGenConfig>, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysCodeGenConfigApiFp(this.configuration).apiSysCodeGenConfigUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
