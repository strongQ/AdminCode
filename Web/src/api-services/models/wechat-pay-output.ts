/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface WechatPayOutput
 */
export interface WechatPayOutput {
    /**
     * OpenId
     * @type {string}
     * @memberof WechatPayOutput
     */
    openId?: string | null;
    /**
     * 订单金额
     * @type {number}
     * @memberof WechatPayOutput
     */
    total?: number;
    /**
     * 附加数据
     * @type {string}
     * @memberof WechatPayOutput
     */
    attachment?: string | null;
    /**
     * 优惠标记
     * @type {string}
     * @memberof WechatPayOutput
     */
    goodsTag?: string | null;
}
