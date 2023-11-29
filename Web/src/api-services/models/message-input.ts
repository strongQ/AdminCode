/* tslint:disable */
/* eslint-disable */

import { MessageTypeEnum } from './message-type-enum';
/**
 * 
 * @export
 * @interface MessageInput
 */
export interface MessageInput {
    /**
     * 用户ID
     * @type {number}
     * @memberof MessageInput
     */
    userId?: number;
    /**
     * 用户ID列表
     * @type {Array<number>}
     * @memberof MessageInput
     */
    userIds?: Array<number> | null;
    /**
     * 消息标题
     * @type {string}
     * @memberof MessageInput
     */
    title?: string | null;
    /**
     * 
     * @type {MessageTypeEnum}
     * @memberof MessageInput
     */
    messageType?: MessageTypeEnum;
    /**
     * 消息内容
     * @type {string}
     * @memberof MessageInput
     */
    message?: string | null;
}
