/* tslint:disable */
/* eslint-disable */

/**
 * 代码生成表
 * @export
 * @interface SysCodeGen
 */
export interface SysCodeGen {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysCodeGen
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysCodeGen
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysCodeGen
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysCodeGen
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysCodeGen
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysCodeGen
     */
    isDelete?: boolean;
    /**
     * 作者姓名
     * @type {string}
     * @memberof SysCodeGen
     */
    authorName?: string | null;
    /**
     * 是否移除表前缀
     * @type {string}
     * @memberof SysCodeGen
     */
    tablePrefix?: string | null;
    /**
     * 生成方式
     * @type {string}
     * @memberof SysCodeGen
     */
    generateType?: string | null;
    /**
     * 库定位器名
     * @type {string}
     * @memberof SysCodeGen
     */
    configId?: string | null;
    /**
     * 数据库名(保留字段)
     * @type {string}
     * @memberof SysCodeGen
     */
    dbName?: string | null;
    /**
     * 数据库类型
     * @type {string}
     * @memberof SysCodeGen
     */
    dbType?: string | null;
    /**
     * 数据库链接
     * @type {string}
     * @memberof SysCodeGen
     */
    connectionString?: string | null;
    /**
     * 数据库表名
     * @type {string}
     * @memberof SysCodeGen
     */
    tableName?: string | null;
    /**
     * 命名空间
     * @type {string}
     * @memberof SysCodeGen
     */
    nameSpace?: string | null;
    /**
     * 业务名
     * @type {string}
     * @memberof SysCodeGen
     */
    busName?: string | null;
    /**
     * 菜单编码
     * @type {number}
     * @memberof SysCodeGen
     */
    menuPid?: number;
}
