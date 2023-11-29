/* tslint:disable */
/* eslint-disable */

import { FileOutput } from './file-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultFileOutput
 */
export interface AdminResultFileOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultFileOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultFileOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultFileOutput
     */
    message?: string | null;
    /**
     * 
     * @type {FileOutput}
     * @memberof AdminResultFileOutput
     */
    result?: FileOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultFileOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultFileOutput
     */
    time?: Date;
}
