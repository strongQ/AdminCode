/* tslint:disable */
/* eslint-disable */

import { DbObjectType } from './db-object-type';
/**
 * 
 * @export
 * @interface DbTableInfo
 */
export interface DbTableInfo {
    /**
     * 
     * @type {string}
     * @memberof DbTableInfo
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DbTableInfo
     */
    description?: string | null;
    /**
     * 
     * @type {DbObjectType}
     * @memberof DbTableInfo
     */
    dbObjectType?: DbObjectType;
}
