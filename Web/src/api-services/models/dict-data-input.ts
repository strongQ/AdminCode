/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface DictDataInput
 */
export interface DictDataInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof DictDataInput
     */
    id: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof DictDataInput
     */
    status?: StatusEnum;
}
