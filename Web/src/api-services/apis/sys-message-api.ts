/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { MessageInput } from '../models';
/**
 * SysMessageApi - axios parameter creator
 * @export
 */
export const SysMessageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 发送消息给所有人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMessageSendAllUserPost: async (body?: MessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMessage/sendAllUser`;
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
         * @summary 发送邮件
         * @param {string} message 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMessageSendEmailMessagePost: async (message: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'message' is not null or undefined
            if (message === null || message === undefined) {
                throw new RequiredError('message','Required parameter message was null or undefined when calling apiSysMessageSendEmailMessagePost.');
            }
            const localVarPath = `/api/sysMessage/sendEmail/{message}`
                .replace(`{${"message"}}`, encodeURIComponent(String(message)));
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
         * @summary 发送消息给除了发送人的其他人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMessageSendOtherUserPost: async (body?: MessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMessage/sendOtherUser`;
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
         * @summary 发送消息给某个人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMessageSendUserPost: async (body?: MessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMessage/sendUser`;
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
         * @summary 发送消息给某些人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysMessageSendUsersPost: async (body?: MessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysMessage/sendUsers`;
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
 * SysMessageApi - functional programming interface
 * @export
 */
export const SysMessageApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 发送消息给所有人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendAllUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).apiSysMessageSendAllUserPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送邮件
         * @param {string} message 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendEmailMessagePost(message: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).apiSysMessageSendEmailMessagePost(message, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送消息给除了发送人的其他人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendOtherUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).apiSysMessageSendOtherUserPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送消息给某个人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).apiSysMessageSendUserPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送消息给某些人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendUsersPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).apiSysMessageSendUsersPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysMessageApi - factory interface
 * @export
 */
export const SysMessageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 发送消息给所有人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendAllUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).apiSysMessageSendAllUserPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送邮件
         * @param {string} message 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendEmailMessagePost(message: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).apiSysMessageSendEmailMessagePost(message, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送消息给除了发送人的其他人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendOtherUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).apiSysMessageSendOtherUserPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送消息给某个人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).apiSysMessageSendUserPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送消息给某些人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysMessageSendUsersPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).apiSysMessageSendUsersPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysMessageApi - object-oriented interface
 * @export
 * @class SysMessageApi
 * @extends {BaseAPI}
 */
export class SysMessageApi extends BaseAPI {
    /**
     * 
     * @summary 发送消息给所有人
     * @param {MessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async apiSysMessageSendAllUserPost(body?: MessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).apiSysMessageSendAllUserPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送邮件
     * @param {string} message 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async apiSysMessageSendEmailMessagePost(message: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).apiSysMessageSendEmailMessagePost(message, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送消息给除了发送人的其他人
     * @param {MessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async apiSysMessageSendOtherUserPost(body?: MessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).apiSysMessageSendOtherUserPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送消息给某个人
     * @param {MessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async apiSysMessageSendUserPost(body?: MessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).apiSysMessageSendUserPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送消息给某些人
     * @param {MessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async apiSysMessageSendUsersPost(body?: MessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).apiSysMessageSendUsersPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
