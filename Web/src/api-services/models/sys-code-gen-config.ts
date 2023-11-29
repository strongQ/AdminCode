/* tslint:disable */
/* eslint-disable */

/**
 * 代码生成字段配置表
 * @export
 * @interface SysCodeGenConfig
 */
export interface SysCodeGenConfig {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysCodeGenConfig
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysCodeGenConfig
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysCodeGenConfig
     */
    isDelete?: boolean;
    /**
     * 代码生成主表Id
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    codeGenId?: number;
    /**
     * 数据库字段名
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    columnName: string;
    /**
     * 字段描述
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    columnComment?: string | null;
    /**
     * .NET数据类型
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    netType?: string | null;
    /**
     * 作用类型（字典）
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    effectType?: string | null;
    /**
     * 外键实体名称
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    fkEntityName?: string | null;
    /**
     * 外键表名称
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    fkTableName?: string | null;
    /**
     * 外键显示字段
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    fkColumnName?: string | null;
    /**
     * 外键显示字段.NET类型
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    fkColumnNetType?: string | null;
    /**
     * 字典编码
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    dictTypeCode?: string | null;
    /**
     * 列表是否缩进（字典）
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherRetract?: string | null;
    /**
     * 是否必填（字典）
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherRequired?: string | null;
    /**
     * 是否是查询条件
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    queryWhether?: string | null;
    /**
     * 查询方式
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    queryType?: string | null;
    /**
     * 列表显示
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherTable?: string | null;
    /**
     * 增改
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherAddUpdate?: string | null;
    /**
     * 主键
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    columnKey?: string | null;
    /**
     * 数据库中类型（物理类型）
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    dataType?: string | null;
    /**
     * 是否通用字段
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherCommon?: string | null;
    /**
     * 显示文本字段
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    displayColumn?: string | null;
    /**
     * 选中值字段
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    valueColumn?: string | null;
    /**
     * 父级字段
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    pidColumn?: string | null;
}
