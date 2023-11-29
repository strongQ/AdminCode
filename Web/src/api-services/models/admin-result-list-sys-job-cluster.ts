/* tslint:disable */
/* eslint-disable */

import { SysJobCluster } from './sys-job-cluster';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListSysJobCluster
 */
export interface AdminResultListSysJobCluster {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListSysJobCluster
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListSysJobCluster
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListSysJobCluster
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<SysJobCluster>}
     * @memberof AdminResultListSysJobCluster
     */
    result?: Array<SysJobCluster> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListSysJobCluster
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListSysJobCluster
     */
    time?: Date;
}
