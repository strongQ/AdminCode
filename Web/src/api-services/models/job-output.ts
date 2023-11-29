/* tslint:disable */
/* eslint-disable */

import { SysJobDetail } from './sys-job-detail';
import { SysJobTrigger } from './sys-job-trigger';
/**
 * 
 * @export
 * @interface JobOutput
 */
export interface JobOutput {
    /**
     * 
     * @type {SysJobDetail}
     * @memberof JobOutput
     */
    jobDetail?: SysJobDetail;
    /**
     * 触发器集合
     * @type {Array<SysJobTrigger>}
     * @memberof JobOutput
     */
    jobTriggers?: Array<SysJobTrigger> | null;
}
