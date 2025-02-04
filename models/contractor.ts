/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContractorAddress } from './contractor-address';

/**
 * The representation of a contractor (individual or business) in Gusto.
 * @export
 * @interface Contractor
 */
export interface Contractor {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof Contractor
     */
    'version'?: string;
    /**
     * The UUID of the contractor in Gusto.
     * @type {string}
     * @memberof Contractor
     */
    'uuid'?: string;
    /**
     * The UUID of the company the contractor is employed by.
     * @type {string}
     * @memberof Contractor
     */
    'company_uuid'?: string;
    /**
     * The contractor\'s wage type, either \"Fixed\" or \"Hourly\".
     * @type {string}
     * @memberof Contractor
     */
    'wage_type'?: ContractorWageTypeEnum;
    /**
     * The status of the contractor with the company.
     * @type {boolean}
     * @memberof Contractor
     */
    'is_active'?: boolean;
    /**
     * The contractor\'s type, either \"Individual\" or \"Business\". 
     * @type {string}
     * @memberof Contractor
     */
    'type'?: ContractorTypeEnum;
    /**
     * The contractor’s first name. This attribute is required for “Individual” contractors and will be ignored for “Business” contractors.
     * @type {string}
     * @memberof Contractor
     */
    'first_name'?: string | null;
    /**
     * The contractor’s last name. This attribute is required for “Individual” contractors and will be ignored for “Business” contractors.
     * @type {string}
     * @memberof Contractor
     */
    'last_name'?: string | null;
    /**
     * The contractor’s middle initial. This attribute is optional for “Individual” contractors and will be ignored for “Business” contractors.
     * @type {string}
     * @memberof Contractor
     */
    'middle_initial'?: string | null;
    /**
     * The name of the contractor business. This attribute is required for “Business” contractors and will be ignored for “Individual” contractors.
     * @type {string}
     * @memberof Contractor
     */
    'business_name'?: string | null;
    /**
     * The Federal Employer Identification Number of the contractor business. This attribute is optional for “Business” contractors and will be ignored for “Individual” contractors.
     * @type {string}
     * @memberof Contractor
     */
    'ein'?: string | null;
    /**
     * Whether company\'s Employer Identification Number (EIN) is present
     * @type {boolean}
     * @memberof Contractor
     */
    'has_ein'?: boolean | null;
    /**
     * The contractor’s email address. This attribute is optional for “Individual” contractors and will be ignored for “Business” contractors. 
     * @type {string}
     * @memberof Contractor
     */
    'email'?: string | null;
    /**
     * The contractor\'s start date.
     * @type {string}
     * @memberof Contractor
     */
    'start_date'?: string;
    /**
     * 
     * @type {ContractorAddress}
     * @memberof Contractor
     */
    'address'?: ContractorAddress;
    /**
     * The contractor’s hourly rate. This attribute is required if the wage_type is “Hourly”.
     * @type {string}
     * @memberof Contractor
     */
    'hourly_rate'?: string;
    /**
     * The boolean flag indicating whether Gusto will file a new hire report for the contractor
     * @type {boolean}
     * @memberof Contractor
     */
    'file_new_hire_report'?: boolean;
    /**
     * State where the contractor will be conducting the majority of their work for the company. This value is used when generating the new hire report.
     * @type {string}
     * @memberof Contractor
     */
    'work_state'?: string | null;
    /**
     * The updated onboarding status for the contractor
     * @type {boolean}
     * @memberof Contractor
     */
    'onboarded'?: boolean;
    /**
     * One of the \"onboarding_status\" enum values.
     * @type {string}
     * @memberof Contractor
     */
    'onboarding_status'?: ContractorOnboardingStatusEnum;
}

type ContractorWageTypeEnum = 'Fixed' | 'Hourly'
type ContractorTypeEnum = 'Individual' | 'Business'
type ContractorOnboardingStatusEnum = 'onboarding_completed' | 'admin_onboarding_review' | 'admin_onboarding_incomplete'


