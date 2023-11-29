/* tslint:disable */
/* eslint-disable */

import { AccountTypeEnum } from './account-type-enum';
import { CardTypeEnum } from './card-type-enum';
import { CultureLevelEnum } from './culture-level-enum';
import { GenderEnum } from './gender-enum';
import { StatusEnum } from './status-enum';
import { SysOrg } from './sys-org';
import { SysPos } from './sys-pos';
import { SysUserExtOrg } from './sys-user-ext-org';
/**
 * 
 * @export
 * @interface UpdateUserInput
 */
export interface UpdateUserInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateUserInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateUserInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateUserInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateUserInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateUserInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateUserInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof UpdateUserInput
     */
    tenantId?: number | null;
    /**
     * 昵称
     * @type {string}
     * @memberof UpdateUserInput
     */
    nickName?: string | null;
    /**
     * 头像
     * @type {string}
     * @memberof UpdateUserInput
     */
    avatar?: string | null;
    /**
     * 
     * @type {GenderEnum}
     * @memberof UpdateUserInput
     */
    sex?: GenderEnum;
    /**
     * 年龄
     * @type {number}
     * @memberof UpdateUserInput
     */
    age?: number;
    /**
     * 出生日期
     * @type {Date}
     * @memberof UpdateUserInput
     */
    birthday?: Date | null;
    /**
     * 民族
     * @type {string}
     * @memberof UpdateUserInput
     */
    nation?: string | null;
    /**
     * 手机号码
     * @type {string}
     * @memberof UpdateUserInput
     */
    phone?: string | null;
    /**
     * 
     * @type {CardTypeEnum}
     * @memberof UpdateUserInput
     */
    cardType?: CardTypeEnum;
    /**
     * 身份证号
     * @type {string}
     * @memberof UpdateUserInput
     */
    idCardNum?: string | null;
    /**
     * 邮箱
     * @type {string}
     * @memberof UpdateUserInput
     */
    email?: string | null;
    /**
     * 地址
     * @type {string}
     * @memberof UpdateUserInput
     */
    address?: string | null;
    /**
     * 
     * @type {CultureLevelEnum}
     * @memberof UpdateUserInput
     */
    cultureLevel?: CultureLevelEnum;
    /**
     * 政治面貌
     * @type {string}
     * @memberof UpdateUserInput
     */
    politicalOutlook?: string | null;
    /**
     * 毕业院校
     * @type {string}
     * @memberof UpdateUserInput
     */
    college?: string | null;
    /**
     * 办公电话
     * @type {string}
     * @memberof UpdateUserInput
     */
    officePhone?: string | null;
    /**
     * 紧急联系人
     * @type {string}
     * @memberof UpdateUserInput
     */
    emergencyContact?: string | null;
    /**
     * 紧急联系人电话
     * @type {string}
     * @memberof UpdateUserInput
     */
    emergencyPhone?: string | null;
    /**
     * 紧急联系人地址
     * @type {string}
     * @memberof UpdateUserInput
     */
    emergencyAddress?: string | null;
    /**
     * 个人简介
     * @type {string}
     * @memberof UpdateUserInput
     */
    introduction?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateUserInput
     */
    orderNo?: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof UpdateUserInput
     */
    status?: StatusEnum;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateUserInput
     */
    remark?: string | null;
    /**
     * 
     * @type {AccountTypeEnum}
     * @memberof UpdateUserInput
     */
    accountType?: AccountTypeEnum;
    /**
     * 机构Id
     * @type {number}
     * @memberof UpdateUserInput
     */
    orgId?: number;
    /**
     * 
     * @type {SysOrg}
     * @memberof UpdateUserInput
     */
    sysOrg?: SysOrg;
    /**
     * 职位Id
     * @type {number}
     * @memberof UpdateUserInput
     */
    posId?: number;
    /**
     * 
     * @type {SysPos}
     * @memberof UpdateUserInput
     */
    sysPos?: SysPos;
    /**
     * 工号
     * @type {string}
     * @memberof UpdateUserInput
     */
    jobNum?: string | null;
    /**
     * 职级
     * @type {string}
     * @memberof UpdateUserInput
     */
    posLevel?: string | null;
    /**
     * 入职日期
     * @type {Date}
     * @memberof UpdateUserInput
     */
    joinDate?: Date | null;
    /**
     * 最新登录Ip
     * @type {string}
     * @memberof UpdateUserInput
     */
    lastLoginIp?: string | null;
    /**
     * 最新登录地点
     * @type {string}
     * @memberof UpdateUserInput
     */
    lastLoginAddress?: string | null;
    /**
     * 最新登录时间
     * @type {Date}
     * @memberof UpdateUserInput
     */
    lastLoginTime?: Date | null;
    /**
     * 最新登录设备
     * @type {string}
     * @memberof UpdateUserInput
     */
    lastLoginDevice?: string | null;
    /**
     * 电子签名
     * @type {string}
     * @memberof UpdateUserInput
     */
    signature?: string | null;
    /**
     * 账号
     * @type {string}
     * @memberof UpdateUserInput
     */
    account: string;
    /**
     * 真实姓名
     * @type {string}
     * @memberof UpdateUserInput
     */
    realName: string;
    /**
     * 角色集合
     * @type {Array<number>}
     * @memberof UpdateUserInput
     */
    roleIdList?: Array<number> | null;
    /**
     * 扩展机构集合
     * @type {Array<SysUserExtOrg>}
     * @memberof UpdateUserInput
     */
    extOrgIdList?: Array<SysUserExtOrg> | null;
}
