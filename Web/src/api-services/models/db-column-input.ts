/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface DbColumnInput
 */
export interface DbColumnInput {
    /**
     * 
     * @type {string}
     * @memberof DbColumnInput
     */
    configId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DbColumnInput
     */
    tableName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DbColumnInput
     */
    dbColumnName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DbColumnInput
     */
    dataType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DbColumnInput
     */
    length?: number;
    /**
     * 
     * @type {string}
     * @memberof DbColumnInput
     */
    columnDescription?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DbColumnInput
     */
    isNullable?: number;
    /**
     * 
     * @type {number}
     * @memberof DbColumnInput
     */
    isIdentity?: number;
    /**
     * 
     * @type {number}
     * @memberof DbColumnInput
     */
    isPrimarykey?: number;
    /**
     * 
     * @type {number}
     * @memberof DbColumnInput
     */
    decimalDigits?: number;
}
