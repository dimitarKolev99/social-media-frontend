// tslint:disable
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface JwtResponse
 */
export interface JwtResponse {
    /**
     * @type {string}
     * @memberof JwtResponse
     */
    jwt?: string;
    /**
     * @type {number}
     * @memberof JwtResponse
     */
    id?: number;
    /**
     * @type {string}
     * @memberof JwtResponse
     */
    username?: string;
    /**
     * @type {string}
     * @memberof JwtResponse
     */
    email?: string;
    /**
     * @type {Array<string>}
     * @memberof JwtResponse
     */
    roles?: Array<string>;
}
