/* tslint:disable */
/* eslint-disable */

import { ClusterStatus } from './cluster-status';
/**
 * 系统作业集群表
 * @export
 * @interface SysJobCluster
 */
export interface SysJobCluster {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysJobCluster
     */
    id?: number;
    /**
     * 作业集群Id
     * @type {string}
     * @memberof SysJobCluster
     */
    clusterId: string;
    /**
     * 描述信息
     * @type {string}
     * @memberof SysJobCluster
     */
    description?: string | null;
    /**
     * 
     * @type {ClusterStatus}
     * @memberof SysJobCluster
     */
    status?: ClusterStatus;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysJobCluster
     */
    updatedTime?: Date | null;
}
