/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CompanyBenefitWithEmployeeBenefitsEmployeeBenefitsInnerContributionValue } from './company-benefit-with-employee-benefits-employee-benefits-inner-contribution-value';

/**
 * An object representing the type and value of the company contribution.
 * @export
 * @interface EmployeeBenefitContribution
 */
export interface EmployeeBenefitContribution {
    /**
     * The company contribution scheme.  \"amount\": The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.  \"percentage\": The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.  \"tiered\": The company contribution varies according to the size of the employee deduction.
     * @type {string}
     * @memberof EmployeeBenefitContribution
     */
    'type'?: string;
    /**
     * 
     * @type {CompanyBenefitWithEmployeeBenefitsEmployeeBenefitsInnerContributionValue}
     * @memberof EmployeeBenefitContribution
     */
    'value'?: CompanyBenefitWithEmployeeBenefitsEmployeeBenefitsInnerContributionValue;
}

