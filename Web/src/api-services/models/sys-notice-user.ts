/* tslint:disable */
/* eslint-disable */

import { NoticeUserStatusEnum } from './notice-user-status-enum';
import { SysNotice } from './sys-notice';
/**
 * 系统通知公告用户表
 * @export
 * @interface SysNoticeUser
 */
export interface SysNoticeUser {
    /**
     * 通知公告Id
     * @type {number}
     * @memberof SysNoticeUser
     */
    noticeId?: number;
    /**
     * 
     * @type {SysNotice}
     * @memberof SysNoticeUser
     */
    sysNotice?: SysNotice;
    /**
     * 用户Id
     * @type {number}
     * @memberof SysNoticeUser
     */
    userId?: number;
    /**
     * 阅读时间
     * @type {Date}
     * @memberof SysNoticeUser
     */
    readTime?: Date | null;
    /**
     * 
     * @type {NoticeUserStatusEnum}
     * @memberof SysNoticeUser
     */
    readStatus?: NoticeUserStatusEnum;
}
