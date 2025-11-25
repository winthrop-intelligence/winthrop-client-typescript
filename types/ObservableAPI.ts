import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Retrieve average compensation for a conference
     * @param conferenceId ID of the conference
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageConferenceCompWithHttpInfo(conferenceId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<AverageCompensation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.averageConferenceComp(conferenceId, seasonYears, sportIds, positionTypeIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.averageConferenceCompWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve average compensation for a conference
     * @param conferenceId ID of the conference
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageConferenceComp(conferenceId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: ConfigurationOptions): Observable<AverageCompensation> {
        return this.averageConferenceCompWithHttpInfo(conferenceId, seasonYears, sportIds, positionTypeIds, _options).pipe(map((apiResponse: HttpInfo<AverageCompensation>) => apiResponse.data));
    }

    /**
     * Retrieve average compensation for a division
     * @param divisionId ID of the division
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageDivisionCompWithHttpInfo(divisionId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<AverageCompensation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.averageDivisionComp(divisionId, seasonYears, sportIds, positionTypeIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.averageDivisionCompWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve average compensation for a division
     * @param divisionId ID of the division
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageDivisionComp(divisionId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: ConfigurationOptions): Observable<AverageCompensation> {
        return this.averageDivisionCompWithHttpInfo(divisionId, seasonYears, sportIds, positionTypeIds, _options).pipe(map((apiResponse: HttpInfo<AverageCompensation>) => apiResponse.data));
    }

    /**
     * Retrieve average compensation for a school
     * @param schoolId ID of the school
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageSchoolCompWithHttpInfo(schoolId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<AverageCompensation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.averageSchoolComp(schoolId, seasonYears, sportIds, positionTypeIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.averageSchoolCompWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve average compensation for a school
     * @param schoolId ID of the school
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageSchoolComp(schoolId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: ConfigurationOptions): Observable<AverageCompensation> {
        return this.averageSchoolCompWithHttpInfo(schoolId, seasonYears, sportIds, positionTypeIds, _options).pipe(map((apiResponse: HttpInfo<AverageCompensation>) => apiResponse.data));
    }

    /**
     * Retrieve average compensation for a subdivision
     * @param subdivisionId ID of the subdivision
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageSubdivisionCompWithHttpInfo(subdivisionId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<AverageCompensation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.averageSubdivisionComp(subdivisionId, seasonYears, sportIds, positionTypeIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.averageSubdivisionCompWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve average compensation for a subdivision
     * @param subdivisionId ID of the subdivision
     * @param seasonYears Season years
     * @param sportIds IDs of the sports
     * @param positionTypeIds IDs of the position types
     */
    public averageSubdivisionComp(subdivisionId: number, seasonYears: Array<number>, sportIds: Array<number>, positionTypeIds: Array<number>, _options?: ConfigurationOptions): Observable<AverageCompensation> {
        return this.averageSubdivisionCompWithHttpInfo(subdivisionId, seasonYears, sportIds, positionTypeIds, _options).pipe(map((apiResponse: HttpInfo<AverageCompensation>) => apiResponse.data));
    }

    /**
     * Retrieve the COLI-adjusted compensation
     * @param schoolId ID of the School
     * @param otherPersonSchoolId ID of the other person School
     * @param otherPersonTotalCompensation Other person total compensation amount
     */
    public compareColiWithHttpInfo(schoolId: number, otherPersonSchoolId: number, otherPersonTotalCompensation: number, _options?: ConfigurationOptions): Observable<HttpInfo<COLIAdjusted>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.compareColi(schoolId, otherPersonSchoolId, otherPersonTotalCompensation, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.compareColiWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the COLI-adjusted compensation
     * @param schoolId ID of the School
     * @param otherPersonSchoolId ID of the other person School
     * @param otherPersonTotalCompensation Other person total compensation amount
     */
    public compareColi(schoolId: number, otherPersonSchoolId: number, otherPersonTotalCompensation: number, _options?: ConfigurationOptions): Observable<COLIAdjusted> {
        return this.compareColiWithHttpInfo(schoolId, otherPersonSchoolId, otherPersonTotalCompensation, _options).pipe(map((apiResponse: HttpInfo<COLIAdjusted>) => apiResponse.data));
    }

    /**
     * Create a new Cashflow
     * @param [cashflow]
     */
    public createCashflowWithHttpInfo(cashflow?: Cashflow, _options?: ConfigurationOptions): Observable<HttpInfo<Cashflow>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCashflow(cashflow, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCashflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Cashflow
     * @param [cashflow]
     */
    public createCashflow(cashflow?: Cashflow, _options?: ConfigurationOptions): Observable<Cashflow> {
        return this.createCashflowWithHttpInfo(cashflow, _options).pipe(map((apiResponse: HttpInfo<Cashflow>) => apiResponse.data));
    }

    /**
     * Create a new Conference
     * @param [conference]
     */
    public createConferenceWithHttpInfo(conference?: Conference, _options?: ConfigurationOptions): Observable<HttpInfo<Conference>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createConference(conference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Conference
     * @param [conference]
     */
    public createConference(conference?: Conference, _options?: ConfigurationOptions): Observable<Conference> {
        return this.createConferenceWithHttpInfo(conference, _options).pipe(map((apiResponse: HttpInfo<Conference>) => apiResponse.data));
    }

    /**
     * Create a new Conferenceship
     * @param [conferenceship]
     */
    public createConferenceshipWithHttpInfo(conferenceship?: Conferenceship, _options?: ConfigurationOptions): Observable<HttpInfo<Conferenceship>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createConferenceship(conferenceship, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConferenceshipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Conferenceship
     * @param [conferenceship]
     */
    public createConferenceship(conferenceship?: Conferenceship, _options?: ConfigurationOptions): Observable<Conferenceship> {
        return this.createConferenceshipWithHttpInfo(conferenceship, _options).pipe(map((apiResponse: HttpInfo<Conferenceship>) => apiResponse.data));
    }

    /**
     * Create a new foia label
     * @param foiaLabel Foia label to create
     */
    public createFoiaLabelWithHttpInfo(foiaLabel: FoiaLabel, _options?: ConfigurationOptions): Observable<HttpInfo<FoiaLabel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createFoiaLabel(foiaLabel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFoiaLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new foia label
     * @param foiaLabel Foia label to create
     */
    public createFoiaLabel(foiaLabel: FoiaLabel, _options?: ConfigurationOptions): Observable<FoiaLabel> {
        return this.createFoiaLabelWithHttpInfo(foiaLabel, _options).pipe(map((apiResponse: HttpInfo<FoiaLabel>) => apiResponse.data));
    }

    /**
     * Create a new foia request
     * @param foiaRequest Foia request to create
     */
    public createFoiaRequestWithHttpInfo(foiaRequest: FoiaRequest, _options?: ConfigurationOptions): Observable<HttpInfo<FoiaRequest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createFoiaRequest(foiaRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFoiaRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new foia request
     * @param foiaRequest Foia request to create
     */
    public createFoiaRequest(foiaRequest: FoiaRequest, _options?: ConfigurationOptions): Observable<FoiaRequest> {
        return this.createFoiaRequestWithHttpInfo(foiaRequest, _options).pipe(map((apiResponse: HttpInfo<FoiaRequest>) => apiResponse.data));
    }

    /**
     * Create a job post
     * Create a job post
     * @param [jobPost]
     */
    public createJobPostWithHttpInfo(jobPost?: JobPost, _options?: ConfigurationOptions): Observable<HttpInfo<JobPost>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createJobPost(jobPost, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createJobPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a job post
     * Create a job post
     * @param [jobPost]
     */
    public createJobPost(jobPost?: JobPost, _options?: ConfigurationOptions): Observable<JobPost> {
        return this.createJobPostWithHttpInfo(jobPost, _options).pipe(map((apiResponse: HttpInfo<JobPost>) => apiResponse.data));
    }

    /**
     * Create a new requested item
     * @param requestedItem Requested item to create
     */
    public createRequestedItemWithHttpInfo(requestedItem: RequestedItem, _options?: ConfigurationOptions): Observable<HttpInfo<RequestedItem>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createRequestedItem(requestedItem, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRequestedItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new requested item
     * @param requestedItem Requested item to create
     */
    public createRequestedItem(requestedItem: RequestedItem, _options?: ConfigurationOptions): Observable<RequestedItem> {
        return this.createRequestedItemWithHttpInfo(requestedItem, _options).pipe(map((apiResponse: HttpInfo<RequestedItem>) => apiResponse.data));
    }

    /**
     * Create a new Season
     * @param [season]
     */
    public createSeasonWithHttpInfo(season?: Season, _options?: ConfigurationOptions): Observable<HttpInfo<Season>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSeason(season, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSeasonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Season
     * @param [season]
     */
    public createSeason(season?: Season, _options?: ConfigurationOptions): Observable<Season> {
        return this.createSeasonWithHttpInfo(season, _options).pipe(map((apiResponse: HttpInfo<Season>) => apiResponse.data));
    }

    /**
     * Delete a single Cashflow
     * @param cashflowId ID of the Cashflow
     */
    public deleteCashflowWithHttpInfo(cashflowId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCashflow(cashflowId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCashflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single Cashflow
     * @param cashflowId ID of the Cashflow
     */
    public deleteCashflow(cashflowId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCashflowWithHttpInfo(cashflowId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a single Conference
     * @param conferenceId ID of the Conference
     */
    public deleteConferenceWithHttpInfo(conferenceId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteConference(conferenceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single Conference
     * @param conferenceId ID of the Conference
     */
    public deleteConference(conferenceId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteConferenceWithHttpInfo(conferenceId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     */
    public deleteConferenceshipWithHttpInfo(conferenceshipId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteConferenceship(conferenceshipId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConferenceshipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     */
    public deleteConferenceship(conferenceshipId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteConferenceshipWithHttpInfo(conferenceshipId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a single foia label
     * @param foiaLabelId ID of foia label to delete
     */
    public deleteFoiaLabelWithHttpInfo(foiaLabelId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteFoiaLabel(foiaLabelId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFoiaLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single foia label
     * @param foiaLabelId ID of foia label to delete
     */
    public deleteFoiaLabel(foiaLabelId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteFoiaLabelWithHttpInfo(foiaLabelId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a single foia request
     * @param foiaRequestId ID of foia request to delete
     */
    public deleteFoiaRequestWithHttpInfo(foiaRequestId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteFoiaRequest(foiaRequestId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFoiaRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single foia request
     * @param foiaRequestId ID of foia request to delete
     */
    public deleteFoiaRequest(foiaRequestId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteFoiaRequestWithHttpInfo(foiaRequestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a job post
     * Delete a job post
     * @param jobPostId ID of job post to delete
     */
    public deleteJobPostWithHttpInfo(jobPostId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteJobPost(jobPostId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteJobPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a job post
     * Delete a job post
     * @param jobPostId ID of job post to delete
     */
    public deleteJobPost(jobPostId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteJobPostWithHttpInfo(jobPostId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a single requested item
     * @param requestedItemId ID of requested item to delete
     */
    public deleteRequestedItemWithHttpInfo(requestedItemId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteRequestedItem(requestedItemId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRequestedItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single requested item
     * @param requestedItemId ID of requested item to delete
     */
    public deleteRequestedItem(requestedItemId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRequestedItemWithHttpInfo(requestedItemId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a single Season
     * @param seasonId ID of the Season
     */
    public deleteSeasonWithHttpInfo(seasonId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSeason(seasonId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSeasonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single Season
     * @param seasonId ID of the Season
     */
    public deleteSeason(seasonId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSeasonWithHttpInfo(seasonId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a single administrator
     * @param administratorId ID of administrator to retrieve
     */
    public getAdministratorWithHttpInfo(administratorId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Administrator>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAdministrator(administratorId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAdministratorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single administrator
     * @param administratorId ID of administrator to retrieve
     */
    public getAdministrator(administratorId: number, _options?: ConfigurationOptions): Observable<Administrator> {
        return this.getAdministratorWithHttpInfo(administratorId, _options).pipe(map((apiResponse: HttpInfo<Administrator>) => apiResponse.data));
    }

    /**
     * Retrieve some or all administrators
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getAdministratorsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<AdministratorCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAdministrators(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAdministratorsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all administrators
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getAdministrators(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<AdministratorCollection> {
        return this.getAdministratorsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<AdministratorCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single audited financial report status
     * @param auditedFinancialReportStatusId ID of audited financial report status to retrieve
     */
    public getAuditedFinancialReportStatusWithHttpInfo(auditedFinancialReportStatusId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AuditedFinancialReportStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAuditedFinancialReportStatus(auditedFinancialReportStatusId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuditedFinancialReportStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single audited financial report status
     * @param auditedFinancialReportStatusId ID of audited financial report status to retrieve
     */
    public getAuditedFinancialReportStatus(auditedFinancialReportStatusId: number, _options?: ConfigurationOptions): Observable<AuditedFinancialReportStatus> {
        return this.getAuditedFinancialReportStatusWithHttpInfo(auditedFinancialReportStatusId, _options).pipe(map((apiResponse: HttpInfo<AuditedFinancialReportStatus>) => apiResponse.data));
    }

    /**
     * Retrieve some or all audited financial report statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getAuditedFinancialReportStatusesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<AuditedFinancialReportStatusCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAuditedFinancialReportStatuses(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuditedFinancialReportStatusesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all audited financial report statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getAuditedFinancialReportStatuses(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<AuditedFinancialReportStatusCollection> {
        return this.getAuditedFinancialReportStatusesWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<AuditedFinancialReportStatusCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Cashflow
     * @param cashflowId ID of the Cashflow
     */
    public getCashflowWithHttpInfo(cashflowId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Cashflow>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCashflow(cashflowId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCashflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Cashflow
     * @param cashflowId ID of the Cashflow
     */
    public getCashflow(cashflowId: number, _options?: ConfigurationOptions): Observable<Cashflow> {
        return this.getCashflowWithHttpInfo(cashflowId, _options).pipe(map((apiResponse: HttpInfo<Cashflow>) => apiResponse.data));
    }

    /**
     * Retrieve some or all cashflows
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCashflowsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<CashflowCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCashflows(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCashflowsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all cashflows
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCashflows(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<CashflowCollection> {
        return this.getCashflowsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<CashflowCollection>) => apiResponse.data));
    }

    /**
     * List all categories
     * List all categories
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCategoriesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<CategoryCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCategories(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all categories
     * List all categories
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCategories(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<CategoryCollection> {
        return this.getCategoriesWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<CategoryCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single coach
     * @param coachId ID of coach to retrieve
     */
    public getCoachWithHttpInfo(coachId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Coach>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCoach(coachId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCoachWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single coach
     * @param coachId ID of coach to retrieve
     */
    public getCoach(coachId: number, _options?: ConfigurationOptions): Observable<Coach> {
        return this.getCoachWithHttpInfo(coachId, _options).pipe(map((apiResponse: HttpInfo<Coach>) => apiResponse.data));
    }

    /**
     * Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach
     * @param coachesIds IDs of the coaches
     * @param userSchoolId ID of the school whose cost-of-living index should be used
     */
    public getCoachCompensationWithHttpInfo(coachesIds: Array<number>, userSchoolId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CoachCompensation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCoachCompensation(coachesIds, userSchoolId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCoachCompensationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach
     * @param coachesIds IDs of the coaches
     * @param userSchoolId ID of the school whose cost-of-living index should be used
     */
    public getCoachCompensation(coachesIds: Array<number>, userSchoolId: number, _options?: ConfigurationOptions): Observable<CoachCompensation> {
        return this.getCoachCompensationWithHttpInfo(coachesIds, userSchoolId, _options).pipe(map((apiResponse: HttpInfo<CoachCompensation>) => apiResponse.data));
    }

    /**
     * Retrieve some or all coaches
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCoachesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<CoachCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCoaches(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCoachesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all coaches
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCoaches(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<CoachCollection> {
        return this.getCoachesWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<CoachCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single compensation
     * @param compensationId ID of compensation to retrieve
     */
    public getCompensationWithHttpInfo(compensationId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Compensation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCompensation(compensationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompensationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single compensation
     * @param compensationId ID of compensation to retrieve
     */
    public getCompensation(compensationId: number, _options?: ConfigurationOptions): Observable<Compensation> {
        return this.getCompensationWithHttpInfo(compensationId, _options).pipe(map((apiResponse: HttpInfo<Compensation>) => apiResponse.data));
    }

    /**
     * Retrieve some or all compensations
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCompensationsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<CompensationCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCompensations(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompensationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all compensations
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getCompensations(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<CompensationCollection> {
        return this.getCompensationsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<CompensationCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Conference
     * @param conferenceId ID of the Conference
     */
    public getConferenceWithHttpInfo(conferenceId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Conference>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConference(conferenceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Conference
     * @param conferenceId ID of the Conference
     */
    public getConference(conferenceId: number, _options?: ConfigurationOptions): Observable<Conference> {
        return this.getConferenceWithHttpInfo(conferenceId, _options).pipe(map((apiResponse: HttpInfo<Conference>) => apiResponse.data));
    }

    /**
     * Retrieve some or all conferences
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getConferencesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<ConferenceCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConferences(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConferencesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all conferences
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getConferences(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<ConferenceCollection> {
        return this.getConferencesWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<ConferenceCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     */
    public getConferenceshipWithHttpInfo(conferenceshipId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Conferenceship>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConferenceship(conferenceshipId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConferenceshipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     */
    public getConferenceship(conferenceshipId: number, _options?: ConfigurationOptions): Observable<Conferenceship> {
        return this.getConferenceshipWithHttpInfo(conferenceshipId, _options).pipe(map((apiResponse: HttpInfo<Conferenceship>) => apiResponse.data));
    }

    /**
     * Retrieve some or all conferenceships
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getConferenceshipsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<ConferenceshipCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConferenceships(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConferenceshipsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all conferenceships
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getConferenceships(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<ConferenceshipCollection> {
        return this.getConferenceshipsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<ConferenceshipCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single contact
     * @param contactId ID of contact to retrieve
     */
    public getContactWithHttpInfo(contactId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Contact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContact(contactId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single contact
     * @param contactId ID of contact to retrieve
     */
    public getContact(contactId: number, _options?: ConfigurationOptions): Observable<Contact> {
        return this.getContactWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Retrieve some or all contacts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getContactsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<ContactCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContacts(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all contacts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getContacts(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<ContactCollection> {
        return this.getContactsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<ContactCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single contract
     * @param contractId ID of contract to retrieve
     */
    public getContractWithHttpInfo(contractId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Contract>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContract(contractId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single contract
     * @param contractId ID of contract to retrieve
     */
    public getContract(contractId: number, _options?: ConfigurationOptions): Observable<Contract> {
        return this.getContractWithHttpInfo(contractId, _options).pipe(map((apiResponse: HttpInfo<Contract>) => apiResponse.data));
    }

    /**
     * Retrieve some or all contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getContractsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<ContractCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContracts(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContractsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getContracts(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<ContractCollection> {
        return this.getContractsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<ContractCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Deal
     * @param dealId ID of the Deal
     */
    public getDealWithHttpInfo(dealId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Deal>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDeal(dealId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDealWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Deal
     * @param dealId ID of the Deal
     */
    public getDeal(dealId: number, _options?: ConfigurationOptions): Observable<Deal> {
        return this.getDealWithHttpInfo(dealId, _options).pipe(map((apiResponse: HttpInfo<Deal>) => apiResponse.data));
    }

    /**
     * Retrieve a single deal status
     * @param dealStatusId ID of deal status to retrieve
     */
    public getDealStatusWithHttpInfo(dealStatusId: number, _options?: ConfigurationOptions): Observable<HttpInfo<DealStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDealStatus(dealStatusId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDealStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single deal status
     * @param dealStatusId ID of deal status to retrieve
     */
    public getDealStatus(dealStatusId: number, _options?: ConfigurationOptions): Observable<DealStatus> {
        return this.getDealStatusWithHttpInfo(dealStatusId, _options).pipe(map((apiResponse: HttpInfo<DealStatus>) => apiResponse.data));
    }

    /**
     * Retrieve some or all deal statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDealStatusesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<DealStatusCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDealStatuses(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDealStatusesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all deal statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDealStatuses(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<DealStatusCollection> {
        return this.getDealStatusesWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<DealStatusCollection>) => apiResponse.data));
    }

    /**
     * Retrieve some or all deals
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDealsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<DealCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDeals(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDealsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all deals
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDeals(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<DealCollection> {
        return this.getDealsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<DealCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Division
     * @param divisionId ID of the Division
     */
    public getDivisionWithHttpInfo(divisionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Division>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDivision(divisionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDivisionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Division
     * @param divisionId ID of the Division
     */
    public getDivision(divisionId: number, _options?: ConfigurationOptions): Observable<Division> {
        return this.getDivisionWithHttpInfo(divisionId, _options).pipe(map((apiResponse: HttpInfo<Division>) => apiResponse.data));
    }

    /**
     * Retrieve some or all divisions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDivisionsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<DivisionCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDivisions(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDivisionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all divisions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getDivisions(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<DivisionCollection> {
        return this.getDivisionsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<DivisionCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single foia label
     * @param foiaLabelId ID of foia label to retrieve
     */
    public getFoiaLabelWithHttpInfo(foiaLabelId: number, _options?: ConfigurationOptions): Observable<HttpInfo<FoiaLabel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFoiaLabel(foiaLabelId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFoiaLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single foia label
     * @param foiaLabelId ID of foia label to retrieve
     */
    public getFoiaLabel(foiaLabelId: number, _options?: ConfigurationOptions): Observable<FoiaLabel> {
        return this.getFoiaLabelWithHttpInfo(foiaLabelId, _options).pipe(map((apiResponse: HttpInfo<FoiaLabel>) => apiResponse.data));
    }

    /**
     * Retrieve some or all foia labels
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getFoiaLabelsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<FoiaLabelCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFoiaLabels(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFoiaLabelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all foia labels
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getFoiaLabels(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<FoiaLabelCollection> {
        return this.getFoiaLabelsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<FoiaLabelCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single foia request
     * @param foiaRequestId ID of foia request to retrieve
     */
    public getFoiaRequestWithHttpInfo(foiaRequestId: number, _options?: ConfigurationOptions): Observable<HttpInfo<FoiaRequest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFoiaRequest(foiaRequestId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFoiaRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single foia request
     * @param foiaRequestId ID of foia request to retrieve
     */
    public getFoiaRequest(foiaRequestId: number, _options?: ConfigurationOptions): Observable<FoiaRequest> {
        return this.getFoiaRequestWithHttpInfo(foiaRequestId, _options).pipe(map((apiResponse: HttpInfo<FoiaRequest>) => apiResponse.data));
    }

    /**
     * Retrieve some or all foia requests
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getFoiaRequestsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<FoiaRequestCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFoiaRequests(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFoiaRequestsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all foia requests
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getFoiaRequests(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<FoiaRequestCollection> {
        return this.getFoiaRequestsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<FoiaRequestCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single game
     * @param gameId ID of game to retrieve
     */
    public getGameWithHttpInfo(gameId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Game>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGame(gameId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single game
     * @param gameId ID of game to retrieve
     */
    public getGame(gameId: number, _options?: ConfigurationOptions): Observable<Game> {
        return this.getGameWithHttpInfo(gameId, _options).pipe(map((apiResponse: HttpInfo<Game>) => apiResponse.data));
    }

    /**
     * Retrieve a single GameContract
     * @param gameContractId ID of the GameContract
     */
    public getGameContractWithHttpInfo(gameContractId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GameContract>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGameContract(gameContractId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGameContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single GameContract
     * @param gameContractId ID of the GameContract
     */
    public getGameContract(gameContractId: number, _options?: ConfigurationOptions): Observable<GameContract> {
        return this.getGameContractWithHttpInfo(gameContractId, _options).pipe(map((apiResponse: HttpInfo<GameContract>) => apiResponse.data));
    }

    /**
     * Retrieve some or all game_contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getGameContractsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<GameContractCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGameContracts(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGameContractsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all game_contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getGameContracts(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<GameContractCollection> {
        return this.getGameContractsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<GameContractCollection>) => apiResponse.data));
    }

    /**
     * Retrieve some or all games
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getGamesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<GameCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGames(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGamesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all games
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getGames(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<GameCollection> {
        return this.getGamesWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<GameCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single income report
     * @param incomeReportId ID of income report to retrieve
     */
    public getIncomeReportWithHttpInfo(incomeReportId: number, _options?: ConfigurationOptions): Observable<HttpInfo<IncomeReport>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getIncomeReport(incomeReportId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIncomeReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single income report
     * @param incomeReportId ID of income report to retrieve
     */
    public getIncomeReport(incomeReportId: number, _options?: ConfigurationOptions): Observable<IncomeReport> {
        return this.getIncomeReportWithHttpInfo(incomeReportId, _options).pipe(map((apiResponse: HttpInfo<IncomeReport>) => apiResponse.data));
    }

    /**
     * Retrieve some or all income reports
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getIncomeReportsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<IncomeReportCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getIncomeReports(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIncomeReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all income reports
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getIncomeReports(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<IncomeReportCollection> {
        return this.getIncomeReportsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<IncomeReportCollection>) => apiResponse.data));
    }

    /**
     * Get a job post
     * Get a job post
     * @param jobPostId ID of job post to return
     */
    public getJobPostWithHttpInfo(jobPostId: number, _options?: ConfigurationOptions): Observable<HttpInfo<JobPost>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getJobPost(jobPostId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJobPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a job post
     * Get a job post
     * @param jobPostId ID of job post to return
     */
    public getJobPost(jobPostId: number, _options?: ConfigurationOptions): Observable<JobPost> {
        return this.getJobPostWithHttpInfo(jobPostId, _options).pipe(map((apiResponse: HttpInfo<JobPost>) => apiResponse.data));
    }

    /**
     * List all job posts
     * List all job posts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getJobPostsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<JobPostCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getJobPosts(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJobPostsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all job posts
     * List all job posts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getJobPosts(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<JobPostCollection> {
        return this.getJobPostsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<JobPostCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single ncaa financial report status
     * @param ncaaFinancialReportStatusId ID of ncaa financial report status to retrieve
     */
    public getNcaaFinancialReportStatusWithHttpInfo(ncaaFinancialReportStatusId: number, _options?: ConfigurationOptions): Observable<HttpInfo<NcaaFinancialReportStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNcaaFinancialReportStatus(ncaaFinancialReportStatusId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNcaaFinancialReportStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single ncaa financial report status
     * @param ncaaFinancialReportStatusId ID of ncaa financial report status to retrieve
     */
    public getNcaaFinancialReportStatus(ncaaFinancialReportStatusId: number, _options?: ConfigurationOptions): Observable<NcaaFinancialReportStatus> {
        return this.getNcaaFinancialReportStatusWithHttpInfo(ncaaFinancialReportStatusId, _options).pipe(map((apiResponse: HttpInfo<NcaaFinancialReportStatus>) => apiResponse.data));
    }

    /**
     * Retrieve some or all ncaa financial report statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getNcaaFinancialReportStatusesWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<NcaaFinancialReportStatusCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNcaaFinancialReportStatuses(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNcaaFinancialReportStatusesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all ncaa financial report statuses
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getNcaaFinancialReportStatuses(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<NcaaFinancialReportStatusCollection> {
        return this.getNcaaFinancialReportStatusesWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<NcaaFinancialReportStatusCollection>) => apiResponse.data));
    }

    /**
     * Get a news feed
     * Get a news feed
     * @param newsFeedId ID of news feed to return
     */
    public getNewsFeedWithHttpInfo(newsFeedId: number, _options?: ConfigurationOptions): Observable<HttpInfo<NewsFeed>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNewsFeed(newsFeedId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNewsFeedWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a news feed
     * Get a news feed
     * @param newsFeedId ID of news feed to return
     */
    public getNewsFeed(newsFeedId: number, _options?: ConfigurationOptions): Observable<NewsFeed> {
        return this.getNewsFeedWithHttpInfo(newsFeedId, _options).pipe(map((apiResponse: HttpInfo<NewsFeed>) => apiResponse.data));
    }

    /**
     * Retrieve a single position
     * @param positionId ID of position to retrieve
     */
    public getPositionWithHttpInfo(positionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Position>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPosition(positionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPositionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single position
     * @param positionId ID of position to retrieve
     */
    public getPosition(positionId: number, _options?: ConfigurationOptions): Observable<Position> {
        return this.getPositionWithHttpInfo(positionId, _options).pipe(map((apiResponse: HttpInfo<Position>) => apiResponse.data));
    }

    /**
     * Retrieve some or all positions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getPositionsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<PositionCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPositions(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPositionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all positions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getPositions(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<PositionCollection> {
        return this.getPositionsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<PositionCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single RawContract
     * @param rawContractId ID of the RawContract
     */
    public getRawContractWithHttpInfo(rawContractId: number, _options?: ConfigurationOptions): Observable<HttpInfo<RawContract>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRawContract(rawContractId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single RawContract
     * @param rawContractId ID of the RawContract
     */
    public getRawContract(rawContractId: number, _options?: ConfigurationOptions): Observable<RawContract> {
        return this.getRawContractWithHttpInfo(rawContractId, _options).pipe(map((apiResponse: HttpInfo<RawContract>) => apiResponse.data));
    }

    /**
     * Retrieve some or all raw_contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getRawContractsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<RawContractCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRawContracts(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawContractsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all raw_contracts
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getRawContracts(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<RawContractCollection> {
        return this.getRawContractsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<RawContractCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single requested item
     * @param requestedItemId ID of requested item to retrieve
     */
    public getRequestedItemWithHttpInfo(requestedItemId: number, _options?: ConfigurationOptions): Observable<HttpInfo<RequestedItem>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRequestedItem(requestedItemId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRequestedItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single requested item
     * @param requestedItemId ID of requested item to retrieve
     */
    public getRequestedItem(requestedItemId: number, _options?: ConfigurationOptions): Observable<RequestedItem> {
        return this.getRequestedItemWithHttpInfo(requestedItemId, _options).pipe(map((apiResponse: HttpInfo<RequestedItem>) => apiResponse.data));
    }

    /**
     * Retrieve some or all requested items
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getRequestedItemsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<RequestedItemCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRequestedItems(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRequestedItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all requested items
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getRequestedItems(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<RequestedItemCollection> {
        return this.getRequestedItemsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<RequestedItemCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single school
     * @param schoolId ID of school to retrieve
     */
    public getSchoolWithHttpInfo(schoolId: number, _options?: ConfigurationOptions): Observable<HttpInfo<School>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSchool(schoolId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSchoolWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single school
     * @param schoolId ID of school to retrieve
     */
    public getSchool(schoolId: number, _options?: ConfigurationOptions): Observable<School> {
        return this.getSchoolWithHttpInfo(schoolId, _options).pipe(map((apiResponse: HttpInfo<School>) => apiResponse.data));
    }

    /**
     * Retrieve alternate names for a specific school
     * @param schoolId ID of school to retrieve alternate names for
     */
    public getSchoolAlternateNamesWithHttpInfo(schoolId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetSchoolAlternateNames200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSchoolAlternateNames(schoolId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSchoolAlternateNamesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve alternate names for a specific school
     * @param schoolId ID of school to retrieve alternate names for
     */
    public getSchoolAlternateNames(schoolId: number, _options?: ConfigurationOptions): Observable<GetSchoolAlternateNames200Response> {
        return this.getSchoolAlternateNamesWithHttpInfo(schoolId, _options).pipe(map((apiResponse: HttpInfo<GetSchoolAlternateNames200Response>) => apiResponse.data));
    }

    /**
     * Retrieve some or all schools
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSchoolsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<SchoolCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSchools(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSchoolsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all schools
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSchools(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<SchoolCollection> {
        return this.getSchoolsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<SchoolCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Season
     * @param seasonId ID of the Season
     */
    public getSeasonWithHttpInfo(seasonId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Season>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSeason(seasonId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeasonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Season
     * @param seasonId ID of the Season
     */
    public getSeason(seasonId: number, _options?: ConfigurationOptions): Observable<Season> {
        return this.getSeasonWithHttpInfo(seasonId, _options).pipe(map((apiResponse: HttpInfo<Season>) => apiResponse.data));
    }

    /**
     * Retrieve some or all seasons
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSeasonsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<SeasonCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSeasons(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeasonsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all seasons
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSeasons(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<SeasonCollection> {
        return this.getSeasonsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<SeasonCollection>) => apiResponse.data));
    }

    /**
     * Retrieve similar coaches based on coach ID
     * @param coachId ID of coach to retrieve
     * @param [q] Ransack query
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     */
    public getSimilarCoachesWithHttpInfo(coachId: number, q?: any, page?: number, perPage?: number, _options?: ConfigurationOptions): Observable<HttpInfo<CoachCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSimilarCoaches(coachId, q, page, perPage, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSimilarCoachesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve similar coaches based on coach ID
     * @param coachId ID of coach to retrieve
     * @param [q] Ransack query
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     */
    public getSimilarCoaches(coachId: number, q?: any, page?: number, perPage?: number, _options?: ConfigurationOptions): Observable<CoachCollection> {
        return this.getSimilarCoachesWithHttpInfo(coachId, q, page, perPage, _options).pipe(map((apiResponse: HttpInfo<CoachCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single sport
     * @param sportId ID of sport to retrieve
     */
    public getSportWithHttpInfo(sportId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Sport>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSport(sportId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single sport
     * @param sportId ID of sport to retrieve
     */
    public getSport(sportId: number, _options?: ConfigurationOptions): Observable<Sport> {
        return this.getSportWithHttpInfo(sportId, _options).pipe(map((apiResponse: HttpInfo<Sport>) => apiResponse.data));
    }

    /**
     * Retrieve some or all sports
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSportsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<SportCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSports(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all sports
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSports(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<SportCollection> {
        return this.getSportsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<SportCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Subdivision
     * @param subdivisionId ID of the Subdivision
     */
    public getSubdivisionWithHttpInfo(subdivisionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Subdivision>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubdivision(subdivisionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubdivisionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Subdivision
     * @param subdivisionId ID of the Subdivision
     */
    public getSubdivision(subdivisionId: number, _options?: ConfigurationOptions): Observable<Subdivision> {
        return this.getSubdivisionWithHttpInfo(subdivisionId, _options).pipe(map((apiResponse: HttpInfo<Subdivision>) => apiResponse.data));
    }

    /**
     * Retrieve some or all subdivisions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSubdivisionsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<SubdivisionCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubdivisions(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubdivisionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all subdivisions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSubdivisions(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<SubdivisionCollection> {
        return this.getSubdivisionsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<SubdivisionCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Subscription
     * @param subscriptionId ID of the Subscription
     */
    public getSubscriptionWithHttpInfo(subscriptionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Subscription>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubscription(subscriptionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Subscription
     * @param subscriptionId ID of the Subscription
     */
    public getSubscription(subscriptionId: number, _options?: ConfigurationOptions): Observable<Subscription> {
        return this.getSubscriptionWithHttpInfo(subscriptionId, _options).pipe(map((apiResponse: HttpInfo<Subscription>) => apiResponse.data));
    }

    /**
     * Retrieve the all subscriptions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSubscriptionsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubscriptions(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubscriptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the all subscriptions
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getSubscriptions(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<SubscriptionCollection> {
        return this.getSubscriptionsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCollection>) => apiResponse.data));
    }

    /**
     * Retrieve the current system settings
     */
    public getSystemSettingsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<SystemSetting>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSystemSettings(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the current system settings
     */
    public getSystemSettings(_options?: ConfigurationOptions): Observable<SystemSetting> {
        return this.getSystemSettingsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SystemSetting>) => apiResponse.data));
    }

    /**
     * Retrieve a single user
     * @param userId ID of user to retrieve
     */
    public getUserWithHttpInfo(userId: number, _options?: ConfigurationOptions): Observable<HttpInfo<User>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUser(userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single user
     * @param userId ID of user to retrieve
     */
    public getUser(userId: number, _options?: ConfigurationOptions): Observable<User> {
        return this.getUserWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Retrieve some or all users
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getUsersWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<UserCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUsers(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all users
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getUsers(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<UserCollection> {
        return this.getUsersWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<UserCollection>) => apiResponse.data));
    }

    /**
     * Retrieve a single Vendor
     * @param vendorId ID of the Vendor
     */
    public getVendorWithHttpInfo(vendorId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Vendor>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVendor(vendorId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVendorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single Vendor
     * @param vendorId ID of the Vendor
     */
    public getVendor(vendorId: number, _options?: ConfigurationOptions): Observable<Vendor> {
        return this.getVendorWithHttpInfo(vendorId, _options).pipe(map((apiResponse: HttpInfo<Vendor>) => apiResponse.data));
    }

    /**
     * Retrieve some or all vendors
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getVendorsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<VendorCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVendors(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVendorsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all vendors
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getVendors(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<VendorCollection> {
        return this.getVendorsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<VendorCollection>) => apiResponse.data));
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
    public getWireChangesWithHttpInfo(page?: number, perPage?: number, q?: any, qCoachIdEq?: number, qSchoolIdEq?: number, qSportIdEq?: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetWireChanges200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getWireChanges(page, perPage, q, qCoachIdEq, qSchoolIdEq, qSportIdEq, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWireChangesWithHttpInfo(rsp)));
            }));
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
    public getWireChanges(page?: number, perPage?: number, q?: any, qCoachIdEq?: number, qSchoolIdEq?: number, qSportIdEq?: number, _options?: ConfigurationOptions): Observable<GetWireChanges200Response> {
        return this.getWireChangesWithHttpInfo(page, perPage, q, qCoachIdEq, qSchoolIdEq, qSportIdEq, _options).pipe(map((apiResponse: HttpInfo<GetWireChanges200Response>) => apiResponse.data));
    }

    /**
     * Search Coaches by priority_ids
     * @param [filters]
     */
    public searchCoachesWithHttpInfo(filters?: Filters, _options?: ConfigurationOptions): Observable<HttpInfo<CoachCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchCoaches(filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchCoachesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search Coaches by priority_ids
     * @param [filters]
     */
    public searchCoaches(filters?: Filters, _options?: ConfigurationOptions): Observable<CoachCollection> {
        return this.searchCoachesWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<CoachCollection>) => apiResponse.data));
    }

    /**
     * Update a single Cashflow
     * @param cashflowId ID of the Cashflow
     * @param cashflow Cashflow attributes to update
     */
    public updateCashflowWithHttpInfo(cashflowId: number, cashflow: Cashflow, _options?: ConfigurationOptions): Observable<HttpInfo<Cashflow>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCashflow(cashflowId, cashflow, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCashflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single Cashflow
     * @param cashflowId ID of the Cashflow
     * @param cashflow Cashflow attributes to update
     */
    public updateCashflow(cashflowId: number, cashflow: Cashflow, _options?: ConfigurationOptions): Observable<Cashflow> {
        return this.updateCashflowWithHttpInfo(cashflowId, cashflow, _options).pipe(map((apiResponse: HttpInfo<Cashflow>) => apiResponse.data));
    }

    /**
     * Update a coach
     * @param coachId ID of coach to update
     * @param coach Attributes to update. Currently only supports email, phone, bio, bio_text. Others will be ignored.
     */
    public updateCoachWithHttpInfo(coachId: number, coach: Coach, _options?: ConfigurationOptions): Observable<HttpInfo<Coach>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCoach(coachId, coach, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCoachWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a coach
     * @param coachId ID of coach to update
     * @param coach Attributes to update. Currently only supports email, phone, bio, bio_text. Others will be ignored.
     */
    public updateCoach(coachId: number, coach: Coach, _options?: ConfigurationOptions): Observable<Coach> {
        return this.updateCoachWithHttpInfo(coachId, coach, _options).pipe(map((apiResponse: HttpInfo<Coach>) => apiResponse.data));
    }

    /**
     * Update a compensation
     * @param compensationId ID of compensation to update
     * @param compensation Compensation to update
     */
    public updateCompensationWithHttpInfo(compensationId: number, compensation: Compensation, _options?: ConfigurationOptions): Observable<HttpInfo<Compensation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCompensation(compensationId, compensation, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCompensationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a compensation
     * @param compensationId ID of compensation to update
     * @param compensation Compensation to update
     */
    public updateCompensation(compensationId: number, compensation: Compensation, _options?: ConfigurationOptions): Observable<Compensation> {
        return this.updateCompensationWithHttpInfo(compensationId, compensation, _options).pipe(map((apiResponse: HttpInfo<Compensation>) => apiResponse.data));
    }

    /**
     * Update a single Conference
     * @param conferenceId ID of the Conference
     * @param conference Conference attributes to update
     */
    public updateConferenceWithHttpInfo(conferenceId: number, conference: Conference, _options?: ConfigurationOptions): Observable<HttpInfo<Conference>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateConference(conferenceId, conference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single Conference
     * @param conferenceId ID of the Conference
     * @param conference Conference attributes to update
     */
    public updateConference(conferenceId: number, conference: Conference, _options?: ConfigurationOptions): Observable<Conference> {
        return this.updateConferenceWithHttpInfo(conferenceId, conference, _options).pipe(map((apiResponse: HttpInfo<Conference>) => apiResponse.data));
    }

    /**
     * Update a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     * @param conferenceship Conferenceship attributes to update
     */
    public updateConferenceshipWithHttpInfo(conferenceshipId: number, conferenceship: Conferenceship, _options?: ConfigurationOptions): Observable<HttpInfo<Conferenceship>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateConferenceship(conferenceshipId, conferenceship, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConferenceshipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single Conferenceship
     * @param conferenceshipId ID of the Conferenceship
     * @param conferenceship Conferenceship attributes to update
     */
    public updateConferenceship(conferenceshipId: number, conferenceship: Conferenceship, _options?: ConfigurationOptions): Observable<Conferenceship> {
        return this.updateConferenceshipWithHttpInfo(conferenceshipId, conferenceship, _options).pipe(map((apiResponse: HttpInfo<Conferenceship>) => apiResponse.data));
    }

    /**
     * Update a single foia label
     * @param foiaLabelId ID of foia label to update
     * @param foiaLabel Foia label to update
     */
    public updateFoiaLabelWithHttpInfo(foiaLabelId: number, foiaLabel: FoiaLabel, _options?: ConfigurationOptions): Observable<HttpInfo<FoiaLabel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateFoiaLabel(foiaLabelId, foiaLabel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFoiaLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single foia label
     * @param foiaLabelId ID of foia label to update
     * @param foiaLabel Foia label to update
     */
    public updateFoiaLabel(foiaLabelId: number, foiaLabel: FoiaLabel, _options?: ConfigurationOptions): Observable<FoiaLabel> {
        return this.updateFoiaLabelWithHttpInfo(foiaLabelId, foiaLabel, _options).pipe(map((apiResponse: HttpInfo<FoiaLabel>) => apiResponse.data));
    }

    /**
     * Update a single foia request
     * @param foiaRequestId ID of foia request to update
     * @param foiaRequest Foia request to update
     */
    public updateFoiaRequestWithHttpInfo(foiaRequestId: number, foiaRequest: FoiaRequest, _options?: ConfigurationOptions): Observable<HttpInfo<FoiaRequest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateFoiaRequest(foiaRequestId, foiaRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFoiaRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single foia request
     * @param foiaRequestId ID of foia request to update
     * @param foiaRequest Foia request to update
     */
    public updateFoiaRequest(foiaRequestId: number, foiaRequest: FoiaRequest, _options?: ConfigurationOptions): Observable<FoiaRequest> {
        return this.updateFoiaRequestWithHttpInfo(foiaRequestId, foiaRequest, _options).pipe(map((apiResponse: HttpInfo<FoiaRequest>) => apiResponse.data));
    }

    /**
     * Update a job post
     * Update a job post
     * @param jobPostId ID of job post to update
     * @param [jobPost]
     */
    public updateJobPostWithHttpInfo(jobPostId: number, jobPost?: JobPost, _options?: ConfigurationOptions): Observable<HttpInfo<JobPost>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateJobPost(jobPostId, jobPost, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateJobPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a job post
     * Update a job post
     * @param jobPostId ID of job post to update
     * @param [jobPost]
     */
    public updateJobPost(jobPostId: number, jobPost?: JobPost, _options?: ConfigurationOptions): Observable<JobPost> {
        return this.updateJobPostWithHttpInfo(jobPostId, jobPost, _options).pipe(map((apiResponse: HttpInfo<JobPost>) => apiResponse.data));
    }

    /**
     * Update a single requested item
     * @param requestedItemId ID of requested item to update
     * @param requestedItem Requested item to update
     */
    public updateRequestedItemWithHttpInfo(requestedItemId: number, requestedItem: RequestedItem, _options?: ConfigurationOptions): Observable<HttpInfo<RequestedItem>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateRequestedItem(requestedItemId, requestedItem, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRequestedItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single requested item
     * @param requestedItemId ID of requested item to update
     * @param requestedItem Requested item to update
     */
    public updateRequestedItem(requestedItemId: number, requestedItem: RequestedItem, _options?: ConfigurationOptions): Observable<RequestedItem> {
        return this.updateRequestedItemWithHttpInfo(requestedItemId, requestedItem, _options).pipe(map((apiResponse: HttpInfo<RequestedItem>) => apiResponse.data));
    }

    /**
     * Update a single Season
     * @param seasonId ID of the Season
     * @param season Season attributes to update
     */
    public updateSeasonWithHttpInfo(seasonId: number, season: Season, _options?: ConfigurationOptions): Observable<HttpInfo<Season>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSeason(seasonId, season, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSeasonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single Season
     * @param seasonId ID of the Season
     * @param season Season attributes to update
     */
    public updateSeason(seasonId: number, season: Season, _options?: ConfigurationOptions): Observable<Season> {
        return this.updateSeasonWithHttpInfo(seasonId, season, _options).pipe(map((apiResponse: HttpInfo<Season>) => apiResponse.data));
    }

    /**
     * Retrieve a single user
     */
    public userMeWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<User>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.userMe(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userMeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single user
     */
    public userMe(_options?: ConfigurationOptions): Observable<User> {
        return this.userMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Verifies whether the user has intercollegiate access based on their email.
     * @param userEmail The email of the user whose intercollegiate access is being verified.
     */
    public verifyUserIntercollegiateAccessWithHttpInfo(userEmail: string, _options?: ConfigurationOptions): Observable<HttpInfo<VerifyUserIntercollegiateAccess200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.verifyUserIntercollegiateAccess(userEmail, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyUserIntercollegiateAccessWithHttpInfo(rsp)));
            }));
    }

    /**
     * Verifies whether the user has intercollegiate access based on their email.
     * @param userEmail The email of the user whose intercollegiate access is being verified.
     */
    public verifyUserIntercollegiateAccess(userEmail: string, _options?: ConfigurationOptions): Observable<VerifyUserIntercollegiateAccess200Response> {
        return this.verifyUserIntercollegiateAccessWithHttpInfo(userEmail, _options).pipe(map((apiResponse: HttpInfo<VerifyUserIntercollegiateAccess200Response>) => apiResponse.data));
    }

}

import { DossierApiRequestFactory, DossierApiResponseProcessor} from "../apis/DossierApi";
export class ObservableDossierApi {
    private requestFactory: DossierApiRequestFactory;
    private responseProcessor: DossierApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DossierApiRequestFactory,
        responseProcessor?: DossierApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DossierApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DossierApiResponseProcessor();
    }

    /**
     * University Dossier Report
     * @param winadId
     */
    public universityDossierReportDossierWinadIdGetWithHttpInfo(winadId: number, _options?: ConfigurationOptions): Observable<HttpInfo<DossierReportResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.universityDossierReportDossierWinadIdGet(winadId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.universityDossierReportDossierWinadIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * University Dossier Report
     * @param winadId
     */
    public universityDossierReportDossierWinadIdGet(winadId: number, _options?: ConfigurationOptions): Observable<DossierReportResponse> {
        return this.universityDossierReportDossierWinadIdGetWithHttpInfo(winadId, _options).pipe(map((apiResponse: HttpInfo<DossierReportResponse>) => apiResponse.data));
    }

}

import { IntercollegiateApiRequestFactory, IntercollegiateApiResponseProcessor} from "../apis/IntercollegiateApi";
export class ObservableIntercollegiateApi {
    private requestFactory: IntercollegiateApiRequestFactory;
    private responseProcessor: IntercollegiateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: IntercollegiateApiRequestFactory,
        responseProcessor?: IntercollegiateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IntercollegiateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IntercollegiateApiResponseProcessor();
    }

    /**
     * Create news feed
     * @param [newsFeed]
     */
    public createNewsFeedsWithHttpInfo(newsFeed?: NewsFeed, _options?: ConfigurationOptions): Observable<HttpInfo<NewsFeed>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createNewsFeeds(newsFeed, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewsFeedsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create news feed
     * @param [newsFeed]
     */
    public createNewsFeeds(newsFeed?: NewsFeed, _options?: ConfigurationOptions): Observable<NewsFeed> {
        return this.createNewsFeedsWithHttpInfo(newsFeed, _options).pipe(map((apiResponse: HttpInfo<NewsFeed>) => apiResponse.data));
    }

    /**
     * Retrieve a job post by ID
     * @param jobPostId ID of job post to return
     */
    public getJobPostWithHttpInfo(jobPostId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Job>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getJobPost(jobPostId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJobPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a job post by ID
     * @param jobPostId ID of job post to return
     */
    public getJobPost(jobPostId: number, _options?: ConfigurationOptions): Observable<Job> {
        return this.getJobPostWithHttpInfo(jobPostId, _options).pipe(map((apiResponse: HttpInfo<Job>) => apiResponse.data));
    }

    /**
     * Retrieve some or all active jobs
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getJobPostsWithHttpInfo(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<JobCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getJobPosts(page, perPage, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJobPostsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all active jobs
     * @param [page] results page to retrieve.
     * @param [perPage] number of results per page.
     * @param [q] Ransack query
     */
    public getJobPosts(page?: number, perPage?: number, q?: any, _options?: ConfigurationOptions): Observable<JobCollection> {
        return this.getJobPostsWithHttpInfo(page, perPage, q, _options).pipe(map((apiResponse: HttpInfo<JobCollection>) => apiResponse.data));
    }

    /**
     * Retrieve news feed
     */
    public getNewsFeedsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<NewsFeedCollection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNewsFeeds(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNewsFeedsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve news feed
     */
    public getNewsFeeds(_options?: ConfigurationOptions): Observable<NewsFeedCollection> {
        return this.getNewsFeedsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<NewsFeedCollection>) => apiResponse.data));
    }

}

import { MlAthleticApiRequestFactory, MlAthleticApiResponseProcessor} from "../apis/MlAthleticApi";
export class ObservableMlAthleticApi {
    private requestFactory: MlAthleticApiRequestFactory;
    private responseProcessor: MlAthleticApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MlAthleticApiRequestFactory,
        responseProcessor?: MlAthleticApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MlAthleticApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MlAthleticApiResponseProcessor();
    }

    /**
     * Check if the model is loaded and the API is running.
     */
    public healthCheckWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<HealthCheckSuccess>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.healthCheck(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthCheckWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check if the model is loaded and the API is running.
     */
    public healthCheck(_options?: ConfigurationOptions): Observable<HealthCheckSuccess> {
        return this.healthCheckWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<HealthCheckSuccess>) => apiResponse.data));
    }

    /**
     * Classify a job post as athletic or not.
     * @param [predictBody]
     */
    public predictWithHttpInfo(predictBody?: PredictBody, _options?: ConfigurationOptions): Observable<HttpInfo<PredictSuccess>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.predict(predictBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.predictWithHttpInfo(rsp)));
            }));
    }

    /**
     * Classify a job post as athletic or not.
     * @param [predictBody]
     */
    public predict(predictBody?: PredictBody, _options?: ConfigurationOptions): Observable<PredictSuccess> {
        return this.predictWithHttpInfo(predictBody, _options).pipe(map((apiResponse: HttpInfo<PredictSuccess>) => apiResponse.data));
    }

}

import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";
export class ObservableReportingApi {
    private requestFactory: ReportingApiRequestFactory;
    private responseProcessor: ReportingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportingApiRequestFactory,
        responseProcessor?: ReportingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReportingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReportingApiResponseProcessor();
    }

    /**
     * Retrieve some or all coach contract requests
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getCoachContractRequestsWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCoachContractRequests(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCoachContractRequestsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all coach contract requests
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getCoachContractRequests(page?: number, q?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getCoachContractRequestsWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve some or all coach history
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getCoachHistoryWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCoachHistory(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCoachHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all coach history
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getCoachHistory(page?: number, q?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getCoachHistoryWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve some or all conferenceships
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getConferenceshipsWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConferenceships(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConferenceshipsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all conferenceships
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getConferenceships(page?: number, q?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getConferenceshipsWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve some or all foia details
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getFoiaDetailsWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFoiaDetails(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFoiaDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all foia details
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getFoiaDetails(page?: number, q?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getFoiaDetailsWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve some or all games
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getGamesWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGames(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGamesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all games
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getGames(page?: number, q?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getGamesWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve some or all client invoices
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getInvoicesWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getInvoices(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all client invoices
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getInvoices(page?: number, q?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getInvoicesWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve some or all school contract requests
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSchoolContractRequestsWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSchoolContractRequests(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSchoolContractRequestsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve some or all school contract requests
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSchoolContractRequests(page?: number, q?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getSchoolContractRequestsWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve schools with thier financials qc
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSchoolsFinancialsQcWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<FinancialQc>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSchoolsFinancialsQc(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSchoolsFinancialsQcWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve schools with thier financials qc
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSchoolsFinancialsQc(page?: number, q?: any, _options?: ConfigurationOptions): Observable<FinancialQc> {
        return this.getSchoolsFinancialsQcWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<FinancialQc>) => apiResponse.data));
    }

    /**
     * Retrieve subscriptions
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSubscriptionsWithHttpInfo(page?: number, q?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubscriptions(page, q, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubscriptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve subscriptions
     * @param [page] results page to retrieve.
     * @param [q] Ransack query
     */
    public getSubscriptions(page?: number, q?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getSubscriptionsWithHttpInfo(page, q, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { ScraperApiRequestFactory, ScraperApiResponseProcessor} from "../apis/ScraperApi";
export class ObservableScraperApi {
    private requestFactory: ScraperApiRequestFactory;
    private responseProcessor: ScraperApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ScraperApiRequestFactory,
        responseProcessor?: ScraperApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ScraperApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ScraperApiResponseProcessor();
    }

    /**
     * Root endpoint
     * List all available scrapers
     */
    public listScrapersWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<Scraper>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listScrapers(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listScrapersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Root endpoint
     * List all available scrapers
     */
    public listScrapers(_options?: ConfigurationOptions): Observable<Array<Scraper>> {
        return this.listScrapersWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Scraper>>) => apiResponse.data));
    }

    /**
     * Run a specified scraper with given arguments
     * Run a scraper
     * @param command The name of the scraper to run
     * @param [body]
     */
    public runScraperWithHttpInfo(command: string, body?: any, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.runScraper(command, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runScraperWithHttpInfo(rsp)));
            }));
    }

    /**
     * Run a specified scraper with given arguments
     * Run a scraper
     * @param command The name of the scraper to run
     * @param [body]
     */
    public runScraper(command: string, body?: any, _options?: ConfigurationOptions): Observable<void> {
        return this.runScraperWithHttpInfo(command, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
