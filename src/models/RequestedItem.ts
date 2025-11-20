/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RequestedItem = {
    id?: number;
    foia_request_id: number;
    requestable_id: number;
    requestable_type: RequestedItem.requestable_type;
    received?: boolean;
    created_at?: string;
    updated_at?: string;
    coach_id?: number;
    status?: RequestedItem.status;
};
export namespace RequestedItem {
    export enum requestable_type {
        DEAL_STATUS = 'DealStatus',
        GAME = 'Game',
        COMPENSATION = 'Compensation',
        INCOME_REPORT = 'IncomeReport',
        NCAA_FINANCIAL_REPORT_STATUS = 'NcaaFinancialReportStatus',
        AUDITED_FINANCIAL_REPORT_STATUS = 'AuditedFinancialReportStatus',
    }
    export enum status {
        PENDING = 'pending',
        NOT_AVAILABLE = 'not_available',
        RECEIVED = 'received',
    }
}

