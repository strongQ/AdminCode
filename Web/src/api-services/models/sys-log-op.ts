/* tslint:disable */
/* eslint-disable */

/**
 * 系统操作日志表
 * @export
 * @interface SysLogOp
 */
export interface SysLogOp {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysLogOp
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysLogOp
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysLogOp
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysLogOp
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysLogOp
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysLogOp
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof SysLogOp
     */
    tenantId?: number | null;
    /**
     * 模块名称
     * @type {string}
     * @memberof SysLogOp
     */
    controllerName?: string | null;
    /**
     * 方法名称
     * @type {string}
     * @memberof SysLogOp
     */
    actionName?: string | null;
    /**
     * 显示名称
     * @type {string}
     * @memberof SysLogOp
     */
    displayTitle?: string | null;
    /**
     * 执行状态
     * @type {string}
     * @memberof SysLogOp
     */
    status?: string | null;
    /**
     * IP地址
     * @type {string}
     * @memberof SysLogOp
     */
    remoteIp?: string | null;
    /**
     * 登录地点
     * @type {string}
     * @memberof SysLogOp
     */
    location?: string | null;
    /**
     * 经度
     * @type {number}
     * @memberof SysLogOp
     */
    longitude?: number | null;
    /**
     * 维度
     * @type {number}
     * @memberof SysLogOp
     */
    latitude?: number | null;
    /**
     * 浏览器
     * @type {string}
     * @memberof SysLogOp
     */
    browser?: string | null;
    /**
     * 操作系统
     * @type {string}
     * @memberof SysLogOp
     */
    os?: string | null;
    /**
     * 操作用时
     * @type {number}
     * @memberof SysLogOp
     */
    elapsed?: number | null;
    /**
     * 日志时间
     * @type {Date}
     * @memberof SysLogOp
     */
    logDateTime?: Date | null;
    /**
     * 账号
     * @type {string}
     * @memberof SysLogOp
     */
    account?: string | null;
    /**
     * 真实姓名
     * @type {string}
     * @memberof SysLogOp
     */
    realName?: string | null;
    /**
     * 请求方式
     * @type {string}
     * @memberof SysLogOp
     */
    httpMethod?: string | null;
    /**
     * 请求地址
     * @type {string}
     * @memberof SysLogOp
     */
    requestUrl?: string | null;
    /**
     * 请求参数
     * @type {string}
     * @memberof SysLogOp
     */
    requestParam?: string | null;
    /**
     * 返回结果
     * @type {string}
     * @memberof SysLogOp
     */
    returnResult?: string | null;
    /**
     * 事件Id
     * @type {number}
     * @memberof SysLogOp
     */
    eventId?: number | null;
    /**
     * 线程Id
     * @type {number}
     * @memberof SysLogOp
     */
    threadId?: number | null;
    /**
     * 请求跟踪Id
     * @type {string}
     * @memberof SysLogOp
     */
    traceId?: string | null;
    /**
     * 异常信息
     * @type {string}
     * @memberof SysLogOp
     */
    exception?: string | null;
    /**
     * 日志消息Json
     * @type {string}
     * @memberof SysLogOp
     */
    message?: string | null;
}
