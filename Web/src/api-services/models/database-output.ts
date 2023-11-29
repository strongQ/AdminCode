/* tslint:disable */
/* eslint-disable */

import { DbType } from './db-type';
/**
 * 数据库
 * @export
 * @interface DatabaseOutput
 */
export interface DatabaseOutput {
    /**
     * 库定位器名
     * @type {string}
     * @memberof DatabaseOutput
     */
    configId?: string | null;
    /**
     * 
     * @type {DbType}
     * @memberof DatabaseOutput
     */
    dbType?: DbType;
    /**
     * 数据库连接字符串
     * @type {string}
     * @memberof DatabaseOutput
     */
    connectionString?: string | null;
}
