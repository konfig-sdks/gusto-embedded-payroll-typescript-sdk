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
import { Notification } from '../models';
// @ts-ignore
import { UnprocessableEntityErrorObject } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Upon receiving a notification webhook event, use this endpoint to fetch the notification\'s details. The notification details include basic suggested content that can help you build notifications in your platform.  Note: partners are responsible for the delivery and any custom state management of notifications in their application. Refer to our [partner notification guide](https://docs.gusto.com/embedded-payroll/docs/partner-notifications) for more details.  If the notification UUID is not found, the response will be 404 Not Found. If the notification\'s supporting data is no longer valid, the response will be 422 Unprocessable Entity.  scope: `notifications:read`
         * @summary Get a notification\'s details
         * @param {string} notificationUuid The UUID of the notification
         * @param {'2024-03-01'} [xGustoApiVersion] Determines the date-based API version associated with your API call. If none is provided, your application\&#39;s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (notificationUuid: string, xGustoApiVersion?: '2024-03-01', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'notificationUuid' is not null or undefined
            assertParamExists('getDetails', 'notificationUuid', notificationUuid)
            const localVarPath = `/v1/notifications/{notification_uuid}`
                .replace(`{${"notification_uuid"}}`, encodeURIComponent(String(notificationUuid !== undefined ? notificationUuid : `-notification_uuid-`)));
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
                pathTemplate: '/v1/notifications/{notification_uuid}',
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
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Upon receiving a notification webhook event, use this endpoint to fetch the notification\'s details. The notification details include basic suggested content that can help you build notifications in your platform.  Note: partners are responsible for the delivery and any custom state management of notifications in their application. Refer to our [partner notification guide](https://docs.gusto.com/embedded-payroll/docs/partner-notifications) for more details.  If the notification UUID is not found, the response will be 404 Not Found. If the notification\'s supporting data is no longer valid, the response will be 422 Unprocessable Entity.  scope: `notifications:read`
         * @summary Get a notification\'s details
         * @param {NotificationsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: NotificationsApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.notificationUuid, requestParameters.xGustoApiVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationsApiFp(configuration)
    return {
        /**
         * Upon receiving a notification webhook event, use this endpoint to fetch the notification\'s details. The notification details include basic suggested content that can help you build notifications in your platform.  Note: partners are responsible for the delivery and any custom state management of notifications in their application. Refer to our [partner notification guide](https://docs.gusto.com/embedded-payroll/docs/partner-notifications) for more details.  If the notification UUID is not found, the response will be 404 Not Found. If the notification\'s supporting data is no longer valid, the response will be 422 Unprocessable Entity.  scope: `notifications:read`
         * @summary Get a notification\'s details
         * @param {NotificationsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: NotificationsApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<Notification> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDetails operation in NotificationsApi.
 * @export
 * @interface NotificationsApiGetDetailsRequest
 */
export type NotificationsApiGetDetailsRequest = {
    
    /**
    * The UUID of the notification
    * @type {string}
    * @memberof NotificationsApiGetDetails
    */
    readonly notificationUuid: string
    
    /**
    * Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
    * @type {'2024-03-01'}
    * @memberof NotificationsApiGetDetails
    */
    readonly xGustoApiVersion?: '2024-03-01'
    
}

/**
 * NotificationsApiGenerated - object-oriented interface
 * @export
 * @class NotificationsApiGenerated
 * @extends {BaseAPI}
 */
export class NotificationsApiGenerated extends BaseAPI {
    /**
     * Upon receiving a notification webhook event, use this endpoint to fetch the notification\'s details. The notification details include basic suggested content that can help you build notifications in your platform.  Note: partners are responsible for the delivery and any custom state management of notifications in their application. Refer to our [partner notification guide](https://docs.gusto.com/embedded-payroll/docs/partner-notifications) for more details.  If the notification UUID is not found, the response will be 404 Not Found. If the notification\'s supporting data is no longer valid, the response will be 422 Unprocessable Entity.  scope: `notifications:read`
     * @summary Get a notification\'s details
     * @param {NotificationsApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiGenerated
     */
    public getDetails(requestParameters: NotificationsApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
