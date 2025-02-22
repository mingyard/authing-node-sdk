/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateIdentityDto } from './CreateIdentityDto';
import type { CreateUserOtpDto } from './CreateUserOtpDto';

export type CreateUserInfoDto = {
    /**
     * 账户当前状态
     */
    status?: CreateUserInfoDto.status;
    /**
     * 邮箱，不区分大小写
     */
    email?: string;
    /**
     * 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。
     */
    phone?: string;
    /**
     * 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。
     */
    phoneCountryCode?: string;
    /**
     * 用户名，用户池内唯一
     */
    username?: string;
    /**
     * 第三方外部 ID
     */
    externalId?: string;
    /**
     * 用户真实名称，不具备唯一性
     */
    name?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 头像链接
     */
    photo?: string;
    /**
     * 性别
     */
    gender?: CreateUserInfoDto.gender;
    /**
     * 邮箱是否验证
     */
    emailVerified?: boolean;
    /**
     * 手机号是否验证
     */
    phoneVerified?: boolean;
    /**
     * 出生日期
     */
    birthdate?: string;
    /**
     * 所在国家
     */
    country?: string;
    /**
     * 所在省份
     */
    province?: string;
    /**
     * 所在城市
     */
    city?: string;
    /**
     * 所处地址
     */
    address?: string;
    /**
     * 所处街道地址
     */
    streetAddress?: string;
    /**
     * 邮政编码号
     */
    postalCode?: string;
    /**
     * 所在公司
     */
    company?: string;
    /**
     * 最近一次登录时使用的浏览器 UA
     */
    browser?: string;
    /**
     * 最近一次登录时使用的设备
     */
    device?: string;
    /**
     * 名
     */
    givenName?: string;
    /**
     * 姓
     */
    familyName?: string;
    /**
     * 中间名
     */
    middleName?: string;
    /**
     * Preferred Username
     */
    profile?: string;
    /**
     * Preferred Username
     */
    preferredUsername?: string;
    /**
     * 用户个人网页
     */
    website?: string;
    /**
     * 用户时区信息
     */
    zoneinfo?: string;
    /**
     * Locale
     */
    locale?: string;
    /**
     * 标准的完整地址
     */
    formatted?: string;
    /**
     * 用户所在区域
     */
    region?: string;
    /**
     * 用户密码。我们使用 HTTPS 协议对密码进行安全传输，可以在一定程度上保证安全性。如果你还需要更高级别的安全性，我们还支持 RSA256 和国密 SM2 两种方式对密码进行加密。详情见 `passwordEncryptType` 参数。
     */
    password?: string;
    /**
     * 加密用户密码的盐
     */
    salt?: string;
    /**
     * 租户 ID
     */
    tenantIds?: Array<string>;
    /**
     * 用户的 OTP 验证器
     */
    otp?: CreateUserOtpDto;
    /**
     * 用户所属部门 ID 列表
     */
    departmentIds?: Array<string>;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
    /**
     * 第三方身份源（建议调用绑定接口进行绑定）
     */
    identities?: Array<CreateIdentityDto>;
};

export namespace CreateUserInfoDto {

    /**
     * 账户当前状态
     */
    export enum status {
        SUSPENDED = 'Suspended',
        RESIGNED = 'Resigned',
        ACTIVATED = 'Activated',
        ARCHIVED = 'Archived',
        DEACTIVATED = 'Deactivated',
    }

    /**
     * 性别
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}
