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
import { Flow } from '../models';
// @ts-ignore
import { FlowsGenerateLinkRequest } from '../models';
// @ts-ignore
import { UnprocessableEntityErrorObject } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FlowsApi - axios parameter creator
 * @export
 */
export const FlowsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity or 24 hours from creation time, whichever comes first.  scope: `flows:write`
         * @summary Create a flow
         * @param {string} companyUuid The UUID of the company
         * @param {'2024-03-01'} [xGustoApiVersion] Determines the date-based API version associated with your API call. If none is provided, your application\&#39;s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
         * @param {FlowsGenerateLinkRequest} [flowsGenerateLinkRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateLink: async (companyUuid: string, xGustoApiVersion?: '2024-03-01', flowsGenerateLinkRequest?: FlowsGenerateLinkRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUuid' is not null or undefined
            assertParamExists('generateLink', 'companyUuid', companyUuid)
            const localVarPath = `/v1/companies/{company_uuid}/flows`
                .replace(`{${"company_uuid"}}`, encodeURIComponent(String(companyUuid !== undefined ? companyUuid : `-company_uuid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (xGustoApiVersion != null) {
                localVarHeaderParameter['X-Gusto-API-Version'] = String(xGustoApiVersion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: flowsGenerateLinkRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/companies/{company_uuid}/flows',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(flowsGenerateLinkRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FlowsApi - functional programming interface
 * @export
 */
export const FlowsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FlowsApiAxiosParamCreator(configuration)
    return {
        /**
         * Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity or 24 hours from creation time, whichever comes first.  scope: `flows:write`
         * @summary Create a flow
         * @param {FlowsApiGenerateLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateLink(requestParameters: FlowsApiGenerateLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Flow>> {
            const flowsGenerateLinkRequest: FlowsGenerateLinkRequest = {
                flow_type: requestParameters.flow_type,
                entity_uuid: requestParameters.entity_uuid,
                entity_type: requestParameters.entity_type
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateLink(requestParameters.companyUuid, requestParameters.xGustoApiVersion, flowsGenerateLinkRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FlowsApi - factory interface
 * @export
 */
export const FlowsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FlowsApiFp(configuration)
    return {
        /**
         * Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity or 24 hours from creation time, whichever comes first.  scope: `flows:write`
         * @summary Create a flow
         * @param {FlowsApiGenerateLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateLink(requestParameters: FlowsApiGenerateLinkRequest, options?: AxiosRequestConfig): AxiosPromise<Flow> {
            return localVarFp.generateLink(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateLink operation in FlowsApi.
 * @export
 * @interface FlowsApiGenerateLinkRequest
 */
export type FlowsApiGenerateLinkRequest = {
    
    /**
    * The UUID of the company
    * @type {string}
    * @memberof FlowsApiGenerateLink
    */
    readonly companyUuid: string
    
    /**
    * Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
    * @type {'2024-03-01'}
    * @memberof FlowsApiGenerateLink
    */
    readonly xGustoApiVersion?: '2024-03-01'
    
} & FlowsGenerateLinkRequest

/**
 * FlowsApiGenerated - object-oriented interface
 * @export
 * @class FlowsApiGenerated
 * @extends {BaseAPI}
 */
export class FlowsApiGenerated extends BaseAPI {
    /**
     * Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity or 24 hours from creation time, whichever comes first.  scope: `flows:write`
     * @summary Create a flow
     * @param {FlowsApiGenerateLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApiGenerated
     */
    public generateLink(requestParameters: FlowsApiGenerateLinkRequest, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).generateLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
