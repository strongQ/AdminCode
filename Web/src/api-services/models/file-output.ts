/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface FileOutput
 */
export interface FileOutput {
    /**
     * Id
     * @type {number}
     * @memberof FileOutput
     */
    id?: number;
    /**
     * 提供者
     * @type {string}
     * @memberof FileOutput
     */
    provider?: string | null;
    /**
     * 名称
     * @type {string}
     * @memberof FileOutput
     */
    name?: string | null;
    /**
     * URL
     * @type {string}
     * @memberof FileOutput
     */
    url?: string | null;
    /**
     * 大小
     * @type {string}
     * @memberof FileOutput
     */
    sizeKb?: string | null;
    /**
     * 后缀
     * @type {string}
     * @memberof FileOutput
     */
    suffix?: string | null;
    /**
     * 路径
     * @type {string}
     * @memberof FileOutput
     */
    filePath?: string | null;
}
