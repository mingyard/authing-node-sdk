/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceTreeStructs } from './DataResourceTreeStructs';

export type CreateDataResourceDto = {
    /**
     * 数据资源权限操作列表
     */
    actions: Array<string>;
    /**
     * 数据资源节点类型，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。
     */
    struct: (DataResourceTreeStructs | string | Array<string>);
    /**
     * 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）
     */
    type: CreateDataResourceDto.type;
    /**
     * 数据资源 Code,权限空间内唯一
     */
    resourceCode: string;
    /**
     * 数据资源名称,权限空间内唯一
     */
    resourceName: string;
    /**
     * 数据资源所属的权限空间 Code
     */
    namespaceCode: string;
    /**
     * 数据资源描述
     */
    description?: string;
};

export namespace CreateDataResourceDto {

    /**
     * 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
