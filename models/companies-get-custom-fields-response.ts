/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CompanyCustomField } from './company-custom-field';

/**
 * 
 * @export
 * @interface CompaniesGetCustomFieldsResponse
 */
export interface CompaniesGetCustomFieldsResponse {
    /**
     * 
     * @type {Array<CompanyCustomField>}
     * @memberof CompaniesGetCustomFieldsResponse
     */
    'custom_fields'?: Array<CompanyCustomField>;
}

