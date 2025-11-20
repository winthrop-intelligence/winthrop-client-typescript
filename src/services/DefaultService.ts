/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Administrator } from '../models/Administrator';
import type { AuditedFinancialReportStatus } from '../models/AuditedFinancialReportStatus';
import type { AverageCompensation } from '../models/AverageCompensation';
import type { Coach } from '../models/Coach';
import type { CoachCompensation } from '../models/CoachCompensation';
import type { COLIAdjusted } from '../models/COLIAdjusted';
import type { Compensation } from '../models/Compensation';
import type { Conference } from '../models/Conference';
import type { Conferenceship } from '../models/Conferenceship';
import type { Contact } from '../models/Contact';
import type { Contract } from '../models/Contract';
import type { Deal } from '../models/Deal';
import type { DealStatus } from '../models/DealStatus';
import type { Division } from '../models/Division';
import type { Filters } from '../models/Filters';
import type { FoiaLabel } from '../models/FoiaLabel';
import type { FoiaRequest } from '../models/FoiaRequest';
import type { Game } from '../models/Game';
import type { IncomeReport } from '../models/IncomeReport';
import type { Meta } from '../models/Meta';
import type { NcaaFinancialReportStatus } from '../models/NcaaFinancialReportStatus';
import type { Position } from '../models/Position';
import type { RawContract } from '../models/RawContract';
import type { RequestedItem } from '../models/RequestedItem';
import type { School } from '../models/School';
import type { Season } from '../models/Season';
import type { Sport } from '../models/Sport';
import type { Subdivision } from '../models/Subdivision';
import type { Subscription } from '../models/Subscription';
import type { SystemSetting } from '../models/SystemSetting';
import type { User } from '../models/User';
import type { Vendor } from '../models/Vendor';
import type { WireChange } from '../models/WireChange';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve some or all administrators
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Administrators were found
     * @throws ApiError
     */
    public getAdministrators(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Administrator>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/administrators',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single administrator
     * @param administratorId ID of administrator to retrieve
     * @returns Administrator Administrator was found
     * @throws ApiError
     */
    public getAdministrator(
        administratorId: number,
    ): CancelablePromise<Administrator> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/administrators/{administratorId}',
            path: {
                'administratorId': administratorId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all audited financial report statuses
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Audited financial report statuses were found
     * @throws ApiError
     */
    public getAuditedFinancialReportStatuses(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<AuditedFinancialReportStatus>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/audited_financial_report_statuses',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single audited financial report status
     * @param auditedFinancialReportStatusId ID of audited financial report status to retrieve
     * @returns AuditedFinancialReportStatus Audited financial report status was found
     * @throws ApiError
     */
    public getAuditedFinancialReportStatus(
        auditedFinancialReportStatusId: number,
    ): CancelablePromise<AuditedFinancialReportStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/audited_financial_report_statuses/{auditedFinancialReportStatusId}',
            path: {
                'auditedFinancialReportStatusId': auditedFinancialReportStatusId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach
     * @param coachesIds IDs of the coaches
     * @param userSchoolId ID of the school whose cost-of-living index should be used
     * @returns CoachCompensation Coach compensation calculated successfully
     * @throws ApiError
     */
    public getCoachCompensation(
        coachesIds: Array<number>,
        userSchoolId: number,
    ): CancelablePromise<CoachCompensation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coach_compensations/get_coach_compensation',
            query: {
                'coaches_ids': coachesIds,
                'user_school_id': userSchoolId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Coach or school not found`,
                422: `Missing or invalid parameters`,
            },
        });
    }
    /**
     * Retrieve some or all coaches
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Coaches were found
     * @throws ApiError
     */
    public getCoaches(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Coach>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coaches',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Search Coaches by priority_ids
     * @param requestBody
     * @returns any Coaches were found
     * @throws ApiError
     */
    public searchCoaches(
        requestBody?: Filters,
    ): CancelablePromise<{
        data?: Array<Coach>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/coaches/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single coach
     * @param coachId ID of coach to retrieve
     * @returns Coach Coach was found
     * @throws ApiError
     */
    public getCoach(
        coachId: number,
    ): CancelablePromise<Coach> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coaches/{coachId}',
            path: {
                'coachId': coachId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a coach
     * @param coachId ID of coach to update
     * @param requestBody Attributes to update. Currently only supports email, phone, bio, bio_text. Others will be ignored.
     * @returns Coach Coach was updated
     * @throws ApiError
     */
    public updateCoach(
        coachId: number,
        requestBody: Coach,
    ): CancelablePromise<Coach> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/coaches/{coachId}',
            path: {
                'coachId': coachId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve similar coaches based on coach ID
     * @param coachId ID of coach to retrieve
     * @param q Ransack query
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @returns any Coaches were found
     * @throws ApiError
     */
    public getSimilarCoaches(
        coachId: number,
        q?: Record<string, any>,
        page: number = 1,
        perPage: number = 20,
    ): CancelablePromise<{
        data?: Array<Coach>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coaches/{coachId}/similar_coaches',
            path: {
                'coachId': coachId,
            },
            query: {
                'q': q,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve some or all compensations
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Compensations were found
     * @throws ApiError
     */
    public getCompensations(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Compensation>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/compensations',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve average compensation for a conference
     * @param conferenceId ID of the conference
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     * @returns AverageCompensation Average compensation calculated
     * @throws ApiError
     */
    public averageConferenceComp(
        conferenceId: number,
        seasonYears: Array<number>,
        sportIds: Array<number>,
        positionTypeIds: Array<number>,
    ): CancelablePromise<AverageCompensation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/compensations/average_conference_comp',
            query: {
                'conference_id': conferenceId,
                'season_years': seasonYears,
                'sport_ids': sportIds,
                'position_type_ids': positionTypeIds,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve average compensation for a division
     * @param divisionId ID of the division
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     * @returns AverageCompensation Average compensation calculated
     * @throws ApiError
     */
    public averageDivisionComp(
        divisionId: number,
        seasonYears: Array<number>,
        sportIds: Array<number>,
        positionTypeIds: Array<number>,
    ): CancelablePromise<AverageCompensation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/compensations/average_division_comp',
            query: {
                'division_id': divisionId,
                'season_years': seasonYears,
                'sport_ids': sportIds,
                'position_type_ids': positionTypeIds,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve average compensation for a school
     * @param schoolId ID of the school
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     * @returns AverageCompensation Average compensation calculated
     * @throws ApiError
     */
    public averageSchoolComp(
        schoolId: number,
        seasonYears: Array<number>,
        sportIds: Array<number>,
        positionTypeIds: Array<number>,
    ): CancelablePromise<AverageCompensation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/compensations/average_school_comp',
            query: {
                'school_id': schoolId,
                'season_years': seasonYears,
                'sport_ids': sportIds,
                'position_type_ids': positionTypeIds,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve average compensation for a subdivision
     * @param subdivisionId ID of the subdivision
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     * @returns AverageCompensation Average compensation calculated
     * @throws ApiError
     */
    public averageSubdivisionComp(
        subdivisionId: number,
        seasonYears: Array<number>,
        sportIds: Array<number>,
        positionTypeIds: Array<number>,
    ): CancelablePromise<AverageCompensation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/compensations/average_subdivision_comp',
            query: {
                'subdivision_id': subdivisionId,
                'season_years': seasonYears,
                'sport_ids': sportIds,
                'position_type_ids': positionTypeIds,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve a single compensation
     * @param compensationId ID of compensation to retrieve
     * @returns Compensation Compensation was found
     * @throws ApiError
     */
    public getCompensation(
        compensationId: number,
    ): CancelablePromise<Compensation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/compensations/{compensationId}',
            path: {
                'compensationId': compensationId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a compensation
     * @param compensationId ID of compensation to update
     * @param requestBody Compensation to update
     * @returns Compensation Compensation was updated
     * @throws ApiError
     */
    public updateCompensation(
        compensationId: number,
        requestBody: Compensation,
    ): CancelablePromise<Compensation> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/compensations/{compensationId}',
            path: {
                'compensationId': compensationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all conferences
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Conferences were found
     * @throws ApiError
     */
    public getConferences(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Conference>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/conferences',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create a new Conference
     * @param requestBody
     * @returns Conference Conference was created
     * @throws ApiError
     */
    public createConference(
        requestBody?: Conference,
    ): CancelablePromise<Conference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unable to create the Conference`,
            },
        });
    }
    /**
     * Retrieve a single Conference
     * @param conferenceId ID of the Conference
     * @returns Conference Conference was found
     * @throws ApiError
     */
    public getConference(
        conferenceId: number,
    ): CancelablePromise<Conference> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/conferences/{conferenceId}',
            path: {
                'conferenceId': conferenceId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a single Conference
     * @param conferenceId ID of the Conference
     * @param requestBody Conference attributes to update
     * @returns Conference Conference was updated
     * @throws ApiError
     */
    public updateConference(
        conferenceId: number,
        requestBody: Conference,
    ): CancelablePromise<Conference> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/conferences/{conferenceId}',
            path: {
                'conferenceId': conferenceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                422: `Unable to update the Conference`,
            },
        });
    }
    /**
     * Delete a single Conference
     * @param conferenceId ID of the Conference
     * @returns void
     * @throws ApiError
     */
    public deleteConference(
        conferenceId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/conferences/{conferenceId}',
            path: {
                'conferenceId': conferenceId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all conferenceships
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Conferenceships were found
     * @throws ApiError
     */
    public getConferenceships(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Conferenceship>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/conferenceships',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create a new Conferenceship
     * @param requestBody
     * @returns Conferenceship Conferenceship was created
     * @throws ApiError
     */
    public createConferenceship(
        requestBody?: Conferenceship,
    ): CancelablePromise<Conferenceship> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferenceships',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unable to create the Conferenceship`,
            },
        });
    }
    /**
     * Retrieve a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     * @returns Conferenceship Conferenceship was found
     * @throws ApiError
     */
    public getConferenceship(
        conferenceshipId: number,
    ): CancelablePromise<Conferenceship> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/conferenceships/{conferenceshipId}',
            path: {
                'conferenceshipId': conferenceshipId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     * @param requestBody Conferenceship attributes to update
     * @returns Conferenceship Conferenceship was updated
     * @throws ApiError
     */
    public updateConferenceship(
        conferenceshipId: number,
        requestBody: Conferenceship,
    ): CancelablePromise<Conferenceship> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/conferenceships/{conferenceshipId}',
            path: {
                'conferenceshipId': conferenceshipId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                422: `Unable to update the Conferenceship`,
            },
        });
    }
    /**
     * Delete a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     * @returns void
     * @throws ApiError
     */
    public deleteConferenceship(
        conferenceshipId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/conferenceships/{conferenceshipId}',
            path: {
                'conferenceshipId': conferenceshipId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all contacts
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Contacts were found
     * @throws ApiError
     */
    public getContacts(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Contact>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single contact
     * @param contactId ID of contact to retrieve
     * @returns Contact Contact was found
     * @throws ApiError
     */
    public getContact(
        contactId: number,
    ): CancelablePromise<Contact> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{contactId}',
            path: {
                'contactId': contactId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all contracts
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Contracts were found
     * @throws ApiError
     */
    public getContracts(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Contract>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contracts',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single contract
     * @param contractId ID of contract to retrieve
     * @returns Contract Contract was found
     * @throws ApiError
     */
    public getContract(
        contractId: number,
    ): CancelablePromise<Contract> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contracts/{contractId}',
            path: {
                'contractId': contractId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all deal statuses
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Deal statuses were found
     * @throws ApiError
     */
    public getDealStatuses(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<DealStatus>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deal_statuses',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single deal status
     * @param dealStatusId ID of deal status to retrieve
     * @returns DealStatus Deal status was found
     * @throws ApiError
     */
    public getDealStatus(
        dealStatusId: number,
    ): CancelablePromise<DealStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deal_statuses/{dealStatusId}',
            path: {
                'dealStatusId': dealStatusId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all deals
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Deals were found
     * @throws ApiError
     */
    public getDeals(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Deal>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deals',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve a single Deal
     * @param dealId ID of the Deal
     * @returns Deal Deal was found
     * @throws ApiError
     */
    public getDeal(
        dealId: number,
    ): CancelablePromise<Deal> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deals/{dealId}',
            path: {
                'dealId': dealId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all divisions
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Divisions were found
     * @throws ApiError
     */
    public getDivisions(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Division>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/divisions',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve a single Division
     * @param divisionId ID of the Division
     * @returns Division Division was found
     * @throws ApiError
     */
    public getDivision(
        divisionId: number,
    ): CancelablePromise<Division> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/divisions/{divisionId}',
            path: {
                'divisionId': divisionId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all foia labels
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Foia labels were found
     * @throws ApiError
     */
    public getFoiaLabels(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<FoiaLabel>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/foia_labels',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a new foia label
     * @param requestBody Foia label to create
     * @returns FoiaLabel Foia label was created
     * @throws ApiError
     */
    public createFoiaLabel(
        requestBody: FoiaLabel,
    ): CancelablePromise<FoiaLabel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/foia_labels',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unable to create foia label`,
            },
        });
    }
    /**
     * Retrieve a single foia label
     * @param foiaLabelId ID of foia label to retrieve
     * @returns FoiaLabel Foia label was found
     * @throws ApiError
     */
    public getFoiaLabel(
        foiaLabelId: number,
    ): CancelablePromise<FoiaLabel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/foia_labels/{foiaLabelId}',
            path: {
                'foiaLabelId': foiaLabelId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a single foia label
     * @param foiaLabelId ID of foia label to update
     * @param requestBody Foia label to update
     * @returns FoiaLabel Foia label was updated
     * @throws ApiError
     */
    public updateFoiaLabel(
        foiaLabelId: number,
        requestBody: FoiaLabel,
    ): CancelablePromise<FoiaLabel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/foia_labels/{foiaLabelId}',
            path: {
                'foiaLabelId': foiaLabelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete a single foia label
     * @param foiaLabelId ID of foia label to delete
     * @returns void
     * @throws ApiError
     */
    public deleteFoiaLabel(
        foiaLabelId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/foia_labels/{foiaLabelId}',
            path: {
                'foiaLabelId': foiaLabelId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all foia requests
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Foia requests were found
     * @throws ApiError
     */
    public getFoiaRequests(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<FoiaRequest>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/foia_requests',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a new foia request
     * @param requestBody Foia request to create
     * @returns FoiaRequest Foia request was created
     * @throws ApiError
     */
    public createFoiaRequest(
        requestBody: FoiaRequest,
    ): CancelablePromise<FoiaRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/foia_requests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unable to create foia request`,
            },
        });
    }
    /**
     * Retrieve a single foia request
     * @param foiaRequestId ID of foia request to retrieve
     * @returns FoiaRequest Foia request was found
     * @throws ApiError
     */
    public getFoiaRequest(
        foiaRequestId: number,
    ): CancelablePromise<FoiaRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/foia_requests/{foiaRequestId}',
            path: {
                'foiaRequestId': foiaRequestId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a single foia request
     * @param foiaRequestId ID of foia request to update
     * @param requestBody Foia request to update
     * @returns FoiaRequest Foia request was updated
     * @throws ApiError
     */
    public updateFoiaRequest(
        foiaRequestId: number,
        requestBody: FoiaRequest,
    ): CancelablePromise<FoiaRequest> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/foia_requests/{foiaRequestId}',
            path: {
                'foiaRequestId': foiaRequestId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete a single foia request
     * @param foiaRequestId ID of foia request to delete
     * @returns void
     * @throws ApiError
     */
    public deleteFoiaRequest(
        foiaRequestId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/foia_requests/{foiaRequestId}',
            path: {
                'foiaRequestId': foiaRequestId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all games
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Games were found
     * @throws ApiError
     */
    public getGames(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Game>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/games',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single game
     * @param gameId ID of game to retrieve
     * @returns Game Game was found
     * @throws ApiError
     */
    public getGame(
        gameId: number,
    ): CancelablePromise<Game> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/games/{gameId}',
            path: {
                'gameId': gameId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all income reports
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Income reports were found
     * @throws ApiError
     */
    public getIncomeReports(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<IncomeReport>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/income_reports',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single income report
     * @param incomeReportId ID of income report to retrieve
     * @returns IncomeReport Income report was found
     * @throws ApiError
     */
    public getIncomeReport(
        incomeReportId: number,
    ): CancelablePromise<IncomeReport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/income_reports/{incomeReportId}',
            path: {
                'incomeReportId': incomeReportId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all ncaa financial report statuses
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Ncaa financial report statuses were found
     * @throws ApiError
     */
    public getNcaaFinancialReportStatuses(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<NcaaFinancialReportStatus>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ncaa_financial_report_statuses',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single ncaa financial report status
     * @param ncaaFinancialReportStatusId ID of ncaa financial report status to retrieve
     * @returns NcaaFinancialReportStatus Ncaa financial report status was found
     * @throws ApiError
     */
    public getNcaaFinancialReportStatus(
        ncaaFinancialReportStatusId: number,
    ): CancelablePromise<NcaaFinancialReportStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ncaa_financial_report_statuses/{ncaaFinancialReportStatusId}',
            path: {
                'ncaaFinancialReportStatusId': ncaaFinancialReportStatusId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all positions
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Positions were found
     * @throws ApiError
     */
    public getPositions(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Position>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/positions',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single position
     * @param positionId ID of position to retrieve
     * @returns Position Position was found
     * @throws ApiError
     */
    public getPosition(
        positionId: number,
    ): CancelablePromise<Position> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/positions/{positionId}',
            path: {
                'positionId': positionId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all raw_contracts
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Raw Contracts were found
     * @throws ApiError
     */
    public getRawContracts(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<RawContract>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/raw_contracts',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve a single RawContract
     * @param rawContractId ID of the RawContract
     * @returns RawContract Raw Contract was found
     * @throws ApiError
     */
    public getRawContract(
        rawContractId: number,
    ): CancelablePromise<RawContract> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/raw_contracts/{raw_contractId}',
            path: {
                'raw_contractId': rawContractId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all requested items
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Requested items were found
     * @throws ApiError
     */
    public getRequestedItems(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<RequestedItem>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requested_items',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a new requested item
     * @param requestBody Requested item to create
     * @returns RequestedItem Requested item was created
     * @throws ApiError
     */
    public createRequestedItem(
        requestBody: RequestedItem,
    ): CancelablePromise<RequestedItem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/requested_items',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unable to create requested item`,
            },
        });
    }
    /**
     * Retrieve a single requested item
     * @param requestedItemId ID of requested item to retrieve
     * @returns RequestedItem Requested item was found
     * @throws ApiError
     */
    public getRequestedItem(
        requestedItemId: number,
    ): CancelablePromise<RequestedItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requested_items/{requestedItemId}',
            path: {
                'requestedItemId': requestedItemId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a single requested item
     * @param requestedItemId ID of requested item to update
     * @param requestBody Requested item to update
     * @returns RequestedItem Requested item was updated
     * @throws ApiError
     */
    public updateRequestedItem(
        requestedItemId: number,
        requestBody: RequestedItem,
    ): CancelablePromise<RequestedItem> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/requested_items/{requestedItemId}',
            path: {
                'requestedItemId': requestedItemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete a single requested item
     * @param requestedItemId ID of requested item to delete
     * @returns void
     * @throws ApiError
     */
    public deleteRequestedItem(
        requestedItemId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/requested_items/{requestedItemId}',
            path: {
                'requestedItemId': requestedItemId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all schools
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Schools were found
     * @throws ApiError
     */
    public getSchools(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<School>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/schools',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve alternate names for a specific school
     * @param schoolId ID of school to retrieve alternate names for
     * @returns any Alternate names were found
     * @throws ApiError
     */
    public getSchoolAlternateNames(
        schoolId: number,
    ): CancelablePromise<{
        data?: Array<string>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/schools/{schoolId}/alternate_names',
            path: {
                'schoolId': schoolId,
            },
            errors: {
                401: `Unauthorized`,
                404: `School not found`,
            },
        });
    }
    /**
     * Retrieve the COLI-adjusted compensation
     * @param schoolId ID of the School
     * @param otherPersonSchoolId ID of the other person School
     * @param otherPersonTotalCompensation Other person total compensation amount
     * @returns COLIAdjusted COLI-adjusted compensation found
     * @throws ApiError
     */
    public compareColi(
        schoolId: number,
        otherPersonSchoolId: number,
        otherPersonTotalCompensation: number,
    ): CancelablePromise<COLIAdjusted> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/schools/compare_coli',
            query: {
                'school_id': schoolId,
                'other_person_school_id': otherPersonSchoolId,
                'other_person_total_compensation': otherPersonTotalCompensation,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                422: `Unprocessable Entity`,
            },
        });
    }
    /**
     * Retrieve a single school
     * @param schoolId ID of school to retrieve
     * @returns School School was found
     * @throws ApiError
     */
    public getSchool(
        schoolId: number,
    ): CancelablePromise<School> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/schools/{schoolId}',
            path: {
                'schoolId': schoolId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all seasons
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Seasons were found
     * @throws ApiError
     */
    public getSeasons(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Season>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/seasons',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single season
     * @param seasonId ID of season to retrieve
     * @returns Season Season was found
     * @throws ApiError
     */
    public getSeason(
        seasonId: number,
    ): CancelablePromise<Season> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/seasons/{seasonId}',
            path: {
                'seasonId': seasonId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all sports
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Sports were found
     * @throws ApiError
     */
    public getSports(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Sport>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sports',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single sport
     * @param sportId ID of sport to retrieve
     * @returns Sport Sport was found
     * @throws ApiError
     */
    public getSport(
        sportId: number,
    ): CancelablePromise<Sport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sports/{sportId}',
            path: {
                'sportId': sportId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all subdivisions
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Subdivisions were found
     * @throws ApiError
     */
    public getSubdivisions(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Subdivision>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subdivisions',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve a single Subdivision
     * @param subdivisionId ID of the Subdivision
     * @returns Subdivision Subdivision was found
     * @throws ApiError
     */
    public getSubdivision(
        subdivisionId: number,
    ): CancelablePromise<Subdivision> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subdivisions/{subdivisionId}',
            path: {
                'subdivisionId': subdivisionId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve the all subscriptions
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Subscriptions were found
     * @throws ApiError
     */
    public getSubscriptions(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Subscription>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subscriptions',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single Subscription
     * @param subscriptionId ID of the Subscription
     * @returns Subscription Subscription was found
     * @throws ApiError
     */
    public getSubscription(
        subscriptionId: number,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve the current system settings
     * @returns SystemSetting System settings were found
     * @throws ApiError
     */
    public getSystemSettings(): CancelablePromise<SystemSetting> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/system_setting',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve some or all users
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Users were found
     * @throws ApiError
     */
    public getUsers(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<User>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single user
     * @returns User User was found
     * @throws ApiError
     */
    public userMe(): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Verifies whether the user has intercollegiate access based on their email.
     * @param userEmail The email of the user whose intercollegiate access is being verified.
     * @returns any Successful response with the access granted status
     * @throws ApiError
     */
    public verifyUserIntercollegiateAccess(
        userEmail: string,
    ): CancelablePromise<{
        /**
         * Indicates whether the user has intercollegiate access
         */
        access_granted?: boolean;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/verify_user_intercollegiate_access',
            query: {
                'user_email': userEmail,
            },
            errors: {
                401: `Unauthorized`,
                404: `User Not Found`,
            },
        });
    }
    /**
     * Retrieve a single user
     * @param userId ID of user to retrieve
     * @returns User User was found
     * @throws ApiError
     */
    public getUser(
        userId: number,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve some or all vendors
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @returns any Vendors were found
     * @throws ApiError
     */
    public getVendors(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
    ): CancelablePromise<{
        data?: Array<Vendor>;
        meta?: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/vendors',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Retrieve a single Vendor
     * @param vendorId ID of the Vendor
     * @returns Vendor Vendor was found
     * @throws ApiError
     */
    public getVendor(
        vendorId: number,
    ): CancelablePromise<Vendor> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/vendors/{vendorId}',
            path: {
                'vendorId': vendorId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns WireChange records. Supports Ransack-style filters (`q[...]`). Includes related position_types and sports arrays in each object. Each item also includes coach avatar (if present) and school logo images.
     * @param page results page to retrieve.
     * @param perPage number of results per page.
     * @param q Ransack query
     * @param qCoachIdEq Filter by coach ID
     * @param qSchoolIdEq Filter by school ID
     * @param qSportIdEq Filter by sport ID
     * @returns any Wire changes found
     * @throws ApiError
     */
    public getWireChanges(
        page: number = 1,
        perPage: number = 20,
        q?: Record<string, any>,
        qCoachIdEq?: number,
        qSchoolIdEq?: number,
        qSportIdEq?: number,
    ): CancelablePromise<{
        meta?: Meta;
        wire_changes?: Array<WireChange>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wire_changes',
            query: {
                'page': page,
                'per_page': perPage,
                'q': q,
                'q[coach_id_eq]': qCoachIdEq,
                'q[school_id_eq]': qSchoolIdEq,
                'q[sport_id_eq]': qSportIdEq,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
