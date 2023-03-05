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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    ComExampleSpringDemoLoginDtoRequestLoginRequest,
    ComExampleSpringDemoLoginDtoRequestSignupRequest,
    ComExampleSpringDemoLoginRefreshtokenErrorMessage,
} from '../models';

export interface AuthenticateUserRequest {
    comExampleSpringDemoLoginDtoRequestLoginRequest: ComExampleSpringDemoLoginDtoRequestLoginRequest;
}

export interface RegisterUserRequest {
    comExampleSpringDemoLoginDtoRequestSignupRequest: ComExampleSpringDemoLoginDtoRequestSignupRequest;
}

/**
 * no description
 */
export class AuthControllerApi extends BaseAPI {

    /**
     */
    authenticateUser({ comExampleSpringDemoLoginDtoRequestLoginRequest }: AuthenticateUserRequest): Observable<object>
    authenticateUser({ comExampleSpringDemoLoginDtoRequestLoginRequest }: AuthenticateUserRequest, opts?: OperationOpts): Observable<AjaxResponse<object>>
    authenticateUser({ comExampleSpringDemoLoginDtoRequestLoginRequest }: AuthenticateUserRequest, opts?: OperationOpts): Observable<object | AjaxResponse<object>> {
        throwIfNullOrUndefined(comExampleSpringDemoLoginDtoRequestLoginRequest, 'comExampleSpringDemoLoginDtoRequestLoginRequest', 'authenticateUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<object>({
            url: '/api/auth/signin',
            method: 'POST',
            headers,
            body: comExampleSpringDemoLoginDtoRequestLoginRequest,
        }, opts?.responseOpts);
    };

    /**
     */
    logoutUser(): Observable<object>
    logoutUser(opts?: OperationOpts): Observable<AjaxResponse<object>>
    logoutUser(opts?: OperationOpts): Observable<object | AjaxResponse<object>> {
        return this.request<object>({
            url: '/api/auth/signout',
            method: 'POST',
        }, opts?.responseOpts);
    };

    /**
     */
    refreshToken(): Observable<object>
    refreshToken(opts?: OperationOpts): Observable<AjaxResponse<object>>
    refreshToken(opts?: OperationOpts): Observable<object | AjaxResponse<object>> {
        return this.request<object>({
            url: '/api/auth/refreshtoken',
            method: 'POST',
        }, opts?.responseOpts);
    };

    /**
     */
    registerUser({ comExampleSpringDemoLoginDtoRequestSignupRequest }: RegisterUserRequest): Observable<object>
    registerUser({ comExampleSpringDemoLoginDtoRequestSignupRequest }: RegisterUserRequest, opts?: OperationOpts): Observable<AjaxResponse<object>>
    registerUser({ comExampleSpringDemoLoginDtoRequestSignupRequest }: RegisterUserRequest, opts?: OperationOpts): Observable<object | AjaxResponse<object>> {
        throwIfNullOrUndefined(comExampleSpringDemoLoginDtoRequestSignupRequest, 'comExampleSpringDemoLoginDtoRequestSignupRequest', 'registerUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<object>({
            url: '/api/auth/signup',
            method: 'POST',
            headers,
            body: comExampleSpringDemoLoginDtoRequestSignupRequest,
        }, opts?.responseOpts);
    };

}
