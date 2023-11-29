/* tslint:disable */
/* eslint-disable */

/**
 * 数据库表
 * @export
 * @interface TableOutput
 */
export interface TableOutput {
    /**
     * 库定位器名
     * @type {string}
     * @memberof TableOutput
     */
    configId?: string | null;
    /**
     * 表名（字母形式的）
     * @type {string}
     * @memberof TableOutput
     */
    tableName?: string | null;
    /**
     * 实体名称
     * @type {string}
     * @memberof TableOutput
     */
    entityName?: string | null;
    /**
     * 创建时间
     * @type {string}
     * @memberof TableOutput
     */
    createTime?: string | null;
    /**
     * 更新时间
     * @type {string}
     * @memberof TableOutput
     */
    updateTime?: string | null;
    /**
     * 表名称描述（功能名）
     * @type {string}
     * @memberof TableOutput
     */
    tableComment?: string | null;
}
