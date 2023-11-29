/* tslint:disable */
/* eslint-disable */

import { AccountTypeEnum } from './account-type-enum';
import { CardTypeEnum } from './card-type-enum';
import { CultureLevelEnum } from './culture-level-enum';
import { GenderEnum } from './gender-enum';
import { StatusEnum } from './status-enum';
import { SysOrg } from './sys-org';
import { SysPos } from './sys-pos';
/**
 * 系统用户表
 * @export
 * @interface SysUser
 */
export interface SysUser {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysUser
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysUser
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysUser
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysUser
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysUser
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysUser
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof SysUser
     */
    tenantId?: number | null;
    /**
     * 账号
     * @type {string}
     * @memberof SysUser
     */
    account: string;
    /**
     * 真实姓名
     * @type {string}
     * @memberof SysUser
     */
    realName?: string | null;
    /**
     * 昵称
     * @type {string}
     * @memberof SysUser
     */
    nickName?: string | null;
    /**
     * 头像
     * @type {string}
     * @memberof SysUser
     */
    avatar?: string | null;
    /**
     * 
     * @type {GenderEnum}
     * @memberof SysUser
     */
    sex?: GenderEnum;
    /**
     * 年龄
     * @type {number}
     * @memberof SysUser
     */
    age?: number;
    /**
     * 出生日期
     * @type {Date}
     * @memberof SysUser
     */
    birthday?: Date | null;
    /**
     * 民族
     * @type {string}
     * @memberof SysUser
     */
    nation?: string | null;
    /**
     * 手机号码
     * @type {string}
     * @memberof SysUser
     */
    phone?: string | null;
    /**
     * 
     * @type {CardTypeEnum}
     * @memberof SysUser
     */
    cardType?: CardTypeEnum;
    /**
     * 身份证号
     * @type {string}
     * @memberof SysUser
     */
    idCardNum?: string | null;
    /**
     * 邮箱
     * @type {string}
     * @memberof SysUser
     */
    email?: string | null;
    /**
     * 地址
     * @type {string}
     * @memberof SysUser
     */
    address?: string | null;
    /**
     * 
     * @type {CultureLevelEnum}
     * @memberof SysUser
     */
    cultureLevel?: CultureLevelEnum;
    /**
     * 政治面貌
     * @type {string}
     * @memberof SysUser
     */
    politicalOutlook?: string | null;
    /**
     * 毕业院校
     * @type {string}
     * @memberof SysUser
     */
    college?: string | null;
    /**
     * 办公电话
     * @type {string}
     * @memberof SysUser
     */
    officePhone?: string | null;
    /**
     * 紧急联系人
     * @type {string}
     * @memberof SysUser
     */
    emergencyContact?: string | null;
    /**
     * 紧急联系人电话
     * @type {string}
     * @memberof SysUser
     */
    emergencyPhone?: string | null;
    /**
     * 紧急联系人地址
     * @type {string}
     * @memberof SysUser
     */
    emergencyAddress?: string | null;
    /**
     * 个人简介
     * @type {string}
     * @memberof SysUser
     */
    introduction?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof SysUser
     */
    orderNo?: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof SysUser
     */
    status?: StatusEnum;
    /**
     * 备注
     * @type {string}
     * @memberof SysUser
     */
    remark?: string | null;
    /**
     * 
     * @type {AccountTypeEnum}
     * @memberof SysUser
     */
    accountType?: AccountTypeEnum;
    /**
     * 机构Id
     * @type {number}
     * @memberof SysUser
     */
    orgId?: number;
    /**
     * 
     * @type {SysOrg}
     * @memberof SysUser
     */
    sysOrg?: SysOrg;
    /**
     * 职位Id
     * @type {number}
     * @memberof SysUser
     */
    posId?: number;
    /**
     * 
     * @type {SysPos}
     * @memberof SysUser
     */
    sysPos?: SysPos;
    /**
     * 工号
     * @type {string}
     * @memberof SysUser
     */
    jobNum?: string | null;
    /**
     * 职级
     * @type {string}
     * @memberof SysUser
     */
    posLevel?: string | null;
    /**
     * 入职日期
     * @type {Date}
     * @memberof SysUser
     */
    joinDate?: Date | null;
    /**
     * 最新登录Ip
     * @type {string}
     * @memberof SysUser
     */
    lastLoginIp?: string | null;
    /**
     * 最新登录地点
     * @type {string}
     * @memberof SysUser
     */
    lastLoginAddress?: string | null;
    /**
     * 最新登录时间
     * @type {Date}
     * @memberof SysUser
     */
    lastLoginTime?: Date | null;
    /**
     * 最新登录设备
     * @type {string}
     * @memberof SysUser
     */
    lastLoginDevice?: string | null;
    /**
     * 电子签名
     * @type {string}
     * @memberof SysUser
     */
    signature?: string | null;
}
