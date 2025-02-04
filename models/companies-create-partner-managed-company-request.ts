/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CompaniesCreatePartnerManagedCompanyRequestCompany } from './companies-create-partner-managed-company-request-company';
import { CompaniesCreatePartnerManagedCompanyRequestUser } from './companies-create-partner-managed-company-request-user';

/**
 * 
 * @export
 * @interface CompaniesCreatePartnerManagedCompanyRequest
 */
export interface CompaniesCreatePartnerManagedCompanyRequest {
    /**
     * 
     * @type {CompaniesCreatePartnerManagedCompanyRequestUser}
     * @memberof CompaniesCreatePartnerManagedCompanyRequest
     */
    'user': CompaniesCreatePartnerManagedCompanyRequestUser;
    /**
     * 
     * @type {CompaniesCreatePartnerManagedCompanyRequestCompany}
     * @memberof CompaniesCreatePartnerManagedCompanyRequest
     */
    'company': CompaniesCreatePartnerManagedCompanyRequestCompany;
}

