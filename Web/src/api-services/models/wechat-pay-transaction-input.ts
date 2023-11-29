/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface WechatPayTransactionInput
 */
export interface WechatPayTransactionInput {
    /**
     * OpenId
     * @type {string}
     * @memberof WechatPayTransactionInput
     */
    openId?: string | null;
    /**
     * 订单金额
     * @type {number}
     * @memberof WechatPayTransactionInput
     */
    total?: number;
    /**
     * 商品描述
     * @type {string}
     * @memberof WechatPayTransactionInput
     */
    description?: string | null;
    /**
     * 附加数据
     * @type {string}
     * @memberof WechatPayTransactionInput
     */
    attachment?: string | null;
    /**
     * 优惠标记
     * @type {string}
     * @memberof WechatPayTransactionInput
     */
    goodsTag?: string | null;
}
