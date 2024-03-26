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
 * @interface CompanyBenefitsCreateBenefitRequest
 */
export interface CompanyBenefitsCreateBenefitRequest {
    /**
     * The description of the company benefit.For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
     * @type {string}
     * @memberof CompanyBenefitsCreateBenefitRequest
     */
    'description': string;
    /**
     * The ID of the benefit to which the company benefit belongs.
     * @type {number}
     * @memberof CompanyBenefitsCreateBenefitRequest
     */
    'benefit_type'?: number;
    /**
     * Whether this benefit is active for employee participation.
     * @type {boolean}
     * @memberof CompanyBenefitsCreateBenefitRequest
     */
    'active'?: boolean;
    /**
     * Whether the employer is subject to pay employer taxes when an employee is on leave. Only applicable to third party sick pay benefits.
     * @type {boolean}
     * @memberof CompanyBenefitsCreateBenefitRequest
     */
    'responsible_for_employer_taxes'?: boolean;
    /**
     * Whether the employer is subject to file W-2 forms for an employee on leave. Only applicable to third party sick pay benefits.
     * @type {boolean}
     * @memberof CompanyBenefitsCreateBenefitRequest
     */
    'responsible_for_employee_w2'?: boolean;
}

