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
 * @interface GeneratedDocument
 */
export interface GeneratedDocument {
    /**
     * A unique identifier of the Generated Document request
     * @type {string}
     * @memberof GeneratedDocument
     */
    'request_uuid'?: string;
    /**
     * Current status of the Generated Document
     * @type {string}
     * @memberof GeneratedDocument
     */
    'status'?: string;
    /**
     * The array of urls to access the documents.
     * @type {Array<string>}
     * @memberof GeneratedDocument
     */
    'document_urls'?: Array<string>;
}

