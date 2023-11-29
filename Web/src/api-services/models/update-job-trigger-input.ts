/* tslint:disable */
/* eslint-disable */

import { TriggerStatus } from './trigger-status';
/**
 * 
 * @export
 * @interface UpdateJobTriggerInput
 */
export interface UpdateJobTriggerInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    id?: number;
    /**
     * 触发器类型FullName
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    triggerType?: string | null;
    /**
     * 程序集Name
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    assemblyName?: string | null;
    /**
     * 参数
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    args?: string | null;
    /**
     * 描述信息
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    description?: string | null;
    /**
     * 
     * @type {TriggerStatus}
     * @memberof UpdateJobTriggerInput
     */
    status?: TriggerStatus;
    /**
     * 起始时间
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    startTime?: Date | null;
    /**
     * 结束时间
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    endTime?: Date | null;
    /**
     * 最近运行时间
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    lastRunTime?: Date | null;
    /**
     * 下一次运行时间
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    nextRunTime?: Date | null;
    /**
     * 触发次数
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    numberOfRuns?: number;
    /**
     * 最大触发次数（0:不限制，n:N次）
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    maxNumberOfRuns?: number;
    /**
     * 出错次数
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    numberOfErrors?: number;
    /**
     * 最大出错次数（0:不限制，n:N次）
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    maxNumberOfErrors?: number;
    /**
     * 重试次数
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    numRetries?: number;
    /**
     * 重试间隔时间（ms）
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    retryTimeout?: number;
    /**
     * 是否立即启动
     * @type {boolean}
     * @memberof UpdateJobTriggerInput
     */
    startNow?: boolean;
    /**
     * 是否启动时执行一次
     * @type {boolean}
     * @memberof UpdateJobTriggerInput
     */
    runOnStart?: boolean;
    /**
     * 是否在启动时重置最大触发次数等于一次的作业
     * @type {boolean}
     * @memberof UpdateJobTriggerInput
     */
    resetOnlyOnce?: boolean;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    updatedTime?: Date | null;
    /**
     * 作业Id
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    jobId: string;
    /**
     * 触发器Id
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    triggerId: string;
}
