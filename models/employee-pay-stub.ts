/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The representation of an employee pay stub information.
 * @export
 * @interface EmployeePayStub
 */
export interface EmployeePayStub {
    /**
     * The UUID of the employee pay stub.
     * @type {string}
     * @memberof EmployeePayStub
     */
    'uuid'?: string;
    /**
     * The check date of the pay stub.
     * @type {string}
     * @memberof EmployeePayStub
     */
    'check_date'?: string;
    /**
     * The gross pay amount for the pay stub.
     * @type {string}
     * @memberof EmployeePayStub
     */
    'gross_pay'?: string;
    /**
     * The net pay amount for the pay stub.
     * @type {string}
     * @memberof EmployeePayStub
     */
    'net_pay'?: string;
    /**
     * A unique identifier of the payroll to which the pay stub belongs.
     * @type {string}
     * @memberof EmployeePayStub
     */
    'payroll_uuid'?: string;
    /**
     * The check amount for the pay stub.
     * @type {string}
     * @memberof EmployeePayStub
     */
    'check_amount'?: string;
}

