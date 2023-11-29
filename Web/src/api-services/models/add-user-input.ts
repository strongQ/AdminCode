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
 * @interface AddUserInput
 */
export interface AddUserInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddUserInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddUserInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddUserInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddUserInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddUserInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddUserInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof AddUserInput
     */
    tenantId?: number | null;
    /**
     * 昵称
     * @type {string}
     * @memberof AddUserInput
     */
    nickName?: string | null;
    /**
     * 头像
     * @type {string}
     * @memberof AddUserInput
     */
    avatar?: string | null;
    /**
     * 
     * @type {GenderEnum}
     * @memberof AddUserInput
     */
    sex?: GenderEnum;
    /**
     * 年龄
     * @type {number}
     * @memberof AddUserInput
     */
    age?: number;
    /**
     * 出生日期
     * @type {Date}
     * @memberof AddUserInput
     */
    birthday?: Date | null;
    /**
     * 民族
     * @type {string}
     * @memberof AddUserInput
     */
    nation?: string | null;
    /**
     * 手机号码
     * @type {string}
     * @memberof AddUserInput
     */
    phone?: string | null;
    /**
     * 
     * @type {CardTypeEnum}
     * @memberof AddUserInput
     */
    cardType?: CardTypeEnum;
    /**
     * 身份证号
     * @type {string}
     * @memberof AddUserInput
     */
    idCardNum?: string | null;
    /**
     * 邮箱
     * @type {string}
     * @memberof AddUserInput
     */
    email?: string | null;
    /**
     * 地址
     * @type {string}
     * @memberof AddUserInput
     */
    address?: string | null;
    /**
     * 
     * @type {CultureLevelEnum}
     * @memberof AddUserInput
     */
    cultureLevel?: CultureLevelEnum;
    /**
     * 政治面貌
     * @type {string}
     * @memberof AddUserInput
     */
    politicalOutlook?: string | null;
    /**
     * 毕业院校
     * @type {string}
     * @memberof AddUserInput
     */
    college?: string | null;
    /**
     * 办公电话
     * @type {string}
     * @memberof AddUserInput
     */
    officePhone?: string | null;
    /**
     * 紧急联系人
     * @type {string}
     * @memberof AddUserInput
     */
    emergencyContact?: string | null;
    /**
     * 紧急联系人电话
     * @type {string}
     * @memberof AddUserInput
     */
    emergencyPhone?: string | null;
    /**
     * 紧急联系人地址
     * @type {string}
     * @memberof AddUserInput
     */
    emergencyAddress?: string | null;
    /**
     * 个人简介
     * @type {string}
     * @memberof AddUserInput
     */
    introduction?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AddUserInput
     */
    orderNo?: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddUserInput
     */
    status?: StatusEnum;
    /**
     * 备注
     * @type {string}
     * @memberof AddUserInput
     */
    remark?: string | null;
    /**
     * 
     * @type {AccountTypeEnum}
     * @memberof AddUserInput
     */
    accountType?: AccountTypeEnum;
    /**
     * 机构Id
     * @type {number}
     * @memberof AddUserInput
     */
    orgId?: number;
    /**
     * 
     * @type {SysOrg}
     * @memberof AddUserInput
     */
    sysOrg?: SysOrg;
    /**
     * 职位Id
     * @type {number}
     * @memberof AddUserInput
     */
    posId?: number;
    /**
     * 
     * @type {SysPos}
     * @memberof AddUserInput
     */
    sysPos?: SysPos;
    /**
     * 工号
     * @type {string}
     * @memberof AddUserInput
     */
    jobNum?: string | null;
    /**
     * 职级
     * @type {string}
     * @memberof AddUserInput
     */
    posLevel?: string | null;
    /**
     * 入职日期
     * @type {Date}
     * @memberof AddUserInput
     */
    joinDate?: Date | null;
    /**
     * 最新登录Ip
     * @type {string}
     * @memberof AddUserInput
     */
    lastLoginIp?: string | null;
    /**
     * 最新登录地点
     * @type {string}
     * @memberof AddUserInput
     */
    lastLoginAddress?: string | null;
    /**
     * 最新登录时间
     * @type {Date}
     * @memberof AddUserInput
     */
    lastLoginTime?: Date | null;
    /**
     * 最新登录设备
     * @type {string}
     * @memberof AddUserInput
     */
    lastLoginDevice?: string | null;
    /**
     * 电子签名
     * @type {string}
     * @memberof AddUserInput
     */
    signature?: string | null;
    /**
     * 账号
     * @type {string}
     * @memberof AddUserInput
     */
    account: string;
    /**
     * 真实姓名
     * @type {string}
     * @memberof AddUserInput
     */
    realName: string;
    /**
     * 角色集合
     * @type {Array<number>}
     * @memberof AddUserInput
     */
    roleIdList?: Array<number> | null;
    /**
     * 扩展机构集合
     * @type {Array<SysUserExtOrg>}
     * @memberof AddUserInput
     */
    extOrgIdList?: Array<SysUserExtOrg> | null;
}
