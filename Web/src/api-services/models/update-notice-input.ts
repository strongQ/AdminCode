/* tslint:disable */
/* eslint-disable */

import { NoticeStatusEnum } from './notice-status-enum';
import { NoticeTypeEnum } from './notice-type-enum';
/**
 * 
 * @export
 * @interface UpdateNoticeInput
 */
export interface UpdateNoticeInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateNoticeInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateNoticeInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateNoticeInput
     */
    isDelete?: boolean;
    /**
     * 标题
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    title: string;
    /**
     * 内容
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    content: string;
    /**
     * 
     * @type {NoticeTypeEnum}
     * @memberof UpdateNoticeInput
     */
    type?: NoticeTypeEnum;
    /**
     * 发布人Id
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    publicUserId?: number;
    /**
     * 发布人姓名
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    publicUserName?: string | null;
    /**
     * 发布机构Id
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    publicOrgId?: number;
    /**
     * 发布机构名称
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    publicOrgName?: string | null;
    /**
     * 发布时间
     * @type {Date}
     * @memberof UpdateNoticeInput
     */
    publicTime?: Date | null;
    /**
     * 撤回时间
     * @type {Date}
     * @memberof UpdateNoticeInput
     */
    cancelTime?: Date | null;
    /**
     * 
     * @type {NoticeStatusEnum}
     * @memberof UpdateNoticeInput
     */
    status?: NoticeStatusEnum;
}
