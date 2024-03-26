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
 * @interface PayrollsGeneratePrintableChecksRequest
 */
export interface PayrollsGeneratePrintableChecksRequest {
    /**
     * The type of check stock being printed. Check this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types
     * @type {string}
     * @memberof PayrollsGeneratePrintableChecksRequest
     */
    'printing_format': string;
    /**
     * The starting check number for the checks being generated
     * @type {number}
     * @memberof PayrollsGeneratePrintableChecksRequest
     */
    'starting_check_number'?: number;
}

