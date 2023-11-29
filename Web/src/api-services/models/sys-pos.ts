/* tslint:disable */
/* eslint-disable */

import { StatusEnum } from './status-enum';
/**
 * 系统职位表
 * @export
 * @interface SysPos
 */
export interface SysPos {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysPos
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysPos
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysPos
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysPos
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysPos
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysPos
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof SysPos
     */
    tenantId?: number | null;
    /**
     * 名称
     * @type {string}
     * @memberof SysPos
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof SysPos
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof SysPos
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysPos
     */
    remark?: string | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof SysPos
     */
    status?: StatusEnum;
}
