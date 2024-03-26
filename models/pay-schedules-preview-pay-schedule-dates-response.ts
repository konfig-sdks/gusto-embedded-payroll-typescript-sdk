/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaySchedulesPreviewPayScheduleDatesResponsePayPeriodsInner } from './pay-schedules-preview-pay-schedule-dates-response-pay-periods-inner';

/**
 * Pay schedule preview
 * @export
 * @interface PaySchedulesPreviewPayScheduleDatesResponse
 */
export interface PaySchedulesPreviewPayScheduleDatesResponse {
    /**
     * A list of pay periods for the previewed pay schedule
     * @type {Array<PaySchedulesPreviewPayScheduleDatesResponsePayPeriodsInner>}
     * @memberof PaySchedulesPreviewPayScheduleDatesResponse
     */
    'pay_periods'?: Array<PaySchedulesPreviewPayScheduleDatesResponsePayPeriodsInner>;
    /**
     * A list of dates for bank closures
     * @type {Array<string>}
     * @memberof PaySchedulesPreviewPayScheduleDatesResponse
     */
    'holidays'?: Array<string>;
}

