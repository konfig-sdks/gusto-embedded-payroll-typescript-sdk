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
 * @interface InvoiceDataActiveCompaniesInner
 */
export interface InvoiceDataActiveCompaniesInner {
    /**
     * unique identifier for the company associated with the invoice data
     * @type {string}
     * @memberof InvoiceDataActiveCompaniesInner
     */
    'company_uuid'?: string;
    /**
     * The number of active employees the company was or will be invoiced for that invoice period. Active employees are calculated as the count of onboarded employees hired before the end of the invoice period and not terminated before the start of the invoice period.
     * @type {number}
     * @memberof InvoiceDataActiveCompaniesInner
     */
    'active_employees'?: number;
    /**
     * The number of active contractors the company was or will be invoiced for that invoice period. Active contractors are calculated as any contractor with an active contractor payment during the invoice period.
     * @type {number}
     * @memberof InvoiceDataActiveCompaniesInner
     */
    'active_contractors'?: number;
    /**
     * The first invoice period for the company. This will either be the invoice period of the first invoice-able event (first payroll or contractor payment) or the date they migrated to embedded, whichever is later.
     * @type {string}
     * @memberof InvoiceDataActiveCompaniesInner
     */
    'initial_invoice_period'?: string;
}

