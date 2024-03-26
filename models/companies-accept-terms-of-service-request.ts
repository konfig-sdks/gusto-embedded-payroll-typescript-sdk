/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CompaniesAcceptTermsOfServiceRequest
 */
export interface CompaniesAcceptTermsOfServiceRequest {
    /**
     * The user\'s email address on Gusto. You can retrieve the user\'s email via company\'s `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints.
     * @type {string}
     * @memberof CompaniesAcceptTermsOfServiceRequest
     */
    'email': string;
    /**
     * The IP address of the user who viewed and accepted the Terms of Service.
     * @type {string}
     * @memberof CompaniesAcceptTermsOfServiceRequest
     */
    'ip_address': string;
    /**
     * The user ID on your platform.
     * @type {string}
     * @memberof CompaniesAcceptTermsOfServiceRequest
     */
    'external_user_id': string;
}

