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
 * @interface SignupRequest
 */
export interface SignupRequest {
    /**
     * @type {string}
     * @memberof SignupRequest
     */
    username?: string;
    /**
     * @type {string}
     * @memberof SignupRequest
     */
    email?: string;
    /**
     * @type {string}
     * @memberof SignupRequest
     */
    password?: string;
    /**
     * @type {Set<string>}
     * @memberof SignupRequest
     */
    role?: Set<string>;
}
