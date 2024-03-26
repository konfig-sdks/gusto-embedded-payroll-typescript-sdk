/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The representation of an unprocessed termination pay period.
 * @export
 * @interface AccruingTimeOffHour
 */
export interface AccruingTimeOffHour {
    /**
     * A unique identifier of the time off policy.
     * @type {string}
     * @memberof AccruingTimeOffHour
     */
    'time_off_policy_uuid'?: string;
    /**
     * Hours accrued during this pay period.
     * @type {string}
     * @memberof AccruingTimeOffHour
     */
    'hours'?: string;
}

