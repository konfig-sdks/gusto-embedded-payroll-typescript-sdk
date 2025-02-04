/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { HolidayPayPoliciesCreateCompanyPolicyRequestFederalHolidays } from './holiday-pay-policies-create-company-policy-request-federal-holidays';

/**
 * 
 * @export
 * @interface HolidayPayPoliciesUpdatePolicyRequest
 */
export interface HolidayPayPoliciesUpdatePolicyRequest {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof HolidayPayPoliciesUpdatePolicyRequest
     */
    'version': string;
    /**
     * 
     * @type {HolidayPayPoliciesCreateCompanyPolicyRequestFederalHolidays}
     * @memberof HolidayPayPoliciesUpdatePolicyRequest
     */
    'federal_holidays'?: HolidayPayPoliciesCreateCompanyPolicyRequestFederalHolidays;
}

