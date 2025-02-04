/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TaxRequirementsUpdateStateTaxesRequestRequirementSetsInnerRequirementsInner } from './tax-requirements-update-state-taxes-request-requirement-sets-inner-requirements-inner';

/**
 * 
 * @export
 * @interface TaxRequirementsUpdateStateTaxesRequestRequirementSetsInner
 */
export interface TaxRequirementsUpdateStateTaxesRequestRequirementSetsInner {
    /**
     * An identifier for a set of requirements. A list of requirement sets can contain multiple sets with the same `key` and different `effective_from` values.
     * @type {string}
     * @memberof TaxRequirementsUpdateStateTaxesRequestRequirementSetsInner
     */
    'key'?: string;
    /**
     * An ISO 8601 formatted date representing the date values became effective. Some requirement sets are effective dated, while others are not. Multiple requirement sets for the same state/key can/will exist with unique effective dates. If a requirement set is has an `effective_from` value, all requirement sets with the same key will also have an `effective_from` value.
     * @type {string}
     * @memberof TaxRequirementsUpdateStateTaxesRequestRequirementSetsInner
     */
    'effective_from'?: string | null;
    /**
     * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
     * @type {string}
     * @memberof TaxRequirementsUpdateStateTaxesRequestRequirementSetsInner
     */
    'state'?: string;
    /**
     * 
     * @type {Array<TaxRequirementsUpdateStateTaxesRequestRequirementSetsInnerRequirementsInner>}
     * @memberof TaxRequirementsUpdateStateTaxesRequestRequirementSetsInner
     */
    'requirements'?: Array<TaxRequirementsUpdateStateTaxesRequestRequirementSetsInnerRequirementsInner>;
}

