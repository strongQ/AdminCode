/* tslint:disable */
/* eslint-disable */

import { YesNoEnum } from './yes-no-enum';
/**
 * 
 * @export
 * @interface UpdateConfigInput
 */
export interface UpdateConfigInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateConfigInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateConfigInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateConfigInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateConfigInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateConfigInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateConfigInput
     */
    isDelete?: boolean;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateConfigInput
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateConfigInput
     */
    code?: string | null;
    /**
     * 属性值
     * @type {string}
     * @memberof UpdateConfigInput
     */
    value?: string | null;
    /**
     * 
     * @type {YesNoEnum}
     * @memberof UpdateConfigInput
     */
    sysFlag?: YesNoEnum;
    /**
     * 分组编码
     * @type {string}
     * @memberof UpdateConfigInput
     */
    groupCode?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateConfigInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateConfigInput
     */
    remark?: string | null;
}
