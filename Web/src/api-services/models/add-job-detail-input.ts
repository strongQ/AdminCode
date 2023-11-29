/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface AddJobDetailInput
 */
export interface AddJobDetailInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddJobDetailInput
     */
    id?: number;
    /**
     * 组名称
     * @type {string}
     * @memberof AddJobDetailInput
     */
    groupName?: string | null;
    /**
     * 作业类型FullName
     * @type {string}
     * @memberof AddJobDetailInput
     */
    jobType?: string | null;
    /**
     * 程序集Name
     * @type {string}
     * @memberof AddJobDetailInput
     */
    assemblyName?: string | null;
    /**
     * 描述信息
     * @type {string}
     * @memberof AddJobDetailInput
     */
    description?: string | null;
    /**
     * 是否并行执行
     * @type {boolean}
     * @memberof AddJobDetailInput
     */
    concurrent?: boolean;
    /**
     * 是否扫描特性触发器
     * @type {boolean}
     * @memberof AddJobDetailInput
     */
    annotations?: boolean;
    /**
     * 额外数据
     * @type {string}
     * @memberof AddJobDetailInput
     */
    properties?: string | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddJobDetailInput
     */
    updatedTime?: Date | null;
    /**
     * 是否为脚本创建的作业
     * @type {boolean}
     * @memberof AddJobDetailInput
     */
    createFromScript?: boolean;
    /**
     * 脚本代码
     * @type {string}
     * @memberof AddJobDetailInput
     */
    scriptCode?: string | null;
    /**
     * 作业Id
     * @type {string}
     * @memberof AddJobDetailInput
     */
    jobId: string;
}
