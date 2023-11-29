/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface UpdateCodeGenInput
 */
export interface UpdateCodeGenInput {
    /**
     * 当前页码
     * @type {number}
     * @memberof UpdateCodeGenInput
     */
    page?: number;
    /**
     * 页码容量
     * @type {number}
     * @memberof UpdateCodeGenInput
     */
    pageSize?: number;
    /**
     * 排序字段
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    field?: string | null;
    /**
     * 排序方向
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    order?: string | null;
    /**
     * 降序排序
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    descStr?: string | null;
    /**
     * 作者姓名
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    authorName?: string | null;
    /**
     * 类名
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    className?: string | null;
    /**
     * 是否移除表前缀
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    tablePrefix?: string | null;
    /**
     * 库定位器名
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    configId?: string | null;
    /**
     * 数据库名(保留字段)
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    dbName?: string | null;
    /**
     * 数据库类型
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    dbType?: string | null;
    /**
     * 数据库链接
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    connectionString?: string | null;
    /**
     * 生成方式
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    generateType?: string | null;
    /**
     * 数据库表名
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    tableName?: string | null;
    /**
     * 命名空间
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    nameSpace?: string | null;
    /**
     * 业务名（业务代码包名称）
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    busName?: string | null;
    /**
     * 功能名（数据库表名称）
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    tableComment?: string | null;
    /**
     * 菜单应用分类（应用编码）
     * @type {string}
     * @memberof UpdateCodeGenInput
     */
    menuApplication?: string | null;
    /**
     * 菜单父级
     * @type {number}
     * @memberof UpdateCodeGenInput
     */
    menuPid?: number;
    /**
     * 代码生成器Id
     * @type {number}
     * @memberof UpdateCodeGenInput
     */
    id: number;
}
