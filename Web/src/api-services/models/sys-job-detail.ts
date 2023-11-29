/* tslint:disable */
/* eslint-disable */

/**
 * 系统作业信息表
 * @export
 * @interface SysJobDetail
 */
export interface SysJobDetail {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysJobDetail
     */
    id?: number;
    /**
     * 作业Id
     * @type {string}
     * @memberof SysJobDetail
     */
    jobId: string;
    /**
     * 组名称
     * @type {string}
     * @memberof SysJobDetail
     */
    groupName?: string | null;
    /**
     * 作业类型FullName
     * @type {string}
     * @memberof SysJobDetail
     */
    jobType?: string | null;
    /**
     * 程序集Name
     * @type {string}
     * @memberof SysJobDetail
     */
    assemblyName?: string | null;
    /**
     * 描述信息
     * @type {string}
     * @memberof SysJobDetail
     */
    description?: string | null;
    /**
     * 是否并行执行
     * @type {boolean}
     * @memberof SysJobDetail
     */
    concurrent?: boolean;
    /**
     * 是否扫描特性触发器
     * @type {boolean}
     * @memberof SysJobDetail
     */
    annotations?: boolean;
    /**
     * 额外数据
     * @type {string}
     * @memberof SysJobDetail
     */
    properties?: string | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysJobDetail
     */
    updatedTime?: Date | null;
    /**
     * 是否为脚本创建的作业
     * @type {boolean}
     * @memberof SysJobDetail
     */
    createFromScript?: boolean;
    /**
     * 脚本代码
     * @type {string}
     * @memberof SysJobDetail
     */
    scriptCode?: string | null;
}
