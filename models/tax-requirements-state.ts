/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TaxRequirementSet } from './tax-requirement-set';

/**
 * 
 * @export
 * @interface TaxRequirementsState
 */
export interface TaxRequirementsState {
    /**
     * 
     * @type {string}
     * @memberof TaxRequirementsState
     */
    'company_uuid'?: string;
    /**
     * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
     * @type {string}
     * @memberof TaxRequirementsState
     */
    'state'?: string;
    /**
     * 
     * @type {Array<TaxRequirementSet>}
     * @memberof TaxRequirementsState
     */
    'requirement_sets'?: Array<TaxRequirementSet>;
}

