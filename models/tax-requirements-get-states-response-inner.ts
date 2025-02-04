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
 * @interface TaxRequirementsGetStatesResponseInner
 */
export interface TaxRequirementsGetStatesResponseInner {
    /**
     * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
     * @type {string}
     * @memberof TaxRequirementsGetStatesResponseInner
     */
    'state'?: string;
    /**
     * If all requirements for the state have been satisfied such that the company can complete onboarding, the company is `setup_complete` in the state. A company must be `setup_complete` in all relevant states to complete the `state_setup` company onboarding step.
     * @type {boolean}
     * @memberof TaxRequirementsGetStatesResponseInner
     */
    'setup_complete'?: boolean;
}

