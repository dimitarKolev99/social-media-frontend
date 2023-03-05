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
    ComExampleSpringDemoLoginRefreshtokenDtoRefreshToken,
    ComExampleSpringDemoLoginRoleDtoRole,
} from './';

/**
 * @export
 * @interface ComExampleSpringDemoApiUserDtoUser
 */
export interface ComExampleSpringDemoApiUserDtoUser {
    /**
     * @type {number}
     * @memberof ComExampleSpringDemoApiUserDtoUser
     */
    id?: number;
    /**
     * @type {string}
     * @memberof ComExampleSpringDemoApiUserDtoUser
     */
    username: string;
    /**
     * @type {string}
     * @memberof ComExampleSpringDemoApiUserDtoUser
     */
    email: string;
    /**
     * @type {string}
     * @memberof ComExampleSpringDemoApiUserDtoUser
     */
    password: string;
    /**
     * @type {Set<ComExampleSpringDemoLoginRoleDtoRole>}
     * @memberof ComExampleSpringDemoApiUserDtoUser
     */
    roles?: Set<ComExampleSpringDemoLoginRoleDtoRole>;
    /**
     * @type {ComExampleSpringDemoLoginRefreshtokenDtoRefreshToken}
     * @memberof ComExampleSpringDemoApiUserDtoUser
     */
    refreshToken?: ComExampleSpringDemoLoginRefreshtokenDtoRefreshToken;
    /**
     * @type {string}
     * @memberof ComExampleSpringDemoApiUserDtoUser
     */
    asJsonString?: string;
}