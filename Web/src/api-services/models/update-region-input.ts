/* tslint:disable */
/* eslint-disable */

import { SysRegion } from './sys-region';
/**
 * 
 * @export
 * @interface UpdateRegionInput
 */
export interface UpdateRegionInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateRegionInput
     */
    id?: number;
    /**
     * 父Id
     * @type {number}
     * @memberof UpdateRegionInput
     */
    pid?: number;
    /**
     * 简称
     * @type {string}
     * @memberof UpdateRegionInput
     */
    shortName?: string | null;
    /**
     * 组合名
     * @type {string}
     * @memberof UpdateRegionInput
     */
    mergerName?: string | null;
    /**
     * 行政代码
     * @type {string}
     * @memberof UpdateRegionInput
     */
    code?: string | null;
    /**
     * 邮政编码
     * @type {string}
     * @memberof UpdateRegionInput
     */
    zipCode?: string | null;
    /**
     * 区号
     * @type {string}
     * @memberof UpdateRegionInput
     */
    cityCode?: string | null;
    /**
     * 层级
     * @type {number}
     * @memberof UpdateRegionInput
     */
    level?: number;
    /**
     * 拼音
     * @type {string}
     * @memberof UpdateRegionInput
     */
    pinYin?: string | null;
    /**
     * 经度
     * @type {number}
     * @memberof UpdateRegionInput
     */
    lng?: number;
    /**
     * 维度
     * @type {number}
     * @memberof UpdateRegionInput
     */
    lat?: number;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateRegionInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateRegionInput
     */
    remark?: string | null;
    /**
     * 机构子项
     * @type {Array<SysRegion>}
     * @memberof UpdateRegionInput
     */
    children?: Array<SysRegion> | null;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateRegionInput
     */
    name: string;
}
