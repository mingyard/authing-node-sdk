/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，获取某个主体被授权的资源列表。
 */
export type GetAuthorizedResourcesDto = {
    /**
     * 目标对象类型
     */
    targetType?: any;
    /**
     * 目标对象唯一标志符
     */
    targetIdentifier?: any;
    /**
     * 所属权限分组的 code
     */
    namespace?: any;
    /**
     * 限定资源类型，如数据、API、按钮、菜单
     */
    resourceType?: any;
    /**
     * 限定查询的资源列表，如果指定，只会返回所指定的资源列表。
     */
    resourceList?: any;
    /**
     * 是否获取被拒绝的资源
     */
    withDenied?: any;
};
