/* tslint:disable */
/* eslint-disable */

import { DbColumnOutput } from './db-column-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListDbColumnOutput
 */
export interface AdminResultListDbColumnOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListDbColumnOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListDbColumnOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListDbColumnOutput
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<DbColumnOutput>}
     * @memberof AdminResultListDbColumnOutput
     */
    result?: Array<DbColumnOutput> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListDbColumnOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListDbColumnOutput
     */
    time?: Date;
}
