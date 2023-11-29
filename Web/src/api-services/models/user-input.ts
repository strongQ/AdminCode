/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface UserInput
 */
export interface UserInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof UserInput
     */
    id: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof UserInput
     */
    status?: StatusEnum;
}
