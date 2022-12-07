/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据主体类型和标识获取直接分配给主体的 ASA 账号
 */
export type GetAssignedAccountDto = {
    /**
     * 所属应用 ID
     */
    appId?: any;
    /**
     * 目标对象类型：
     * - `USER`: 用户
     * - `ROLE`: 角色
     * - `GROUP`: 分组
     * - `DEPARTMENT`: 部门
     *
     */
    targetType?: any;
    /**
     * 目标对象的唯一标志符：
     * - 如果是用户，为用户的 ID，如 `6343b98b7cfxxx9366e9b7c`
     * - 如果是角色，为角色的 code，如 `admin`
     * - 如果是分组，为分组的 code，如 `developer`
     * - 如果是部门，为部门的 ID，如 `6343bafc019xxxx889206c4c`
     *
     */
    targetIdentifier?: any;
};
