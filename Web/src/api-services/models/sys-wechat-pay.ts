/* tslint:disable */
/* eslint-disable */

import { SysWechatUser } from './sys-wechat-user';
/**
 * 系统微信支付表
 * @export
 * @interface SysWechatPay
 */
export interface SysWechatPay {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysWechatPay
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysWechatPay
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysWechatPay
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysWechatPay
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysWechatPay
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysWechatPay
     */
    isDelete?: boolean;
    /**
     * 微信商户号
     * @type {string}
     * @memberof SysWechatPay
     */
    merchantId: string;
    /**
     * 服务商AppId
     * @type {string}
     * @memberof SysWechatPay
     */
    appId: string;
    /**
     * 商户订单号
     * @type {string}
     * @memberof SysWechatPay
     */
    outTradeNumber: string;
    /**
     * 支付订单号
     * @type {string}
     * @memberof SysWechatPay
     */
    transactionId: string;
    /**
     * 交易类型
     * @type {string}
     * @memberof SysWechatPay
     */
    tradeType?: string | null;
    /**
     * 交易状态
     * @type {string}
     * @memberof SysWechatPay
     */
    tradeState?: string | null;
    /**
     * 交易状态描述
     * @type {string}
     * @memberof SysWechatPay
     */
    tradeStateDescription?: string | null;
    /**
     * 付款银行类型
     * @type {string}
     * @memberof SysWechatPay
     */
    bankType?: string | null;
    /**
     * 订单总金额
     * @type {number}
     * @memberof SysWechatPay
     */
    total?: number;
    /**
     * 用户支付金额
     * @type {number}
     * @memberof SysWechatPay
     */
    payerTotal?: number | null;
    /**
     * 支付完成时间
     * @type {Date}
     * @memberof SysWechatPay
     */
    successTime?: Date | null;
    /**
     * 交易结束时间
     * @type {Date}
     * @memberof SysWechatPay
     */
    expireTime?: Date | null;
    /**
     * 商品描述
     * @type {string}
     * @memberof SysWechatPay
     */
    description?: string | null;
    /**
     * 场景信息
     * @type {string}
     * @memberof SysWechatPay
     */
    scene?: string | null;
    /**
     * 附加数据
     * @type {string}
     * @memberof SysWechatPay
     */
    attachment?: string | null;
    /**
     * 优惠标记
     * @type {string}
     * @memberof SysWechatPay
     */
    goodsTag?: string | null;
    /**
     * 结算信息
     * @type {string}
     * @memberof SysWechatPay
     */
    settlement?: string | null;
    /**
     * 回调通知地址
     * @type {string}
     * @memberof SysWechatPay
     */
    notifyUrl?: string | null;
    /**
     * 备注
     * @type {string}
     * @memberof SysWechatPay
     */
    remark?: string | null;
    /**
     * 微信OpenId标识
     * @type {string}
     * @memberof SysWechatPay
     */
    openId?: string | null;
    /**
     * 
     * @type {SysWechatUser}
     * @memberof SysWechatPay
     */
    sysWechatUser?: SysWechatUser;
    /**
     * 子商户号
     * @type {string}
     * @memberof SysWechatPay
     */
    subMerchantId?: string | null;
    /**
     * 子商户AppId
     * @type {string}
     * @memberof SysWechatPay
     */
    subAppId?: string | null;
    /**
     * 子商户唯一标识
     * @type {string}
     * @memberof SysWechatPay
     */
    subOpenId?: string | null;
}
