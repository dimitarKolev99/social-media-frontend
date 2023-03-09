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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    ErrorMessage,
} from '../models';

export interface GetFileRequest {
    filename: string;
}

/**
 * no description
 */
export class FilesControllerApi extends BaseAPI {

    /**
     */
    getFile({ filename }: GetFileRequest): Observable<Blob>
    getFile({ filename }: GetFileRequest, opts?: OperationOpts): Observable<AjaxResponse<Blob>>
    getFile({ filename }: GetFileRequest, opts?: OperationOpts): Observable<Blob | AjaxResponse<Blob>> {
        throwIfNullOrUndefined(filename, 'filename', 'getFile');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Authorization authentication
        };

        return this.request<Blob>({
            url: '/api/files/{filename}'.replace('{filename}', encodeURI(filename)),
            method: 'GET',
            headers,
            responseType: 'blob',
        }, opts?.responseOpts);
    };

}
