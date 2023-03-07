// tslint:disable
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    RefreshToken,
    Role,
} from './';

/**
 * @export
 * @interface User
 */
export interface User {
    /**
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * @type {string}
     * @memberof User
     */
    password: string;
    /**
     * @type {Set<Role>}
     * @memberof User
     */
    roles?: Set<Role>;
    /**
     * @type {RefreshToken}
     * @memberof User
     */
    refreshToken?: RefreshToken;
    /**
     * @type {string}
     * @memberof User
     */
    asJsonString?: string;
}
