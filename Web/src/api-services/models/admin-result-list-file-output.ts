/* tslint:disable */
/* eslint-disable */

import { FileOutput } from './file-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListFileOutput
 */
export interface AdminResultListFileOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListFileOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListFileOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListFileOutput
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<FileOutput>}
     * @memberof AdminResultListFileOutput
     */
    result?: Array<FileOutput> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListFileOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListFileOutput
     */
    time?: Date;
}
