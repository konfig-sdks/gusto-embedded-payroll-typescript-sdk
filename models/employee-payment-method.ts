/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentMethodBankAccount } from './payment-method-bank-account';

/**
 * 
 * @export
 * @interface EmployeePaymentMethod
 */
export interface EmployeePaymentMethod {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof EmployeePaymentMethod
     */
    'version'?: string;
    /**
     * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
     * @type {string}
     * @memberof EmployeePaymentMethod
     */
    'type'?: EmployeePaymentMethodTypeEnum;
    /**
     * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
     * @type {string}
     * @memberof EmployeePaymentMethod
     */
    'split_by'?: EmployeePaymentMethodSplitByEnum;
    /**
     * 
     * @type {Array<PaymentMethodBankAccount>}
     * @memberof EmployeePaymentMethod
     */
    'splits'?: Array<PaymentMethodBankAccount> | null;
}

type EmployeePaymentMethodTypeEnum = 'Direct Deposit' | 'Check'
type EmployeePaymentMethodSplitByEnum = 'Amount' | 'Percentage'


