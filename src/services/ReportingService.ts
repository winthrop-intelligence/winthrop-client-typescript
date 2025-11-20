/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinancialQc } from '../models/FinancialQc';
import type { ReportResult } from '../models/ReportResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReportingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve schools with thier financials qc
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns FinancialQc some schools with thier financials qc report
     * @throws ApiError
     */
    public getSchoolsFinancialsQc(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<FinancialQc> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/financials_qc',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
    /**
     * Retrieve some or all coach contract requests
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns ReportResult Coach contract requests were found
     * @throws ApiError
     */
    public getCoachContractRequests(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/coach_contract_requests',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
    /**
     * Retrieve some or all coach history
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns ReportResult Coach history was found
     * @throws ApiError
     */
    public getCoachHistory(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/coach_history',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
    /**
     * Retrieve some or all conferenceships
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns ReportResult Conferenceships were found
     * @throws ApiError
     */
    public getConferenceships(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/conferenceships',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
    /**
     * Retrieve some or all foia details
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns ReportResult Foia details were found
     * @throws ApiError
     */
    public getFoiaDetails(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/foia_details',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
    /**
     * Retrieve some or all games
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns ReportResult Games were found
     * @throws ApiError
     */
    public getGames(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/games',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
    /**
     * Retrieve some or all client invoices
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns ReportResult Invoices were found
     * @throws ApiError
     */
    public getInvoices(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/invoices',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
    /**
     * Retrieve some or all school contract requests
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns ReportResult School contract requests were found
     * @throws ApiError
     */
    public getSchoolContractRequests(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/school_contract_requests',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
    /**
     * Retrieve subscriptions
     * @param page results page to retrieve.
     * @param q Ransack query
     * @returns ReportResult some subscriptions
     * @throws ApiError
     */
    public getSubscriptions(
        page: number = 1,
        q?: Record<string, any>,
    ): CancelablePromise<ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/subscriptions',
            query: {
                'page': page,
                'q': q,
            },
        });
    }
}
