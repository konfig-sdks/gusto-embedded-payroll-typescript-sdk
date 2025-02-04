/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExternalPayrollsUpdatePayrollItemsRequestExternalPayrollItemsInner } from './external-payrolls-update-payroll-items-request-external-payroll-items-inner';

/**
 * 
 * @export
 * @interface ExternalPayrollsUpdatePayrollItemsRequest
 */
export interface ExternalPayrollsUpdatePayrollItemsRequest {
    /**
     * Patch update external payroll items when set to true, otherwise it will overwrite the previous changes.
     * @type {boolean}
     * @memberof ExternalPayrollsUpdatePayrollItemsRequest
     */
    'replace_fields'?: boolean;
    /**
     * 
     * @type {Array<ExternalPayrollsUpdatePayrollItemsRequestExternalPayrollItemsInner>}
     * @memberof ExternalPayrollsUpdatePayrollItemsRequest
     */
    'external_payroll_items'?: Array<ExternalPayrollsUpdatePayrollItemsRequestExternalPayrollItemsInner>;
}

