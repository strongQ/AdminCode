/* tslint:disable */
/* eslint-disable */

import { SysRegion } from './sys-region';
/**
 * 
 * @export
 * @interface AddRegionInput
 */
export interface AddRegionInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddRegionInput
     */
    id?: number;
    /**
     * 父Id
     * @type {number}
     * @memberof AddRegionInput
     */
    pid?: number;
    /**
     * 简称
     * @type {string}
     * @memberof AddRegionInput
     */
    shortName?: string | null;
    /**
     * 组合名
     * @type {string}
     * @memberof AddRegionInput
     */
    mergerName?: string | null;
    /**
     * 行政代码
     * @type {string}
     * @memberof AddRegionInput
     */
    code?: string | null;
    /**
     * 邮政编码
     * @type {string}
     * @memberof AddRegionInput
     */
    zipCode?: string | null;
    /**
     * 区号
     * @type {string}
     * @memberof AddRegionInput
     */
    cityCode?: string | null;
    /**
     * 层级
     * @type {number}
     * @memberof AddRegionInput
     */
    level?: number;
    /**
     * 拼音
     * @type {string}
     * @memberof AddRegionInput
     */
    pinYin?: string | null;
    /**
     * 经度
     * @type {number}
     * @memberof AddRegionInput
     */
    lng?: number;
    /**
     * 维度
     * @type {number}
     * @memberof AddRegionInput
     */
    lat?: number;
    /**
     * 排序
     * @type {number}
     * @memberof AddRegionInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof AddRegionInput
     */
    remark?: string | null;
    /**
     * 机构子项
     * @type {Array<SysRegion>}
     * @memberof AddRegionInput
     */
    children?: Array<SysRegion> | null;
    /**
     * 名称
     * @type {string}
     * @memberof AddRegionInput
     */
    name: string;
}
