/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过用户 ID，获取用户授权的应用，可以选择指定用户 ID 类型等。
 */
export type GetUserAuthorizedAppsDto = {
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。
     */
    userIdType?: any;
};
