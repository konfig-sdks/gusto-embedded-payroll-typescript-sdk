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
 * @interface BankAccountsCreateVerificationDepositsRequest
 */
export interface BankAccountsCreateVerificationDepositsRequest {
    /**
     * The bank routing number
     * @type {string}
     * @memberof BankAccountsCreateVerificationDepositsRequest
     */
    'routing_number'?: string;
    /**
     * The bank account number
     * @type {string}
     * @memberof BankAccountsCreateVerificationDepositsRequest
     */
    'account_number'?: string;
    /**
     * The bank account type
     * @type {string}
     * @memberof BankAccountsCreateVerificationDepositsRequest
     */
    'account_type'?: BankAccountsCreateVerificationDepositsRequestAccountTypeEnum;
}

type BankAccountsCreateVerificationDepositsRequestAccountTypeEnum = 'Checking' | 'Savings'


