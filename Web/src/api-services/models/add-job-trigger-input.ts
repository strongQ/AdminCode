/* tslint:disable */
/* eslint-disable */

import { TriggerStatus } from './trigger-status';
/**
 * 
 * @export
 * @interface AddJobTriggerInput
 */
export interface AddJobTriggerInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddJobTriggerInput
     */
    id?: number;
    /**
     * 触发器类型FullName
     * @type {string}
     * @memberof AddJobTriggerInput
     */
    triggerType?: string | null;
    /**
     * 程序集Name
     * @type {string}
     * @memberof AddJobTriggerInput
     */
    assemblyName?: string | null;
    /**
     * 参数
     * @type {string}
     * @memberof AddJobTriggerInput
     */
    args?: string | null;
    /**
     * 描述信息
     * @type {string}
     * @memberof AddJobTriggerInput
     */
    description?: string | null;
    /**
     * 
     * @type {TriggerStatus}
     * @memberof AddJobTriggerInput
     */
    status?: TriggerStatus;
    /**
     * 起始时间
     * @type {Date}
     * @memberof AddJobTriggerInput
     */
    startTime?: Date | null;
    /**
     * 结束时间
     * @type {Date}
     * @memberof AddJobTriggerInput
     */
    endTime?: Date | null;
    /**
     * 最近运行时间
     * @type {Date}
     * @memberof AddJobTriggerInput
     */
    lastRunTime?: Date | null;
    /**
     * 下一次运行时间
     * @type {Date}
     * @memberof AddJobTriggerInput
     */
    nextRunTime?: Date | null;
    /**
     * 触发次数
     * @type {number}
     * @memberof AddJobTriggerInput
     */
    numberOfRuns?: number;
    /**
     * 最大触发次数（0:不限制，n:N次）
     * @type {number}
     * @memberof AddJobTriggerInput
     */
    maxNumberOfRuns?: number;
    /**
     * 出错次数
     * @type {number}
     * @memberof AddJobTriggerInput
     */
    numberOfErrors?: number;
    /**
     * 最大出错次数（0:不限制，n:N次）
     * @type {number}
     * @memberof AddJobTriggerInput
     */
    maxNumberOfErrors?: number;
    /**
     * 重试次数
     * @type {number}
     * @memberof AddJobTriggerInput
     */
    numRetries?: number;
    /**
     * 重试间隔时间（ms）
     * @type {number}
     * @memberof AddJobTriggerInput
     */
    retryTimeout?: number;
    /**
     * 是否立即启动
     * @type {boolean}
     * @memberof AddJobTriggerInput
     */
    startNow?: boolean;
    /**
     * 是否启动时执行一次
     * @type {boolean}
     * @memberof AddJobTriggerInput
     */
    runOnStart?: boolean;
    /**
     * 是否在启动时重置最大触发次数等于一次的作业
     * @type {boolean}
     * @memberof AddJobTriggerInput
     */
    resetOnlyOnce?: boolean;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddJobTriggerInput
     */
    updatedTime?: Date | null;
    /**
     * 作业Id
     * @type {string}
     * @memberof AddJobTriggerInput
     */
    jobId: string;
    /**
     * 触发器Id
     * @type {string}
     * @memberof AddJobTriggerInput
     */
    triggerId: string;
}
