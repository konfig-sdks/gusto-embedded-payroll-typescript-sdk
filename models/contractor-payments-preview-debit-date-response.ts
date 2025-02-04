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
 * @interface ContractorPaymentsPreviewDebitDateResponse
 */
export interface ContractorPaymentsPreviewDebitDateResponse {
    /**
     * The calculated debit date. If the payment method is Direct Deposit, the debit date will account for the company\'s ACH speed. If the payment method is Check, the debit date will be the same as the check date.
     * @type {string}
     * @memberof ContractorPaymentsPreviewDebitDateResponse
     */
    'expected_debit_date'?: string;
}

