/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface CreateEntityInput
 */
export interface CreateEntityInput {
    /**
     * 表名
     * @type {string}
     * @memberof CreateEntityInput
     */
    tableName?: string | null;
    /**
     * 实体名
     * @type {string}
     * @memberof CreateEntityInput
     */
    entityName?: string | null;
    /**
     * 基类名
     * @type {string}
     * @memberof CreateEntityInput
     */
    baseClassName?: string | null;
    /**
     * 导出位置
     * @type {string}
     * @memberof CreateEntityInput
     */
    position?: string | null;
    /**
     * 库标识
     * @type {string}
     * @memberof CreateEntityInput
     */
    configId?: string | null;
}
