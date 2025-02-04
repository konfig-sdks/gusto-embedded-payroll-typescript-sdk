/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContractorPaymentSummaryByDatesContractorPaymentsInner } from './contractor-payment-summary-by-dates-contractor-payments-inner';
import { ContractorPaymentSummaryByDatesTotal } from './contractor-payment-summary-by-dates-total';

/**
 * The representation of the summary of contractor payments for a given company in a given time period.
 * @export
 * @interface ContractorPaymentSummaryByDates
 */
export interface ContractorPaymentSummaryByDates {
    /**
     * 
     * @type {ContractorPaymentSummaryByDatesTotal}
     * @memberof ContractorPaymentSummaryByDates
     */
    'total'?: ContractorPaymentSummaryByDatesTotal;
    /**
     * The individual contractor payments, within a given time period, grouped by check date.
     * @type {Array<ContractorPaymentSummaryByDatesContractorPaymentsInner>}
     * @memberof ContractorPaymentSummaryByDates
     */
    'contractor_payments'?: Array<ContractorPaymentSummaryByDatesContractorPaymentsInner>;
}

