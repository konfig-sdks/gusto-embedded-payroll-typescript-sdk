/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerFixedCompensationsInner } from './payrolls-update-payroll-by-id-request-employee-compensations-inner-fixed-compensations-inner';
import { PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerHourlyCompensationsInner } from './payrolls-update-payroll-by-id-request-employee-compensations-inner-hourly-compensations-inner';
import { PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerPaidTimeOffInner } from './payrolls-update-payroll-by-id-request-employee-compensations-inner-paid-time-off-inner';

/**
 * 
 * @export
 * @interface PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
 */
export interface PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner {
    /**
     * The current version of this employee compensation from the prepared payroll. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
     */
    'version'?: string;
    /**
     * The UUID of the employee.
     * @type {string}
     * @memberof PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
     */
    'employee_uuid'?: string;
    /**
     * This employee will be excluded from payroll calculation and will not be paid for the payroll.
     * @type {boolean}
     * @memberof PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
     */
    'excluded'?: boolean;
    /**
     * The employee\'s compensation payment method. Invalid values will be ignored.
     * @type {string}
     * @memberof PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
     */
    'payment_method'?: PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerPaymentMethodEnum;
    /**
     * Custom text that will be printed as a personal note to the employee on a paystub.
     * @type {string}
     * @memberof PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
     */
    'memo'?: string;
    /**
     * 
     * @type {Array<PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerFixedCompensationsInner>}
     * @memberof PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
     */
    'fixed_compensations'?: Array<PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerFixedCompensationsInner>;
    /**
     * 
     * @type {Array<PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerHourlyCompensationsInner>}
     * @memberof PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
     */
    'hourly_compensations'?: Array<PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerHourlyCompensationsInner>;
    /**
     * An array of all paid time off the employee is eligible for this pay period. Each paid time off object can be the name or the specific policy_uuid.
     * @type {Array<PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerPaidTimeOffInner>}
     * @memberof PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInner
     */
    'paid_time_off'?: Array<PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerPaidTimeOffInner>;
}

type PayrollsUpdatePayrollByIdRequestEmployeeCompensationsInnerPaymentMethodEnum = 'Direct Deposit' | 'Check'


