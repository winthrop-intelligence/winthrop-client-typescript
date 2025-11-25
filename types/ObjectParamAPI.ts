import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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
import { UserCollection } from '../models/UserCollection';
import { ValidationError } from '../models/ValidationError';
import { Vendor } from '../models/Vendor';
import { VendorCollection } from '../models/VendorCollection';
import { VerifyUserIntercollegiateAccess200Response } from '../models/VerifyUserIntercollegiateAccess200Response';
import { WireChange } from '../models/WireChange';
import { WireChangeCoach } from '../models/WireChangeCoach';
import { WireChangeSchool } from '../models/WireChangeSchool';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAverageConferenceCompRequest {
    /**
     * ID of the conference
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiaverageConferenceComp
     */
    conferenceId: number
    /**
     * Season years
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageConferenceComp
     */
    seasonYears: Array<number>
    /**
     * IDs of the sports
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageConferenceComp
     */
    sportIds: Array<number>
    /**
     * IDs of the position types
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageConferenceComp
     */
    positionTypeIds: Array<number>
}

export interface DefaultApiAverageDivisionCompRequest {
    /**
     * ID of the division
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiaverageDivisionComp
     */
    divisionId: number
    /**
     * Season years
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageDivisionComp
     */
    seasonYears: Array<number>
    /**
     * IDs of the sports
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageDivisionComp
     */
    sportIds: Array<number>
    /**
     * IDs of the position types
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageDivisionComp
     */
    positionTypeIds: Array<number>
}

export interface DefaultApiAverageSchoolCompRequest {
    /**
     * ID of the school
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiaverageSchoolComp
     */
    schoolId: number
    /**
     * Season years
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageSchoolComp
     */
    seasonYears: Array<number>
    /**
     * IDs of the sports
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageSchoolComp
     */
    sportIds: Array<number>
    /**
     * IDs of the position types
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageSchoolComp
     */
    positionTypeIds: Array<number>
}

export interface DefaultApiAverageSubdivisionCompRequest {
    /**
     * ID of the subdivision
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiaverageSubdivisionComp
     */
    subdivisionId: number
    /**
     * Season years
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageSubdivisionComp
     */
    seasonYears: Array<number>
    /**
     * IDs of the sports
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageSubdivisionComp
     */
    sportIds: Array<number>
    /**
     * IDs of the position types
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApiaverageSubdivisionComp
     */
    positionTypeIds: Array<number>
}

export interface DefaultApiCompareColiRequest {
    /**
     * ID of the School
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicompareColi
     */
    schoolId: number
    /**
     * ID of the other person School
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicompareColi
     */
    otherPersonSchoolId: number
    /**
     * Other person total compensation amount
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicompareColi
     */
    otherPersonTotalCompensation: number
}

export interface DefaultApiCreateCashflowRequest {
    /**
     * 
     * @type Cashflow
     * @memberof DefaultApicreateCashflow
     */
    cashflow?: Cashflow
}

export interface DefaultApiCreateConferenceRequest {
    /**
     * 
     * @type Conference
     * @memberof DefaultApicreateConference
     */
    conference?: Conference
}

export interface DefaultApiCreateConferenceshipRequest {
    /**
     * 
     * @type Conferenceship
     * @memberof DefaultApicreateConferenceship
     */
    conferenceship?: Conferenceship
}

export interface DefaultApiCreateFoiaLabelRequest {
    /**
     * Foia label to create
     * @type FoiaLabel
     * @memberof DefaultApicreateFoiaLabel
     */
    foiaLabel: FoiaLabel
}

export interface DefaultApiCreateFoiaRequestRequest {
    /**
     * Foia request to create
     * @type FoiaRequest
     * @memberof DefaultApicreateFoiaRequest
     */
    foiaRequest: FoiaRequest
}

export interface DefaultApiCreateJobPostRequest {
    /**
     * 
     * @type JobPost
     * @memberof DefaultApicreateJobPost
     */
    jobPost?: JobPost
}

export interface DefaultApiCreateRequestedItemRequest {
    /**
     * Requested item to create
     * @type RequestedItem
     * @memberof DefaultApicreateRequestedItem
     */
    requestedItem: RequestedItem
}

export interface DefaultApiCreateSeasonRequest {
    /**
     * 
     * @type Season
     * @memberof DefaultApicreateSeason
     */
    season?: Season
}

export interface DefaultApiDeleteCashflowRequest {
    /**
     * ID of the Cashflow
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCashflow
     */
    cashflowId: number
}

export interface DefaultApiDeleteConferenceRequest {
    /**
     * ID of the Conference
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteConference
     */
    conferenceId: number
}

export interface DefaultApiDeleteConferenceshipRequest {
    /**
     * ID of the Conferenceship
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteConferenceship
     */
    conferenceshipId: number
}

export interface DefaultApiDeleteFoiaLabelRequest {
    /**
     * ID of foia label to delete
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteFoiaLabel
     */
    foiaLabelId: number
}

export interface DefaultApiDeleteFoiaRequestRequest {
    /**
     * ID of foia request to delete
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteFoiaRequest
     */
    foiaRequestId: number
}

export interface DefaultApiDeleteJobPostRequest {
    /**
     * ID of job post to delete
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteJobPost
     */
    jobPostId: number
}

export interface DefaultApiDeleteRequestedItemRequest {
    /**
     * ID of requested item to delete
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteRequestedItem
     */
    requestedItemId: number
}

export interface DefaultApiDeleteSeasonRequest {
    /**
     * ID of the Season
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteSeason
     */
    seasonId: number
}

export interface DefaultApiGetAdministratorRequest {
    /**
     * ID of administrator to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetAdministrator
     */
    administratorId: number
}

export interface DefaultApiGetAdministratorsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetAdministrators
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetAdministrators
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetAdministrators
     */
    q?: any
}

export interface DefaultApiGetAuditedFinancialReportStatusRequest {
    /**
     * ID of audited financial report status to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetAuditedFinancialReportStatus
     */
    auditedFinancialReportStatusId: number
}

export interface DefaultApiGetAuditedFinancialReportStatusesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetAuditedFinancialReportStatuses
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetAuditedFinancialReportStatuses
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetAuditedFinancialReportStatuses
     */
    q?: any
}

export interface DefaultApiGetCashflowRequest {
    /**
     * ID of the Cashflow
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetCashflow
     */
    cashflowId: number
}

export interface DefaultApiGetCashflowsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetCashflows
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetCashflows
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetCashflows
     */
    q?: any
}

export interface DefaultApiGetCategoriesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetCategories
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetCategories
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetCategories
     */
    q?: any
}

export interface DefaultApiGetCoachRequest {
    /**
     * ID of coach to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetCoach
     */
    coachId: number
}

export interface DefaultApiGetCoachCompensationRequest {
    /**
     * IDs of the coaches
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DefaultApigetCoachCompensation
     */
    coachesIds: Array<number>
    /**
     * ID of the school whose cost-of-living index should be used
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetCoachCompensation
     */
    userSchoolId: number
}

export interface DefaultApiGetCoachesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetCoaches
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetCoaches
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetCoaches
     */
    q?: any
}

export interface DefaultApiGetCompensationRequest {
    /**
     * ID of compensation to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetCompensation
     */
    compensationId: number
}

export interface DefaultApiGetCompensationsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetCompensations
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetCompensations
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetCompensations
     */
    q?: any
}

export interface DefaultApiGetConferenceRequest {
    /**
     * ID of the Conference
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetConference
     */
    conferenceId: number
}

export interface DefaultApiGetConferencesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetConferences
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetConferences
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetConferences
     */
    q?: any
}

export interface DefaultApiGetConferenceshipRequest {
    /**
     * ID of the Conferenceship
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetConferenceship
     */
    conferenceshipId: number
}

export interface DefaultApiGetConferenceshipsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetConferenceships
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetConferenceships
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetConferenceships
     */
    q?: any
}

export interface DefaultApiGetContactRequest {
    /**
     * ID of contact to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetContact
     */
    contactId: number
}

export interface DefaultApiGetContactsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetContacts
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetContacts
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetContacts
     */
    q?: any
}

export interface DefaultApiGetContractRequest {
    /**
     * ID of contract to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetContract
     */
    contractId: number
}

export interface DefaultApiGetContractsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetContracts
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetContracts
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetContracts
     */
    q?: any
}

export interface DefaultApiGetDealRequest {
    /**
     * ID of the Deal
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetDeal
     */
    dealId: number
}

export interface DefaultApiGetDealStatusRequest {
    /**
     * ID of deal status to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetDealStatus
     */
    dealStatusId: number
}

export interface DefaultApiGetDealStatusesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetDealStatuses
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetDealStatuses
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetDealStatuses
     */
    q?: any
}

export interface DefaultApiGetDealsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetDeals
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetDeals
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetDeals
     */
    q?: any
}

export interface DefaultApiGetDivisionRequest {
    /**
     * ID of the Division
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetDivision
     */
    divisionId: number
}

export interface DefaultApiGetDivisionsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetDivisions
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetDivisions
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetDivisions
     */
    q?: any
}

export interface DefaultApiGetFoiaLabelRequest {
    /**
     * ID of foia label to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetFoiaLabel
     */
    foiaLabelId: number
}

export interface DefaultApiGetFoiaLabelsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetFoiaLabels
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetFoiaLabels
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetFoiaLabels
     */
    q?: any
}

export interface DefaultApiGetFoiaRequestRequest {
    /**
     * ID of foia request to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetFoiaRequest
     */
    foiaRequestId: number
}

export interface DefaultApiGetFoiaRequestsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetFoiaRequests
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetFoiaRequests
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetFoiaRequests
     */
    q?: any
}

export interface DefaultApiGetGameRequest {
    /**
     * ID of game to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetGame
     */
    gameId: number
}

export interface DefaultApiGetGameContractRequest {
    /**
     * ID of the GameContract
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetGameContract
     */
    gameContractId: number
}

export interface DefaultApiGetGameContractsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetGameContracts
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetGameContracts
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetGameContracts
     */
    q?: any
}

export interface DefaultApiGetGamesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetGames
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetGames
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetGames
     */
    q?: any
}

export interface DefaultApiGetIncomeReportRequest {
    /**
     * ID of income report to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetIncomeReport
     */
    incomeReportId: number
}

export interface DefaultApiGetIncomeReportsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetIncomeReports
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetIncomeReports
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetIncomeReports
     */
    q?: any
}

export interface DefaultApiGetJobPostRequest {
    /**
     * ID of job post to return
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetJobPost
     */
    jobPostId: number
}

export interface DefaultApiGetJobPostsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetJobPosts
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetJobPosts
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetJobPosts
     */
    q?: any
}

