/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface UpdateJobDetailInput
 */
export interface UpdateJobDetailInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateJobDetailInput
     */
    id?: number;
    /**
     * 组名称
     * @type {string}
     * @memberof UpdateJobDetailInput
     */
    groupName?: string | null;
    /**
     * 作业类型FullName
     * @type {string}
     * @memberof UpdateJobDetailInput
     */
    jobType?: string | null;
    /**
     * 程序集Name
     * @type {string}
     * @memberof UpdateJobDetailInput
     */
    assemblyName?: string | null;
    /**
     * 描述信息
     * @type {string}
     * @memberof UpdateJobDetailInput
     */
    description?: string | null;
    /**
     * 是否并行执行
     * @type {boolean}
     * @memberof UpdateJobDetailInput
     */
    concurrent?: boolean;
    /**
     * 是否扫描特性触发器
     * @type {boolean}
     * @memberof UpdateJobDetailInput
     */
    annotations?: boolean;
    /**
     * 额外数据
     * @type {string}
     * @memberof UpdateJobDetailInput
     */
    properties?: string | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateJobDetailInput
     */
    updatedTime?: Date | null;
    /**
     * 是否为脚本创建的作业
     * @type {boolean}
     * @memberof UpdateJobDetailInput
     */
    createFromScript?: boolean;
    /**
     * 脚本代码
     * @type {string}
     * @memberof UpdateJobDetailInput
     */
    scriptCode?: string | null;
    /**
     * 作业Id
     * @type {string}
     * @memberof UpdateJobDetailInput
     */
    jobId: string;
}
