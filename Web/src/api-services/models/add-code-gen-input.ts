/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface AddCodeGenInput
 */
export interface AddCodeGenInput {
    /**
     * 当前页码
     * @type {number}
     * @memberof AddCodeGenInput
     */
    page?: number;
    /**
     * 页码容量
     * @type {number}
     * @memberof AddCodeGenInput
     */
    pageSize?: number;
    /**
     * 排序字段
     * @type {string}
     * @memberof AddCodeGenInput
     */
    field?: string | null;
    /**
     * 排序方向
     * @type {string}
     * @memberof AddCodeGenInput
     */
    order?: string | null;
    /**
     * 降序排序
     * @type {string}
     * @memberof AddCodeGenInput
     */
    descStr?: string | null;
    /**
     * 类名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    className?: string | null;
    /**
     * 是否移除表前缀
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tablePrefix?: string | null;
    /**
     * 库定位器名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    configId?: string | null;
    /**
     * 数据库名(保留字段)
     * @type {string}
     * @memberof AddCodeGenInput
     */
    dbName?: string | null;
    /**
     * 数据库类型
     * @type {string}
     * @memberof AddCodeGenInput
     */
    dbType?: string | null;
    /**
     * 数据库链接
     * @type {string}
     * @memberof AddCodeGenInput
     */
    connectionString?: string | null;
    /**
     * 功能名（数据库表名称）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tableComment?: string | null;
    /**
     * 菜单应用分类（应用编码）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    menuApplication?: string | null;
    /**
     * 数据库表名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tableName: string;
    /**
     * 业务名（业务代码包名称）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    busName: string;
    /**
     * 命名空间
     * @type {string}
     * @memberof AddCodeGenInput
     */
    nameSpace: string;
    /**
     * 作者姓名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    authorName: string;
    /**
     * 生成方式
     * @type {string}
     * @memberof AddCodeGenInput
     */
    generateType: string;
    /**
     * 菜单父级
     * @type {number}
     * @memberof AddCodeGenInput
     */
    menuPid: number;
}
