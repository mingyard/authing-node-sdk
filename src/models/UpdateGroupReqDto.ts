/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateGroupReqDto = {
    /**
     * 分组描述
     */
    description: string;
    /**
     * 分组 code
     */
    code: string;
    /**
     * 分组名称
     */
    name?: string;
    /**
     * 分组新的 code
     */
    newCode?: string;
};