export interface DefaultApiGetNcaaFinancialReportStatusRequest {
    /**
     * ID of ncaa financial report status to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetNcaaFinancialReportStatus
     */
    ncaaFinancialReportStatusId: number
}

export interface DefaultApiGetNcaaFinancialReportStatusesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetNcaaFinancialReportStatuses
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetNcaaFinancialReportStatuses
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetNcaaFinancialReportStatuses
     */
    q?: any
}

export interface DefaultApiGetNewsFeedRequest {
    /**
     * ID of news feed to return
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetNewsFeed
     */
    newsFeedId: number
}

export interface DefaultApiGetPositionRequest {
    /**
     * ID of position to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetPosition
     */
    positionId: number
}

export interface DefaultApiGetPositionsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetPositions
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetPositions
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetPositions
     */
    q?: any
}

export interface DefaultApiGetRawContractRequest {
    /**
     * ID of the RawContract
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetRawContract
     */
    rawContractId: number
}

export interface DefaultApiGetRawContractsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetRawContracts
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetRawContracts
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetRawContracts
     */
    q?: any
}

export interface DefaultApiGetRequestedItemRequest {
    /**
     * ID of requested item to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetRequestedItem
     */
    requestedItemId: number
}

export interface DefaultApiGetRequestedItemsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetRequestedItems
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetRequestedItems
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetRequestedItems
     */
    q?: any
}

export interface DefaultApiGetSchoolRequest {
    /**
     * ID of school to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetSchool
     */
    schoolId: number
}

export interface DefaultApiGetSchoolAlternateNamesRequest {
    /**
     * ID of school to retrieve alternate names for
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetSchoolAlternateNames
     */
    schoolId: number
}

export interface DefaultApiGetSchoolsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetSchools
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetSchools
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetSchools
     */
    q?: any
}

export interface DefaultApiGetSeasonRequest {
    /**
     * ID of the Season
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetSeason
     */
    seasonId: number
}

export interface DefaultApiGetSeasonsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetSeasons
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetSeasons
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetSeasons
     */
    q?: any
}

export interface DefaultApiGetSimilarCoachesRequest {
    /**
     * ID of coach to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetSimilarCoaches
     */
    coachId: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetSimilarCoaches
     */
    q?: any
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetSimilarCoaches
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetSimilarCoaches
     */
    perPage?: number
}

export interface DefaultApiGetSportRequest {
    /**
     * ID of sport to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetSport
     */
    sportId: number
}

export interface DefaultApiGetSportsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetSports
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetSports
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetSports
     */
    q?: any
}

export interface DefaultApiGetSubdivisionRequest {
    /**
     * ID of the Subdivision
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetSubdivision
     */
    subdivisionId: number
}

export interface DefaultApiGetSubdivisionsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetSubdivisions
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetSubdivisions
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetSubdivisions
     */
    q?: any
}

export interface DefaultApiGetSubscriptionRequest {
    /**
     * ID of the Subscription
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetSubscription
     */
    subscriptionId: number
}

export interface DefaultApiGetSubscriptionsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetSubscriptions
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetSubscriptions
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetSubscriptions
     */
    q?: any
}

export interface DefaultApiGetSystemSettingsRequest {
}

export interface DefaultApiGetUserRequest {
    /**
     * ID of user to retrieve
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetUser
     */
    userId: number
}

export interface DefaultApiGetUsersRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetUsers
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetUsers
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetUsers
     */
    q?: any
}

export interface DefaultApiGetVendorRequest {
    /**
     * ID of the Vendor
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetVendor
     */
    vendorId: number
}

export interface DefaultApiGetVendorsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetVendors
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetVendors
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetVendors
     */
    q?: any
}

export interface DefaultApiGetWireChangesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof DefaultApigetWireChanges
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof DefaultApigetWireChanges
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof DefaultApigetWireChanges
     */
    q?: any
    /**
     * Filter by coach ID
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetWireChanges
     */
    qCoachIdEq?: number
    /**
     * Filter by school ID
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetWireChanges
     */
    qSchoolIdEq?: number
    /**
     * Filter by sport ID
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetWireChanges
     */
    qSportIdEq?: number
}

export interface DefaultApiSearchCoachesRequest {
    /**
     * 
     * @type Filters
     * @memberof DefaultApisearchCoaches
     */
    filters?: Filters
}

export interface DefaultApiUpdateCashflowRequest {
    /**
     * ID of the Cashflow
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateCashflow
     */
    cashflowId: number
    /**
     * Cashflow attributes to update
     * @type Cashflow
     * @memberof DefaultApiupdateCashflow
     */
    cashflow: Cashflow
}

export interface DefaultApiUpdateCoachRequest {
    /**
     * ID of coach to update
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateCoach
     */
    coachId: number
    /**
     * Attributes to update. Currently only supports email, phone, bio, bio_text. Others will be ignored.
     * @type Coach
     * @memberof DefaultApiupdateCoach
     */
    coach: Coach
}

export interface DefaultApiUpdateCompensationRequest {
    /**
     * ID of compensation to update
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateCompensation
     */
    compensationId: number
    /**
     * Compensation to update
     * @type Compensation
     * @memberof DefaultApiupdateCompensation
     */
    compensation: Compensation
}

export interface DefaultApiUpdateConferenceRequest {
    /**
     * ID of the Conference
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateConference
     */
    conferenceId: number
    /**
     * Conference attributes to update
     * @type Conference
     * @memberof DefaultApiupdateConference
     */
    conference: Conference
}

export interface DefaultApiUpdateConferenceshipRequest {
    /**
     * ID of the Conferenceship
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateConferenceship
     */
    conferenceshipId: number
    /**
     * Conferenceship attributes to update
     * @type Conferenceship
     * @memberof DefaultApiupdateConferenceship
     */
    conferenceship: Conferenceship
}

export interface DefaultApiUpdateFoiaLabelRequest {
    /**
     * ID of foia label to update
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateFoiaLabel
     */
    foiaLabelId: number
    /**
     * Foia label to update
     * @type FoiaLabel
     * @memberof DefaultApiupdateFoiaLabel
     */
    foiaLabel: FoiaLabel
}

export interface DefaultApiUpdateFoiaRequestRequest {
    /**
     * ID of foia request to update
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateFoiaRequest
     */
    foiaRequestId: number
    /**
     * Foia request to update
     * @type FoiaRequest
     * @memberof DefaultApiupdateFoiaRequest
     */
    foiaRequest: FoiaRequest
}

export interface DefaultApiUpdateJobPostRequest {
    /**
     * ID of job post to update
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateJobPost
     */
    jobPostId: number
    /**
     * 
     * @type JobPost
     * @memberof DefaultApiupdateJobPost
     */
    jobPost?: JobPost
}

export interface DefaultApiUpdateRequestedItemRequest {
    /**
     * ID of requested item to update
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateRequestedItem
     */
    requestedItemId: number
    /**
     * Requested item to update
     * @type RequestedItem
     * @memberof DefaultApiupdateRequestedItem
     */
    requestedItem: RequestedItem
}

export interface DefaultApiUpdateSeasonRequest {
    /**
     * ID of the Season
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateSeason
     */
    seasonId: number
    /**
     * Season attributes to update
     * @type Season
     * @memberof DefaultApiupdateSeason
     */
    season: Season
}

export interface DefaultApiUserMeRequest {
}

export interface DefaultApiVerifyUserIntercollegiateAccessRequest {
    /**
     * The email of the user whose intercollegiate access is being verified.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiverifyUserIntercollegiateAccess
     */
    userEmail: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve average compensation for a conference
     * @param param the request object
     */
    public averageConferenceCompWithHttpInfo(param: DefaultApiAverageConferenceCompRequest, options?: ConfigurationOptions): Promise<HttpInfo<AverageCompensation>> {
        return this.api.averageConferenceCompWithHttpInfo(param.conferenceId, param.seasonYears, param.sportIds, param.positionTypeIds,  options).toPromise();
    }

    /**
     * Retrieve average compensation for a conference
     * @param param the request object
     */
    public averageConferenceComp(param: DefaultApiAverageConferenceCompRequest, options?: ConfigurationOptions): Promise<AverageCompensation> {
        return this.api.averageConferenceComp(param.conferenceId, param.seasonYears, param.sportIds, param.positionTypeIds,  options).toPromise();
    }

    /**
     * Retrieve average compensation for a division
     * @param param the request object
     */
    public averageDivisionCompWithHttpInfo(param: DefaultApiAverageDivisionCompRequest, options?: ConfigurationOptions): Promise<HttpInfo<AverageCompensation>> {
        return this.api.averageDivisionCompWithHttpInfo(param.divisionId, param.seasonYears, param.sportIds, param.positionTypeIds,  options).toPromise();
    }

    /**
     * Retrieve average compensation for a division
     * @param param the request object
     */
    public averageDivisionComp(param: DefaultApiAverageDivisionCompRequest, options?: ConfigurationOptions): Promise<AverageCompensation> {
        return this.api.averageDivisionComp(param.divisionId, param.seasonYears, param.sportIds, param.positionTypeIds,  options).toPromise();
    }

    /**
     * Retrieve average compensation for a school
     * @param param the request object
     */
    public averageSchoolCompWithHttpInfo(param: DefaultApiAverageSchoolCompRequest, options?: ConfigurationOptions): Promise<HttpInfo<AverageCompensation>> {
        return this.api.averageSchoolCompWithHttpInfo(param.schoolId, param.seasonYears, param.sportIds, param.positionTypeIds,  options).toPromise();
    }

    /**
     * Retrieve average compensation for a school
     * @param param the request object
     */
    public averageSchoolComp(param: DefaultApiAverageSchoolCompRequest, options?: ConfigurationOptions): Promise<AverageCompensation> {
        return this.api.averageSchoolComp(param.schoolId, param.seasonYears, param.sportIds, param.positionTypeIds,  options).toPromise();
    }

    /**
     * Retrieve average compensation for a subdivision
     * @param param the request object
     */
    public averageSubdivisionCompWithHttpInfo(param: DefaultApiAverageSubdivisionCompRequest, options?: ConfigurationOptions): Promise<HttpInfo<AverageCompensation>> {
        return this.api.averageSubdivisionCompWithHttpInfo(param.subdivisionId, param.seasonYears, param.sportIds, param.positionTypeIds,  options).toPromise();
    }

    /**
     * Retrieve average compensation for a subdivision
     * @param param the request object
     */
    public averageSubdivisionComp(param: DefaultApiAverageSubdivisionCompRequest, options?: ConfigurationOptions): Promise<AverageCompensation> {
        return this.api.averageSubdivisionComp(param.subdivisionId, param.seasonYears, param.sportIds, param.positionTypeIds,  options).toPromise();
    }

