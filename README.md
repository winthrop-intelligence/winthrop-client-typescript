# @winthrop-intelligence/winthrop-client-typescript@1.44.0

A TypeScript SDK client for the api-gateway.default.svc.cluster.local API.

## Usage

First, install the SDK from npm.

```bash
npm install @winthrop-intelligence/winthrop-client-typescript --save
```

Next, try it out.


```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { AverageConferenceCompRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the conference
    conferenceId: 56,
    // Array<number> | Season years
    seasonYears: ...,
    // Array<number> | IDs of the sports
    sportIds: ...,
    // Array<number> | IDs of the position types
    positionTypeIds: ...,
  } satisfies AverageConferenceCompRequest;

  try {
    const data = await api.averageConferenceComp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*DefaultApi* | [**averageConferenceComp**](docs/DefaultApi.md#averageconferencecomp) | **GET** /api/v1/compensations/average_conference_comp | 
*DefaultApi* | [**averageDivisionComp**](docs/DefaultApi.md#averagedivisioncomp) | **GET** /api/v1/compensations/average_division_comp | 
*DefaultApi* | [**averageSchoolComp**](docs/DefaultApi.md#averageschoolcomp) | **GET** /api/v1/compensations/average_school_comp | 
*DefaultApi* | [**averageSubdivisionComp**](docs/DefaultApi.md#averagesubdivisioncomp) | **GET** /api/v1/compensations/average_subdivision_comp | 
*DefaultApi* | [**compareColi**](docs/DefaultApi.md#comparecoli) | **GET** /api/v1/schools/compare_coli | 
*DefaultApi* | [**createCashflow**](docs/DefaultApi.md#createcashflow) | **POST** /api/v1/cashflows | 
*DefaultApi* | [**createCoach**](docs/DefaultApi.md#createcoach) | **POST** /api/v1/coaches | 
*DefaultApi* | [**createConference**](docs/DefaultApi.md#createconference) | **POST** /api/v1/conferences | 
*DefaultApi* | [**createConferenceship**](docs/DefaultApi.md#createconferenceship) | **POST** /api/v1/conferenceships | 
*DefaultApi* | [**createFoiaLabel**](docs/DefaultApi.md#createfoialabel) | **POST** /api/v1/foia_labels | 
*DefaultApi* | [**createFoiaRequest**](docs/DefaultApi.md#createfoiarequest) | **POST** /api/v1/foia_requests | 
*DefaultApi* | [**createJobPost**](docs/DefaultApi.md#createjobpost) | **POST** /central_jobs/job_posts | Create a job post
*DefaultApi* | [**createPosition**](docs/DefaultApi.md#createposition) | **POST** /api/v1/positions | 
*DefaultApi* | [**createRequestedItem**](docs/DefaultApi.md#createrequesteditem) | **POST** /api/v1/requested_items | 
*DefaultApi* | [**createSeason**](docs/DefaultApi.md#createseason) | **POST** /api/v1/seasons | 
*DefaultApi* | [**deleteCashflow**](docs/DefaultApi.md#deletecashflow) | **DELETE** /api/v1/cashflows/{cashflowId} | 
*DefaultApi* | [**deleteConference**](docs/DefaultApi.md#deleteconference) | **DELETE** /api/v1/conferences/{conferenceId} | 
*DefaultApi* | [**deleteConferenceship**](docs/DefaultApi.md#deleteconferenceship) | **DELETE** /api/v1/conferenceships/{conferenceshipId} | 
*DefaultApi* | [**deleteFoiaLabel**](docs/DefaultApi.md#deletefoialabel) | **DELETE** /api/v1/foia_labels/{foiaLabelId} | 
*DefaultApi* | [**deleteFoiaRequest**](docs/DefaultApi.md#deletefoiarequest) | **DELETE** /api/v1/foia_requests/{foiaRequestId} | 
*DefaultApi* | [**deleteJobPost**](docs/DefaultApi.md#deletejobpost) | **DELETE** /central_jobs/job_posts/{jobPostId} | Delete a job post
*DefaultApi* | [**deletePosition**](docs/DefaultApi.md#deleteposition) | **DELETE** /api/v1/positions/{positionId} | 
*DefaultApi* | [**deleteRequestedItem**](docs/DefaultApi.md#deleterequesteditem) | **DELETE** /api/v1/requested_items/{requestedItemId} | 
*DefaultApi* | [**deleteSeason**](docs/DefaultApi.md#deleteseason) | **DELETE** /api/v1/seasons/{seasonId} | 
*DefaultApi* | [**getAdministrator**](docs/DefaultApi.md#getadministrator) | **GET** /api/v1/administrators/{administratorId} | 
*DefaultApi* | [**getAdministrators**](docs/DefaultApi.md#getadministrators) | **GET** /api/v1/administrators | 
*DefaultApi* | [**getAuditedFinancialReportStatus**](docs/DefaultApi.md#getauditedfinancialreportstatus) | **GET** /api/v1/audited_financial_report_statuses/{auditedFinancialReportStatusId} | 
*DefaultApi* | [**getAuditedFinancialReportStatuses**](docs/DefaultApi.md#getauditedfinancialreportstatuses) | **GET** /api/v1/audited_financial_report_statuses | 
*DefaultApi* | [**getCashflow**](docs/DefaultApi.md#getcashflow) | **GET** /api/v1/cashflows/{cashflowId} | 
*DefaultApi* | [**getCashflowGroups**](docs/DefaultApi.md#getcashflowgroups) | **GET** /api/v1/cashflow_groups | 
*DefaultApi* | [**getCashflows**](docs/DefaultApi.md#getcashflows) | **GET** /api/v1/cashflows | 
*DefaultApi* | [**getCategories**](docs/DefaultApi.md#getcategories) | **GET** /central_jobs/categories | List all categories
*DefaultApi* | [**getCoach**](docs/DefaultApi.md#getcoach) | **GET** /api/v1/coaches/{coachId} | 
*DefaultApi* | [**getCoachCompensation**](docs/DefaultApi.md#getcoachcompensation) | **GET** /api/v1/coach_compensations/get_coach_compensation | 
*DefaultApi* | [**getCoachSearches**](docs/DefaultApi.md#getcoachsearches) | **GET** /api/v1/coach_searches | 
*DefaultApi* | [**getCoaches**](docs/DefaultApi.md#getcoaches) | **GET** /api/v1/coaches | 
*DefaultApi* | [**getCompensation**](docs/DefaultApi.md#getcompensation) | **GET** /api/v1/compensations/{compensationId} | 
*DefaultApi* | [**getCompensations**](docs/DefaultApi.md#getcompensations) | **GET** /api/v1/compensations | 
*DefaultApi* | [**getConference**](docs/DefaultApi.md#getconference) | **GET** /api/v1/conferences/{conferenceId} | 
*DefaultApi* | [**getConferenceCashflowStats**](docs/DefaultApi.md#getconferencecashflowstats) | **GET** /api/v1/conferences/{conferenceId}/cashflow_stats | 
*DefaultApi* | [**getConferencePositionStats**](docs/DefaultApi.md#getconferencepositionstats) | **GET** /api/v1/conferences/{conferenceId}/position_stats | 
*DefaultApi* | [**getConferences**](docs/DefaultApi.md#getconferences) | **GET** /api/v1/conferences | 
*DefaultApi* | [**getConferenceship**](docs/DefaultApi.md#getconferenceship) | **GET** /api/v1/conferenceships/{conferenceshipId} | 
*DefaultApi* | [**getConferenceships**](docs/DefaultApi.md#getconferenceships) | **GET** /api/v1/conferenceships | 
*DefaultApi* | [**getContact**](docs/DefaultApi.md#getcontact) | **GET** /api/v1/contacts/{contactId} | 
*DefaultApi* | [**getContacts**](docs/DefaultApi.md#getcontacts) | **GET** /api/v1/contacts | 
*DefaultApi* | [**getContract**](docs/DefaultApi.md#getcontract) | **GET** /api/v1/contracts/{contractId} | 
*DefaultApi* | [**getContracts**](docs/DefaultApi.md#getcontracts) | **GET** /api/v1/contracts | 
*DefaultApi* | [**getDeal**](docs/DefaultApi.md#getdeal) | **GET** /api/v1/deals/{dealId} | 
*DefaultApi* | [**getDealSearches**](docs/DefaultApi.md#getdealsearches) | **GET** /api/v1/deal_searches | 
*DefaultApi* | [**getDealStatus**](docs/DefaultApi.md#getdealstatus) | **GET** /api/v1/deal_statuses/{dealStatusId} | 
*DefaultApi* | [**getDealStatuses**](docs/DefaultApi.md#getdealstatuses) | **GET** /api/v1/deal_statuses | 
*DefaultApi* | [**getDeals**](docs/DefaultApi.md#getdeals) | **GET** /api/v1/deals | 
*DefaultApi* | [**getDepartmentSearches**](docs/DefaultApi.md#getdepartmentsearches) | **GET** /api/v1/department_searches | 
*DefaultApi* | [**getDivision**](docs/DefaultApi.md#getdivision) | **GET** /api/v1/divisions/{divisionId} | 
*DefaultApi* | [**getDivisions**](docs/DefaultApi.md#getdivisions) | **GET** /api/v1/divisions | 
*DefaultApi* | [**getFilterOptions**](docs/DefaultApi.md#getfilteroptions) | **GET** /api/v1/filter_options | 
*DefaultApi* | [**getFilterOptionsAllSchools**](docs/DefaultApi.md#getfilteroptionsallschools) | **GET** /api/v1/filter_options/all_schools | 
*DefaultApi* | [**getFilterOptionsConferences**](docs/DefaultApi.md#getfilteroptionsconferences) | **GET** /api/v1/filter_options/conferences | 
*DefaultApi* | [**getFilterOptionsDealTypes**](docs/DefaultApi.md#getfilteroptionsdealtypes) | **GET** /api/v1/filter_options/deal_types | 
*DefaultApi* | [**getFilterOptionsSchoolGroups**](docs/DefaultApi.md#getfilteroptionsschoolgroups) | **GET** /api/v1/filter_options/school_groups | 
*DefaultApi* | [**getFilterOptionsSchools**](docs/DefaultApi.md#getfilteroptionsschools) | **GET** /api/v1/filter_options/schools | 
*DefaultApi* | [**getFilterOptionsSubdivisions**](docs/DefaultApi.md#getfilteroptionssubdivisions) | **GET** /api/v1/filter_options/subdivisions | 
*DefaultApi* | [**getFilterOptionsVendors**](docs/DefaultApi.md#getfilteroptionsvendors) | **GET** /api/v1/filter_options/vendors | 
*DefaultApi* | [**getFinancialSearches**](docs/DefaultApi.md#getfinancialsearches) | **GET** /api/v1/financial_searches | 
*DefaultApi* | [**getFoiaLabel**](docs/DefaultApi.md#getfoialabel) | **GET** /api/v1/foia_labels/{foiaLabelId} | 
*DefaultApi* | [**getFoiaLabels**](docs/DefaultApi.md#getfoialabels) | **GET** /api/v1/foia_labels | 
*DefaultApi* | [**getFoiaRequest**](docs/DefaultApi.md#getfoiarequest) | **GET** /api/v1/foia_requests/{foiaRequestId} | 
*DefaultApi* | [**getFoiaRequests**](docs/DefaultApi.md#getfoiarequests) | **GET** /api/v1/foia_requests | 
*DefaultApi* | [**getGadSearches**](docs/DefaultApi.md#getgadsearches) | **GET** /api/v1/gad_searches | 
*DefaultApi* | [**getGame**](docs/DefaultApi.md#getgame) | **GET** /api/v1/games/{gameId} | 
*DefaultApi* | [**getGameContract**](docs/DefaultApi.md#getgamecontract) | **GET** /api/v1/game_contracts/{game_contractId} | 
*DefaultApi* | [**getGameContracts**](docs/DefaultApi.md#getgamecontracts) | **GET** /api/v1/game_contracts | 
*DefaultApi* | [**getGamePost**](docs/DefaultApi.md#getgamepost) | **GET** /api/v1/game_posts/{gamePostId} | 
*DefaultApi* | [**getGamePostSearches**](docs/DefaultApi.md#getgamepostsearches) | **GET** /api/v1/game_post_searches | 
*DefaultApi* | [**getGamePosts**](docs/DefaultApi.md#getgameposts) | **GET** /api/v1/game_posts | 
*DefaultApi* | [**getGames**](docs/DefaultApi.md#getgames) | **GET** /api/v1/games | 
*DefaultApi* | [**getIncomeReport**](docs/DefaultApi.md#getincomereport) | **GET** /api/v1/income_reports/{incomeReportId} | 
*DefaultApi* | [**getIncomeReports**](docs/DefaultApi.md#getincomereports) | **GET** /api/v1/income_reports | 
*DefaultApi* | [**getJobPost**](docs/DefaultApi.md#getjobpost) | **GET** /central_jobs/job_posts/{jobPostId} | Get a job post
*DefaultApi* | [**getJobPosts**](docs/DefaultApi.md#getjobposts) | **GET** /central_jobs/job_posts | List all job posts
*DefaultApi* | [**getLadFilterOptions**](docs/DefaultApi.md#getladfilteroptions) | **GET** /api/v1/lad_filter_options | 
*DefaultApi* | [**getNcaaFinancialReportStatus**](docs/DefaultApi.md#getncaafinancialreportstatus) | **GET** /api/v1/ncaa_financial_report_statuses/{ncaaFinancialReportStatusId} | 
*DefaultApi* | [**getNcaaFinancialReportStatuses**](docs/DefaultApi.md#getncaafinancialreportstatuses) | **GET** /api/v1/ncaa_financial_report_statuses | 
*DefaultApi* | [**getNewsFeed**](docs/DefaultApi.md#getnewsfeed) | **GET** /wi_jobs/news_feeds/{newsFeedId} | Get a news feed
*DefaultApi* | [**getPosition**](docs/DefaultApi.md#getposition) | **GET** /api/v1/positions/{positionId} | 
*DefaultApi* | [**getPositions**](docs/DefaultApi.md#getpositions) | **GET** /api/v1/positions | 
*DefaultApi* | [**getRawContract**](docs/DefaultApi.md#getrawcontract) | **GET** /api/v1/raw_contracts/{raw_contractId} | 
*DefaultApi* | [**getRawContracts**](docs/DefaultApi.md#getrawcontracts) | **GET** /api/v1/raw_contracts | 
*DefaultApi* | [**getRequestedItem**](docs/DefaultApi.md#getrequesteditem) | **GET** /api/v1/requested_items/{requestedItemId} | 
*DefaultApi* | [**getRequestedItems**](docs/DefaultApi.md#getrequesteditems) | **GET** /api/v1/requested_items | 
*DefaultApi* | [**getSchool**](docs/DefaultApi.md#getschool) | **GET** /api/v1/schools/{schoolId} | 
*DefaultApi* | [**getSchoolAlternateNames**](docs/DefaultApi.md#getschoolalternatenames) | **GET** /api/v1/schools/{schoolId}/alternate_names | 
*DefaultApi* | [**getSchools**](docs/DefaultApi.md#getschools) | **GET** /api/v1/schools | 
*DefaultApi* | [**getSchoolsAlmaMater**](docs/DefaultApi.md#getschoolsalmamater) | **GET** /api/v1/schools/alma_mater | 
*DefaultApi* | [**getSeason**](docs/DefaultApi.md#getseason) | **GET** /api/v1/seasons/{seasonId} | 
*DefaultApi* | [**getSeasons**](docs/DefaultApi.md#getseasons) | **GET** /api/v1/seasons | 
*DefaultApi* | [**getSimilarCoaches**](docs/DefaultApi.md#getsimilarcoaches) | **GET** /api/v1/coaches/{coachId}/similar_coaches | 
*DefaultApi* | [**getSport**](docs/DefaultApi.md#getsport) | **GET** /api/v1/sports/{sportId} | 
*DefaultApi* | [**getSports**](docs/DefaultApi.md#getsports) | **GET** /api/v1/sports | 
*DefaultApi* | [**getSubdivision**](docs/DefaultApi.md#getsubdivision) | **GET** /api/v1/subdivisions/{subdivisionId} | 
*DefaultApi* | [**getSubdivisions**](docs/DefaultApi.md#getsubdivisions) | **GET** /api/v1/subdivisions | 
*DefaultApi* | [**getSubscription**](docs/DefaultApi.md#getsubscription) | **GET** /api/v1/subscriptions/{subscriptionId} | 
*DefaultApi* | [**getSubscriptions**](docs/DefaultApi.md#getsubscriptions) | **GET** /api/v1/subscriptions | 
*DefaultApi* | [**getSystemSettings**](docs/DefaultApi.md#getsystemsettings) | **GET** /api/v1/system_setting | 
*DefaultApi* | [**getUser**](docs/DefaultApi.md#getuser) | **GET** /api/v1/users/{userId} | 
*DefaultApi* | [**getUserActivitySummaries**](docs/DefaultApi.md#getuseractivitysummaries) | **GET** /api/v1/user_activity_summaries | 
*DefaultApi* | [**getUserActivitySummary**](docs/DefaultApi.md#getuseractivitysummary) | **GET** /api/v1/user_activity_summaries/{user_activity_summaryId} | 
*DefaultApi* | [**getUserRequest**](docs/DefaultApi.md#getuserrequest) | **GET** /api/v1/user_requests/{user_requestId} | 
*DefaultApi* | [**getUserRequests**](docs/DefaultApi.md#getuserrequests) | **GET** /api/v1/user_requests | 
*DefaultApi* | [**getUsers**](docs/DefaultApi.md#getusers) | **GET** /api/v1/users | 
*DefaultApi* | [**getVendor**](docs/DefaultApi.md#getvendor) | **GET** /api/v1/vendors/{vendorId} | 
*DefaultApi* | [**getVendors**](docs/DefaultApi.md#getvendors) | **GET** /api/v1/vendors | 
*DefaultApi* | [**getWireChanges**](docs/DefaultApi.md#getwirechanges) | **GET** /api/v1/wire_changes | 
*DefaultApi* | [**searchCoaches**](docs/DefaultApi.md#searchcoaches) | **POST** /api/v1/coaches/search | 
*DefaultApi* | [**updateCashflow**](docs/DefaultApi.md#updatecashflow) | **PUT** /api/v1/cashflows/{cashflowId} | 
*DefaultApi* | [**updateCoach**](docs/DefaultApi.md#updatecoach) | **PATCH** /api/v1/coaches/{coachId} | 
*DefaultApi* | [**updateCompensation**](docs/DefaultApi.md#updatecompensation) | **PATCH** /api/v1/compensations/{compensationId} | 
*DefaultApi* | [**updateConference**](docs/DefaultApi.md#updateconference) | **PUT** /api/v1/conferences/{conferenceId} | 
*DefaultApi* | [**updateConferenceship**](docs/DefaultApi.md#updateconferenceship) | **PUT** /api/v1/conferenceships/{conferenceshipId} | 
*DefaultApi* | [**updateFoiaLabel**](docs/DefaultApi.md#updatefoialabel) | **PATCH** /api/v1/foia_labels/{foiaLabelId} | 
*DefaultApi* | [**updateFoiaRequest**](docs/DefaultApi.md#updatefoiarequest) | **PATCH** /api/v1/foia_requests/{foiaRequestId} | 
*DefaultApi* | [**updateJobPost**](docs/DefaultApi.md#updatejobpost) | **PATCH** /central_jobs/job_posts/{jobPostId} | Update a job post
*DefaultApi* | [**updatePosition**](docs/DefaultApi.md#updateposition) | **PATCH** /api/v1/positions/{positionId} | 
*DefaultApi* | [**updateRequestedItem**](docs/DefaultApi.md#updaterequesteditem) | **PATCH** /api/v1/requested_items/{requestedItemId} | 
*DefaultApi* | [**updateSeason**](docs/DefaultApi.md#updateseason) | **PUT** /api/v1/seasons/{seasonId} | 
*DefaultApi* | [**userMe**](docs/DefaultApi.md#userme) | **GET** /api/v1/users/me | 
*DefaultApi* | [**verifyUserIntercollegiateAccess**](docs/DefaultApi.md#verifyuserintercollegiateaccess) | **GET** /api/v1/users/verify_user_intercollegiate_access | 
*DossierApi* | [**universityDossierReportDossierWinadIdGet**](docs/DossierApi.md#universitydossierreportdossierwinadidget) | **GET** /dossier/{winad_id}/ | University Dossier Report
*IntercollegiateApi* | [**createNewsFeeds**](docs/IntercollegiateApi.md#createnewsfeeds) | **POST** /wi_jobs/news_feeds | 
*IntercollegiateApi* | [**getJobPost**](docs/IntercollegiateApi.md#getjobpost) | **GET** /wi_jobs/job_posts/{jobPostId} | 
*IntercollegiateApi* | [**getJobPosts**](docs/IntercollegiateApi.md#getjobposts) | **GET** /wi_jobs/job_posts | 
*IntercollegiateApi* | [**getNewsFeeds**](docs/IntercollegiateApi.md#getnewsfeeds) | **GET** /wi_jobs/news_feeds | 
*MlAthleticApi* | [**healthCheck**](docs/MlAthleticApi.md#healthcheck) | **GET** /ml-athletic/health_check | 
*MlAthleticApi* | [**predict**](docs/MlAthleticApi.md#predict) | **POST** /ml-athletic/predict | 
*ReportingApi* | [**getCoachContractRequests**](docs/ReportingApi.md#getcoachcontractrequests) | **GET** /api/v1/reports/coach_contract_requests | 
*ReportingApi* | [**getCoachHistory**](docs/ReportingApi.md#getcoachhistory) | **GET** /api/v1/reports/coach_history | 
*ReportingApi* | [**getConferenceships**](docs/ReportingApi.md#getconferenceships) | **GET** /api/v1/reports/conferenceships | 
*ReportingApi* | [**getFoiaDetails**](docs/ReportingApi.md#getfoiadetails) | **GET** /api/v1/reports/foia_details | 
*ReportingApi* | [**getGames**](docs/ReportingApi.md#getgames) | **GET** /api/v1/reports/games | 
*ReportingApi* | [**getInvoices**](docs/ReportingApi.md#getinvoices) | **GET** /api/v1/reports/invoices | 
*ReportingApi* | [**getSchoolContractRequests**](docs/ReportingApi.md#getschoolcontractrequests) | **GET** /api/v1/reports/school_contract_requests | 
*ReportingApi* | [**getSchoolsFinancialsQc**](docs/ReportingApi.md#getschoolsfinancialsqc) | **GET** /api/v1/financials_qc | 
*ReportingApi* | [**getSubscriptions**](docs/ReportingApi.md#getsubscriptions) | **GET** /api/v1/reports/subscriptions | 
*ScraperApi* | [**listScrapers**](docs/ScraperApi.md#listscrapers) | **GET** /ondemand-scrapers/ | List all available scrapers
*ScraperApi* | [**runScraper**](docs/ScraperApi.md#runscraper) | **POST** /ondemand-scrapers/run/{command} | Run a scraper


### Models

- [Administrator](docs/Administrator.md)
- [AdministratorCollection](docs/AdministratorCollection.md)
- [AuditedFinancialReportStatus](docs/AuditedFinancialReportStatus.md)
- [AuditedFinancialReportStatusCollection](docs/AuditedFinancialReportStatusCollection.md)
- [Avatar](docs/Avatar.md)
- [AverageCompensation](docs/AverageCompensation.md)
- [COLIAdjusted](docs/COLIAdjusted.md)
- [Cashflow](docs/Cashflow.md)
- [CashflowCollection](docs/CashflowCollection.md)
- [CashflowGroupItem](docs/CashflowGroupItem.md)
- [CashflowGroupStats](docs/CashflowGroupStats.md)
- [CashflowGroupsResponse](docs/CashflowGroupsResponse.md)
- [CashflowSportStat](docs/CashflowSportStat.md)
- [Category](docs/Category.md)
- [CategoryCollection](docs/CategoryCollection.md)
- [Coach](docs/Coach.md)
- [CoachCollection](docs/CoachCollection.md)
- [CoachCompensation](docs/CoachCompensation.md)
- [CoachSearchResult](docs/CoachSearchResult.md)
- [CoachSearchResultCollection](docs/CoachSearchResultCollection.md)
- [CompareColi404Response](docs/CompareColi404Response.md)
- [CompareColi422Response](docs/CompareColi422Response.md)
- [Compensation](docs/Compensation.md)
- [CompensationCollection](docs/CompensationCollection.md)
- [Conference](docs/Conference.md)
- [ConferenceCashflowStatsResponse](docs/ConferenceCashflowStatsResponse.md)
- [ConferenceCollection](docs/ConferenceCollection.md)
- [ConferencePositionStatsResponse](docs/ConferencePositionStatsResponse.md)
- [Conferenceship](docs/Conferenceship.md)
- [ConferenceshipCollection](docs/ConferenceshipCollection.md)
- [Contact](docs/Contact.md)
- [ContactCollection](docs/ContactCollection.md)
- [Contract](docs/Contract.md)
- [ContractCollection](docs/ContractCollection.md)
- [Deal](docs/Deal.md)
- [DealCollection](docs/DealCollection.md)
- [DealSearchResult](docs/DealSearchResult.md)
- [DealSearchResultCollection](docs/DealSearchResultCollection.md)
- [DealStatus](docs/DealStatus.md)
- [DealStatusCollection](docs/DealStatusCollection.md)
- [DepartmentSearchResult](docs/DepartmentSearchResult.md)
- [DepartmentSearchResultCollection](docs/DepartmentSearchResultCollection.md)
- [Division](docs/Division.md)
- [DivisionCollection](docs/DivisionCollection.md)
- [DossierReportResponse](docs/DossierReportResponse.md)
- [Filters](docs/Filters.md)
- [FinancialQc](docs/FinancialQc.md)
- [FinancialSearchResult](docs/FinancialSearchResult.md)
- [FinancialSearchResultCollection](docs/FinancialSearchResultCollection.md)
- [FoiaLabel](docs/FoiaLabel.md)
- [FoiaLabelCollection](docs/FoiaLabelCollection.md)
- [FoiaRequest](docs/FoiaRequest.md)
- [FoiaRequestCollection](docs/FoiaRequestCollection.md)
- [GadSearchResult](docs/GadSearchResult.md)
- [GadSearchResultCollection](docs/GadSearchResultCollection.md)
- [GadSearchStats](docs/GadSearchStats.md)
- [Game](docs/Game.md)
- [GameCollection](docs/GameCollection.md)
- [GameContract](docs/GameContract.md)
- [GameContractCollection](docs/GameContractCollection.md)
- [GamePost](docs/GamePost.md)
- [GamePostCollection](docs/GamePostCollection.md)
- [GamePostSearchResult](docs/GamePostSearchResult.md)
- [GamePostSearchResultCollection](docs/GamePostSearchResultCollection.md)
- [GameType](docs/GameType.md)
- [GetFilterOptions200Response](docs/GetFilterOptions200Response.md)
- [GetLadFilterOptions200Response](docs/GetLadFilterOptions200Response.md)
- [GetSchoolAlternateNames200Response](docs/GetSchoolAlternateNames200Response.md)
- [GetSchoolAlternateNames404Response](docs/GetSchoolAlternateNames404Response.md)
- [GetWireChanges200Response](docs/GetWireChanges200Response.md)
- [HTTPValidationError](docs/HTTPValidationError.md)
- [HealthCheckFailure](docs/HealthCheckFailure.md)
- [HealthCheckSuccess](docs/HealthCheckSuccess.md)
- [IdName](docs/IdName.md)
- [IncomeReport](docs/IncomeReport.md)
- [IncomeReportCollection](docs/IncomeReportCollection.md)
- [Job](docs/Job.md)
- [JobCandidate](docs/JobCandidate.md)
- [JobCollection](docs/JobCollection.md)
- [JobDepartment](docs/JobDepartment.md)
- [JobPost](docs/JobPost.md)
- [JobPostCollection](docs/JobPostCollection.md)
- [JobSchool](docs/JobSchool.md)
- [JobSport](docs/JobSport.md)
- [Link](docs/Link.md)
- [LinkCollection](docs/LinkCollection.md)
- [LinkCollection1](docs/LinkCollection1.md)
- [LocationInner](docs/LocationInner.md)
- [Logo](docs/Logo.md)
- [Meta](docs/Meta.md)
- [NcaaFinancialReportStatus](docs/NcaaFinancialReportStatus.md)
- [NcaaFinancialReportStatusCollection](docs/NcaaFinancialReportStatusCollection.md)
- [NewsFeed](docs/NewsFeed.md)
- [NewsFeedCollection](docs/NewsFeedCollection.md)
- [Position](docs/Position.md)
- [PositionCollection](docs/PositionCollection.md)
- [PositionSportStat](docs/PositionSportStat.md)
- [PositionType](docs/PositionType.md)
- [PositionTypeGroup](docs/PositionTypeGroup.md)
- [PredictBody](docs/PredictBody.md)
- [PredictFailure](docs/PredictFailure.md)
- [PredictSuccess](docs/PredictSuccess.md)
- [RawContract](docs/RawContract.md)
- [RawContractCollection](docs/RawContractCollection.md)
- [RequestedItem](docs/RequestedItem.md)
- [RequestedItemCollection](docs/RequestedItemCollection.md)
- [School](docs/School.md)
- [SchoolCollection](docs/SchoolCollection.md)
- [Scraper](docs/Scraper.md)
- [ScraperArgDef](docs/ScraperArgDef.md)
- [Season](docs/Season.md)
- [SeasonCollection](docs/SeasonCollection.md)
- [Sport](docs/Sport.md)
- [SportCollection](docs/SportCollection.md)
- [Subdivision](docs/Subdivision.md)
- [SubdivisionCollection](docs/SubdivisionCollection.md)
- [Subscription](docs/Subscription.md)
- [SubscriptionCollection](docs/SubscriptionCollection.md)
- [SystemSetting](docs/SystemSetting.md)
- [Tag](docs/Tag.md)
- [UnauthorizedError](docs/UnauthorizedError.md)
- [UnprocessableEntity](docs/UnprocessableEntity.md)
- [User](docs/User.md)
- [UserActivitySummary](docs/UserActivitySummary.md)
- [UserActivitySummaryCollection](docs/UserActivitySummaryCollection.md)
- [UserCollection](docs/UserCollection.md)
- [UserRequest](docs/UserRequest.md)
- [UserRequestCollection](docs/UserRequestCollection.md)
- [ValidationError](docs/ValidationError.md)
- [Vendor](docs/Vendor.md)
- [VendorCollection](docs/VendorCollection.md)
- [VerifyUserIntercollegiateAccess200Response](docs/VerifyUserIntercollegiateAccess200Response.md)
- [WireChange](docs/WireChange.md)
- [WireChangeCoach](docs/WireChangeCoach.md)
- [WireChangeSchool](docs/WireChangeSchool.md)

### Authorization


Authentication schemes defined for the API:
<a id="ApiKey"></a>
#### ApiKey


- **Type**: API key
- **API key parameter name**: `Authorization`
- **Location**: HTTP header
<a id="Oauth2-application"></a>
#### Oauth2 application


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.44.0`
- Package version: `1.44.0`
- Generator version: `7.19.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
