/* tslint:disable */
/* eslint-disable */

import { DbColumnInput } from './db-column-input';
/**
 * 
 * @export
 * @interface DbTableInput
 */
export interface DbTableInput {
    /**
     * 
     * @type {string}
     * @memberof DbTableInput
     */
    configId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DbTableInput
     */
    tableName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DbTableInput
     */
    description?: string | null;
    /**
     * 
     * @type {Array<DbColumnInput>}
     * @memberof DbTableInput
     */
    dbColumnInfoList?: Array<DbColumnInput> | null;
}
