/* tslint:disable */
/* eslint-disable */

import { YesNoEnum } from './yes-no-enum';
/**
 * 
 * @export
 * @interface AddConfigInput
 */
export interface AddConfigInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddConfigInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddConfigInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddConfigInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddConfigInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddConfigInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddConfigInput
     */
    isDelete?: boolean;
    /**
     * 名称
     * @type {string}
     * @memberof AddConfigInput
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof AddConfigInput
     */
    code?: string | null;
    /**
     * 属性值
     * @type {string}
     * @memberof AddConfigInput
     */
    value?: string | null;
    /**
     * 
     * @type {YesNoEnum}
     * @memberof AddConfigInput
     */
    sysFlag?: YesNoEnum;
    /**
     * 分组编码
     * @type {string}
     * @memberof AddConfigInput
     */
    groupCode?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AddConfigInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof AddConfigInput
     */
    remark?: string | null;
}
