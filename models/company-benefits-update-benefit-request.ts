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
 * @interface CompanyBenefitsUpdateBenefitRequest
 */
export interface CompanyBenefitsUpdateBenefitRequest {
    /**
     * The description of the company benefit.For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
     * @type {string}
     * @memberof CompanyBenefitsUpdateBenefitRequest
     */
    'description'?: string;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     * @type {string}
     * @memberof CompanyBenefitsUpdateBenefitRequest
     */
    'version': string;
    /**
     * Whether this benefit is active for employee participation. Company benefits may only be deactivated if no employees are actively participating.
     * @type {boolean}
     * @memberof CompanyBenefitsUpdateBenefitRequest
     */
    'active'?: boolean;
}

