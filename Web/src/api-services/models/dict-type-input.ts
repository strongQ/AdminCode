/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface DictTypeInput
 */
export interface DictTypeInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof DictTypeInput
     */
    id: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof DictTypeInput
     */
    status?: StatusEnum;
}
