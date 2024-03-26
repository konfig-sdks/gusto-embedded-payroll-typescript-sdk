/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The contractor’s home address.
 * @export
 * @interface ContractorAddress
 */
export interface ContractorAddress {
    /**
     * 
     * @type {string}
     * @memberof ContractorAddress
     */
    'street_1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractorAddress
     */
    'street_2'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContractorAddress
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractorAddress
     */
    'state'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractorAddress
     */
    'zip'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractorAddress
     */
    'country'?: string;
}

