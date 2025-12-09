import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { Administrator } from '../models/Administrator';
import { AdministratorCollection } from '../models/AdministratorCollection';
import { AuditedFinancialReportStatus } from '../models/AuditedFinancialReportStatus';
import { AuditedFinancialReportStatusCollection } from '../models/AuditedFinancialReportStatusCollection';
import { Avatar } from '../models/Avatar';
import { AverageCompensation } from '../models/AverageCompensation';
import { COLIAdjusted } from '../models/COLIAdjusted';
import { Cashflow } from '../models/Cashflow';
import { CashflowCollection } from '../models/CashflowCollection';
import { Category } from '../models/Category';
import { CategoryCollection } from '../models/CategoryCollection';
import { Coach } from '../models/Coach';
import { CoachCollection } from '../models/CoachCollection';
import { CoachCompensation } from '../models/CoachCompensation';
import { CompareColi404Response } from '../models/CompareColi404Response';
import { CompareColi422Response } from '../models/CompareColi422Response';
import { Compensation } from '../models/Compensation';
import { CompensationCollection } from '../models/CompensationCollection';
import { Conference } from '../models/Conference';
import { ConferenceCollection } from '../models/ConferenceCollection';
import { Conferenceship } from '../models/Conferenceship';
import { ConferenceshipCollection } from '../models/ConferenceshipCollection';
import { Contact } from '../models/Contact';
import { ContactCollection } from '../models/ContactCollection';
import { Contract } from '../models/Contract';
import { ContractCollection } from '../models/ContractCollection';
import { Deal } from '../models/Deal';
import { DealCollection } from '../models/DealCollection';
import { DealStatus } from '../models/DealStatus';
import { DealStatusCollection } from '../models/DealStatusCollection';
import { Division } from '../models/Division';
import { DivisionCollection } from '../models/DivisionCollection';
import { DossierReportResponse } from '../models/DossierReportResponse';
import { Filters } from '../models/Filters';
import { FinancialQc } from '../models/FinancialQc';
import { FoiaLabel } from '../models/FoiaLabel';
import { FoiaLabelCollection } from '../models/FoiaLabelCollection';
import { FoiaRequest } from '../models/FoiaRequest';
import { FoiaRequestCollection } from '../models/FoiaRequestCollection';
import { Game } from '../models/Game';
import { GameCollection } from '../models/GameCollection';
import { GameContract } from '../models/GameContract';
import { GameContractCollection } from '../models/GameContractCollection';
import { GetSchoolAlternateNames200Response } from '../models/GetSchoolAlternateNames200Response';
import { GetSchoolAlternateNames404Response } from '../models/GetSchoolAlternateNames404Response';
import { GetWireChanges200Response } from '../models/GetWireChanges200Response';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HealthCheckFailure } from '../models/HealthCheckFailure';
import { HealthCheckSuccess } from '../models/HealthCheckSuccess';
import { IncomeReport } from '../models/IncomeReport';
import { IncomeReportCollection } from '../models/IncomeReportCollection';
import { Job } from '../models/Job';
import { JobCandidate } from '../models/JobCandidate';
import { JobCollection } from '../models/JobCollection';
import { JobDepartment } from '../models/JobDepartment';
import { JobPost } from '../models/JobPost';
import { JobPostCollection } from '../models/JobPostCollection';
import { JobSchool } from '../models/JobSchool';
import { JobSport } from '../models/JobSport';
import { Link } from '../models/Link';
import { LinkCollection } from '../models/LinkCollection';
import { LinkCollection1 } from '../models/LinkCollection1';
import { LocationInner } from '../models/LocationInner';
import { Logo } from '../models/Logo';
import { Meta } from '../models/Meta';
import { NcaaFinancialReportStatus } from '../models/NcaaFinancialReportStatus';
import { NcaaFinancialReportStatusCollection } from '../models/NcaaFinancialReportStatusCollection';
import { NewsFeed } from '../models/NewsFeed';
import { NewsFeedCollection } from '../models/NewsFeedCollection';
import { Position } from '../models/Position';
import { PositionCollection } from '../models/PositionCollection';
import { PositionType } from '../models/PositionType';
import { PositionTypeGroup } from '../models/PositionTypeGroup';
import { PredictBody } from '../models/PredictBody';
import { PredictFailure } from '../models/PredictFailure';
import { PredictSuccess } from '../models/PredictSuccess';
import { RawContract } from '../models/RawContract';
import { RawContractCollection } from '../models/RawContractCollection';
import { RequestedItem } from '../models/RequestedItem';
import { RequestedItemCollection } from '../models/RequestedItemCollection';
import { School } from '../models/School';
import { SchoolCollection } from '../models/SchoolCollection';
import { Scraper } from '../models/Scraper';
import { ScraperArgDef } from '../models/ScraperArgDef';
import { Season } from '../models/Season';
import { SeasonCollection } from '../models/SeasonCollection';
import { Sport } from '../models/Sport';
import { SportCollection } from '../models/SportCollection';
import { Subdivision } from '../models/Subdivision';
import { SubdivisionCollection } from '../models/SubdivisionCollection';
import { Subscription } from '../models/Subscription';
import { SubscriptionCollection } from '../models/SubscriptionCollection';
import { SystemSetting } from '../models/SystemSetting';
import { Tag } from '../models/Tag';
import { UnauthorizedError } from '../models/UnauthorizedError';
import { UnprocessableEntity } from '../models/UnprocessableEntity';
import { User } from '../models/User';
import { UserActivitySummary } from '../models/UserActivitySummary';
import { UserActivitySummaryCollection } from '../models/UserActivitySummaryCollection';
import { UserCollection } from '../models/UserCollection';
import { UserRequest } from '../models/UserRequest';
import { UserRequestCollection } from '../models/UserRequestCollection';
import { ValidationError } from '../models/ValidationError';
import { Vendor } from '../models/Vendor';
import { VendorCollection } from '../models/VendorCollection';
import { VerifyUserIntercollegiateAccess200Response } from '../models/VerifyUserIntercollegiateAccess200Response';
import { WireChange } from '../models/WireChange';
import { WireChangeCoach } from '../models/WireChangeCoach';
import { WireChangeSchool } from '../models/WireChangeSchool';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve average compensation for a conference
     * @param conferenceId ID of the conference
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageConferenceCompWithHttpInfo(conferenceId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AverageCompensation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.averageConferenceCompWithHttpInfo(conferenceId, seasonYears, sportIds, positionTypeIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve average compensation for a conference
     * @param conferenceId ID of the conference
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageConferenceComp(conferenceId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<AverageCompensation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.averageConferenceComp(conferenceId, seasonYears, sportIds, positionTypeIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve average compensation for a division
     * @param divisionId ID of the division
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageDivisionCompWithHttpInfo(divisionId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AverageCompensation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.averageDivisionCompWithHttpInfo(divisionId, seasonYears, sportIds, positionTypeIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve average compensation for a division
     * @param divisionId ID of the division
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageDivisionComp(divisionId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<AverageCompensation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.averageDivisionComp(divisionId, seasonYears, sportIds, positionTypeIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve average compensation for a school
     * @param schoolId ID of the school
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageSchoolCompWithHttpInfo(schoolId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AverageCompensation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.averageSchoolCompWithHttpInfo(schoolId, seasonYears, sportIds, positionTypeIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve average compensation for a school
     * @param schoolId ID of the school
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageSchoolComp(schoolId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<AverageCompensation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.averageSchoolComp(schoolId, seasonYears, sportIds, positionTypeIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve average compensation for a subdivision
     * @param subdivisionId ID of the subdivision
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageSubdivisionCompWithHttpInfo(subdivisionId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AverageCompensation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.averageSubdivisionCompWithHttpInfo(subdivisionId, seasonYears, sportIds, positionTypeIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve average compensation for a subdivision
     * @param subdivisionId ID of the subdivision
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageSubdivisionComp(subdivisionId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<AverageCompensation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.averageSubdivisionComp(subdivisionId, seasonYears, sportIds, positionTypeIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the COLI-adjusted compensation
     * @param schoolId ID of the School
     * @param otherPersonSchoolId ID of the other person School
     * @param otherPersonTotalCompensation Other person total compensation amount
     */
    public compareColiWithHttpInfo(schoolId: number, otherPersonSchoolId: number, otherPersonTotalCompensation: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<COLIAdjusted>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.compareColiWithHttpInfo(schoolId, otherPersonSchoolId, otherPersonTotalCompensation, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the COLI-adjusted compensation
     * @param schoolId ID of the School
     * @param otherPersonSchoolId ID of the other person School
     * @param otherPersonTotalCompensation Other person total compensation amount
     */
    public compareColi(schoolId: number, otherPersonSchoolId: number, otherPersonTotalCompensation: number, _options?: PromiseConfigurationOptions): Promise<COLIAdjusted> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.compareColi(schoolId, otherPersonSchoolId, otherPersonTotalCompensation, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Cashflow
     * @param [cashflow]
     */
    public createCashflowWithHttpInfo(cashflow?: Cashflow, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Cashflow>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCashflowWithHttpInfo(cashflow, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Cashflow
     * @param [cashflow]
     */
    public createCashflow(cashflow?: Cashflow, _options?: PromiseConfigurationOptions): Promise<Cashflow> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCashflow(cashflow, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Conference
     * @param [conference]
     */
    public createConferenceWithHttpInfo(conference?: Conference, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Conference>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConferenceWithHttpInfo(conference, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Conference
     * @param [conference]
     */
    public createConference(conference?: Conference, _options?: PromiseConfigurationOptions): Promise<Conference> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConference(conference, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Conferenceship
     * @param [conferenceship]
     */
    public createConferenceshipWithHttpInfo(conferenceship?: Conferenceship, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Conferenceship>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConferenceshipWithHttpInfo(conferenceship, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Conferenceship
     * @param [conferenceship]
     */
    public createConferenceship(conferenceship?: Conferenceship, _options?: PromiseConfigurationOptions): Promise<Conferenceship> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConferenceship(conferenceship, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new foia label
     * @param foiaLabel Foia label to create
     */
    public createFoiaLabelWithHttpInfo(foiaLabel: FoiaLabel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FoiaLabel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFoiaLabelWithHttpInfo(foiaLabel, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new foia label
     * @param foiaLabel Foia label to create
     */
    public createFoiaLabel(foiaLabel: FoiaLabel, _options?: PromiseConfigurationOptions): Promise<FoiaLabel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFoiaLabel(foiaLabel, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new foia request
     * @param foiaRequest Foia request to create
     */
    public createFoiaRequestWithHttpInfo(foiaRequest: FoiaRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FoiaRequest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFoiaRequestWithHttpInfo(foiaRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new foia request
     * @param foiaRequest Foia request to create
     */
    public createFoiaRequest(foiaRequest: FoiaRequest, _options?: PromiseConfigurationOptions): Promise<FoiaRequest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFoiaRequest(foiaRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a job post
     * Create a job post
     * @param [jobPost]
     */
    public createJobPostWithHttpInfo(jobPost?: JobPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<JobPost>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createJobPostWithHttpInfo(jobPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a job post
     * Create a job post
     * @param [jobPost]
     */
    public createJobPost(jobPost?: JobPost, _options?: PromiseConfigurationOptions): Promise<JobPost> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createJobPost(jobPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new requested item
     * @param requestedItem Requested item to create
     */
    public createRequestedItemWithHttpInfo(requestedItem: RequestedItem, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestedItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRequestedItemWithHttpInfo(requestedItem, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new requested item
     * @param requestedItem Requested item to create
     */
    public createRequestedItem(requestedItem: RequestedItem, _options?: PromiseConfigurationOptions): Promise<RequestedItem> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRequestedItem(requestedItem, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Season
     * @param [season]
     */
    public createSeasonWithHttpInfo(season?: Season, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Season>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSeasonWithHttpInfo(season, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Season
     * @param [season]
     */
    public createSeason(season?: Season, _options?: PromiseConfigurationOptions): Promise<Season> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSeason(season, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single Cashflow
     * @param cashflowId ID of the Cashflow
     */
    public deleteCashflowWithHttpInfo(cashflowId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCashflowWithHttpInfo(cashflowId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single Cashflow
     * @param cashflowId ID of the Cashflow
     */
    public deleteCashflow(cashflowId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCashflow(cashflowId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single Conference
     * @param conferenceId ID of the Conference
     */
    public deleteConferenceWithHttpInfo(conferenceId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConferenceWithHttpInfo(conferenceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single Conference
     * @param conferenceId ID of the Conference
     */
    public deleteConference(conferenceId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConference(conferenceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     */
    public deleteConferenceshipWithHttpInfo(conferenceshipId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConferenceshipWithHttpInfo(conferenceshipId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     */
    public deleteConferenceship(conferenceshipId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConferenceship(conferenceshipId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single foia label
     * @param foiaLabelId ID of foia label to delete
     */
    public deleteFoiaLabelWithHttpInfo(foiaLabelId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFoiaLabelWithHttpInfo(foiaLabelId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single foia label
     * @param foiaLabelId ID of foia label to delete
     */
    public deleteFoiaLabel(foiaLabelId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFoiaLabel(foiaLabelId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single foia request
     * @param foiaRequestId ID of foia request to delete
     */
    public deleteFoiaRequestWithHttpInfo(foiaRequestId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFoiaRequestWithHttpInfo(foiaRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single foia request
     * @param foiaRequestId ID of foia request to delete
     */
    public deleteFoiaRequest(foiaRequestId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFoiaRequest(foiaRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a job post
     * Delete a job post
     * @param jobPostId ID of job post to delete
     */
    public deleteJobPostWithHttpInfo(jobPostId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteJobPostWithHttpInfo(jobPostId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a job post
     * Delete a job post
     * @param jobPostId ID of job post to delete
     */
    public deleteJobPost(jobPostId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteJobPost(jobPostId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single requested item
     * @param requestedItemId ID of requested item to delete
     */
    public deleteRequestedItemWithHttpInfo(requestedItemId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRequestedItemWithHttpInfo(requestedItemId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single requested item
     * @param requestedItemId ID of requested item to delete
     */
    public deleteRequestedItem(requestedItemId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRequestedItem(requestedItemId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single Season
     * @param seasonId ID of the Season
     */
    public deleteSeasonWithHttpInfo(seasonId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSeasonWithHttpInfo(seasonId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single Season
     * @param seasonId ID of the Season
     */
    public deleteSeason(seasonId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSeason(seasonId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single administrator
     * @param administratorId ID of administrator to retrieve
     */
    public getAdministratorWithHttpInfo(administratorId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Administrator>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAdministratorWithHttpInfo(administratorId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single administrator
     * @param administratorId ID of administrator to retrieve
     */
    public getAdministrator(administratorId: number, _options?: PromiseConfigurationOptions): Promise<Administrator> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAdministrator(administratorId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all administrators
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getAdministratorsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AdministratorCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAdministratorsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all administrators
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getAdministrators(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<AdministratorCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAdministrators(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single audited financial report status
     * @param auditedFinancialReportStatusId ID of audited financial report status to retrieve
     */
    public getAuditedFinancialReportStatusWithHttpInfo(auditedFinancialReportStatusId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AuditedFinancialReportStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuditedFinancialReportStatusWithHttpInfo(auditedFinancialReportStatusId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single audited financial report status
     * @param auditedFinancialReportStatusId ID of audited financial report status to retrieve
     */
    public getAuditedFinancialReportStatus(auditedFinancialReportStatusId: number, _options?: PromiseConfigurationOptions): Promise<AuditedFinancialReportStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuditedFinancialReportStatus(auditedFinancialReportStatusId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all audited financial report statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getAuditedFinancialReportStatusesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AuditedFinancialReportStatusCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuditedFinancialReportStatusesWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all audited financial report statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getAuditedFinancialReportStatuses(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<AuditedFinancialReportStatusCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuditedFinancialReportStatuses(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Cashflow
     * @param cashflowId ID of the Cashflow
     */
    public getCashflowWithHttpInfo(cashflowId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Cashflow>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCashflowWithHttpInfo(cashflowId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Cashflow
     * @param cashflowId ID of the Cashflow
     */
    public getCashflow(cashflowId: number, _options?: PromiseConfigurationOptions): Promise<Cashflow> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCashflow(cashflowId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all cashflows
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCashflowsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CashflowCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCashflowsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all cashflows
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCashflows(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<CashflowCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCashflows(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * List all categories
     * List all categories
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCategoriesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoryCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategoriesWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * List all categories
     * List all categories
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCategories(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<CategoryCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategories(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single coach
     * @param coachId ID of coach to retrieve
     */
    public getCoachWithHttpInfo(coachId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Coach>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoachWithHttpInfo(coachId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single coach
     * @param coachId ID of coach to retrieve
     */
    public getCoach(coachId: number, _options?: PromiseConfigurationOptions): Promise<Coach> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoach(coachId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach
     * @param coachesIds IDs of the coaches
     * @param userSchoolId ID of the school whose cost-of-living index should be used
     */
    public getCoachCompensationWithHttpInfo(coachesIds: Array<number>, userSchoolId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CoachCompensation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoachCompensationWithHttpInfo(coachesIds, userSchoolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach
     * @param coachesIds IDs of the coaches
     * @param userSchoolId ID of the school whose cost-of-living index should be used
     */
    public getCoachCompensation(coachesIds: Array<number>, userSchoolId: number, _options?: PromiseConfigurationOptions): Promise<CoachCompensation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoachCompensation(coachesIds, userSchoolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all coaches
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCoachesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CoachCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoachesWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all coaches
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCoaches(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<CoachCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoaches(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single compensation
     * @param compensationId ID of compensation to retrieve
     */
    public getCompensationWithHttpInfo(compensationId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Compensation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompensationWithHttpInfo(compensationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single compensation
     * @param compensationId ID of compensation to retrieve
     */
    public getCompensation(compensationId: number, _options?: PromiseConfigurationOptions): Promise<Compensation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompensation(compensationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all compensations
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCompensationsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompensationCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompensationsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all compensations
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCompensations(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<CompensationCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompensations(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Conference
     * @param conferenceId ID of the Conference
     */
    public getConferenceWithHttpInfo(conferenceId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Conference>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferenceWithHttpInfo(conferenceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Conference
     * @param conferenceId ID of the Conference
     */
    public getConference(conferenceId: number, _options?: PromiseConfigurationOptions): Promise<Conference> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConference(conferenceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all conferences
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getConferencesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConferenceCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferencesWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all conferences
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getConferences(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<ConferenceCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferences(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     */
    public getConferenceshipWithHttpInfo(conferenceshipId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Conferenceship>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferenceshipWithHttpInfo(conferenceshipId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     */
    public getConferenceship(conferenceshipId: number, _options?: PromiseConfigurationOptions): Promise<Conferenceship> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferenceship(conferenceshipId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all conferenceships
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getConferenceshipsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConferenceshipCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferenceshipsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all conferenceships
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getConferenceships(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<ConferenceshipCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferenceships(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single contact
     * @param contactId ID of contact to retrieve
     */
    public getContactWithHttpInfo(contactId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactWithHttpInfo(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single contact
     * @param contactId ID of contact to retrieve
     */
    public getContact(contactId: number, _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContact(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all contacts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getContactsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all contacts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getContacts(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<ContactCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContacts(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single contract
     * @param contractId ID of contract to retrieve
     */
    public getContractWithHttpInfo(contractId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contract>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContractWithHttpInfo(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single contract
     * @param contractId ID of contract to retrieve
     */
    public getContract(contractId: number, _options?: PromiseConfigurationOptions): Promise<Contract> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContract(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getContractsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContractCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContractsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getContracts(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<ContractCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContracts(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Deal
     * @param dealId ID of the Deal
     */
    public getDealWithHttpInfo(dealId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Deal>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealWithHttpInfo(dealId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Deal
     * @param dealId ID of the Deal
     */
    public getDeal(dealId: number, _options?: PromiseConfigurationOptions): Promise<Deal> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDeal(dealId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single deal status
     * @param dealStatusId ID of deal status to retrieve
     */
    public getDealStatusWithHttpInfo(dealStatusId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DealStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealStatusWithHttpInfo(dealStatusId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single deal status
     * @param dealStatusId ID of deal status to retrieve
     */
    public getDealStatus(dealStatusId: number, _options?: PromiseConfigurationOptions): Promise<DealStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealStatus(dealStatusId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all deal statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDealStatusesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DealStatusCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealStatusesWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all deal statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDealStatuses(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<DealStatusCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealStatuses(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all deals
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDealsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DealCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all deals
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDeals(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<DealCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDeals(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Division
     * @param divisionId ID of the Division
     */
    public getDivisionWithHttpInfo(divisionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Division>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDivisionWithHttpInfo(divisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Division
     * @param divisionId ID of the Division
     */
    public getDivision(divisionId: number, _options?: PromiseConfigurationOptions): Promise<Division> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDivision(divisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all divisions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDivisionsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DivisionCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDivisionsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all divisions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDivisions(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<DivisionCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDivisions(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single foia label
     * @param foiaLabelId ID of foia label to retrieve
     */
    public getFoiaLabelWithHttpInfo(foiaLabelId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FoiaLabel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaLabelWithHttpInfo(foiaLabelId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single foia label
     * @param foiaLabelId ID of foia label to retrieve
     */
    public getFoiaLabel(foiaLabelId: number, _options?: PromiseConfigurationOptions): Promise<FoiaLabel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaLabel(foiaLabelId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all foia labels
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getFoiaLabelsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FoiaLabelCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaLabelsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all foia labels
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getFoiaLabels(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<FoiaLabelCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaLabels(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single foia request
     * @param foiaRequestId ID of foia request to retrieve
     */
    public getFoiaRequestWithHttpInfo(foiaRequestId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FoiaRequest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaRequestWithHttpInfo(foiaRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single foia request
     * @param foiaRequestId ID of foia request to retrieve
     */
    public getFoiaRequest(foiaRequestId: number, _options?: PromiseConfigurationOptions): Promise<FoiaRequest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaRequest(foiaRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all foia requests
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getFoiaRequestsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FoiaRequestCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaRequestsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all foia requests
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getFoiaRequests(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<FoiaRequestCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaRequests(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single game
     * @param gameId ID of game to retrieve
     */
    public getGameWithHttpInfo(gameId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Game>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGameWithHttpInfo(gameId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single game
     * @param gameId ID of game to retrieve
     */
    public getGame(gameId: number, _options?: PromiseConfigurationOptions): Promise<Game> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGame(gameId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single GameContract
     * @param gameContractId ID of the GameContract
     */
    public getGameContractWithHttpInfo(gameContractId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GameContract>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGameContractWithHttpInfo(gameContractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single GameContract
     * @param gameContractId ID of the GameContract
     */
    public getGameContract(gameContractId: number, _options?: PromiseConfigurationOptions): Promise<GameContract> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGameContract(gameContractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all game_contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getGameContractsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GameContractCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGameContractsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all game_contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getGameContracts(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<GameContractCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGameContracts(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all games
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getGamesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GameCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGamesWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all games
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getGames(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<GameCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGames(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single income report
     * @param incomeReportId ID of income report to retrieve
     */
    public getIncomeReportWithHttpInfo(incomeReportId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<IncomeReport>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getIncomeReportWithHttpInfo(incomeReportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single income report
     * @param incomeReportId ID of income report to retrieve
     */
    public getIncomeReport(incomeReportId: number, _options?: PromiseConfigurationOptions): Promise<IncomeReport> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getIncomeReport(incomeReportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all income reports
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getIncomeReportsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<IncomeReportCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getIncomeReportsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all income reports
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getIncomeReports(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<IncomeReportCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getIncomeReports(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a job post
     * Get a job post
     * @param jobPostId ID of job post to return
     */
    public getJobPostWithHttpInfo(jobPostId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<JobPost>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getJobPostWithHttpInfo(jobPostId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a job post
     * Get a job post
     * @param jobPostId ID of job post to return
     */
    public getJobPost(jobPostId: number, _options?: PromiseConfigurationOptions): Promise<JobPost> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getJobPost(jobPostId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all job posts
     * List all job posts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getJobPostsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<JobPostCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getJobPostsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * List all job posts
     * List all job posts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getJobPosts(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<JobPostCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getJobPosts(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single ncaa financial report status
     * @param ncaaFinancialReportStatusId ID of ncaa financial report status to retrieve
     */
    public getNcaaFinancialReportStatusWithHttpInfo(ncaaFinancialReportStatusId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NcaaFinancialReportStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNcaaFinancialReportStatusWithHttpInfo(ncaaFinancialReportStatusId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single ncaa financial report status
     * @param ncaaFinancialReportStatusId ID of ncaa financial report status to retrieve
     */
    public getNcaaFinancialReportStatus(ncaaFinancialReportStatusId: number, _options?: PromiseConfigurationOptions): Promise<NcaaFinancialReportStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNcaaFinancialReportStatus(ncaaFinancialReportStatusId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all ncaa financial report statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getNcaaFinancialReportStatusesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NcaaFinancialReportStatusCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNcaaFinancialReportStatusesWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all ncaa financial report statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getNcaaFinancialReportStatuses(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<NcaaFinancialReportStatusCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNcaaFinancialReportStatuses(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a news feed
     * Get a news feed
     * @param newsFeedId ID of news feed to return
     */
    public getNewsFeedWithHttpInfo(newsFeedId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NewsFeed>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNewsFeedWithHttpInfo(newsFeedId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a news feed
     * Get a news feed
     * @param newsFeedId ID of news feed to return
     */
    public getNewsFeed(newsFeedId: number, _options?: PromiseConfigurationOptions): Promise<NewsFeed> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNewsFeed(newsFeedId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single position
     * @param positionId ID of position to retrieve
     */
    public getPositionWithHttpInfo(positionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Position>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPositionWithHttpInfo(positionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single position
     * @param positionId ID of position to retrieve
     */
    public getPosition(positionId: number, _options?: PromiseConfigurationOptions): Promise<Position> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPosition(positionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all positions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getPositionsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PositionCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPositionsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all positions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getPositions(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<PositionCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPositions(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single RawContract
     * @param rawContractId ID of the RawContract
     */
    public getRawContractWithHttpInfo(rawContractId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RawContract>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRawContractWithHttpInfo(rawContractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single RawContract
     * @param rawContractId ID of the RawContract
     */
    public getRawContract(rawContractId: number, _options?: PromiseConfigurationOptions): Promise<RawContract> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRawContract(rawContractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all raw_contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getRawContractsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RawContractCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRawContractsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all raw_contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getRawContracts(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<RawContractCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRawContracts(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single requested item
     * @param requestedItemId ID of requested item to retrieve
     */
    public getRequestedItemWithHttpInfo(requestedItemId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestedItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRequestedItemWithHttpInfo(requestedItemId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single requested item
     * @param requestedItemId ID of requested item to retrieve
     */
    public getRequestedItem(requestedItemId: number, _options?: PromiseConfigurationOptions): Promise<RequestedItem> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRequestedItem(requestedItemId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all requested items
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getRequestedItemsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestedItemCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRequestedItemsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all requested items
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getRequestedItems(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<RequestedItemCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRequestedItems(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single school
     * @param schoolId ID of school to retrieve
     */
    public getSchoolWithHttpInfo(schoolId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<School>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchoolWithHttpInfo(schoolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single school
     * @param schoolId ID of school to retrieve
     */
    public getSchool(schoolId: number, _options?: PromiseConfigurationOptions): Promise<School> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchool(schoolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve alternate names for a specific school
     * @param schoolId ID of school to retrieve alternate names for
     */
    public getSchoolAlternateNamesWithHttpInfo(schoolId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetSchoolAlternateNames200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchoolAlternateNamesWithHttpInfo(schoolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve alternate names for a specific school
     * @param schoolId ID of school to retrieve alternate names for
     */
    public getSchoolAlternateNames(schoolId: number, _options?: PromiseConfigurationOptions): Promise<GetSchoolAlternateNames200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchoolAlternateNames(schoolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all schools
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSchoolsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SchoolCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchoolsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all schools
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSchools(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<SchoolCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchools(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Season
     * @param seasonId ID of the Season
     */
    public getSeasonWithHttpInfo(seasonId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Season>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSeasonWithHttpInfo(seasonId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Season
     * @param seasonId ID of the Season
     */
    public getSeason(seasonId: number, _options?: PromiseConfigurationOptions): Promise<Season> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSeason(seasonId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all seasons
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSeasonsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SeasonCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSeasonsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all seasons
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSeasons(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<SeasonCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSeasons(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve similar coaches based on coach ID
     * @param coachId ID of coach to retrieve
     * @param [q] Ransack query
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     */
    public getSimilarCoachesWithHttpInfo(coachId: number, q?: any, page?: number, perPage?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CoachCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSimilarCoachesWithHttpInfo(coachId, q, page, perPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve similar coaches based on coach ID
     * @param coachId ID of coach to retrieve
     * @param [q] Ransack query
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     */
    public getSimilarCoaches(coachId: number, q?: any, page?: number, perPage?: number, _options?: PromiseConfigurationOptions): Promise<CoachCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSimilarCoaches(coachId, q, page, perPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single sport
     * @param sportId ID of sport to retrieve
     */
    public getSportWithHttpInfo(sportId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Sport>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSportWithHttpInfo(sportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single sport
     * @param sportId ID of sport to retrieve
     */
    public getSport(sportId: number, _options?: PromiseConfigurationOptions): Promise<Sport> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSport(sportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all sports
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSportsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SportCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSportsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all sports
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSports(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<SportCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSports(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Subdivision
     * @param subdivisionId ID of the Subdivision
     */
    public getSubdivisionWithHttpInfo(subdivisionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Subdivision>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubdivisionWithHttpInfo(subdivisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Subdivision
     * @param subdivisionId ID of the Subdivision
     */
    public getSubdivision(subdivisionId: number, _options?: PromiseConfigurationOptions): Promise<Subdivision> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubdivision(subdivisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all subdivisions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSubdivisionsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubdivisionCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubdivisionsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all subdivisions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSubdivisions(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<SubdivisionCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubdivisions(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Subscription
     * @param subscriptionId ID of the Subscription
     */
    public getSubscriptionWithHttpInfo(subscriptionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Subscription>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubscriptionWithHttpInfo(subscriptionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Subscription
     * @param subscriptionId ID of the Subscription
     */
    public getSubscription(subscriptionId: number, _options?: PromiseConfigurationOptions): Promise<Subscription> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubscription(subscriptionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the all subscriptions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSubscriptionsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubscriptionsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the all subscriptions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSubscriptions(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<SubscriptionCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubscriptions(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the current system settings
     */
    public getSystemSettingsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<SystemSetting>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSystemSettingsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the current system settings
     */
    public getSystemSettings(_options?: PromiseConfigurationOptions): Promise<SystemSetting> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSystemSettings(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single user
     * @param userId ID of user to retrieve
     */
    public getUserWithHttpInfo(userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<User>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single user
     * @param userId ID of user to retrieve
     */
    public getUser(userId: number, _options?: PromiseConfigurationOptions): Promise<User> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUser(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all user_activity_summaries
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getUserActivitySummariesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserActivitySummaryCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserActivitySummariesWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all user_activity_summaries
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getUserActivitySummaries(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<UserActivitySummaryCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserActivitySummaries(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single UserActivitySummary
     * @param userActivitySummaryId ID of the UserActivitySummary
     */
    public getUserActivitySummaryWithHttpInfo(userActivitySummaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserActivitySummary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserActivitySummaryWithHttpInfo(userActivitySummaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single UserActivitySummary
     * @param userActivitySummaryId ID of the UserActivitySummary
     */
    public getUserActivitySummary(userActivitySummaryId: number, _options?: PromiseConfigurationOptions): Promise<UserActivitySummary> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserActivitySummary(userActivitySummaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single UserRequest
     * @param userRequestId ID of the UserRequest
     */
    public getUserRequestWithHttpInfo(userRequestId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserRequest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserRequestWithHttpInfo(userRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single UserRequest
     * @param userRequestId ID of the UserRequest
     */
    public getUserRequest(userRequestId: number, _options?: PromiseConfigurationOptions): Promise<UserRequest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserRequest(userRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all user_requests
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getUserRequestsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserRequestCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserRequestsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all user_requests
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getUserRequests(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<UserRequestCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserRequests(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all users
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getUsersWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUsersWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all users
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getUsers(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<UserCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUsers(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Vendor
     * @param vendorId ID of the Vendor
     */
    public getVendorWithHttpInfo(vendorId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Vendor>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVendorWithHttpInfo(vendorId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single Vendor
     * @param vendorId ID of the Vendor
     */
    public getVendor(vendorId: number, _options?: PromiseConfigurationOptions): Promise<Vendor> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVendor(vendorId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all vendors
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getVendorsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VendorCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVendorsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all vendors
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getVendors(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<VendorCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVendors(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns WireChange records. Supports Ransack-style filters (`q[...]`). Includes related position_types and sports arrays in each object. Each item also includes coach avatar (if present) and school logo images.
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     * @param [qCoachIdEq] Filter by coach ID
     * @param [qSchoolIdEq] Filter by school ID
     * @param [qSportIdEq] Filter by sport ID
     */
    public getWireChangesWithHttpInfo(page?: number, perPage?: number, q?: any, qCoachIdEq?: number, qSchoolIdEq?: number, qSportIdEq?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetWireChanges200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWireChangesWithHttpInfo(page, perPage, q, qCoachIdEq, qSchoolIdEq, qSportIdEq, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns WireChange records. Supports Ransack-style filters (`q[...]`). Includes related position_types and sports arrays in each object. Each item also includes coach avatar (if present) and school logo images.
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     * @param [qCoachIdEq] Filter by coach ID
     * @param [qSchoolIdEq] Filter by school ID
     * @param [qSportIdEq] Filter by sport ID
     */
    public getWireChanges(page?: number, perPage?: number, q?: any, qCoachIdEq?: number, qSchoolIdEq?: number, qSportIdEq?: number, _options?: PromiseConfigurationOptions): Promise<GetWireChanges200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWireChanges(page, perPage, q, qCoachIdEq, qSchoolIdEq, qSportIdEq, observableOptions);
        return result.toPromise();
    }

    /**
     * Search Coaches by priority_ids
     * @param [filters]
     */
    public searchCoachesWithHttpInfo(filters?: Filters, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CoachCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCoachesWithHttpInfo(filters, observableOptions);
        return result.toPromise();
    }

    /**
     * Search Coaches by priority_ids
     * @param [filters]
     */
    public searchCoaches(filters?: Filters, _options?: PromiseConfigurationOptions): Promise<CoachCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCoaches(filters, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single Cashflow
     * @param cashflowId ID of the Cashflow
     * @param cashflow Cashflow attributes to update
     */
    public updateCashflowWithHttpInfo(cashflowId: number, cashflow: Cashflow, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Cashflow>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCashflowWithHttpInfo(cashflowId, cashflow, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single Cashflow
     * @param cashflowId ID of the Cashflow
     * @param cashflow Cashflow attributes to update
     */
    public updateCashflow(cashflowId: number, cashflow: Cashflow, _options?: PromiseConfigurationOptions): Promise<Cashflow> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCashflow(cashflowId, cashflow, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a coach
     * @param coachId ID of coach to update
     * @param coach Attributes to update. Currently only supports email, phone, bio, bio_text. Others will be ignored.
     */
    public updateCoachWithHttpInfo(coachId: number, coach: Coach, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Coach>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCoachWithHttpInfo(coachId, coach, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a coach
     * @param coachId ID of coach to update
     * @param coach Attributes to update. Currently only supports email, phone, bio, bio_text. Others will be ignored.
     */
    public updateCoach(coachId: number, coach: Coach, _options?: PromiseConfigurationOptions): Promise<Coach> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCoach(coachId, coach, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a compensation
     * @param compensationId ID of compensation to update
     * @param compensation Compensation to update
     */
    public updateCompensationWithHttpInfo(compensationId: number, compensation: Compensation, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Compensation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompensationWithHttpInfo(compensationId, compensation, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a compensation
     * @param compensationId ID of compensation to update
     * @param compensation Compensation to update
     */
    public updateCompensation(compensationId: number, compensation: Compensation, _options?: PromiseConfigurationOptions): Promise<Compensation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompensation(compensationId, compensation, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single Conference
     * @param conferenceId ID of the Conference
     * @param conference Conference attributes to update
     */
    public updateConferenceWithHttpInfo(conferenceId: number, conference: Conference, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Conference>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConferenceWithHttpInfo(conferenceId, conference, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single Conference
     * @param conferenceId ID of the Conference
     * @param conference Conference attributes to update
     */
    public updateConference(conferenceId: number, conference: Conference, _options?: PromiseConfigurationOptions): Promise<Conference> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConference(conferenceId, conference, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     * @param conferenceship Conferenceship attributes to update
     */
    public updateConferenceshipWithHttpInfo(conferenceshipId: number, conferenceship: Conferenceship, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Conferenceship>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConferenceshipWithHttpInfo(conferenceshipId, conferenceship, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     * @param conferenceship Conferenceship attributes to update
     */
    public updateConferenceship(conferenceshipId: number, conferenceship: Conferenceship, _options?: PromiseConfigurationOptions): Promise<Conferenceship> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConferenceship(conferenceshipId, conferenceship, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single foia label
     * @param foiaLabelId ID of foia label to update
     * @param foiaLabel Foia label to update
     */
    public updateFoiaLabelWithHttpInfo(foiaLabelId: number, foiaLabel: FoiaLabel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FoiaLabel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFoiaLabelWithHttpInfo(foiaLabelId, foiaLabel, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single foia label
     * @param foiaLabelId ID of foia label to update
     * @param foiaLabel Foia label to update
     */
    public updateFoiaLabel(foiaLabelId: number, foiaLabel: FoiaLabel, _options?: PromiseConfigurationOptions): Promise<FoiaLabel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFoiaLabel(foiaLabelId, foiaLabel, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single foia request
     * @param foiaRequestId ID of foia request to update
     * @param foiaRequest Foia request to update
     */
    public updateFoiaRequestWithHttpInfo(foiaRequestId: number, foiaRequest: FoiaRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FoiaRequest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFoiaRequestWithHttpInfo(foiaRequestId, foiaRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single foia request
     * @param foiaRequestId ID of foia request to update
     * @param foiaRequest Foia request to update
     */
    public updateFoiaRequest(foiaRequestId: number, foiaRequest: FoiaRequest, _options?: PromiseConfigurationOptions): Promise<FoiaRequest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFoiaRequest(foiaRequestId, foiaRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a job post
     * Update a job post
     * @param jobPostId ID of job post to update
     * @param [jobPost]
     */
    public updateJobPostWithHttpInfo(jobPostId: number, jobPost?: JobPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<JobPost>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateJobPostWithHttpInfo(jobPostId, jobPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a job post
     * Update a job post
     * @param jobPostId ID of job post to update
     * @param [jobPost]
     */
    public updateJobPost(jobPostId: number, jobPost?: JobPost, _options?: PromiseConfigurationOptions): Promise<JobPost> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateJobPost(jobPostId, jobPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single requested item
     * @param requestedItemId ID of requested item to update
     * @param requestedItem Requested item to update
     */
    public updateRequestedItemWithHttpInfo(requestedItemId: number, requestedItem: RequestedItem, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestedItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRequestedItemWithHttpInfo(requestedItemId, requestedItem, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single requested item
     * @param requestedItemId ID of requested item to update
     * @param requestedItem Requested item to update
     */
    public updateRequestedItem(requestedItemId: number, requestedItem: RequestedItem, _options?: PromiseConfigurationOptions): Promise<RequestedItem> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRequestedItem(requestedItemId, requestedItem, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single Season
     * @param seasonId ID of the Season
     * @param season Season attributes to update
     */
    public updateSeasonWithHttpInfo(seasonId: number, season: Season, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Season>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSeasonWithHttpInfo(seasonId, season, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a single Season
     * @param seasonId ID of the Season
     * @param season Season attributes to update
     */
    public updateSeason(seasonId: number, season: Season, _options?: PromiseConfigurationOptions): Promise<Season> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSeason(seasonId, season, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single user
     */
    public userMeWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<User>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userMeWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single user
     */
    public userMe(_options?: PromiseConfigurationOptions): Promise<User> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userMe(observableOptions);
        return result.toPromise();
    }

    /**
     * Verifies whether the user has intercollegiate access based on their email.
     * @param userEmail The email of the user whose intercollegiate access is being verified.
     */
    public verifyUserIntercollegiateAccessWithHttpInfo(userEmail: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VerifyUserIntercollegiateAccess200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.verifyUserIntercollegiateAccessWithHttpInfo(userEmail, observableOptions);
        return result.toPromise();
    }

    /**
     * Verifies whether the user has intercollegiate access based on their email.
     * @param userEmail The email of the user whose intercollegiate access is being verified.
     */
    public verifyUserIntercollegiateAccess(userEmail: string, _options?: PromiseConfigurationOptions): Promise<VerifyUserIntercollegiateAccess200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.verifyUserIntercollegiateAccess(userEmail, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDossierApi } from './ObservableAPI';

import { DossierApiRequestFactory, DossierApiResponseProcessor} from "../apis/DossierApi";
export class PromiseDossierApi {
    private api: ObservableDossierApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DossierApiRequestFactory,
        responseProcessor?: DossierApiResponseProcessor
    ) {
        this.api = new ObservableDossierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * University Dossier Report
     * @param winadId
     */
    public universityDossierReportDossierWinadIdGetWithHttpInfo(winadId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DossierReportResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.universityDossierReportDossierWinadIdGetWithHttpInfo(winadId, observableOptions);
        return result.toPromise();
    }

    /**
     * University Dossier Report
     * @param winadId
     */
    public universityDossierReportDossierWinadIdGet(winadId: number, _options?: PromiseConfigurationOptions): Promise<DossierReportResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.universityDossierReportDossierWinadIdGet(winadId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIntercollegiateApi } from './ObservableAPI';

import { IntercollegiateApiRequestFactory, IntercollegiateApiResponseProcessor} from "../apis/IntercollegiateApi";
export class PromiseIntercollegiateApi {
    private api: ObservableIntercollegiateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IntercollegiateApiRequestFactory,
        responseProcessor?: IntercollegiateApiResponseProcessor
    ) {
        this.api = new ObservableIntercollegiateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create news feed
     * @param [newsFeed]
     */
    public createNewsFeedsWithHttpInfo(newsFeed?: NewsFeed, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NewsFeed>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNewsFeedsWithHttpInfo(newsFeed, observableOptions);
        return result.toPromise();
    }

    /**
     * Create news feed
     * @param [newsFeed]
     */
    public createNewsFeeds(newsFeed?: NewsFeed, _options?: PromiseConfigurationOptions): Promise<NewsFeed> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNewsFeeds(newsFeed, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a job post by ID
     * @param jobPostId ID of job post to return
     */
    public getJobPostWithHttpInfo(jobPostId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Job>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getJobPostWithHttpInfo(jobPostId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a job post by ID
     * @param jobPostId ID of job post to return
     */
    public getJobPost(jobPostId: number, _options?: PromiseConfigurationOptions): Promise<Job> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getJobPost(jobPostId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all active jobs
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getJobPostsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<JobCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getJobPostsWithHttpInfo(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all active jobs
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getJobPosts(page?: number, perPage?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<JobCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getJobPosts(page, perPage, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve news feed
     */
    public getNewsFeedsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<NewsFeedCollection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNewsFeedsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve news feed
     */
    public getNewsFeeds(_options?: PromiseConfigurationOptions): Promise<NewsFeedCollection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNewsFeeds(observableOptions);
        return result.toPromise();
    }


}



import { ObservableMlAthleticApi } from './ObservableAPI';

import { MlAthleticApiRequestFactory, MlAthleticApiResponseProcessor} from "../apis/MlAthleticApi";
export class PromiseMlAthleticApi {
    private api: ObservableMlAthleticApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MlAthleticApiRequestFactory,
        responseProcessor?: MlAthleticApiResponseProcessor
    ) {
        this.api = new ObservableMlAthleticApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if the model is loaded and the API is running.
     */
    public healthCheckWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<HealthCheckSuccess>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.healthCheckWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Check if the model is loaded and the API is running.
     */
    public healthCheck(_options?: PromiseConfigurationOptions): Promise<HealthCheckSuccess> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.healthCheck(observableOptions);
        return result.toPromise();
    }

    /**
     * Classify a job post as athletic or not.
     * @param [predictBody]
     */
    public predictWithHttpInfo(predictBody?: PredictBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PredictSuccess>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.predictWithHttpInfo(predictBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Classify a job post as athletic or not.
     * @param [predictBody]
     */
    public predict(predictBody?: PredictBody, _options?: PromiseConfigurationOptions): Promise<PredictSuccess> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.predict(predictBody, observableOptions);
        return result.toPromise();
    }


}



import { ObservableReportingApi } from './ObservableAPI';

import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";
export class PromiseReportingApi {
    private api: ObservableReportingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportingApiRequestFactory,
        responseProcessor?: ReportingApiResponseProcessor
    ) {
        this.api = new ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve some or all coach contract requests
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getCoachContractRequestsWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoachContractRequestsWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all coach contract requests
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getCoachContractRequests(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoachContractRequests(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all coach history
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getCoachHistoryWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoachHistoryWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all coach history
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getCoachHistory(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCoachHistory(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all conferenceships
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getConferenceshipsWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferenceshipsWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all conferenceships
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getConferenceships(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConferenceships(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all foia details
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getFoiaDetailsWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaDetailsWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all foia details
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getFoiaDetails(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFoiaDetails(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all games
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getGamesWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGamesWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all games
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getGames(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGames(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all client invoices
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getInvoicesWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getInvoicesWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all client invoices
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getInvoices(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getInvoices(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all school contract requests
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSchoolContractRequestsWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchoolContractRequestsWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve some or all school contract requests
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSchoolContractRequests(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchoolContractRequests(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve schools with thier financials qc
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSchoolsFinancialsQcWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FinancialQc>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchoolsFinancialsQcWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve schools with thier financials qc
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSchoolsFinancialsQc(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<FinancialQc> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchoolsFinancialsQc(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve subscriptions
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSubscriptionsWithHttpInfo(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubscriptionsWithHttpInfo(page, q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve subscriptions
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSubscriptions(page?: number, q?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubscriptions(page, q, observableOptions);
        return result.toPromise();
    }


}



import { ObservableScraperApi } from './ObservableAPI';

import { ScraperApiRequestFactory, ScraperApiResponseProcessor} from "../apis/ScraperApi";
export class PromiseScraperApi {
    private api: ObservableScraperApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ScraperApiRequestFactory,
        responseProcessor?: ScraperApiResponseProcessor
    ) {
        this.api = new ObservableScraperApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Root endpoint
     * List all available scrapers
     */
    public listScrapersWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<Scraper>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listScrapersWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Root endpoint
     * List all available scrapers
     */
    public listScrapers(_options?: PromiseConfigurationOptions): Promise<Array<Scraper>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listScrapers(observableOptions);
        return result.toPromise();
    }

    /**
     * Run a specified scraper with given arguments
     * Run a scraper
     * @param command The name of the scraper to run
     * @param [body]
     */
    public runScraperWithHttpInfo(command: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runScraperWithHttpInfo(command, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Run a specified scraper with given arguments
     * Run a scraper
     * @param command The name of the scraper to run
     * @param [body]
     */
    public runScraper(command: string, body?: any, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runScraper(command, body, observableOptions);
        return result.toPromise();
    }


}



