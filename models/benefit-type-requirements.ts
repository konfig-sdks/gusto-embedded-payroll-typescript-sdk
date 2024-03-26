/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BenefitTypeRequirementsEmployeeDeduction } from './benefit-type-requirements-employee-deduction';

/**
 * 
 * @export
 * @interface BenefitTypeRequirements
 */
export interface BenefitTypeRequirements {
    /**
     * 
     * @type {BenefitTypeRequirementsEmployeeDeduction}
     * @memberof BenefitTypeRequirements
     */
    'employee_deduction'?: BenefitTypeRequirementsEmployeeDeduction;
    /**
     * 
     * @type {BenefitTypeRequirementsEmployeeDeduction}
     * @memberof BenefitTypeRequirements
     */
    'contribution'?: BenefitTypeRequirementsEmployeeDeduction;
    /**
     * 
     * @type {BenefitTypeRequirementsEmployeeDeduction}
     * @memberof BenefitTypeRequirements
     */
    'deduct_as_percentage'?: BenefitTypeRequirementsEmployeeDeduction;
    /**
     * 
     * @type {BenefitTypeRequirementsEmployeeDeduction}
     * @memberof BenefitTypeRequirements
     */
    'catch_up'?: BenefitTypeRequirementsEmployeeDeduction;
    /**
     * 
     * @type {BenefitTypeRequirementsEmployeeDeduction}
     * @memberof BenefitTypeRequirements
     */
    'limit_option'?: BenefitTypeRequirementsEmployeeDeduction;
    /**
     * 
     * @type {BenefitTypeRequirementsEmployeeDeduction}
     * @memberof BenefitTypeRequirements
     */
    'company_contribution_annual_maximum'?: BenefitTypeRequirementsEmployeeDeduction;
    /**
     * 
     * @type {BenefitTypeRequirementsEmployeeDeduction}
     * @memberof BenefitTypeRequirements
     */
    'coverage_salary_multiplier'?: BenefitTypeRequirementsEmployeeDeduction;
    /**
     * 
     * @type {BenefitTypeRequirementsEmployeeDeduction}
     * @memberof BenefitTypeRequirements
     */
    'coverage_amount'?: BenefitTypeRequirementsEmployeeDeduction;
}

