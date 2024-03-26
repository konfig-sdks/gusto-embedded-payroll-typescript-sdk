/* tslint:disable */
/* eslint-disable */
/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GeneratedDocument } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * GeneratedDocumentsApi - axios parameter creator
 * @export
 */
export const GeneratedDocumentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a generated document given the request_uuid. The response will include the generation request\'s status and, if complete, the relevant document urls.  scope: `generated_documents:read`
         * @summary Get a generated document
         * @param {string} documentType the type of document being generated
         * @param {string} requestUuid The UUID of the Generated Document Request
         * @param {'2024-03-01'} [xGustoApiVersion] Determines the date-based API version associated with your API call. If none is provided, your application\&#39;s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocumentByRequestUuid: async (documentType: string, requestUuid: string, xGustoApiVersion?: '2024-03-01', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentType' is not null or undefined
            assertParamExists('getDocumentByRequestUuid', 'documentType', documentType)
            // verify required parameter 'requestUuid' is not null or undefined
            assertParamExists('getDocumentByRequestUuid', 'requestUuid', requestUuid)
            const localVarPath = `/v1/generated_documents/{document_type}/{request_uuid}`
                .replace(`{${"document_type"}}`, encodeURIComponent(String(documentType !== undefined ? documentType : `-document_type-`)))
                .replace(`{${"request_uuid"}}`, encodeURIComponent(String(requestUuid !== undefined ? requestUuid : `-request_uuid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (xGustoApiVersion != null) {
                localVarHeaderParameter['X-Gusto-API-Version'] = String(xGustoApiVersion);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/generated_documents/{document_type}/{request_uuid}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GeneratedDocumentsApi - functional programming interface
 * @export
 */
export const GeneratedDocumentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GeneratedDocumentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a generated document given the request_uuid. The response will include the generation request\'s status and, if complete, the relevant document urls.  scope: `generated_documents:read`
         * @summary Get a generated document
         * @param {GeneratedDocumentsApiGetDocumentByRequestUuidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDocumentByRequestUuid(requestParameters: GeneratedDocumentsApiGetDocumentByRequestUuidRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GeneratedDocument>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDocumentByRequestUuid(requestParameters.documentType, requestParameters.requestUuid, requestParameters.xGustoApiVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GeneratedDocumentsApi - factory interface
 * @export
 */
export const GeneratedDocumentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GeneratedDocumentsApiFp(configuration)
    return {
        /**
         * Get a generated document given the request_uuid. The response will include the generation request\'s status and, if complete, the relevant document urls.  scope: `generated_documents:read`
         * @summary Get a generated document
         * @param {GeneratedDocumentsApiGetDocumentByRequestUuidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocumentByRequestUuid(requestParameters: GeneratedDocumentsApiGetDocumentByRequestUuidRequest, options?: AxiosRequestConfig): AxiosPromise<GeneratedDocument> {
            return localVarFp.getDocumentByRequestUuid(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDocumentByRequestUuid operation in GeneratedDocumentsApi.
 * @export
 * @interface GeneratedDocumentsApiGetDocumentByRequestUuidRequest
 */
export type GeneratedDocumentsApiGetDocumentByRequestUuidRequest = {
    
    /**
    * the type of document being generated
    * @type {string}
    * @memberof GeneratedDocumentsApiGetDocumentByRequestUuid
    */
    readonly documentType: string
    
    /**
    * The UUID of the Generated Document Request
    * @type {string}
    * @memberof GeneratedDocumentsApiGetDocumentByRequestUuid
    */
    readonly requestUuid: string
    
    /**
    * Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
    * @type {'2024-03-01'}
    * @memberof GeneratedDocumentsApiGetDocumentByRequestUuid
    */
    readonly xGustoApiVersion?: '2024-03-01'
    
}

/**
 * GeneratedDocumentsApiGenerated - object-oriented interface
 * @export
 * @class GeneratedDocumentsApiGenerated
 * @extends {BaseAPI}
 */
export class GeneratedDocumentsApiGenerated extends BaseAPI {
    /**
     * Get a generated document given the request_uuid. The response will include the generation request\'s status and, if complete, the relevant document urls.  scope: `generated_documents:read`
     * @summary Get a generated document
     * @param {GeneratedDocumentsApiGetDocumentByRequestUuidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneratedDocumentsApiGenerated
     */
    public getDocumentByRequestUuid(requestParameters: GeneratedDocumentsApiGetDocumentByRequestUuidRequest, options?: AxiosRequestConfig) {
        return GeneratedDocumentsApiFp(this.configuration).getDocumentByRequestUuid(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
