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
 * @interface EmployeeFormsSignFormRequest
 */
export interface EmployeeFormsSignFormRequest {
    /**
     * The signature
     * @type {string}
     * @memberof EmployeeFormsSignFormRequest
     */
    'signature_text': string;
    /**
     * whether you agree to sign electronically
     * @type {boolean}
     * @memberof EmployeeFormsSignFormRequest
     */
    'agree': boolean;
    /**
     * The IP address of the signatory who signed the form.
     * @type {string}
     * @memberof EmployeeFormsSignFormRequest
     */
    'signed_by_ip_address': string;
}

