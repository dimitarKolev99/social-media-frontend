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
    User,
} from './';

/**
 * @export
 * @interface RefreshToken
 */
export interface RefreshToken {
    /**
     * @type {number}
     * @memberof RefreshToken
     */
    id?: number;
    /**
     * @type {User}
     * @memberof RefreshToken
     */
    user?: User;
    /**
     * @type {string}
     * @memberof RefreshToken
     */
    token?: string;
    /**
     * @type {string}
     * @memberof RefreshToken
     */
    expiryDate?: string;
}