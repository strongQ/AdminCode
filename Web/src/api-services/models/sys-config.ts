/* tslint:disable */
/* eslint-disable */

import { YesNoEnum } from './yes-no-enum';
/**
 * 系统参数配置表
 * @export
 * @interface SysConfig
 */
export interface SysConfig {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysConfig
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysConfig
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysConfig
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysConfig
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysConfig
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysConfig
     */
    isDelete?: boolean;
    /**
     * 名称
     * @type {string}
     * @memberof SysConfig
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof SysConfig
     */
    code?: string | null;
    /**
     * 属性值
     * @type {string}
     * @memberof SysConfig
     */
    value?: string | null;
    /**
     * 
     * @type {YesNoEnum}
     * @memberof SysConfig
     */
    sysFlag?: YesNoEnum;
    /**
     * 分组编码
     * @type {string}
     * @memberof SysConfig
     */
    groupCode?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof SysConfig
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysConfig
     */
    remark?: string | null;
}
