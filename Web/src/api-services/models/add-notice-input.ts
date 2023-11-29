/* tslint:disable */
/* eslint-disable */

import { NoticeStatusEnum } from './notice-status-enum';
import { NoticeTypeEnum } from './notice-type-enum';
/**
 * 
 * @export
 * @interface AddNoticeInput
 */
export interface AddNoticeInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddNoticeInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddNoticeInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddNoticeInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddNoticeInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddNoticeInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddNoticeInput
     */
    isDelete?: boolean;
    /**
     * 标题
     * @type {string}
     * @memberof AddNoticeInput
     */
    title: string;
    /**
     * 内容
     * @type {string}
     * @memberof AddNoticeInput
     */
    content: string;
    /**
     * 
     * @type {NoticeTypeEnum}
     * @memberof AddNoticeInput
     */
    type?: NoticeTypeEnum;
    /**
     * 发布人Id
     * @type {number}
     * @memberof AddNoticeInput
     */
    publicUserId?: number;
    /**
     * 发布人姓名
     * @type {string}
     * @memberof AddNoticeInput
     */
    publicUserName?: string | null;
    /**
     * 发布机构Id
     * @type {number}
     * @memberof AddNoticeInput
     */
    publicOrgId?: number;
    /**
     * 发布机构名称
     * @type {string}
     * @memberof AddNoticeInput
     */
    publicOrgName?: string | null;
    /**
     * 发布时间
     * @type {Date}
     * @memberof AddNoticeInput
     */
    publicTime?: Date | null;
    /**
     * 撤回时间
     * @type {Date}
     * @memberof AddNoticeInput
     */
    cancelTime?: Date | null;
    /**
     * 
     * @type {NoticeStatusEnum}
     * @memberof AddNoticeInput
     */
    status?: NoticeStatusEnum;
}
