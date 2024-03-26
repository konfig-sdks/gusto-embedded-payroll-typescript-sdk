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
 * @interface PayrollsCreateOffCyclePayrollRequest
 */
export interface PayrollsCreateOffCyclePayrollRequest {
    /**
     * Whether it is an off cycle payroll.
     * @type {boolean}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'off_cycle': boolean;
    /**
     * An off cycle payroll reason. Select one from the following list.
     * @type {string}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'off_cycle_reason': PayrollsCreateOffCyclePayrollRequestOffCycleReasonEnum;
    /**
     * Pay period start date.
     * @type {string}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'start_date': string;
    /**
     * Pay period end date.
     * @type {string}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'end_date': string;
    /**
     * A pay schedule is required for Transition from old pay schedule payroll to identify the matching transition pay period.
     * @type {string}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'pay_schedule_uuid'?: string;
    /**
     * A list of employee uuids to include on the payroll.
     * @type {Array<string>}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'employee_uuids'?: Array<string>;
    /**
     * Payment date.
     * @type {string}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'check_date'?: string;
    /**
     * The payment schedule tax rate the payroll is based on
     * @type {string}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'withholding_pay_period'?: PayrollsCreateOffCyclePayrollRequestWithholdingPayPeriodEnum;
    /**
     * Block regular deductions and contributions for this payroll.
     * @type {boolean}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'skip_regular_deductions'?: boolean;
    /**
     * Enable taxes to be withheld at the IRS\'s required rate of 22% for federal income taxes. State income taxes will be taxed at the state\'s supplemental tax rate. Otherwise, we\'ll sum the entirety of the employee\'s wages and withhold taxes on the entire amount at the rate for regular wages.
     * @type {boolean}
     * @memberof PayrollsCreateOffCyclePayrollRequest
     */
    'fixed_withholding_rate'?: boolean;
}

type PayrollsCreateOffCyclePayrollRequestOffCycleReasonEnum = 'Bonus' | 'Correction' | 'Dismissed employee' | 'Transition from old pay schedule'
type PayrollsCreateOffCyclePayrollRequestWithholdingPayPeriodEnum = 'Every week' | 'Every other week' | 'Twice per month' | 'Monthly' | 'Quarterly' | 'Semiannually' | 'Annually'


