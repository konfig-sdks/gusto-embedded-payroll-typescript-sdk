/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The signatory\'s home address
 * @export
 * @interface SignatoriesCreateSignatoryWithCompleteInformationRequestHomeAddress
 */
export interface SignatoriesCreateSignatoryWithCompleteInformationRequestHomeAddress {
    /**
     * 
     * @type {string}
     * @memberof SignatoriesCreateSignatoryWithCompleteInformationRequestHomeAddress
     */
    'street_1': string;
    /**
     * 
     * @type {string}
     * @memberof SignatoriesCreateSignatoryWithCompleteInformationRequestHomeAddress
     */
    'street_2'?: string;
    /**
     * 
     * @type {string}
     * @memberof SignatoriesCreateSignatoryWithCompleteInformationRequestHomeAddress
     */
    'city': string;
    /**
     * 
     * @type {string}
     * @memberof SignatoriesCreateSignatoryWithCompleteInformationRequestHomeAddress
     */
    'state': string;
    /**
     * 
     * @type {string}
     * @memberof SignatoriesCreateSignatoryWithCompleteInformationRequestHomeAddress
     */
    'zip': string;
}

