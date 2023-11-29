/* tslint:disable */
/* eslint-disable */

/**
 * 系统差异日志表
 * @export
 * @interface SysLogDiff
 */
export interface SysLogDiff {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysLogDiff
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysLogDiff
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysLogDiff
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysLogDiff
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysLogDiff
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysLogDiff
     */
    isDelete?: boolean;
    /**
     * 操作前记录
     * @type {string}
     * @memberof SysLogDiff
     */
    beforeData?: string | null;
    /**
     * 操作后记录
     * @type {string}
     * @memberof SysLogDiff
     */
    afterData?: string | null;
    /**
     * Sql
     * @type {string}
     * @memberof SysLogDiff
     */
    sql?: string | null;
    /**
     * 参数  手动传入的参数
     * @type {string}
     * @memberof SysLogDiff
     */
    parameters?: string | null;
    /**
     * 业务对象
     * @type {string}
     * @memberof SysLogDiff
     */
    businessData?: string | null;
    /**
     * 差异操作
     * @type {string}
     * @memberof SysLogDiff
     */
    diffType?: string | null;
    /**
     * 耗时
     * @type {number}
     * @memberof SysLogDiff
     */
    elapsed?: number | null;
}
