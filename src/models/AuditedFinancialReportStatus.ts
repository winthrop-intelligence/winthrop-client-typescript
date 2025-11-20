/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuditedFinancialReportStatus = {
    id?: number;
    school_id: number;
    year: number;
    /**
     * The status of the audited financial report. Available means the report is in the system. Missing means the report is not in the system. Not Available means the report is not required for the year.
     */
    status?: AuditedFinancialReportStatus.status;
    created_at?: string;
    updated_at?: string;
};
export namespace AuditedFinancialReportStatus {
    /**
     * The status of the audited financial report. Available means the report is in the system. Missing means the report is not in the system. Not Available means the report is not required for the year.
     */
    export enum status {
        AVAILABLE = 'Available',
        MISSING = 'Missing',
        NOT_AVAILABLE = 'Not Available',
    }
}