    /**
     * Retrieve the COLI-adjusted compensation
     * @param param the request object
     */
    public compareColiWithHttpInfo(param: DefaultApiCompareColiRequest, options?: ConfigurationOptions): Promise<HttpInfo<COLIAdjusted>> {
        return this.api.compareColiWithHttpInfo(param.schoolId, param.otherPersonSchoolId, param.otherPersonTotalCompensation,  options).toPromise();
    }

    /**
     * Retrieve the COLI-adjusted compensation
     * @param param the request object
     */
    public compareColi(param: DefaultApiCompareColiRequest, options?: ConfigurationOptions): Promise<COLIAdjusted> {
        return this.api.compareColi(param.schoolId, param.otherPersonSchoolId, param.otherPersonTotalCompensation,  options).toPromise();
    }

    /**
     * Create a new Cashflow
     * @param param the request object
     */
    public createCashflowWithHttpInfo(param: DefaultApiCreateCashflowRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Cashflow>> {
        return this.api.createCashflowWithHttpInfo(param.cashflow,  options).toPromise();
    }

    /**
     * Create a new Cashflow
     * @param param the request object
     */
    public createCashflow(param: DefaultApiCreateCashflowRequest = {}, options?: ConfigurationOptions): Promise<Cashflow> {
        return this.api.createCashflow(param.cashflow,  options).toPromise();
    }

    /**
     * Create a new Conference
     * @param param the request object
     */
    public createConferenceWithHttpInfo(param: DefaultApiCreateConferenceRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Conference>> {
        return this.api.createConferenceWithHttpInfo(param.conference,  options).toPromise();
    }

    /**
     * Create a new Conference
     * @param param the request object
     */
    public createConference(param: DefaultApiCreateConferenceRequest = {}, options?: ConfigurationOptions): Promise<Conference> {
        return this.api.createConference(param.conference,  options).toPromise();
    }

    /**
     * Create a new Conferenceship
     * @param param the request object
     */
    public createConferenceshipWithHttpInfo(param: DefaultApiCreateConferenceshipRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Conferenceship>> {
        return this.api.createConferenceshipWithHttpInfo(param.conferenceship,  options).toPromise();
    }

    /**
     * Create a new Conferenceship
     * @param param the request object
     */
    public createConferenceship(param: DefaultApiCreateConferenceshipRequest = {}, options?: ConfigurationOptions): Promise<Conferenceship> {
        return this.api.createConferenceship(param.conferenceship,  options).toPromise();
    }

    /**
     * Create a new foia label
     * @param param the request object
     */
    public createFoiaLabelWithHttpInfo(param: DefaultApiCreateFoiaLabelRequest, options?: ConfigurationOptions): Promise<HttpInfo<FoiaLabel>> {
        return this.api.createFoiaLabelWithHttpInfo(param.foiaLabel,  options).toPromise();
    }

    /**
     * Create a new foia label
     * @param param the request object
     */
    public createFoiaLabel(param: DefaultApiCreateFoiaLabelRequest, options?: ConfigurationOptions): Promise<FoiaLabel> {
        return this.api.createFoiaLabel(param.foiaLabel,  options).toPromise();
    }

    /**
     * Create a new foia request
     * @param param the request object
     */
    public createFoiaRequestWithHttpInfo(param: DefaultApiCreateFoiaRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<FoiaRequest>> {
        return this.api.createFoiaRequestWithHttpInfo(param.foiaRequest,  options).toPromise();
    }

    /**
     * Create a new foia request
     * @param param the request object
     */
    public createFoiaRequest(param: DefaultApiCreateFoiaRequestRequest, options?: ConfigurationOptions): Promise<FoiaRequest> {
        return this.api.createFoiaRequest(param.foiaRequest,  options).toPromise();
    }

    /**
     * Create a job post
     * Create a job post
     * @param param the request object
     */
    public createJobPostWithHttpInfo(param: DefaultApiCreateJobPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<JobPost>> {
        return this.api.createJobPostWithHttpInfo(param.jobPost,  options).toPromise();
    }

    /**
     * Create a job post
     * Create a job post
     * @param param the request object
     */
    public createJobPost(param: DefaultApiCreateJobPostRequest = {}, options?: ConfigurationOptions): Promise<JobPost> {
        return this.api.createJobPost(param.jobPost,  options).toPromise();
    }

    /**
     * Create a new requested item
     * @param param the request object
     */
    public createRequestedItemWithHttpInfo(param: DefaultApiCreateRequestedItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestedItem>> {
        return this.api.createRequestedItemWithHttpInfo(param.requestedItem,  options).toPromise();
    }

    /**
     * Create a new requested item
     * @param param the request object
     */
    public createRequestedItem(param: DefaultApiCreateRequestedItemRequest, options?: ConfigurationOptions): Promise<RequestedItem> {
        return this.api.createRequestedItem(param.requestedItem,  options).toPromise();
    }

    /**
     * Create a new Season
     * @param param the request object
     */
    public createSeasonWithHttpInfo(param: DefaultApiCreateSeasonRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Season>> {
        return this.api.createSeasonWithHttpInfo(param.season,  options).toPromise();
    }

    /**
     * Create a new Season
     * @param param the request object
     */
    public createSeason(param: DefaultApiCreateSeasonRequest = {}, options?: ConfigurationOptions): Promise<Season> {
        return this.api.createSeason(param.season,  options).toPromise();
    }

    /**
     * Delete a single Cashflow
     * @param param the request object
     */
    public deleteCashflowWithHttpInfo(param: DefaultApiDeleteCashflowRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCashflowWithHttpInfo(param.cashflowId,  options).toPromise();
    }

    /**
     * Delete a single Cashflow
     * @param param the request object
     */
    public deleteCashflow(param: DefaultApiDeleteCashflowRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCashflow(param.cashflowId,  options).toPromise();
    }

    /**
     * Delete a single Conference
     * @param param the request object
     */
    public deleteConferenceWithHttpInfo(param: DefaultApiDeleteConferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteConferenceWithHttpInfo(param.conferenceId,  options).toPromise();
    }

    /**
     * Delete a single Conference
     * @param param the request object
     */
    public deleteConference(param: DefaultApiDeleteConferenceRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteConference(param.conferenceId,  options).toPromise();
    }

    /**
     * Delete a single Conferenceship
     * @param param the request object
     */
    public deleteConferenceshipWithHttpInfo(param: DefaultApiDeleteConferenceshipRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteConferenceshipWithHttpInfo(param.conferenceshipId,  options).toPromise();
    }

    /**
     * Delete a single Conferenceship
     * @param param the request object
     */
    public deleteConferenceship(param: DefaultApiDeleteConferenceshipRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteConferenceship(param.conferenceshipId,  options).toPromise();
    }

    /**
     * Delete a single foia label
     * @param param the request object
     */
    public deleteFoiaLabelWithHttpInfo(param: DefaultApiDeleteFoiaLabelRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFoiaLabelWithHttpInfo(param.foiaLabelId,  options).toPromise();
    }

    /**
     * Delete a single foia label
     * @param param the request object
     */
    public deleteFoiaLabel(param: DefaultApiDeleteFoiaLabelRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFoiaLabel(param.foiaLabelId,  options).toPromise();
    }

    /**
     * Delete a single foia request
     * @param param the request object
     */
    public deleteFoiaRequestWithHttpInfo(param: DefaultApiDeleteFoiaRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFoiaRequestWithHttpInfo(param.foiaRequestId,  options).toPromise();
    }

    /**
     * Delete a single foia request
     * @param param the request object
     */
    public deleteFoiaRequest(param: DefaultApiDeleteFoiaRequestRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFoiaRequest(param.foiaRequestId,  options).toPromise();
    }

    /**
     * Delete a job post
     * Delete a job post
     * @param param the request object
     */
    public deleteJobPostWithHttpInfo(param: DefaultApiDeleteJobPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteJobPostWithHttpInfo(param.jobPostId,  options).toPromise();
    }

    /**
     * Delete a job post
     * Delete a job post
     * @param param the request object
     */
    public deleteJobPost(param: DefaultApiDeleteJobPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteJobPost(param.jobPostId,  options).toPromise();
    }

    /**
     * Delete a single requested item
     * @param param the request object
     */
    public deleteRequestedItemWithHttpInfo(param: DefaultApiDeleteRequestedItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRequestedItemWithHttpInfo(param.requestedItemId,  options).toPromise();
    }

    /**
     * Delete a single requested item
     * @param param the request object
     */
    public deleteRequestedItem(param: DefaultApiDeleteRequestedItemRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRequestedItem(param.requestedItemId,  options).toPromise();
    }

    /**
     * Delete a single Season
     * @param param the request object
     */
    public deleteSeasonWithHttpInfo(param: DefaultApiDeleteSeasonRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSeasonWithHttpInfo(param.seasonId,  options).toPromise();
    }

    /**
     * Delete a single Season
     * @param param the request object
     */
    public deleteSeason(param: DefaultApiDeleteSeasonRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSeason(param.seasonId,  options).toPromise();
    }

    /**
     * Retrieve a single administrator
     * @param param the request object
     */
    public getAdministratorWithHttpInfo(param: DefaultApiGetAdministratorRequest, options?: ConfigurationOptions): Promise<HttpInfo<Administrator>> {
        return this.api.getAdministratorWithHttpInfo(param.administratorId,  options).toPromise();
    }

    /**
     * Retrieve a single administrator
     * @param param the request object
     */
    public getAdministrator(param: DefaultApiGetAdministratorRequest, options?: ConfigurationOptions): Promise<Administrator> {
        return this.api.getAdministrator(param.administratorId,  options).toPromise();
    }

    /**
     * Retrieve some or all administrators
     * @param param the request object
     */
    public getAdministratorsWithHttpInfo(param: DefaultApiGetAdministratorsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AdministratorCollection>> {
        return this.api.getAdministratorsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all administrators
     * @param param the request object
     */
    public getAdministrators(param: DefaultApiGetAdministratorsRequest = {}, options?: ConfigurationOptions): Promise<AdministratorCollection> {
        return this.api.getAdministrators(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single audited financial report status
     * @param param the request object
     */
    public getAuditedFinancialReportStatusWithHttpInfo(param: DefaultApiGetAuditedFinancialReportStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<AuditedFinancialReportStatus>> {
        return this.api.getAuditedFinancialReportStatusWithHttpInfo(param.auditedFinancialReportStatusId,  options).toPromise();
    }

    /**
     * Retrieve a single audited financial report status
     * @param param the request object
     */
    public getAuditedFinancialReportStatus(param: DefaultApiGetAuditedFinancialReportStatusRequest, options?: ConfigurationOptions): Promise<AuditedFinancialReportStatus> {
        return this.api.getAuditedFinancialReportStatus(param.auditedFinancialReportStatusId,  options).toPromise();
    }

    /**
     * Retrieve some or all audited financial report statuses
     * @param param the request object
     */
    public getAuditedFinancialReportStatusesWithHttpInfo(param: DefaultApiGetAuditedFinancialReportStatusesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AuditedFinancialReportStatusCollection>> {
        return this.api.getAuditedFinancialReportStatusesWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all audited financial report statuses
     * @param param the request object
     */
    public getAuditedFinancialReportStatuses(param: DefaultApiGetAuditedFinancialReportStatusesRequest = {}, options?: ConfigurationOptions): Promise<AuditedFinancialReportStatusCollection> {
        return this.api.getAuditedFinancialReportStatuses(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Cashflow
     * @param param the request object
     */
    public getCashflowWithHttpInfo(param: DefaultApiGetCashflowRequest, options?: ConfigurationOptions): Promise<HttpInfo<Cashflow>> {
        return this.api.getCashflowWithHttpInfo(param.cashflowId,  options).toPromise();
    }

    /**
     * Retrieve a single Cashflow
     * @param param the request object
     */
    public getCashflow(param: DefaultApiGetCashflowRequest, options?: ConfigurationOptions): Promise<Cashflow> {
        return this.api.getCashflow(param.cashflowId,  options).toPromise();
    }

    /**
     * Retrieve some or all cashflows
     * @param param the request object
     */
    public getCashflowsWithHttpInfo(param: DefaultApiGetCashflowsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CashflowCollection>> {
        return this.api.getCashflowsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all cashflows
     * @param param the request object
     */
    public getCashflows(param: DefaultApiGetCashflowsRequest = {}, options?: ConfigurationOptions): Promise<CashflowCollection> {
        return this.api.getCashflows(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * List all categories
     * List all categories
     * @param param the request object
     */
    public getCategoriesWithHttpInfo(param: DefaultApiGetCategoriesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CategoryCollection>> {
        return this.api.getCategoriesWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * List all categories
     * List all categories
     * @param param the request object
     */
    public getCategories(param: DefaultApiGetCategoriesRequest = {}, options?: ConfigurationOptions): Promise<CategoryCollection> {
        return this.api.getCategories(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single coach
     * @param param the request object
     */
    public getCoachWithHttpInfo(param: DefaultApiGetCoachRequest, options?: ConfigurationOptions): Promise<HttpInfo<Coach>> {
        return this.api.getCoachWithHttpInfo(param.coachId,  options).toPromise();
    }

    /**
     * Retrieve a single coach
     * @param param the request object
     */
    public getCoach(param: DefaultApiGetCoachRequest, options?: ConfigurationOptions): Promise<Coach> {
        return this.api.getCoach(param.coachId,  options).toPromise();
    }

    /**
     * Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach
     * @param param the request object
     */
    public getCoachCompensationWithHttpInfo(param: DefaultApiGetCoachCompensationRequest, options?: ConfigurationOptions): Promise<HttpInfo<CoachCompensation>> {
        return this.api.getCoachCompensationWithHttpInfo(param.coachesIds, param.userSchoolId,  options).toPromise();
    }

    /**
     * Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach
     * @param param the request object
     */
    public getCoachCompensation(param: DefaultApiGetCoachCompensationRequest, options?: ConfigurationOptions): Promise<CoachCompensation> {
        return this.api.getCoachCompensation(param.coachesIds, param.userSchoolId,  options).toPromise();
    }

    /**
     * Retrieve some or all coaches
     * @param param the request object
     */
    public getCoachesWithHttpInfo(param: DefaultApiGetCoachesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CoachCollection>> {
        return this.api.getCoachesWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all coaches
     * @param param the request object
     */
    public getCoaches(param: DefaultApiGetCoachesRequest = {}, options?: ConfigurationOptions): Promise<CoachCollection> {
        return this.api.getCoaches(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single compensation
     * @param param the request object
     */
    public getCompensationWithHttpInfo(param: DefaultApiGetCompensationRequest, options?: ConfigurationOptions): Promise<HttpInfo<Compensation>> {
        return this.api.getCompensationWithHttpInfo(param.compensationId,  options).toPromise();
    }

    /**
     * Retrieve a single compensation
     * @param param the request object
     */
    public getCompensation(param: DefaultApiGetCompensationRequest, options?: ConfigurationOptions): Promise<Compensation> {
        return this.api.getCompensation(param.compensationId,  options).toPromise();
    }

    /**
     * Retrieve some or all compensations
     * @param param the request object
     */
    public getCompensationsWithHttpInfo(param: DefaultApiGetCompensationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CompensationCollection>> {
        return this.api.getCompensationsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all compensations
     * @param param the request object
     */
    public getCompensations(param: DefaultApiGetCompensationsRequest = {}, options?: ConfigurationOptions): Promise<CompensationCollection> {
        return this.api.getCompensations(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Conference
     * @param param the request object
     */
    public getConferenceWithHttpInfo(param: DefaultApiGetConferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Conference>> {
        return this.api.getConferenceWithHttpInfo(param.conferenceId,  options).toPromise();
    }

    /**
     * Retrieve a single Conference
     * @param param the request object
     */
    public getConference(param: DefaultApiGetConferenceRequest, options?: ConfigurationOptions): Promise<Conference> {
        return this.api.getConference(param.conferenceId,  options).toPromise();
    }

    /**
     * Retrieve some or all conferences
     * @param param the request object
     */
    public getConferencesWithHttpInfo(param: DefaultApiGetConferencesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ConferenceCollection>> {
        return this.api.getConferencesWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all conferences
     * @param param the request object
     */
    public getConferences(param: DefaultApiGetConferencesRequest = {}, options?: ConfigurationOptions): Promise<ConferenceCollection> {
        return this.api.getConferences(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Conferenceship
     * @param param the request object
     */
    public getConferenceshipWithHttpInfo(param: DefaultApiGetConferenceshipRequest, options?: ConfigurationOptions): Promise<HttpInfo<Conferenceship>> {
        return this.api.getConferenceshipWithHttpInfo(param.conferenceshipId,  options).toPromise();
    }

    /**
     * Retrieve a single Conferenceship
     * @param param the request object
     */
    public getConferenceship(param: DefaultApiGetConferenceshipRequest, options?: ConfigurationOptions): Promise<Conferenceship> {
        return this.api.getConferenceship(param.conferenceshipId,  options).toPromise();
    }

    /**
     * Retrieve some or all conferenceships
     * @param param the request object
     */
    public getConferenceshipsWithHttpInfo(param: DefaultApiGetConferenceshipsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ConferenceshipCollection>> {
        return this.api.getConferenceshipsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all conferenceships
     * @param param the request object
     */
    public getConferenceships(param: DefaultApiGetConferenceshipsRequest = {}, options?: ConfigurationOptions): Promise<ConferenceshipCollection> {
        return this.api.getConferenceships(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single contact
     * @param param the request object
     */
    public getContactWithHttpInfo(param: DefaultApiGetContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<Contact>> {
        return this.api.getContactWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Retrieve a single contact
     * @param param the request object
     */
    public getContact(param: DefaultApiGetContactRequest, options?: ConfigurationOptions): Promise<Contact> {
        return this.api.getContact(param.contactId,  options).toPromise();
    }

    /**
     * Retrieve some or all contacts
     * @param param the request object
     */
    public getContactsWithHttpInfo(param: DefaultApiGetContactsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ContactCollection>> {
        return this.api.getContactsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all contacts
     * @param param the request object
     */
    public getContacts(param: DefaultApiGetContactsRequest = {}, options?: ConfigurationOptions): Promise<ContactCollection> {
        return this.api.getContacts(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single contract
     * @param param the request object
     */
    public getContractWithHttpInfo(param: DefaultApiGetContractRequest, options?: ConfigurationOptions): Promise<HttpInfo<Contract>> {
        return this.api.getContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Retrieve a single contract
     * @param param the request object
     */
    public getContract(param: DefaultApiGetContractRequest, options?: ConfigurationOptions): Promise<Contract> {
        return this.api.getContract(param.contractId,  options).toPromise();
    }

    /**
     * Retrieve some or all contracts
     * @param param the request object
     */
    public getContractsWithHttpInfo(param: DefaultApiGetContractsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ContractCollection>> {
        return this.api.getContractsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all contracts
     * @param param the request object
     */
    public getContracts(param: DefaultApiGetContractsRequest = {}, options?: ConfigurationOptions): Promise<ContractCollection> {
        return this.api.getContracts(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Deal
     * @param param the request object
     */
    public getDealWithHttpInfo(param: DefaultApiGetDealRequest, options?: ConfigurationOptions): Promise<HttpInfo<Deal>> {
        return this.api.getDealWithHttpInfo(param.dealId,  options).toPromise();
    }

    /**
     * Retrieve a single Deal
     * @param param the request object
     */
    public getDeal(param: DefaultApiGetDealRequest, options?: ConfigurationOptions): Promise<Deal> {
        return this.api.getDeal(param.dealId,  options).toPromise();
    }

    /**
     * Retrieve a single deal status
     * @param param the request object
     */
    public getDealStatusWithHttpInfo(param: DefaultApiGetDealStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<DealStatus>> {
        return this.api.getDealStatusWithHttpInfo(param.dealStatusId,  options).toPromise();
    }

    /**
     * Retrieve a single deal status
     * @param param the request object
     */
    public getDealStatus(param: DefaultApiGetDealStatusRequest, options?: ConfigurationOptions): Promise<DealStatus> {
        return this.api.getDealStatus(param.dealStatusId,  options).toPromise();
    }

    /**
     * Retrieve some or all deal statuses
     * @param param the request object
     */
    public getDealStatusesWithHttpInfo(param: DefaultApiGetDealStatusesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DealStatusCollection>> {
        return this.api.getDealStatusesWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all deal statuses
     * @param param the request object
     */
    public getDealStatuses(param: DefaultApiGetDealStatusesRequest = {}, options?: ConfigurationOptions): Promise<DealStatusCollection> {
        return this.api.getDealStatuses(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all deals
     * @param param the request object
     */
    public getDealsWithHttpInfo(param: DefaultApiGetDealsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DealCollection>> {
        return this.api.getDealsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all deals
     * @param param the request object
     */
    public getDeals(param: DefaultApiGetDealsRequest = {}, options?: ConfigurationOptions): Promise<DealCollection> {
        return this.api.getDeals(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Division
     * @param param the request object
     */
    public getDivisionWithHttpInfo(param: DefaultApiGetDivisionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Division>> {
        return this.api.getDivisionWithHttpInfo(param.divisionId,  options).toPromise();
    }

    /**
     * Retrieve a single Division
     * @param param the request object
     */
    public getDivision(param: DefaultApiGetDivisionRequest, options?: ConfigurationOptions): Promise<Division> {
        return this.api.getDivision(param.divisionId,  options).toPromise();
    }

    /**
     * Retrieve some or all divisions
     * @param param the request object
     */
    public getDivisionsWithHttpInfo(param: DefaultApiGetDivisionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DivisionCollection>> {
        return this.api.getDivisionsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all divisions
     * @param param the request object
     */
    public getDivisions(param: DefaultApiGetDivisionsRequest = {}, options?: ConfigurationOptions): Promise<DivisionCollection> {
        return this.api.getDivisions(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single foia label
     * @param param the request object
     */
    public getFoiaLabelWithHttpInfo(param: DefaultApiGetFoiaLabelRequest, options?: ConfigurationOptions): Promise<HttpInfo<FoiaLabel>> {
        return this.api.getFoiaLabelWithHttpInfo(param.foiaLabelId,  options).toPromise();
    }

    /**
     * Retrieve a single foia label
     * @param param the request object
     */
    public getFoiaLabel(param: DefaultApiGetFoiaLabelRequest, options?: ConfigurationOptions): Promise<FoiaLabel> {
        return this.api.getFoiaLabel(param.foiaLabelId,  options).toPromise();
    }

    /**
     * Retrieve some or all foia labels
     * @param param the request object
     */
    public getFoiaLabelsWithHttpInfo(param: DefaultApiGetFoiaLabelsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FoiaLabelCollection>> {
        return this.api.getFoiaLabelsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all foia labels
     * @param param the request object
     */
    public getFoiaLabels(param: DefaultApiGetFoiaLabelsRequest = {}, options?: ConfigurationOptions): Promise<FoiaLabelCollection> {
        return this.api.getFoiaLabels(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single foia request
     * @param param the request object
     */
    public getFoiaRequestWithHttpInfo(param: DefaultApiGetFoiaRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<FoiaRequest>> {
        return this.api.getFoiaRequestWithHttpInfo(param.foiaRequestId,  options).toPromise();
    }

    /**
     * Retrieve a single foia request
     * @param param the request object
     */
    public getFoiaRequest(param: DefaultApiGetFoiaRequestRequest, options?: ConfigurationOptions): Promise<FoiaRequest> {
        return this.api.getFoiaRequest(param.foiaRequestId,  options).toPromise();
    }

    /**
     * Retrieve some or all foia requests
     * @param param the request object
     */
    public getFoiaRequestsWithHttpInfo(param: DefaultApiGetFoiaRequestsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FoiaRequestCollection>> {
        return this.api.getFoiaRequestsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all foia requests
     * @param param the request object
     */
    public getFoiaRequests(param: DefaultApiGetFoiaRequestsRequest = {}, options?: ConfigurationOptions): Promise<FoiaRequestCollection> {
        return this.api.getFoiaRequests(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single game
     * @param param the request object
     */
    public getGameWithHttpInfo(param: DefaultApiGetGameRequest, options?: ConfigurationOptions): Promise<HttpInfo<Game>> {
        return this.api.getGameWithHttpInfo(param.gameId,  options).toPromise();
    }

    /**
     * Retrieve a single game
     * @param param the request object
     */
    public getGame(param: DefaultApiGetGameRequest, options?: ConfigurationOptions): Promise<Game> {
        return this.api.getGame(param.gameId,  options).toPromise();
    }

    /**
     * Retrieve a single GameContract
     * @param param the request object
     */
    public getGameContractWithHttpInfo(param: DefaultApiGetGameContractRequest, options?: ConfigurationOptions): Promise<HttpInfo<GameContract>> {
        return this.api.getGameContractWithHttpInfo(param.gameContractId,  options).toPromise();
    }

    /**
     * Retrieve a single GameContract
     * @param param the request object
     */
    public getGameContract(param: DefaultApiGetGameContractRequest, options?: ConfigurationOptions): Promise<GameContract> {
        return this.api.getGameContract(param.gameContractId,  options).toPromise();
    }

    /**
     * Retrieve some or all game_contracts
     * @param param the request object
     */
    public getGameContractsWithHttpInfo(param: DefaultApiGetGameContractsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GameContractCollection>> {
        return this.api.getGameContractsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all game_contracts
     * @param param the request object
     */
    public getGameContracts(param: DefaultApiGetGameContractsRequest = {}, options?: ConfigurationOptions): Promise<GameContractCollection> {
        return this.api.getGameContracts(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all games
     * @param param the request object
     */
    public getGamesWithHttpInfo(param: DefaultApiGetGamesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GameCollection>> {
        return this.api.getGamesWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all games
     * @param param the request object
     */
    public getGames(param: DefaultApiGetGamesRequest = {}, options?: ConfigurationOptions): Promise<GameCollection> {
        return this.api.getGames(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single income report
     * @param param the request object
     */
    public getIncomeReportWithHttpInfo(param: DefaultApiGetIncomeReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<IncomeReport>> {
        return this.api.getIncomeReportWithHttpInfo(param.incomeReportId,  options).toPromise();
    }

    /**
     * Retrieve a single income report
     * @param param the request object
     */
    public getIncomeReport(param: DefaultApiGetIncomeReportRequest, options?: ConfigurationOptions): Promise<IncomeReport> {
        return this.api.getIncomeReport(param.incomeReportId,  options).toPromise();
    }

    /**
     * Retrieve some or all income reports
     * @param param the request object
     */
    public getIncomeReportsWithHttpInfo(param: DefaultApiGetIncomeReportsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<IncomeReportCollection>> {
        return this.api.getIncomeReportsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all income reports
     * @param param the request object
     */
    public getIncomeReports(param: DefaultApiGetIncomeReportsRequest = {}, options?: ConfigurationOptions): Promise<IncomeReportCollection> {
        return this.api.getIncomeReports(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Get a job post
     * Get a job post
     * @param param the request object
     */
    public getJobPostWithHttpInfo(param: DefaultApiGetJobPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<JobPost>> {
        return this.api.getJobPostWithHttpInfo(param.jobPostId,  options).toPromise();
    }

    /**
     * Get a job post
     * Get a job post
     * @param param the request object
     */
    public getJobPost(param: DefaultApiGetJobPostRequest, options?: ConfigurationOptions): Promise<JobPost> {
        return this.api.getJobPost(param.jobPostId,  options).toPromise();
    }

    /**
     * List all job posts
     * List all job posts
     * @param param the request object
     */
    public getJobPostsWithHttpInfo(param: DefaultApiGetJobPostsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<JobPostCollection>> {
        return this.api.getJobPostsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * List all job posts
     * List all job posts
     * @param param the request object
     */
    public getJobPosts(param: DefaultApiGetJobPostsRequest = {}, options?: ConfigurationOptions): Promise<JobPostCollection> {
        return this.api.getJobPosts(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single ncaa financial report status
     * @param param the request object
     */
    public getNcaaFinancialReportStatusWithHttpInfo(param: DefaultApiGetNcaaFinancialReportStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<NcaaFinancialReportStatus>> {
        return this.api.getNcaaFinancialReportStatusWithHttpInfo(param.ncaaFinancialReportStatusId,  options).toPromise();
    }

    /**
     * Retrieve a single ncaa financial report status
     * @param param the request object
     */
    public getNcaaFinancialReportStatus(param: DefaultApiGetNcaaFinancialReportStatusRequest, options?: ConfigurationOptions): Promise<NcaaFinancialReportStatus> {
        return this.api.getNcaaFinancialReportStatus(param.ncaaFinancialReportStatusId,  options).toPromise();
    }

    /**
     * Retrieve some or all ncaa financial report statuses
     * @param param the request object
     */
    public getNcaaFinancialReportStatusesWithHttpInfo(param: DefaultApiGetNcaaFinancialReportStatusesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<NcaaFinancialReportStatusCollection>> {
        return this.api.getNcaaFinancialReportStatusesWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all ncaa financial report statuses
     * @param param the request object
     */
    public getNcaaFinancialReportStatuses(param: DefaultApiGetNcaaFinancialReportStatusesRequest = {}, options?: ConfigurationOptions): Promise<NcaaFinancialReportStatusCollection> {
        return this.api.getNcaaFinancialReportStatuses(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Get a news feed
     * Get a news feed
     * @param param the request object
     */
    public getNewsFeedWithHttpInfo(param: DefaultApiGetNewsFeedRequest, options?: ConfigurationOptions): Promise<HttpInfo<NewsFeed>> {
        return this.api.getNewsFeedWithHttpInfo(param.newsFeedId,  options).toPromise();
    }

    /**
     * Get a news feed
     * Get a news feed
     * @param param the request object
     */
    public getNewsFeed(param: DefaultApiGetNewsFeedRequest, options?: ConfigurationOptions): Promise<NewsFeed> {
        return this.api.getNewsFeed(param.newsFeedId,  options).toPromise();
    }

    /**
     * Retrieve a single position
     * @param param the request object
     */
    public getPositionWithHttpInfo(param: DefaultApiGetPositionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Position>> {
        return this.api.getPositionWithHttpInfo(param.positionId,  options).toPromise();
    }

    /**
     * Retrieve a single position
     * @param param the request object
     */
    public getPosition(param: DefaultApiGetPositionRequest, options?: ConfigurationOptions): Promise<Position> {
        return this.api.getPosition(param.positionId,  options).toPromise();
    }

    /**
     * Retrieve some or all positions
     * @param param the request object
     */
    public getPositionsWithHttpInfo(param: DefaultApiGetPositionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PositionCollection>> {
        return this.api.getPositionsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all positions
     * @param param the request object
     */
    public getPositions(param: DefaultApiGetPositionsRequest = {}, options?: ConfigurationOptions): Promise<PositionCollection> {
        return this.api.getPositions(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single RawContract
     * @param param the request object
     */
    public getRawContractWithHttpInfo(param: DefaultApiGetRawContractRequest, options?: ConfigurationOptions): Promise<HttpInfo<RawContract>> {
        return this.api.getRawContractWithHttpInfo(param.rawContractId,  options).toPromise();
    }

    /**
     * Retrieve a single RawContract
     * @param param the request object
     */
    public getRawContract(param: DefaultApiGetRawContractRequest, options?: ConfigurationOptions): Promise<RawContract> {
        return this.api.getRawContract(param.rawContractId,  options).toPromise();
    }

    /**
     * Retrieve some or all raw_contracts
     * @param param the request object
     */
    public getRawContractsWithHttpInfo(param: DefaultApiGetRawContractsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RawContractCollection>> {
        return this.api.getRawContractsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all raw_contracts
     * @param param the request object
     */
    public getRawContracts(param: DefaultApiGetRawContractsRequest = {}, options?: ConfigurationOptions): Promise<RawContractCollection> {
        return this.api.getRawContracts(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single requested item
     * @param param the request object
     */
    public getRequestedItemWithHttpInfo(param: DefaultApiGetRequestedItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestedItem>> {
        return this.api.getRequestedItemWithHttpInfo(param.requestedItemId,  options).toPromise();
    }

    /**
     * Retrieve a single requested item
     * @param param the request object
     */
    public getRequestedItem(param: DefaultApiGetRequestedItemRequest, options?: ConfigurationOptions): Promise<RequestedItem> {
        return this.api.getRequestedItem(param.requestedItemId,  options).toPromise();
    }

    /**
     * Retrieve some or all requested items
     * @param param the request object
     */
    public getRequestedItemsWithHttpInfo(param: DefaultApiGetRequestedItemsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RequestedItemCollection>> {
        return this.api.getRequestedItemsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all requested items
     * @param param the request object
     */
    public getRequestedItems(param: DefaultApiGetRequestedItemsRequest = {}, options?: ConfigurationOptions): Promise<RequestedItemCollection> {
        return this.api.getRequestedItems(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single school
     * @param param the request object
     */
    public getSchoolWithHttpInfo(param: DefaultApiGetSchoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<School>> {
        return this.api.getSchoolWithHttpInfo(param.schoolId,  options).toPromise();
    }

    /**
     * Retrieve a single school
     * @param param the request object
     */
    public getSchool(param: DefaultApiGetSchoolRequest, options?: ConfigurationOptions): Promise<School> {
        return this.api.getSchool(param.schoolId,  options).toPromise();
    }

    /**
     * Retrieve alternate names for a specific school
     * @param param the request object
     */
    public getSchoolAlternateNamesWithHttpInfo(param: DefaultApiGetSchoolAlternateNamesRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetSchoolAlternateNames200Response>> {
        return this.api.getSchoolAlternateNamesWithHttpInfo(param.schoolId,  options).toPromise();
    }

    /**
     * Retrieve alternate names for a specific school
     * @param param the request object
     */
    public getSchoolAlternateNames(param: DefaultApiGetSchoolAlternateNamesRequest, options?: ConfigurationOptions): Promise<GetSchoolAlternateNames200Response> {
        return this.api.getSchoolAlternateNames(param.schoolId,  options).toPromise();
    }

    /**
     * Retrieve some or all schools
     * @param param the request object
     */
    public getSchoolsWithHttpInfo(param: DefaultApiGetSchoolsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SchoolCollection>> {
        return this.api.getSchoolsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all schools
     * @param param the request object
     */
    public getSchools(param: DefaultApiGetSchoolsRequest = {}, options?: ConfigurationOptions): Promise<SchoolCollection> {
        return this.api.getSchools(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Season
     * @param param the request object
     */
    public getSeasonWithHttpInfo(param: DefaultApiGetSeasonRequest, options?: ConfigurationOptions): Promise<HttpInfo<Season>> {
        return this.api.getSeasonWithHttpInfo(param.seasonId,  options).toPromise();
    }

    /**
     * Retrieve a single Season
     * @param param the request object
     */
    public getSeason(param: DefaultApiGetSeasonRequest, options?: ConfigurationOptions): Promise<Season> {
        return this.api.getSeason(param.seasonId,  options).toPromise();
    }

    /**
     * Retrieve some or all seasons
     * @param param the request object
     */
    public getSeasonsWithHttpInfo(param: DefaultApiGetSeasonsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SeasonCollection>> {
        return this.api.getSeasonsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all seasons
     * @param param the request object
     */
    public getSeasons(param: DefaultApiGetSeasonsRequest = {}, options?: ConfigurationOptions): Promise<SeasonCollection> {
        return this.api.getSeasons(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve similar coaches based on coach ID
     * @param param the request object
     */
    public getSimilarCoachesWithHttpInfo(param: DefaultApiGetSimilarCoachesRequest, options?: ConfigurationOptions): Promise<HttpInfo<CoachCollection>> {
        return this.api.getSimilarCoachesWithHttpInfo(param.coachId, param.q, param.page, param.perPage,  options).toPromise();
    }

    /**
     * Retrieve similar coaches based on coach ID
     * @param param the request object
     */
    public getSimilarCoaches(param: DefaultApiGetSimilarCoachesRequest, options?: ConfigurationOptions): Promise<CoachCollection> {
        return this.api.getSimilarCoaches(param.coachId, param.q, param.page, param.perPage,  options).toPromise();
    }

    /**
     * Retrieve a single sport
     * @param param the request object
     */
    public getSportWithHttpInfo(param: DefaultApiGetSportRequest, options?: ConfigurationOptions): Promise<HttpInfo<Sport>> {
        return this.api.getSportWithHttpInfo(param.sportId,  options).toPromise();
    }

    /**
     * Retrieve a single sport
     * @param param the request object
     */
    public getSport(param: DefaultApiGetSportRequest, options?: ConfigurationOptions): Promise<Sport> {
        return this.api.getSport(param.sportId,  options).toPromise();
    }

    /**
     * Retrieve some or all sports
     * @param param the request object
     */
    public getSportsWithHttpInfo(param: DefaultApiGetSportsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SportCollection>> {
        return this.api.getSportsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all sports
     * @param param the request object
     */
    public getSports(param: DefaultApiGetSportsRequest = {}, options?: ConfigurationOptions): Promise<SportCollection> {
        return this.api.getSports(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Subdivision
     * @param param the request object
     */
    public getSubdivisionWithHttpInfo(param: DefaultApiGetSubdivisionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Subdivision>> {
        return this.api.getSubdivisionWithHttpInfo(param.subdivisionId,  options).toPromise();
    }

    /**
     * Retrieve a single Subdivision
     * @param param the request object
     */
    public getSubdivision(param: DefaultApiGetSubdivisionRequest, options?: ConfigurationOptions): Promise<Subdivision> {
        return this.api.getSubdivision(param.subdivisionId,  options).toPromise();
    }

    /**
     * Retrieve some or all subdivisions
     * @param param the request object
     */
    public getSubdivisionsWithHttpInfo(param: DefaultApiGetSubdivisionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SubdivisionCollection>> {
        return this.api.getSubdivisionsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all subdivisions
     * @param param the request object
     */
    public getSubdivisions(param: DefaultApiGetSubdivisionsRequest = {}, options?: ConfigurationOptions): Promise<SubdivisionCollection> {
        return this.api.getSubdivisions(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Subscription
     * @param param the request object
     */
    public getSubscriptionWithHttpInfo(param: DefaultApiGetSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Subscription>> {
        return this.api.getSubscriptionWithHttpInfo(param.subscriptionId,  options).toPromise();
    }

    /**
     * Retrieve a single Subscription
     * @param param the request object
     */
    public getSubscription(param: DefaultApiGetSubscriptionRequest, options?: ConfigurationOptions): Promise<Subscription> {
        return this.api.getSubscription(param.subscriptionId,  options).toPromise();
    }

    /**
     * Retrieve the all subscriptions
     * @param param the request object
     */
    public getSubscriptionsWithHttpInfo(param: DefaultApiGetSubscriptionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionCollection>> {
        return this.api.getSubscriptionsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve the all subscriptions
     * @param param the request object
     */
    public getSubscriptions(param: DefaultApiGetSubscriptionsRequest = {}, options?: ConfigurationOptions): Promise<SubscriptionCollection> {
        return this.api.getSubscriptions(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve the current system settings
     * @param param the request object
     */
    public getSystemSettingsWithHttpInfo(param: DefaultApiGetSystemSettingsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SystemSetting>> {
        return this.api.getSystemSettingsWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve the current system settings
     * @param param the request object
     */
    public getSystemSettings(param: DefaultApiGetSystemSettingsRequest = {}, options?: ConfigurationOptions): Promise<SystemSetting> {
        return this.api.getSystemSettings( options).toPromise();
    }

    /**
     * Retrieve a single user
     * @param param the request object
     */
    public getUserWithHttpInfo(param: DefaultApiGetUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<User>> {
        return this.api.getUserWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieve a single user
     * @param param the request object
     */
    public getUser(param: DefaultApiGetUserRequest, options?: ConfigurationOptions): Promise<User> {
        return this.api.getUser(param.userId,  options).toPromise();
    }

    /**
     * Retrieve some or all users
     * @param param the request object
     */
    public getUsersWithHttpInfo(param: DefaultApiGetUsersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserCollection>> {
        return this.api.getUsersWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all users
     * @param param the request object
     */
    public getUsers(param: DefaultApiGetUsersRequest = {}, options?: ConfigurationOptions): Promise<UserCollection> {
        return this.api.getUsers(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve a single Vendor
     * @param param the request object
     */
    public getVendorWithHttpInfo(param: DefaultApiGetVendorRequest, options?: ConfigurationOptions): Promise<HttpInfo<Vendor>> {
        return this.api.getVendorWithHttpInfo(param.vendorId,  options).toPromise();
    }

    /**
     * Retrieve a single Vendor
     * @param param the request object
     */
    public getVendor(param: DefaultApiGetVendorRequest, options?: ConfigurationOptions): Promise<Vendor> {
        return this.api.getVendor(param.vendorId,  options).toPromise();
    }

    /**
     * Retrieve some or all vendors
     * @param param the request object
     */
    public getVendorsWithHttpInfo(param: DefaultApiGetVendorsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<VendorCollection>> {
        return this.api.getVendorsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all vendors
     * @param param the request object
     */
    public getVendors(param: DefaultApiGetVendorsRequest = {}, options?: ConfigurationOptions): Promise<VendorCollection> {
        return this.api.getVendors(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Returns WireChange records. Supports Ransack-style filters (`q[...]`). Includes related position_types and sports arrays in each object. Each item also includes coach avatar (if present) and school logo images.
     * @param param the request object
     */
    public getWireChangesWithHttpInfo(param: DefaultApiGetWireChangesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetWireChanges200Response>> {
        return this.api.getWireChangesWithHttpInfo(param.page, param.perPage, param.q, param.qCoachIdEq, param.qSchoolIdEq, param.qSportIdEq,  options).toPromise();
    }

    /**
     * Returns WireChange records. Supports Ransack-style filters (`q[...]`). Includes related position_types and sports arrays in each object. Each item also includes coach avatar (if present) and school logo images.
     * @param param the request object
     */
    public getWireChanges(param: DefaultApiGetWireChangesRequest = {}, options?: ConfigurationOptions): Promise<GetWireChanges200Response> {
        return this.api.getWireChanges(param.page, param.perPage, param.q, param.qCoachIdEq, param.qSchoolIdEq, param.qSportIdEq,  options).toPromise();
    }

    /**
     * Search Coaches by priority_ids
     * @param param the request object
     */
    public searchCoachesWithHttpInfo(param: DefaultApiSearchCoachesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CoachCollection>> {
        return this.api.searchCoachesWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * Search Coaches by priority_ids
     * @param param the request object
     */
    public searchCoaches(param: DefaultApiSearchCoachesRequest = {}, options?: ConfigurationOptions): Promise<CoachCollection> {
        return this.api.searchCoaches(param.filters,  options).toPromise();
    }

    /**
     * Update a single Cashflow
     * @param param the request object
     */
    public updateCashflowWithHttpInfo(param: DefaultApiUpdateCashflowRequest, options?: ConfigurationOptions): Promise<HttpInfo<Cashflow>> {
        return this.api.updateCashflowWithHttpInfo(param.cashflowId, param.cashflow,  options).toPromise();
    }

    /**
     * Update a single Cashflow
     * @param param the request object
     */
    public updateCashflow(param: DefaultApiUpdateCashflowRequest, options?: ConfigurationOptions): Promise<Cashflow> {
        return this.api.updateCashflow(param.cashflowId, param.cashflow,  options).toPromise();
    }

    /**
     * Update a coach
     * @param param the request object
     */
    public updateCoachWithHttpInfo(param: DefaultApiUpdateCoachRequest, options?: ConfigurationOptions): Promise<HttpInfo<Coach>> {
        return this.api.updateCoachWithHttpInfo(param.coachId, param.coach,  options).toPromise();
    }

    /**
     * Update a coach
     * @param param the request object
     */
    public updateCoach(param: DefaultApiUpdateCoachRequest, options?: ConfigurationOptions): Promise<Coach> {
        return this.api.updateCoach(param.coachId, param.coach,  options).toPromise();
    }

    /**
     * Update a compensation
     * @param param the request object
     */
    public updateCompensationWithHttpInfo(param: DefaultApiUpdateCompensationRequest, options?: ConfigurationOptions): Promise<HttpInfo<Compensation>> {
        return this.api.updateCompensationWithHttpInfo(param.compensationId, param.compensation,  options).toPromise();
    }

    /**
     * Update a compensation
     * @param param the request object
     */
    public updateCompensation(param: DefaultApiUpdateCompensationRequest, options?: ConfigurationOptions): Promise<Compensation> {
        return this.api.updateCompensation(param.compensationId, param.compensation,  options).toPromise();
    }

    /**
     * Update a single Conference
     * @param param the request object
     */
    public updateConferenceWithHttpInfo(param: DefaultApiUpdateConferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Conference>> {
        return this.api.updateConferenceWithHttpInfo(param.conferenceId, param.conference,  options).toPromise();
    }

    /**
     * Update a single Conference
     * @param param the request object
     */
    public updateConference(param: DefaultApiUpdateConferenceRequest, options?: ConfigurationOptions): Promise<Conference> {
        return this.api.updateConference(param.conferenceId, param.conference,  options).toPromise();
    }

    /**
     * Update a single Conferenceship
     * @param param the request object
     */
    public updateConferenceshipWithHttpInfo(param: DefaultApiUpdateConferenceshipRequest, options?: ConfigurationOptions): Promise<HttpInfo<Conferenceship>> {
        return this.api.updateConferenceshipWithHttpInfo(param.conferenceshipId, param.conferenceship,  options).toPromise();
    }

    /**
     * Update a single Conferenceship
     * @param param the request object
     */
    public updateConferenceship(param: DefaultApiUpdateConferenceshipRequest, options?: ConfigurationOptions): Promise<Conferenceship> {
        return this.api.updateConferenceship(param.conferenceshipId, param.conferenceship,  options).toPromise();
    }

    /**
     * Update a single foia label
     * @param param the request object
     */
    public updateFoiaLabelWithHttpInfo(param: DefaultApiUpdateFoiaLabelRequest, options?: ConfigurationOptions): Promise<HttpInfo<FoiaLabel>> {
        return this.api.updateFoiaLabelWithHttpInfo(param.foiaLabelId, param.foiaLabel,  options).toPromise();
    }

    /**
     * Update a single foia label
     * @param param the request object
     */
    public updateFoiaLabel(param: DefaultApiUpdateFoiaLabelRequest, options?: ConfigurationOptions): Promise<FoiaLabel> {
        return this.api.updateFoiaLabel(param.foiaLabelId, param.foiaLabel,  options).toPromise();
    }

    /**
     * Update a single foia request
     * @param param the request object
     */
    public updateFoiaRequestWithHttpInfo(param: DefaultApiUpdateFoiaRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<FoiaRequest>> {
        return this.api.updateFoiaRequestWithHttpInfo(param.foiaRequestId, param.foiaRequest,  options).toPromise();
    }

    /**
     * Update a single foia request
     * @param param the request object
     */
    public updateFoiaRequest(param: DefaultApiUpdateFoiaRequestRequest, options?: ConfigurationOptions): Promise<FoiaRequest> {
        return this.api.updateFoiaRequest(param.foiaRequestId, param.foiaRequest,  options).toPromise();
    }

    /**
     * Update a job post
     * Update a job post
     * @param param the request object
     */
    public updateJobPostWithHttpInfo(param: DefaultApiUpdateJobPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<JobPost>> {
        return this.api.updateJobPostWithHttpInfo(param.jobPostId, param.jobPost,  options).toPromise();
    }

    /**
     * Update a job post
     * Update a job post
     * @param param the request object
     */
    public updateJobPost(param: DefaultApiUpdateJobPostRequest, options?: ConfigurationOptions): Promise<JobPost> {
        return this.api.updateJobPost(param.jobPostId, param.jobPost,  options).toPromise();
    }

    /**
     * Update a single requested item
     * @param param the request object
     */
    public updateRequestedItemWithHttpInfo(param: DefaultApiUpdateRequestedItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestedItem>> {
        return this.api.updateRequestedItemWithHttpInfo(param.requestedItemId, param.requestedItem,  options).toPromise();
    }

    /**
     * Update a single requested item
     * @param param the request object
     */
    public updateRequestedItem(param: DefaultApiUpdateRequestedItemRequest, options?: ConfigurationOptions): Promise<RequestedItem> {
        return this.api.updateRequestedItem(param.requestedItemId, param.requestedItem,  options).toPromise();
    }

    /**
     * Update a single Season
     * @param param the request object
     */
    public updateSeasonWithHttpInfo(param: DefaultApiUpdateSeasonRequest, options?: ConfigurationOptions): Promise<HttpInfo<Season>> {
        return this.api.updateSeasonWithHttpInfo(param.seasonId, param.season,  options).toPromise();
    }

    /**
     * Update a single Season
     * @param param the request object
     */
    public updateSeason(param: DefaultApiUpdateSeasonRequest, options?: ConfigurationOptions): Promise<Season> {
        return this.api.updateSeason(param.seasonId, param.season,  options).toPromise();
    }

    /**
     * Retrieve a single user
     * @param param the request object
     */
    public userMeWithHttpInfo(param: DefaultApiUserMeRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<User>> {
        return this.api.userMeWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve a single user
     * @param param the request object
     */
    public userMe(param: DefaultApiUserMeRequest = {}, options?: ConfigurationOptions): Promise<User> {
        return this.api.userMe( options).toPromise();
    }

    /**
     * Verifies whether the user has intercollegiate access based on their email.
     * @param param the request object
     */
    public verifyUserIntercollegiateAccessWithHttpInfo(param: DefaultApiVerifyUserIntercollegiateAccessRequest, options?: ConfigurationOptions): Promise<HttpInfo<VerifyUserIntercollegiateAccess200Response>> {
        return this.api.verifyUserIntercollegiateAccessWithHttpInfo(param.userEmail,  options).toPromise();
    }

    /**
     * Verifies whether the user has intercollegiate access based on their email.
     * @param param the request object
     */
    public verifyUserIntercollegiateAccess(param: DefaultApiVerifyUserIntercollegiateAccessRequest, options?: ConfigurationOptions): Promise<VerifyUserIntercollegiateAccess200Response> {
        return this.api.verifyUserIntercollegiateAccess(param.userEmail,  options).toPromise();
    }

}

import { ObservableDossierApi } from "./ObservableAPI";
import { DossierApiRequestFactory, DossierApiResponseProcessor} from "../apis/DossierApi";

export interface DossierApiUniversityDossierReportDossierWinadIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DossierApiuniversityDossierReportDossierWinadIdGet
     */
    winadId: number
}

export class ObjectDossierApi {
    private api: ObservableDossierApi

    public constructor(configuration: Configuration, requestFactory?: DossierApiRequestFactory, responseProcessor?: DossierApiResponseProcessor) {
        this.api = new ObservableDossierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * University Dossier Report
     * @param param the request object
     */
    public universityDossierReportDossierWinadIdGetWithHttpInfo(param: DossierApiUniversityDossierReportDossierWinadIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<DossierReportResponse>> {
        return this.api.universityDossierReportDossierWinadIdGetWithHttpInfo(param.winadId,  options).toPromise();
    }

    /**
     * University Dossier Report
     * @param param the request object
     */
    public universityDossierReportDossierWinadIdGet(param: DossierApiUniversityDossierReportDossierWinadIdGetRequest, options?: ConfigurationOptions): Promise<DossierReportResponse> {
        return this.api.universityDossierReportDossierWinadIdGet(param.winadId,  options).toPromise();
    }

}

import { ObservableIntercollegiateApi } from "./ObservableAPI";
import { IntercollegiateApiRequestFactory, IntercollegiateApiResponseProcessor} from "../apis/IntercollegiateApi";

export interface IntercollegiateApiCreateNewsFeedsRequest {
    /**
     * 
     * @type NewsFeed
     * @memberof IntercollegiateApicreateNewsFeeds
     */
    newsFeed?: NewsFeed
}

export interface IntercollegiateApiGetJobPostRequest {
    /**
     * ID of job post to return
     * Defaults to: undefined
     * @type number
     * @memberof IntercollegiateApigetJobPost
     */
    jobPostId: number
}

export interface IntercollegiateApiGetJobPostsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof IntercollegiateApigetJobPosts
     */
    page?: number
    /**
     * number of results per page.
     * Defaults to: 20
     * @type number
     * @memberof IntercollegiateApigetJobPosts
     */
    perPage?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof IntercollegiateApigetJobPosts
     */
    q?: any
}

export interface IntercollegiateApiGetNewsFeedsRequest {
}

export class ObjectIntercollegiateApi {
    private api: ObservableIntercollegiateApi

    public constructor(configuration: Configuration, requestFactory?: IntercollegiateApiRequestFactory, responseProcessor?: IntercollegiateApiResponseProcessor) {
        this.api = new ObservableIntercollegiateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create news feed
     * @param param the request object
     */
    public createNewsFeedsWithHttpInfo(param: IntercollegiateApiCreateNewsFeedsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<NewsFeed>> {
        return this.api.createNewsFeedsWithHttpInfo(param.newsFeed,  options).toPromise();
    }

    /**
     * Create news feed
     * @param param the request object
     */
    public createNewsFeeds(param: IntercollegiateApiCreateNewsFeedsRequest = {}, options?: ConfigurationOptions): Promise<NewsFeed> {
        return this.api.createNewsFeeds(param.newsFeed,  options).toPromise();
    }

    /**
     * Retrieve a job post by ID
     * @param param the request object
     */
    public getJobPostWithHttpInfo(param: IntercollegiateApiGetJobPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<Job>> {
        return this.api.getJobPostWithHttpInfo(param.jobPostId,  options).toPromise();
    }

    /**
     * Retrieve a job post by ID
     * @param param the request object
     */
    public getJobPost(param: IntercollegiateApiGetJobPostRequest, options?: ConfigurationOptions): Promise<Job> {
        return this.api.getJobPost(param.jobPostId,  options).toPromise();
    }

    /**
     * Retrieve some or all active jobs
     * @param param the request object
     */
    public getJobPostsWithHttpInfo(param: IntercollegiateApiGetJobPostsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<JobCollection>> {
        return this.api.getJobPostsWithHttpInfo(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all active jobs
     * @param param the request object
     */
    public getJobPosts(param: IntercollegiateApiGetJobPostsRequest = {}, options?: ConfigurationOptions): Promise<JobCollection> {
        return this.api.getJobPosts(param.page, param.perPage, param.q,  options).toPromise();
    }

    /**
     * Retrieve news feed
     * @param param the request object
     */
    public getNewsFeedsWithHttpInfo(param: IntercollegiateApiGetNewsFeedsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<NewsFeedCollection>> {
        return this.api.getNewsFeedsWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve news feed
     * @param param the request object
     */
    public getNewsFeeds(param: IntercollegiateApiGetNewsFeedsRequest = {}, options?: ConfigurationOptions): Promise<NewsFeedCollection> {
        return this.api.getNewsFeeds( options).toPromise();
    }

}

import { ObservableMlAthleticApi } from "./ObservableAPI";
import { MlAthleticApiRequestFactory, MlAthleticApiResponseProcessor} from "../apis/MlAthleticApi";

export interface MlAthleticApiHealthCheckRequest {
}

export interface MlAthleticApiPredictRequest {
    /**
     * 
     * @type PredictBody
     * @memberof MlAthleticApipredict
     */
    predictBody?: PredictBody
}

export class ObjectMlAthleticApi {
    private api: ObservableMlAthleticApi

    public constructor(configuration: Configuration, requestFactory?: MlAthleticApiRequestFactory, responseProcessor?: MlAthleticApiResponseProcessor) {
        this.api = new ObservableMlAthleticApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if the model is loaded and the API is running.
     * @param param the request object
     */
    public healthCheckWithHttpInfo(param: MlAthleticApiHealthCheckRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<HealthCheckSuccess>> {
        return this.api.healthCheckWithHttpInfo( options).toPromise();
    }

    /**
     * Check if the model is loaded and the API is running.
     * @param param the request object
     */
    public healthCheck(param: MlAthleticApiHealthCheckRequest = {}, options?: ConfigurationOptions): Promise<HealthCheckSuccess> {
        return this.api.healthCheck( options).toPromise();
    }

    /**
     * Classify a job post as athletic or not.
     * @param param the request object
     */
    public predictWithHttpInfo(param: MlAthleticApiPredictRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PredictSuccess>> {
        return this.api.predictWithHttpInfo(param.predictBody,  options).toPromise();
    }

    /**
     * Classify a job post as athletic or not.
     * @param param the request object
     */
    public predict(param: MlAthleticApiPredictRequest = {}, options?: ConfigurationOptions): Promise<PredictSuccess> {
        return this.api.predict(param.predictBody,  options).toPromise();
    }

}

import { ObservableReportingApi } from "./ObservableAPI";
import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";

export interface ReportingApiGetCoachContractRequestsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetCoachContractRequests
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetCoachContractRequests
     */
    q?: any
}

export interface ReportingApiGetCoachHistoryRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetCoachHistory
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetCoachHistory
     */
    q?: any
}

export interface ReportingApiGetConferenceshipsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetConferenceships
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetConferenceships
     */
    q?: any
}

export interface ReportingApiGetFoiaDetailsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetFoiaDetails
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetFoiaDetails
     */
    q?: any
}

export interface ReportingApiGetGamesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetGames
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetGames
     */
    q?: any
}

export interface ReportingApiGetInvoicesRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetInvoices
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetInvoices
     */
    q?: any
}

export interface ReportingApiGetSchoolContractRequestsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetSchoolContractRequests
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetSchoolContractRequests
     */
    q?: any
}

export interface ReportingApiGetSchoolsFinancialsQcRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetSchoolsFinancialsQc
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetSchoolsFinancialsQc
     */
    q?: any
}

export interface ReportingApiGetSubscriptionsRequest {
    /**
     * results page to retrieve.
     * Defaults to: 1
     * @type number
     * @memberof ReportingApigetSubscriptions
     */
    page?: number
    /**
     * Ransack query
     * Defaults to: undefined
     * @type any
     * @memberof ReportingApigetSubscriptions
     */
    q?: any
}

export class ObjectReportingApi {
    private api: ObservableReportingApi

    public constructor(configuration: Configuration, requestFactory?: ReportingApiRequestFactory, responseProcessor?: ReportingApiResponseProcessor) {
        this.api = new ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve some or all coach contract requests
     * @param param the request object
     */
    public getCoachContractRequestsWithHttpInfo(param: ReportingApiGetCoachContractRequestsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getCoachContractRequestsWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all coach contract requests
     * @param param the request object
     */
    public getCoachContractRequests(param: ReportingApiGetCoachContractRequestsRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getCoachContractRequests(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all coach history
     * @param param the request object
     */
    public getCoachHistoryWithHttpInfo(param: ReportingApiGetCoachHistoryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getCoachHistoryWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all coach history
     * @param param the request object
     */
    public getCoachHistory(param: ReportingApiGetCoachHistoryRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getCoachHistory(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all conferenceships
     * @param param the request object
     */
    public getConferenceshipsWithHttpInfo(param: ReportingApiGetConferenceshipsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getConferenceshipsWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all conferenceships
     * @param param the request object
     */
    public getConferenceships(param: ReportingApiGetConferenceshipsRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getConferenceships(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all foia details
     * @param param the request object
     */
    public getFoiaDetailsWithHttpInfo(param: ReportingApiGetFoiaDetailsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getFoiaDetailsWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all foia details
     * @param param the request object
     */
    public getFoiaDetails(param: ReportingApiGetFoiaDetailsRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getFoiaDetails(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all games
     * @param param the request object
     */
    public getGamesWithHttpInfo(param: ReportingApiGetGamesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getGamesWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all games
     * @param param the request object
     */
    public getGames(param: ReportingApiGetGamesRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getGames(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all client invoices
     * @param param the request object
     */
    public getInvoicesWithHttpInfo(param: ReportingApiGetInvoicesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getInvoicesWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all client invoices
     * @param param the request object
     */
    public getInvoices(param: ReportingApiGetInvoicesRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getInvoices(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all school contract requests
     * @param param the request object
     */
    public getSchoolContractRequestsWithHttpInfo(param: ReportingApiGetSchoolContractRequestsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getSchoolContractRequestsWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve some or all school contract requests
     * @param param the request object
     */
    public getSchoolContractRequests(param: ReportingApiGetSchoolContractRequestsRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getSchoolContractRequests(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve schools with thier financials qc
     * @param param the request object
     */
    public getSchoolsFinancialsQcWithHttpInfo(param: ReportingApiGetSchoolsFinancialsQcRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FinancialQc>> {
        return this.api.getSchoolsFinancialsQcWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve schools with thier financials qc
     * @param param the request object
     */
    public getSchoolsFinancialsQc(param: ReportingApiGetSchoolsFinancialsQcRequest = {}, options?: ConfigurationOptions): Promise<FinancialQc> {
        return this.api.getSchoolsFinancialsQc(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve subscriptions
     * @param param the request object
     */
    public getSubscriptionsWithHttpInfo(param: ReportingApiGetSubscriptionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getSubscriptionsWithHttpInfo(param.page, param.q,  options).toPromise();
    }

    /**
     * Retrieve subscriptions
     * @param param the request object
     */
    public getSubscriptions(param: ReportingApiGetSubscriptionsRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getSubscriptions(param.page, param.q,  options).toPromise();
    }

}

import { ObservableScraperApi } from "./ObservableAPI";
import { ScraperApiRequestFactory, ScraperApiResponseProcessor} from "../apis/ScraperApi";

export interface ScraperApiListScrapersRequest {
}

export interface ScraperApiRunScraperRequest {
    /**
     * The name of the scraper to run
     * Defaults to: undefined
     * @type string
     * @memberof ScraperApirunScraper
     */
    command: string
    /**
     * 
     * @type any
     * @memberof ScraperApirunScraper
     */
    body?: any
}

export class ObjectScraperApi {
    private api: ObservableScraperApi

    public constructor(configuration: Configuration, requestFactory?: ScraperApiRequestFactory, responseProcessor?: ScraperApiResponseProcessor) {
        this.api = new ObservableScraperApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Root endpoint
     * List all available scrapers
     * @param param the request object
     */
    public listScrapersWithHttpInfo(param: ScraperApiListScrapersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<Scraper>>> {
        return this.api.listScrapersWithHttpInfo( options).toPromise();
    }

    /**
     * Root endpoint
     * List all available scrapers
     * @param param the request object
     */
    public listScrapers(param: ScraperApiListScrapersRequest = {}, options?: ConfigurationOptions): Promise<Array<Scraper>> {
        return this.api.listScrapers( options).toPromise();
    }

    /**
     * Run a specified scraper with given arguments
     * Run a scraper
     * @param param the request object
     */
    public runScraperWithHttpInfo(param: ScraperApiRunScraperRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.runScraperWithHttpInfo(param.command, param.body,  options).toPromise();
    }

    /**
     * Run a specified scraper with given arguments
     * Run a scraper
     * @param param the request object
     */
    public runScraper(param: ScraperApiRunScraperRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.runScraper(param.command, param.body,  options).toPromise();
    }

}
