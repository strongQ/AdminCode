/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface TenantInput
 */
export interface TenantInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof TenantInput
     */
    id: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof TenantInput
     */
    status?: StatusEnum;
}
