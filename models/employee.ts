/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeCustomField } from './employee-custom-field';
import { Garnishment } from './garnishment';
import { Job } from './job';
import { PaidTimeOff } from './paid-time-off';
import { Termination } from './termination';

/**
 * The representation of an employee in Gusto.
 * @export
 * @interface Employee
 */
export interface Employee {
    /**
     * The current version of the employee. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof Employee
     */
    'version'?: string;
    /**
     * The UUID of the employee in Gusto.
     * @type {string}
     * @memberof Employee
     */
    'uuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'middle_initial'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'last_name'?: string;
    /**
     * The email address of the employee. This is provided to support syncing users between our system and yours. You may not use this email address for any other purpose (e.g. marketing).
     * @type {string}
     * @memberof Employee
     */
    'email'?: string | null;
    /**
     * The UUID of the company the employee is employed by.
     * @type {string}
     * @memberof Employee
     */
    'company_uuid'?: string;
    /**
     * The UUID of the employee\'s manager.
     * @type {string}
     * @memberof Employee
     */
    'manager_uuid'?: string;
    /**
     * The employee\'s department in the company.
     * @type {string}
     * @memberof Employee
     */
    'department'?: string | null;
    /**
     * Whether the employee is terminated.
     * @type {boolean}
     * @memberof Employee
     */
    'terminated'?: boolean;
    /**
     * Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.
     * @type {boolean}
     * @memberof Employee
     */
    'two_percent_shareholder'?: boolean;
    /**
     * Whether the employee has completed onboarding.
     * @type {boolean}
     * @memberof Employee
     */
    'onboarded'?: boolean;
    /**
     * The current onboarding status of the employee
     * @type {string}
     * @memberof Employee
     */
    'onboarding_status'?: EmployeeOnboardingStatusEnum;
    /**
     * 
     * @type {Array<Job>}
     * @memberof Employee
     */
    'jobs'?: Array<Job>;
    /**
     * 
     * @type {Array<PaidTimeOff>}
     * @memberof Employee
     */
    'eligible_paid_time_off'?: Array<PaidTimeOff>;
    /**
     * 
     * @type {Array<Termination>}
     * @memberof Employee
     */
    'terminations'?: Array<Termination>;
    /**
     * 
     * @type {Array<Garnishment>}
     * @memberof Employee
     */
    'garnishments'?: Array<Garnishment>;
    /**
     * Custom fields are only included for the employee if the include param has the custom_fields value set
     * @type {Array<EmployeeCustomField>}
     * @memberof Employee
     */
    'custom_fields'?: Array<EmployeeCustomField>;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'date_of_birth'?: string | null;
    /**
     * Indicates whether the employee has an SSN in Gusto.
     * @type {boolean}
     * @memberof Employee
     */
    'has_ssn'?: boolean;
    /**
     * Deprecated. This field always returns an empty string.
     * @type {string}
     * @memberof Employee
     */
    'ssn'?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'preferred_first_name'?: string;
    /**
     * The employee\'s payment method
     * @type {string}
     * @memberof Employee
     */
    'payment_method'?: EmployeePaymentMethodEnum;
    /**
     * The work email address of the employee. This is provided to support syncing users between our system and yours. You may not use this email address for any other purpose (e.g. marketing).
     * @type {string}
     * @memberof Employee
     */
    'work_email'?: string | null;
    /**
     * The current employment status of the employee. Full-time employees work 30+ hours per week. Part-time employees are split into two groups: those that work 20-29 hours a week, and those that work under 20 hours a week. Variable employees have hours that vary each week. Seasonal employees are hired for 6 months of the year or less.
     * @type {string}
     * @memberof Employee
     */
    'current_employment_status'?: EmployeeCurrentEmploymentStatusEnum;
}

type EmployeeOnboardingStatusEnum = 'onboarding_completed' | 'admin_onboarding_incomplete' | 'self_onboarding_pending_invite' | 'self_onboarding_invited' | 'self_onboarding_invited_started' | 'self_onboarding_invited_overdue' | 'self_onboarding_completed_by_employee' | 'self_onboarding_awaiting_admin_review'
type EmployeePaymentMethodEnum = 'Direct Deposit' | 'Check'
type EmployeeCurrentEmploymentStatusEnum = 'full_time' | 'part_time_under_twenty_hours' | 'part_time_twenty_plus_hours' | 'variable' | 'seasonal'


