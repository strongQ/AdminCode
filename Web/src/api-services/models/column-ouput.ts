/* tslint:disable */
/* eslint-disable */

/**
 * 数据库表列
 * @export
 * @interface ColumnOuput
 */
export interface ColumnOuput {
    /**
     * 字段名
     * @type {string}
     * @memberof ColumnOuput
     */
    columnName?: string | null;
    /**
     * 数据库中类型
     * @type {string}
     * @memberof ColumnOuput
     */
    dataType?: string | null;
    /**
     * .NET字段类型
     * @type {string}
     * @memberof ColumnOuput
     */
    netType?: string | null;
    /**
     * 字段描述
     * @type {string}
     * @memberof ColumnOuput
     */
    columnComment?: string | null;
    /**
     * 主外键
     * @type {string}
     * @memberof ColumnOuput
     */
    columnKey?: string | null;
}
