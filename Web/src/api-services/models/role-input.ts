/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface RoleInput
 */
export interface RoleInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof RoleInput
     */
    id: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof RoleInput
     */
    status?: StatusEnum;
}
