/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CompanyAddress } from './company-address';
import { CompanyCompensations } from './company-compensations';
import { CompanyPrimaryPayrollAdmin } from './company-primary-payroll-admin';
import { CompanyPrimarySignatory } from './company-primary-signatory';

/**
 * The representation of a company in Gusto.
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * The Federal Employer Identification Number of the company.
     * @type {string}
     * @memberof Company
     */
    'ein'?: string;
    /**
     * The tax payer type of the company.
     * @type {string}
     * @memberof Company
     */
    'entity_type'?: CompanyEntityTypeEnum;
    /**
     * The Gusto product tier of the company (not applicable to Embedded partner managed companies).
     * @type {string}
     * @memberof Company
     */
    'tier'?: CompanyTierEnum;
    /**
     * Whether or not the company is suspended in Gusto. Suspended companies may not run payroll.
     * @type {boolean}
     * @memberof Company
     */
    'is_suspended'?: boolean;
    /**
     * The status of the company in Gusto. \"Approved\" companies may run payroll with Gusto. \"Not Approved\" companies may not yet run payroll with Gusto. In order to run payroll, the company may need to complete onboarding or contact support. \"Suspended\" companies may not run payroll with Gusto. In order to unsuspend their account, the company must contact support.
     * @type {string}
     * @memberof Company
     */
    'company_status'?: CompanyCompanyStatusEnum;
    /**
     * A unique identifier of the company in Gusto.
     * @type {string}
     * @memberof Company
     */
    'uuid'?: string;
    /**
     * The name of the company.
     * @type {string}
     * @memberof Company
     */
    'name'?: string;
    /**
     * The trade name of the company.
     * @type {string}
     * @memberof Company
     */
    'trade_name'?: string;
    /**
     * Whether the company is fully managed by a partner via the API
     * @type {boolean}
     * @memberof Company
     */
    'is_partner_managed'?: boolean;
    /**
     * The pay schedule assignment type.
     * @type {string}
     * @memberof Company
     */
    'pay_schedule_type'?: CompanyPayScheduleTypeEnum;
    /**
     * Company\'s first invoiceable event date
     * @type {string}
     * @memberof Company
     */
    'join_date'?: string;
    /**
     * Company\'s default funding type
     * @type {string}
     * @memberof Company
     */
    'funding_type'?: CompanyFundingTypeEnum;
    /**
     * The locations of the company.
     * @type {Array<CompanyAddress>}
     * @memberof Company
     */
    'locations'?: Array<CompanyAddress>;
    /**
     * 
     * @type {CompanyCompensations}
     * @memberof Company
     */
    'compensations'?: CompanyCompensations;
    /**
     * 
     * @type {CompanyPrimarySignatory}
     * @memberof Company
     */
    'primary_signatory'?: CompanyPrimarySignatory;
    /**
     * 
     * @type {CompanyPrimaryPayrollAdmin}
     * @memberof Company
     */
    'primary_payroll_admin'?: CompanyPrimaryPayrollAdmin;
}

type CompanyEntityTypeEnum = 'C-Corporation' | 'S-Corporation' | 'Sole proprietor' | 'LLC' | 'LLP' | 'Limited partnership' | 'Co-ownership' | 'Association' | 'Trusteeship' | 'General partnership' | 'Joint venture' | 'Non-Profit'
type CompanyTierEnum = 'simple' | 'plus' | 'premium' | 'core' | 'complete' | 'concierge' | 'contractor_only' | 'basic'
type CompanyCompanyStatusEnum = 'Approved' | 'Not Approved' | 'Suspended'
type CompanyPayScheduleTypeEnum = 'single' | 'hourly_salaried' | 'by_employee' | 'by_department'
type CompanyFundingTypeEnum = 'ach' | 'reverse_wire' | 'wire_in' | 'brex'


