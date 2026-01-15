# DefaultApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**averageConferenceComp**](DefaultApi.md#averageconferencecomp) | **GET** /api/v1/compensations/average_conference_comp |  |
| [**averageDivisionComp**](DefaultApi.md#averagedivisioncomp) | **GET** /api/v1/compensations/average_division_comp |  |
| [**averageSchoolComp**](DefaultApi.md#averageschoolcomp) | **GET** /api/v1/compensations/average_school_comp |  |
| [**averageSubdivisionComp**](DefaultApi.md#averagesubdivisioncomp) | **GET** /api/v1/compensations/average_subdivision_comp |  |
| [**compareColi**](DefaultApi.md#comparecoli) | **GET** /api/v1/schools/compare_coli |  |
| [**createCashflow**](DefaultApi.md#createcashflow) | **POST** /api/v1/cashflows |  |
| [**createConference**](DefaultApi.md#createconference) | **POST** /api/v1/conferences |  |
| [**createConferenceship**](DefaultApi.md#createconferenceship) | **POST** /api/v1/conferenceships |  |
| [**createFoiaLabel**](DefaultApi.md#createfoialabel) | **POST** /api/v1/foia_labels |  |
| [**createFoiaRequest**](DefaultApi.md#createfoiarequest) | **POST** /api/v1/foia_requests |  |
| [**createJobPost**](DefaultApi.md#createjobpost) | **POST** /central_jobs/job_posts | Create a job post |
| [**createRequestedItem**](DefaultApi.md#createrequesteditem) | **POST** /api/v1/requested_items |  |
| [**createSeason**](DefaultApi.md#createseason) | **POST** /api/v1/seasons |  |
| [**deleteCashflow**](DefaultApi.md#deletecashflow) | **DELETE** /api/v1/cashflows/{cashflowId} |  |
| [**deleteConference**](DefaultApi.md#deleteconference) | **DELETE** /api/v1/conferences/{conferenceId} |  |
| [**deleteConferenceship**](DefaultApi.md#deleteconferenceship) | **DELETE** /api/v1/conferenceships/{conferenceshipId} |  |
| [**deleteFoiaLabel**](DefaultApi.md#deletefoialabel) | **DELETE** /api/v1/foia_labels/{foiaLabelId} |  |
| [**deleteFoiaRequest**](DefaultApi.md#deletefoiarequest) | **DELETE** /api/v1/foia_requests/{foiaRequestId} |  |
| [**deleteJobPost**](DefaultApi.md#deletejobpost) | **DELETE** /central_jobs/job_posts/{jobPostId} | Delete a job post |
| [**deleteRequestedItem**](DefaultApi.md#deleterequesteditem) | **DELETE** /api/v1/requested_items/{requestedItemId} |  |
| [**deleteSeason**](DefaultApi.md#deleteseason) | **DELETE** /api/v1/seasons/{seasonId} |  |
| [**getAdministrator**](DefaultApi.md#getadministrator) | **GET** /api/v1/administrators/{administratorId} |  |
| [**getAdministrators**](DefaultApi.md#getadministrators) | **GET** /api/v1/administrators |  |
| [**getAuditedFinancialReportStatus**](DefaultApi.md#getauditedfinancialreportstatus) | **GET** /api/v1/audited_financial_report_statuses/{auditedFinancialReportStatusId} |  |
| [**getAuditedFinancialReportStatuses**](DefaultApi.md#getauditedfinancialreportstatuses) | **GET** /api/v1/audited_financial_report_statuses |  |
| [**getCashflow**](DefaultApi.md#getcashflow) | **GET** /api/v1/cashflows/{cashflowId} |  |
| [**getCashflows**](DefaultApi.md#getcashflows) | **GET** /api/v1/cashflows |  |
| [**getCategories**](DefaultApi.md#getcategories) | **GET** /central_jobs/categories | List all categories |
| [**getCoach**](DefaultApi.md#getcoach) | **GET** /api/v1/coaches/{coachId} |  |
| [**getCoachCompensation**](DefaultApi.md#getcoachcompensation) | **GET** /api/v1/coach_compensations/get_coach_compensation |  |
| [**getCoaches**](DefaultApi.md#getcoaches) | **GET** /api/v1/coaches |  |
| [**getCompensation**](DefaultApi.md#getcompensation) | **GET** /api/v1/compensations/{compensationId} |  |
| [**getCompensations**](DefaultApi.md#getcompensations) | **GET** /api/v1/compensations |  |
| [**getConference**](DefaultApi.md#getconference) | **GET** /api/v1/conferences/{conferenceId} |  |
| [**getConferences**](DefaultApi.md#getconferences) | **GET** /api/v1/conferences |  |
| [**getConferenceship**](DefaultApi.md#getconferenceship) | **GET** /api/v1/conferenceships/{conferenceshipId} |  |
| [**getConferenceships**](DefaultApi.md#getconferenceships) | **GET** /api/v1/conferenceships |  |
| [**getContact**](DefaultApi.md#getcontact) | **GET** /api/v1/contacts/{contactId} |  |
| [**getContacts**](DefaultApi.md#getcontacts) | **GET** /api/v1/contacts |  |
| [**getContract**](DefaultApi.md#getcontract) | **GET** /api/v1/contracts/{contractId} |  |
| [**getContracts**](DefaultApi.md#getcontracts) | **GET** /api/v1/contracts |  |
| [**getDeal**](DefaultApi.md#getdeal) | **GET** /api/v1/deals/{dealId} |  |
| [**getDealStatus**](DefaultApi.md#getdealstatus) | **GET** /api/v1/deal_statuses/{dealStatusId} |  |
| [**getDealStatuses**](DefaultApi.md#getdealstatuses) | **GET** /api/v1/deal_statuses |  |
| [**getDeals**](DefaultApi.md#getdeals) | **GET** /api/v1/deals |  |
| [**getDivision**](DefaultApi.md#getdivision) | **GET** /api/v1/divisions/{divisionId} |  |
| [**getDivisions**](DefaultApi.md#getdivisions) | **GET** /api/v1/divisions |  |
| [**getFoiaLabel**](DefaultApi.md#getfoialabel) | **GET** /api/v1/foia_labels/{foiaLabelId} |  |
| [**getFoiaLabels**](DefaultApi.md#getfoialabels) | **GET** /api/v1/foia_labels |  |
| [**getFoiaRequest**](DefaultApi.md#getfoiarequest) | **GET** /api/v1/foia_requests/{foiaRequestId} |  |
| [**getFoiaRequests**](DefaultApi.md#getfoiarequests) | **GET** /api/v1/foia_requests |  |
| [**getGame**](DefaultApi.md#getgame) | **GET** /api/v1/games/{gameId} |  |
| [**getGameContract**](DefaultApi.md#getgamecontract) | **GET** /api/v1/game_contracts/{game_contractId} |  |
| [**getGameContracts**](DefaultApi.md#getgamecontracts) | **GET** /api/v1/game_contracts |  |
| [**getGames**](DefaultApi.md#getgames) | **GET** /api/v1/games |  |
| [**getIncomeReport**](DefaultApi.md#getincomereport) | **GET** /api/v1/income_reports/{incomeReportId} |  |
| [**getIncomeReports**](DefaultApi.md#getincomereports) | **GET** /api/v1/income_reports |  |
| [**getJobPost**](DefaultApi.md#getjobpost) | **GET** /central_jobs/job_posts/{jobPostId} | Get a job post |
| [**getJobPosts**](DefaultApi.md#getjobposts) | **GET** /central_jobs/job_posts | List all job posts |
| [**getNcaaFinancialReportStatus**](DefaultApi.md#getncaafinancialreportstatus) | **GET** /api/v1/ncaa_financial_report_statuses/{ncaaFinancialReportStatusId} |  |
| [**getNcaaFinancialReportStatuses**](DefaultApi.md#getncaafinancialreportstatuses) | **GET** /api/v1/ncaa_financial_report_statuses |  |
| [**getNewsFeed**](DefaultApi.md#getnewsfeed) | **GET** /wi_jobs/news_feeds/{newsFeedId} | Get a news feed |
| [**getPosition**](DefaultApi.md#getposition) | **GET** /api/v1/positions/{positionId} |  |
| [**getPositions**](DefaultApi.md#getpositions) | **GET** /api/v1/positions |  |
| [**getRawContract**](DefaultApi.md#getrawcontract) | **GET** /api/v1/raw_contracts/{raw_contractId} |  |
| [**getRawContracts**](DefaultApi.md#getrawcontracts) | **GET** /api/v1/raw_contracts |  |
| [**getRequestedItem**](DefaultApi.md#getrequesteditem) | **GET** /api/v1/requested_items/{requestedItemId} |  |
| [**getRequestedItems**](DefaultApi.md#getrequesteditems) | **GET** /api/v1/requested_items |  |
| [**getSchool**](DefaultApi.md#getschool) | **GET** /api/v1/schools/{schoolId} |  |
| [**getSchoolAlternateNames**](DefaultApi.md#getschoolalternatenames) | **GET** /api/v1/schools/{schoolId}/alternate_names |  |
| [**getSchools**](DefaultApi.md#getschools) | **GET** /api/v1/schools |  |
| [**getSeason**](DefaultApi.md#getseason) | **GET** /api/v1/seasons/{seasonId} |  |
| [**getSeasons**](DefaultApi.md#getseasons) | **GET** /api/v1/seasons |  |
| [**getSimilarCoaches**](DefaultApi.md#getsimilarcoaches) | **GET** /api/v1/coaches/{coachId}/similar_coaches |  |
| [**getSport**](DefaultApi.md#getsport) | **GET** /api/v1/sports/{sportId} |  |
| [**getSports**](DefaultApi.md#getsports) | **GET** /api/v1/sports |  |
| [**getSubdivision**](DefaultApi.md#getsubdivision) | **GET** /api/v1/subdivisions/{subdivisionId} |  |
| [**getSubdivisions**](DefaultApi.md#getsubdivisions) | **GET** /api/v1/subdivisions |  |
| [**getSubscription**](DefaultApi.md#getsubscription) | **GET** /api/v1/subscriptions/{subscriptionId} |  |
| [**getSubscriptions**](DefaultApi.md#getsubscriptions) | **GET** /api/v1/subscriptions |  |
| [**getSystemSettings**](DefaultApi.md#getsystemsettings) | **GET** /api/v1/system_setting |  |
| [**getUser**](DefaultApi.md#getuser) | **GET** /api/v1/users/{userId} |  |
| [**getUserActivitySummaries**](DefaultApi.md#getuseractivitysummaries) | **GET** /api/v1/user_activity_summaries |  |
| [**getUserActivitySummary**](DefaultApi.md#getuseractivitysummary) | **GET** /api/v1/user_activity_summaries/{user_activity_summaryId} |  |
| [**getUserRequest**](DefaultApi.md#getuserrequest) | **GET** /api/v1/user_requests/{user_requestId} |  |
| [**getUserRequests**](DefaultApi.md#getuserrequests) | **GET** /api/v1/user_requests |  |
| [**getUsers**](DefaultApi.md#getusers) | **GET** /api/v1/users |  |
| [**getVendor**](DefaultApi.md#getvendor) | **GET** /api/v1/vendors/{vendorId} |  |
| [**getVendors**](DefaultApi.md#getvendors) | **GET** /api/v1/vendors |  |
| [**getWireChanges**](DefaultApi.md#getwirechanges) | **GET** /api/v1/wire_changes |  |
| [**searchCoaches**](DefaultApi.md#searchcoaches) | **POST** /api/v1/coaches/search |  |
| [**updateCashflow**](DefaultApi.md#updatecashflow) | **PUT** /api/v1/cashflows/{cashflowId} |  |
| [**updateCoach**](DefaultApi.md#updatecoach) | **PATCH** /api/v1/coaches/{coachId} |  |
| [**updateCompensation**](DefaultApi.md#updatecompensation) | **PATCH** /api/v1/compensations/{compensationId} |  |
| [**updateConference**](DefaultApi.md#updateconference) | **PUT** /api/v1/conferences/{conferenceId} |  |
| [**updateConferenceship**](DefaultApi.md#updateconferenceship) | **PUT** /api/v1/conferenceships/{conferenceshipId} |  |
| [**updateFoiaLabel**](DefaultApi.md#updatefoialabel) | **PATCH** /api/v1/foia_labels/{foiaLabelId} |  |
| [**updateFoiaRequest**](DefaultApi.md#updatefoiarequest) | **PATCH** /api/v1/foia_requests/{foiaRequestId} |  |
| [**updateJobPost**](DefaultApi.md#updatejobpost) | **PATCH** /central_jobs/job_posts/{jobPostId} | Update a job post |
| [**updateRequestedItem**](DefaultApi.md#updaterequesteditem) | **PATCH** /api/v1/requested_items/{requestedItemId} |  |
| [**updateSeason**](DefaultApi.md#updateseason) | **PUT** /api/v1/seasons/{seasonId} |  |
| [**userMe**](DefaultApi.md#userme) | **GET** /api/v1/users/me |  |
| [**verifyUserIntercollegiateAccess**](DefaultApi.md#verifyuserintercollegiateaccess) | **GET** /api/v1/users/verify_user_intercollegiate_access |  |



## averageConferenceComp

> AverageCompensation averageConferenceComp(conferenceId, seasonYears, sportIds, positionTypeIds)



Retrieve average compensation for a conference

### Example

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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the conference | [Defaults to `undefined`] |
| **seasonYears** | `Array<number>` | Season years | |
| **sportIds** | `Array<number>` | IDs of the sports | |
| **positionTypeIds** | `Array<number>` | IDs of the position types | |

### Return type

[**AverageCompensation**](AverageCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Average compensation calculated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## averageDivisionComp

> AverageCompensation averageDivisionComp(divisionId, seasonYears, sportIds, positionTypeIds)



Retrieve average compensation for a division

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { AverageDivisionCompRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the division
    divisionId: 56,
    // Array<number> | Season years
    seasonYears: ...,
    // Array<number> | IDs of the sports
    sportIds: ...,
    // Array<number> | IDs of the position types
    positionTypeIds: ...,
  } satisfies AverageDivisionCompRequest;

  try {
    const data = await api.averageDivisionComp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **divisionId** | `number` | ID of the division | [Defaults to `undefined`] |
| **seasonYears** | `Array<number>` | Season years | |
| **sportIds** | `Array<number>` | IDs of the sports | |
| **positionTypeIds** | `Array<number>` | IDs of the position types | |

### Return type

[**AverageCompensation**](AverageCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Average compensation calculated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## averageSchoolComp

> AverageCompensation averageSchoolComp(schoolId, seasonYears, sportIds, positionTypeIds)



Retrieve average compensation for a school

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { AverageSchoolCompRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the school
    schoolId: 56,
    // Array<number> | Season years
    seasonYears: ...,
    // Array<number> | IDs of the sports
    sportIds: ...,
    // Array<number> | IDs of the position types
    positionTypeIds: ...,
  } satisfies AverageSchoolCompRequest;

  try {
    const data = await api.averageSchoolComp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of the school | [Defaults to `undefined`] |
| **seasonYears** | `Array<number>` | Season years | |
| **sportIds** | `Array<number>` | IDs of the sports | |
| **positionTypeIds** | `Array<number>` | IDs of the position types | |

### Return type

[**AverageCompensation**](AverageCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Average compensation calculated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## averageSubdivisionComp

> AverageCompensation averageSubdivisionComp(subdivisionId, seasonYears, sportIds, positionTypeIds)



Retrieve average compensation for a subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { AverageSubdivisionCompRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the subdivision
    subdivisionId: 56,
    // Array<number> | Season years
    seasonYears: ...,
    // Array<number> | IDs of the sports
    sportIds: ...,
    // Array<number> | IDs of the position types
    positionTypeIds: ...,
  } satisfies AverageSubdivisionCompRequest;

  try {
    const data = await api.averageSubdivisionComp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the subdivision | [Defaults to `undefined`] |
| **seasonYears** | `Array<number>` | Season years | |
| **sportIds** | `Array<number>` | IDs of the sports | |
| **positionTypeIds** | `Array<number>` | IDs of the position types | |

### Return type

[**AverageCompensation**](AverageCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Average compensation calculated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## compareColi

> COLIAdjusted compareColi(schoolId, otherPersonSchoolId, otherPersonTotalCompensation)



Retrieve the COLI-adjusted compensation

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CompareColiRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the School
    schoolId: 56,
    // number | ID of the other person School
    otherPersonSchoolId: 56,
    // number | Other person total compensation amount
    otherPersonTotalCompensation: 56,
  } satisfies CompareColiRequest;

  try {
    const data = await api.compareColi(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of the School | [Defaults to `undefined`] |
| **otherPersonSchoolId** | `number` | ID of the other person School | [Defaults to `undefined`] |
| **otherPersonTotalCompensation** | `number` | Other person total compensation amount | [Defaults to `undefined`] |

### Return type

[**COLIAdjusted**](COLIAdjusted.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | COLI-adjusted compensation found |  -  |
| **404** | Not Found |  -  |
| **422** | Unprocessable Entity |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCashflow

> Cashflow createCashflow(cashflow)



Create a new Cashflow

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateCashflowRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // Cashflow (optional)
    cashflow: ...,
  } satisfies CreateCashflowRequest;

  try {
    const data = await api.createCashflow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cashflow** | [Cashflow](Cashflow.md) |  | [Optional] |

### Return type

[**Cashflow**](Cashflow.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Cashflow was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create the Cashflow |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createConference

> Conference createConference(conference)



Create a new Conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateConferenceRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // Conference (optional)
    conference: ...,
  } satisfies CreateConferenceRequest;

  try {
    const data = await api.createConference(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conference** | [Conference](Conference.md) |  | [Optional] |

### Return type

[**Conference**](Conference.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Conference was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create the Conference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createConferenceship

> Conferenceship createConferenceship(conferenceship)



Create a new Conferenceship

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateConferenceshipRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // Conferenceship (optional)
    conferenceship: ...,
  } satisfies CreateConferenceshipRequest;

  try {
    const data = await api.createConferenceship(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceship** | [Conferenceship](Conferenceship.md) |  | [Optional] |

### Return type

[**Conferenceship**](Conferenceship.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Conferenceship was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create the Conferenceship |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFoiaLabel

> FoiaLabel createFoiaLabel(foiaLabel)



Create a new foia label

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateFoiaLabelRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // FoiaLabel | Foia label to create
    foiaLabel: ...,
  } satisfies CreateFoiaLabelRequest;

  try {
    const data = await api.createFoiaLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaLabel** | [FoiaLabel](FoiaLabel.md) | Foia label to create | |

### Return type

[**FoiaLabel**](FoiaLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Foia label was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create foia label |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFoiaRequest

> FoiaRequest createFoiaRequest(foiaRequest)



Create a new foia request

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateFoiaRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // FoiaRequest | Foia request to create
    foiaRequest: ...,
  } satisfies CreateFoiaRequestRequest;

  try {
    const data = await api.createFoiaRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaRequest** | [FoiaRequest](FoiaRequest.md) | Foia request to create | |

### Return type

[**FoiaRequest**](FoiaRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Foia request was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create foia request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createJobPost

> JobPost createJobPost(jobPost)

Create a job post

Create a job post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // JobPost (optional)
    jobPost: ...,
  } satisfies CreateJobPostRequest;

  try {
    const data = await api.createJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPost** | [JobPost](JobPost.md) |  | [Optional] |

### Return type

[**JobPost**](JobPost.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Job post was created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRequestedItem

> RequestedItem createRequestedItem(requestedItem)



Create a new requested item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateRequestedItemRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // RequestedItem | Requested item to create
    requestedItem: ...,
  } satisfies CreateRequestedItemRequest;

  try {
    const data = await api.createRequestedItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestedItem** | [RequestedItem](RequestedItem.md) | Requested item to create | |

### Return type

[**RequestedItem**](RequestedItem.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Requested item was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create requested item |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSeason

> Season createSeason(season)



Create a new Season

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // Season (optional)
    season: ...,
  } satisfies CreateSeasonRequest;

  try {
    const data = await api.createSeason(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **season** | [Season](Season.md) |  | [Optional] |

### Return type

[**Season**](Season.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Season was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create the Season |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCashflow

> deleteCashflow(cashflowId)



Delete a single Cashflow

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteCashflowRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Cashflow
    cashflowId: 56,
  } satisfies DeleteCashflowRequest;

  try {
    const data = await api.deleteCashflow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cashflowId** | `number` | ID of the Cashflow | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Cashflow was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteConference

> deleteConference(conferenceId)



Delete a single Conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteConferenceRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Conference
    conferenceId: 56,
  } satisfies DeleteConferenceRequest;

  try {
    const data = await api.deleteConference(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Conference was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteConferenceship

> deleteConferenceship(conferenceshipId)



Delete a single Conferenceship

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteConferenceshipRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Conferenceship
    conferenceshipId: 56,
  } satisfies DeleteConferenceshipRequest;

  try {
    const data = await api.deleteConferenceship(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceshipId** | `number` | ID of the Conferenceship | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Conferenceship was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFoiaLabel

> deleteFoiaLabel(foiaLabelId)



Delete a single foia label

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteFoiaLabelRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of foia label to delete
    foiaLabelId: 56,
  } satisfies DeleteFoiaLabelRequest;

  try {
    const data = await api.deleteFoiaLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaLabelId** | `number` | ID of foia label to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Foia label was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFoiaRequest

> deleteFoiaRequest(foiaRequestId)



Delete a single foia request

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteFoiaRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of foia request to delete
    foiaRequestId: 56,
  } satisfies DeleteFoiaRequestRequest;

  try {
    const data = await api.deleteFoiaRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaRequestId** | `number` | ID of foia request to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Foia request was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteJobPost

> deleteJobPost(jobPostId)

Delete a job post

Delete a job post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of job post to delete
    jobPostId: 789,
  } satisfies DeleteJobPostRequest;

  try {
    const data = await api.deleteJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | ID of job post to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Job post was deleted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRequestedItem

> deleteRequestedItem(requestedItemId)



Delete a single requested item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteRequestedItemRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of requested item to delete
    requestedItemId: 56,
  } satisfies DeleteRequestedItemRequest;

  try {
    const data = await api.deleteRequestedItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestedItemId** | `number` | ID of requested item to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Requested item was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSeason

> deleteSeason(seasonId)



Delete a single Season

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Season
    seasonId: 56,
  } satisfies DeleteSeasonRequest;

  try {
    const data = await api.deleteSeason(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **seasonId** | `number` | ID of the Season | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Season was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdministrator

> Administrator getAdministrator(administratorId)



Retrieve a single administrator

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAdministratorRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of administrator to retrieve
    administratorId: 56,
  } satisfies GetAdministratorRequest;

  try {
    const data = await api.getAdministrator(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **administratorId** | `number` | ID of administrator to retrieve | [Defaults to `undefined`] |

### Return type

[**Administrator**](Administrator.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Administrator was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdministrators

> AdministratorCollection getAdministrators(page, perPage, q)



Retrieve some or all administrators

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAdministratorsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetAdministratorsRequest;

  try {
    const data = await api.getAdministrators(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**AdministratorCollection**](AdministratorCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Administrators were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuditedFinancialReportStatus

> AuditedFinancialReportStatus getAuditedFinancialReportStatus(auditedFinancialReportStatusId)



Retrieve a single audited financial report status

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAuditedFinancialReportStatusRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of audited financial report status to retrieve
    auditedFinancialReportStatusId: 56,
  } satisfies GetAuditedFinancialReportStatusRequest;

  try {
    const data = await api.getAuditedFinancialReportStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **auditedFinancialReportStatusId** | `number` | ID of audited financial report status to retrieve | [Defaults to `undefined`] |

### Return type

[**AuditedFinancialReportStatus**](AuditedFinancialReportStatus.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audited financial report status was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuditedFinancialReportStatuses

> AuditedFinancialReportStatusCollection getAuditedFinancialReportStatuses(page, perPage, q)



Retrieve some or all audited financial report statuses

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAuditedFinancialReportStatusesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetAuditedFinancialReportStatusesRequest;

  try {
    const data = await api.getAuditedFinancialReportStatuses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**AuditedFinancialReportStatusCollection**](AuditedFinancialReportStatusCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audited financial report statuses were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCashflow

> Cashflow getCashflow(cashflowId)



Retrieve a single Cashflow

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCashflowRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Cashflow
    cashflowId: 56,
  } satisfies GetCashflowRequest;

  try {
    const data = await api.getCashflow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cashflowId** | `number` | ID of the Cashflow | [Defaults to `undefined`] |

### Return type

[**Cashflow**](Cashflow.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cashflow was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCashflows

> CashflowCollection getCashflows(page, perPage, q)



Retrieve some or all cashflows

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCashflowsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCashflowsRequest;

  try {
    const data = await api.getCashflows(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**CashflowCollection**](CashflowCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cashflows were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCategories

> CategoryCollection getCategories(page, perPage, q)

List all categories

List all categories

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCategoriesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCategoriesRequest;

  try {
    const data = await api.getCategories(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**CategoryCollection**](CategoryCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Categories were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoach

> Coach getCoach(coachId)



Retrieve a single coach

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of coach to retrieve
    coachId: 56,
  } satisfies GetCoachRequest;

  try {
    const data = await api.getCoach(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coachId** | `number` | ID of coach to retrieve | [Defaults to `undefined`] |

### Return type

[**Coach**](Coach.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachCompensation

> CoachCompensation getCoachCompensation(coachesIds, userSchoolId)



Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // Array<number> | IDs of the coaches
    coachesIds: ...,
    // number | ID of the school whose cost-of-living index should be used
    userSchoolId: 56,
  } satisfies GetCoachCompensationRequest;

  try {
    const data = await api.getCoachCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coachesIds** | `Array<number>` | IDs of the coaches | |
| **userSchoolId** | `number` | ID of the school whose cost-of-living index should be used | [Defaults to `undefined`] |

### Return type

[**CoachCompensation**](CoachCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach compensation calculated successfully |  -  |
| **401** | Unauthorized |  -  |
| **404** | Coach or school not found |  -  |
| **422** | Missing or invalid parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoaches

> CoachCollection getCoaches(page, perPage, q)



Retrieve some or all coaches

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCoachesRequest;

  try {
    const data = await api.getCoaches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**CoachCollection**](CoachCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coaches were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCompensation

> Compensation getCompensation(compensationId)



Retrieve a single compensation

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of compensation to retrieve
    compensationId: 56,
  } satisfies GetCompensationRequest;

  try {
    const data = await api.getCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **compensationId** | `number` | ID of compensation to retrieve | [Defaults to `undefined`] |

### Return type

[**Compensation**](Compensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compensation was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCompensations

> CompensationCollection getCompensations(page, perPage, q)



Retrieve some or all compensations

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCompensationsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCompensationsRequest;

  try {
    const data = await api.getCompensations(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**CompensationCollection**](CompensationCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compensations were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConference

> Conference getConference(conferenceId)



Retrieve a single Conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Conference
    conferenceId: 56,
  } satisfies GetConferenceRequest;

  try {
    const data = await api.getConference(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |

### Return type

[**Conference**](Conference.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conference was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferences

> ConferenceCollection getConferences(page, perPage, q)



Retrieve some or all conferences

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferencesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetConferencesRequest;

  try {
    const data = await api.getConferences(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceCollection**](ConferenceCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferences were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceship

> Conferenceship getConferenceship(conferenceshipId)



Retrieve a single Conferenceship

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceshipRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Conferenceship
    conferenceshipId: 56,
  } satisfies GetConferenceshipRequest;

  try {
    const data = await api.getConferenceship(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceshipId** | `number` | ID of the Conferenceship | [Defaults to `undefined`] |

### Return type

[**Conferenceship**](Conferenceship.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferenceship was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceships

> ConferenceshipCollection getConferenceships(page, perPage, q)



Retrieve some or all conferenceships

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceshipsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetConferenceshipsRequest;

  try {
    const data = await api.getConferenceships(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceshipCollection**](ConferenceshipCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferenceships were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContact

> Contact getContact(contactId)



Retrieve a single contact

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContactRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of contact to retrieve
    contactId: 56,
  } satisfies GetContactRequest;

  try {
    const data = await api.getContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contactId** | `number` | ID of contact to retrieve | [Defaults to `undefined`] |

### Return type

[**Contact**](Contact.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContacts

> ContactCollection getContacts(page, perPage, q)



Retrieve some or all contacts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContactsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetContactsRequest;

  try {
    const data = await api.getContacts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**ContactCollection**](ContactCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContract

> Contract getContract(contractId)



Retrieve a single contract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of contract to retrieve
    contractId: 56,
  } satisfies GetContractRequest;

  try {
    const data = await api.getContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contractId** | `number` | ID of contract to retrieve | [Defaults to `undefined`] |

### Return type

[**Contract**](Contract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contract was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContracts

> ContractCollection getContracts(page, perPage, q)



Retrieve some or all contracts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetContractsRequest;

  try {
    const data = await api.getContracts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**ContractCollection**](ContractCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contracts were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeal

> Deal getDeal(dealId)



Retrieve a single Deal

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Deal
    dealId: 56,
  } satisfies GetDealRequest;

  try {
    const data = await api.getDeal(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dealId** | `number` | ID of the Deal | [Defaults to `undefined`] |

### Return type

[**Deal**](Deal.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDealStatus

> DealStatus getDealStatus(dealStatusId)



Retrieve a single deal status

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealStatusRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of deal status to retrieve
    dealStatusId: 56,
  } satisfies GetDealStatusRequest;

  try {
    const data = await api.getDealStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dealStatusId** | `number` | ID of deal status to retrieve | [Defaults to `undefined`] |

### Return type

[**DealStatus**](DealStatus.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal status was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDealStatuses

> DealStatusCollection getDealStatuses(page, perPage, q)



Retrieve some or all deal statuses

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealStatusesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetDealStatusesRequest;

  try {
    const data = await api.getDealStatuses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**DealStatusCollection**](DealStatusCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal statuses were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeals

> DealCollection getDeals(page, perPage, q)



Retrieve some or all deals

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetDealsRequest;

  try {
    const data = await api.getDeals(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**DealCollection**](DealCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deals were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDivision

> Division getDivision(divisionId)



Retrieve a single Division

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDivisionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Division
    divisionId: 56,
  } satisfies GetDivisionRequest;

  try {
    const data = await api.getDivision(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **divisionId** | `number` | ID of the Division | [Defaults to `undefined`] |

### Return type

[**Division**](Division.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Division was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDivisions

> DivisionCollection getDivisions(page, perPage, q)



Retrieve some or all divisions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDivisionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetDivisionsRequest;

  try {
    const data = await api.getDivisions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**DivisionCollection**](DivisionCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Divisions were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaLabel

> FoiaLabel getFoiaLabel(foiaLabelId)



Retrieve a single foia label

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaLabelRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of foia label to retrieve
    foiaLabelId: 56,
  } satisfies GetFoiaLabelRequest;

  try {
    const data = await api.getFoiaLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaLabelId** | `number` | ID of foia label to retrieve | [Defaults to `undefined`] |

### Return type

[**FoiaLabel**](FoiaLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia label was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaLabels

> FoiaLabelCollection getFoiaLabels(page, perPage, q)



Retrieve some or all foia labels

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaLabelsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetFoiaLabelsRequest;

  try {
    const data = await api.getFoiaLabels(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**FoiaLabelCollection**](FoiaLabelCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia labels were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaRequest

> FoiaRequest getFoiaRequest(foiaRequestId)



Retrieve a single foia request

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of foia request to retrieve
    foiaRequestId: 56,
  } satisfies GetFoiaRequestRequest;

  try {
    const data = await api.getFoiaRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaRequestId** | `number` | ID of foia request to retrieve | [Defaults to `undefined`] |

### Return type

[**FoiaRequest**](FoiaRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia request was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaRequests

> FoiaRequestCollection getFoiaRequests(page, perPage, q)



Retrieve some or all foia requests

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaRequestsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetFoiaRequestsRequest;

  try {
    const data = await api.getFoiaRequests(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**FoiaRequestCollection**](FoiaRequestCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia requests were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGame

> Game getGame(gameId)



Retrieve a single game

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of game to retrieve
    gameId: 56,
  } satisfies GetGameRequest;

  try {
    const data = await api.getGame(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameId** | `number` | ID of game to retrieve | [Defaults to `undefined`] |

### Return type

[**Game**](Game.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameContract

> GameContract getGameContract(gameContractId)



Retrieve a single GameContract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the GameContract
    gameContractId: 56,
  } satisfies GetGameContractRequest;

  try {
    const data = await api.getGameContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameContractId** | `number` | ID of the GameContract | [Defaults to `undefined`] |

### Return type

[**GameContract**](GameContract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game Contract was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameContracts

> GameContractCollection getGameContracts(page, perPage, q)



Retrieve some or all game_contracts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetGameContractsRequest;

  try {
    const data = await api.getGameContracts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**GameContractCollection**](GameContractCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game Contracts were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGames

> GameCollection getGames(page, perPage, q)



Retrieve some or all games

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGamesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetGamesRequest;

  try {
    const data = await api.getGames(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**GameCollection**](GameCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Games were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIncomeReport

> IncomeReport getIncomeReport(incomeReportId)



Retrieve a single income report

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetIncomeReportRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of income report to retrieve
    incomeReportId: 56,
  } satisfies GetIncomeReportRequest;

  try {
    const data = await api.getIncomeReport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **incomeReportId** | `number` | ID of income report to retrieve | [Defaults to `undefined`] |

### Return type

[**IncomeReport**](IncomeReport.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Income report was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIncomeReports

> IncomeReportCollection getIncomeReports(page, perPage, q)



Retrieve some or all income reports

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetIncomeReportsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetIncomeReportsRequest;

  try {
    const data = await api.getIncomeReports(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**IncomeReportCollection**](IncomeReportCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Income reports were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobPost

> JobPost getJobPost(jobPostId)

Get a job post

Get a job post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of job post to return
    jobPostId: 789,
  } satisfies GetJobPostRequest;

  try {
    const data = await api.getJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | ID of job post to return | [Defaults to `undefined`] |

### Return type

[**JobPost**](JobPost.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job post was found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobPosts

> JobPostCollection getJobPosts(page, perPage, q)

List all job posts

List all job posts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetJobPostsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetJobPostsRequest;

  try {
    const data = await api.getJobPosts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**JobPostCollection**](JobPostCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job posts were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNcaaFinancialReportStatus

> NcaaFinancialReportStatus getNcaaFinancialReportStatus(ncaaFinancialReportStatusId)



Retrieve a single ncaa financial report status

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetNcaaFinancialReportStatusRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of ncaa financial report status to retrieve
    ncaaFinancialReportStatusId: 56,
  } satisfies GetNcaaFinancialReportStatusRequest;

  try {
    const data = await api.getNcaaFinancialReportStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ncaaFinancialReportStatusId** | `number` | ID of ncaa financial report status to retrieve | [Defaults to `undefined`] |

### Return type

[**NcaaFinancialReportStatus**](NcaaFinancialReportStatus.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ncaa financial report status was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNcaaFinancialReportStatuses

> NcaaFinancialReportStatusCollection getNcaaFinancialReportStatuses(page, perPage, q)



Retrieve some or all ncaa financial report statuses

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetNcaaFinancialReportStatusesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetNcaaFinancialReportStatusesRequest;

  try {
    const data = await api.getNcaaFinancialReportStatuses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**NcaaFinancialReportStatusCollection**](NcaaFinancialReportStatusCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ncaa financial report statuses were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNewsFeed

> NewsFeed getNewsFeed(newsFeedId)

Get a news feed

Get a news feed

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetNewsFeedRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of news feed to return
    newsFeedId: 56,
  } satisfies GetNewsFeedRequest;

  try {
    const data = await api.getNewsFeed(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newsFeedId** | `number` | ID of news feed to return | [Defaults to `undefined`] |

### Return type

[**NewsFeed**](NewsFeed.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | News Feed was found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPosition

> Position getPosition(positionId)



Retrieve a single position

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetPositionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of position to retrieve
    positionId: 56,
  } satisfies GetPositionRequest;

  try {
    const data = await api.getPosition(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **positionId** | `number` | ID of position to retrieve | [Defaults to `undefined`] |

### Return type

[**Position**](Position.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Position was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPositions

> PositionCollection getPositions(page, perPage, q)



Retrieve some or all positions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetPositionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetPositionsRequest;

  try {
    const data = await api.getPositions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**PositionCollection**](PositionCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Positions were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRawContract

> RawContract getRawContract(rawContractId)



Retrieve a single RawContract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRawContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the RawContract
    rawContractId: 56,
  } satisfies GetRawContractRequest;

  try {
    const data = await api.getRawContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rawContractId** | `number` | ID of the RawContract | [Defaults to `undefined`] |

### Return type

[**RawContract**](RawContract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Raw Contract was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRawContracts

> RawContractCollection getRawContracts(page, perPage, q)



Retrieve some or all raw_contracts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRawContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetRawContractsRequest;

  try {
    const data = await api.getRawContracts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**RawContractCollection**](RawContractCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Raw Contracts were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestedItem

> RequestedItem getRequestedItem(requestedItemId)



Retrieve a single requested item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRequestedItemRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of requested item to retrieve
    requestedItemId: 56,
  } satisfies GetRequestedItemRequest;

  try {
    const data = await api.getRequestedItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestedItemId** | `number` | ID of requested item to retrieve | [Defaults to `undefined`] |

### Return type

[**RequestedItem**](RequestedItem.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Requested item was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestedItems

> RequestedItemCollection getRequestedItems(page, perPage, q)



Retrieve some or all requested items

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRequestedItemsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetRequestedItemsRequest;

  try {
    const data = await api.getRequestedItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**RequestedItemCollection**](RequestedItemCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Requested items were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchool

> School getSchool(schoolId)



Retrieve a single school

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of school to retrieve
    schoolId: 56,
  } satisfies GetSchoolRequest;

  try {
    const data = await api.getSchool(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of school to retrieve | [Defaults to `undefined`] |

### Return type

[**School**](School.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolAlternateNames

> GetSchoolAlternateNames200Response getSchoolAlternateNames(schoolId)



Retrieve alternate names for a specific school

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolAlternateNamesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of school to retrieve alternate names for
    schoolId: 56,
  } satisfies GetSchoolAlternateNamesRequest;

  try {
    const data = await api.getSchoolAlternateNames(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of school to retrieve alternate names for | [Defaults to `undefined`] |

### Return type

[**GetSchoolAlternateNames200Response**](GetSchoolAlternateNames200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alternate names were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | School not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchools

> SchoolCollection getSchools(page, perPage, q)



Retrieve some or all schools

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSchoolsRequest;

  try {
    const data = await api.getSchools(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SchoolCollection**](SchoolCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schools were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSeason

> Season getSeason(seasonId)



Retrieve a single Season

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Season
    seasonId: 56,
  } satisfies GetSeasonRequest;

  try {
    const data = await api.getSeason(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **seasonId** | `number` | ID of the Season | [Defaults to `undefined`] |

### Return type

[**Season**](Season.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Season was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSeasons

> SeasonCollection getSeasons(page, perPage, q)



Retrieve some or all seasons

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSeasonsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSeasonsRequest;

  try {
    const data = await api.getSeasons(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SeasonCollection**](SeasonCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Seasons were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSimilarCoaches

> CoachCollection getSimilarCoaches(coachId, q, page, perPage)



Retrieve similar coaches based on coach ID

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSimilarCoachesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of coach to retrieve
    coachId: 56,
    // object | Ransack query (optional)
    q: Object,
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
  } satisfies GetSimilarCoachesRequest;

  try {
    const data = await api.getSimilarCoaches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coachId** | `number` | ID of coach to retrieve | [Defaults to `undefined`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |

### Return type

[**CoachCollection**](CoachCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coaches were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSport

> Sport getSport(sportId)



Retrieve a single sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSportRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of sport to retrieve
    sportId: 56,
  } satisfies GetSportRequest;

  try {
    const data = await api.getSport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sportId** | `number` | ID of sport to retrieve | [Defaults to `undefined`] |

### Return type

[**Sport**](Sport.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sport was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSports

> SportCollection getSports(page, perPage, q)



Retrieve some or all sports

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSportsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSportsRequest;

  try {
    const data = await api.getSports(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SportCollection**](SportCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sports were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivision

> Subdivision getSubdivision(subdivisionId)



Retrieve a single Subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Subdivision
    subdivisionId: 56,
  } satisfies GetSubdivisionRequest;

  try {
    const data = await api.getSubdivision(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the Subdivision | [Defaults to `undefined`] |

### Return type

[**Subdivision**](Subdivision.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subdivision was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivisions

> SubdivisionCollection getSubdivisions(page, perPage, q)



Retrieve some or all subdivisions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSubdivisionsRequest;

  try {
    const data = await api.getSubdivisions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SubdivisionCollection**](SubdivisionCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subdivisions were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubscription

> Subscription getSubscription(subscriptionId)



Retrieve a single Subscription

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubscriptionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Subscription
    subscriptionId: 56,
  } satisfies GetSubscriptionRequest;

  try {
    const data = await api.getSubscription(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subscriptionId** | `number` | ID of the Subscription | [Defaults to `undefined`] |

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscription was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubscriptions

> SubscriptionCollection getSubscriptions(page, perPage, q)



Retrieve the all subscriptions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubscriptionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSubscriptionsRequest;

  try {
    const data = await api.getSubscriptions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SubscriptionCollection**](SubscriptionCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscriptions were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSystemSettings

> SystemSetting getSystemSettings()



Retrieve the current system settings

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSystemSettingsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getSystemSettings();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SystemSetting**](SystemSetting.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | System settings were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUser

> User getUser(userId)



Retrieve a single user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of user to retrieve
    userId: 56,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | ID of user to retrieve | [Defaults to `undefined`] |

### Return type

[**User**](User.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserActivitySummaries

> UserActivitySummaryCollection getUserActivitySummaries(page, perPage, q)



Retrieve some or all user_activity_summaries

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserActivitySummariesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetUserActivitySummariesRequest;

  try {
    const data = await api.getUserActivitySummaries(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**UserActivitySummaryCollection**](UserActivitySummaryCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Activity Summaries were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserActivitySummary

> UserActivitySummary getUserActivitySummary(userActivitySummaryId)



Retrieve a single UserActivitySummary

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserActivitySummaryRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the UserActivitySummary
    userActivitySummaryId: 56,
  } satisfies GetUserActivitySummaryRequest;

  try {
    const data = await api.getUserActivitySummary(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userActivitySummaryId** | `number` | ID of the UserActivitySummary | [Defaults to `undefined`] |

### Return type

[**UserActivitySummary**](UserActivitySummary.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Activity Summary was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserRequest

> UserRequest getUserRequest(userRequestId)



Retrieve a single UserRequest

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the UserRequest
    userRequestId: 56,
  } satisfies GetUserRequestRequest;

  try {
    const data = await api.getUserRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userRequestId** | `number` | ID of the UserRequest | [Defaults to `undefined`] |

### Return type

[**UserRequest**](UserRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Request was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserRequests

> UserRequestCollection getUserRequests(page, perPage, q)



Retrieve some or all user_requests

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserRequestsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetUserRequestsRequest;

  try {
    const data = await api.getUserRequests(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**UserRequestCollection**](UserRequestCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Requests were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers

> UserCollection getUsers(page, perPage, q)



Retrieve some or all users

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUsersRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetUsersRequest;

  try {
    const data = await api.getUsers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**UserCollection**](UserCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Users were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVendor

> Vendor getVendor(vendorId)



Retrieve a single Vendor

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetVendorRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Vendor
    vendorId: 56,
  } satisfies GetVendorRequest;

  try {
    const data = await api.getVendor(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **vendorId** | `number` | ID of the Vendor | [Defaults to `undefined`] |

### Return type

[**Vendor**](Vendor.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Vendor was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVendors

> VendorCollection getVendors(page, perPage, q)



Retrieve some or all vendors

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetVendorsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetVendorsRequest;

  try {
    const data = await api.getVendors(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**VendorCollection**](VendorCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Vendors were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWireChanges

> GetWireChanges200Response getWireChanges(page, perPage, q, qCoachIdEq, qSchoolIdEq, qSportIdEq)



Returns WireChange records. Supports Ransack-style filters (&#x60;q[...]&#x60;). Includes related position_types and sports arrays in each object. Each item also includes coach avatar (if present) and school logo images.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetWireChangesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
    // number | Filter by coach ID (optional)
    qCoachIdEq: 56,
    // number | Filter by school ID (optional)
    qSchoolIdEq: 56,
    // number | Filter by sport ID (optional)
    qSportIdEq: 56,
  } satisfies GetWireChangesRequest;

  try {
    const data = await api.getWireChanges(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |
| **qCoachIdEq** | `number` | Filter by coach ID | [Optional] [Defaults to `undefined`] |
| **qSchoolIdEq** | `number` | Filter by school ID | [Optional] [Defaults to `undefined`] |
| **qSportIdEq** | `number` | Filter by sport ID | [Optional] [Defaults to `undefined`] |

### Return type

[**GetWireChanges200Response**](GetWireChanges200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Wire changes found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchCoaches

> CoachCollection searchCoaches(filters)



Search Coaches by priority_ids

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { SearchCoachesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // Filters (optional)
    filters: ...,
  } satisfies SearchCoachesRequest;

  try {
    const data = await api.searchCoaches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filters** | [Filters](Filters.md) |  | [Optional] |

### Return type

[**CoachCollection**](CoachCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coaches were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCashflow

> Cashflow updateCashflow(cashflowId, cashflow)



Update a single Cashflow

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateCashflowRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Cashflow
    cashflowId: 56,
    // Cashflow | Cashflow attributes to update
    cashflow: ...,
  } satisfies UpdateCashflowRequest;

  try {
    const data = await api.updateCashflow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cashflowId** | `number` | ID of the Cashflow | [Defaults to `undefined`] |
| **cashflow** | [Cashflow](Cashflow.md) | Cashflow attributes to update | |

### Return type

[**Cashflow**](Cashflow.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cashflow was updated |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to update the Cashflow |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCoach

> Coach updateCoach(coachId, coach)



Update a coach

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateCoachRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of coach to update
    coachId: 56,
    // Coach | Attributes to update. Currently only supports email, phone, bio, bio_text. Others will be ignored.
    coach: ...,
  } satisfies UpdateCoachRequest;

  try {
    const data = await api.updateCoach(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coachId** | `number` | ID of coach to update | [Defaults to `undefined`] |
| **coach** | [Coach](Coach.md) | Attributes to update. Currently only supports email, phone, bio, bio_text. Others will be ignored. | |

### Return type

[**Coach**](Coach.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCompensation

> Compensation updateCompensation(compensationId, compensation)



Update a compensation

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of compensation to update
    compensationId: 56,
    // Compensation | Compensation to update
    compensation: ...,
  } satisfies UpdateCompensationRequest;

  try {
    const data = await api.updateCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **compensationId** | `number` | ID of compensation to update | [Defaults to `undefined`] |
| **compensation** | [Compensation](Compensation.md) | Compensation to update | |

### Return type

[**Compensation**](Compensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compensation was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConference

> Conference updateConference(conferenceId, conference)



Update a single Conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateConferenceRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Conference
    conferenceId: 56,
    // Conference | Conference attributes to update
    conference: ...,
  } satisfies UpdateConferenceRequest;

  try {
    const data = await api.updateConference(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |
| **conference** | [Conference](Conference.md) | Conference attributes to update | |

### Return type

[**Conference**](Conference.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conference was updated |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to update the Conference |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConferenceship

> Conferenceship updateConferenceship(conferenceshipId, conferenceship)



Update a single Conferenceship

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateConferenceshipRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Conferenceship
    conferenceshipId: 56,
    // Conferenceship | Conferenceship attributes to update
    conferenceship: ...,
  } satisfies UpdateConferenceshipRequest;

  try {
    const data = await api.updateConferenceship(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceshipId** | `number` | ID of the Conferenceship | [Defaults to `undefined`] |
| **conferenceship** | [Conferenceship](Conferenceship.md) | Conferenceship attributes to update | |

### Return type

[**Conferenceship**](Conferenceship.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferenceship was updated |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to update the Conferenceship |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFoiaLabel

> FoiaLabel updateFoiaLabel(foiaLabelId, foiaLabel)



Update a single foia label

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateFoiaLabelRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of foia label to update
    foiaLabelId: 56,
    // FoiaLabel | Foia label to update
    foiaLabel: ...,
  } satisfies UpdateFoiaLabelRequest;

  try {
    const data = await api.updateFoiaLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaLabelId** | `number` | ID of foia label to update | [Defaults to `undefined`] |
| **foiaLabel** | [FoiaLabel](FoiaLabel.md) | Foia label to update | |

### Return type

[**FoiaLabel**](FoiaLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia label was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFoiaRequest

> FoiaRequest updateFoiaRequest(foiaRequestId, foiaRequest)



Update a single foia request

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateFoiaRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of foia request to update
    foiaRequestId: 56,
    // FoiaRequest | Foia request to update
    foiaRequest: ...,
  } satisfies UpdateFoiaRequestRequest;

  try {
    const data = await api.updateFoiaRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaRequestId** | `number` | ID of foia request to update | [Defaults to `undefined`] |
| **foiaRequest** | [FoiaRequest](FoiaRequest.md) | Foia request to update | |

### Return type

[**FoiaRequest**](FoiaRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia request was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateJobPost

> JobPost updateJobPost(jobPostId, jobPost)

Update a job post

Update a job post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of job post to update
    jobPostId: 789,
    // JobPost (optional)
    jobPost: ...,
  } satisfies UpdateJobPostRequest;

  try {
    const data = await api.updateJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | ID of job post to update | [Defaults to `undefined`] |
| **jobPost** | [JobPost](JobPost.md) |  | [Optional] |

### Return type

[**JobPost**](JobPost.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job post was updated |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRequestedItem

> RequestedItem updateRequestedItem(requestedItemId, requestedItem)



Update a single requested item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateRequestedItemRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of requested item to update
    requestedItemId: 56,
    // RequestedItem | Requested item to update
    requestedItem: ...,
  } satisfies UpdateRequestedItemRequest;

  try {
    const data = await api.updateRequestedItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestedItemId** | `number` | ID of requested item to update | [Defaults to `undefined`] |
| **requestedItem** | [RequestedItem](RequestedItem.md) | Requested item to update | |

### Return type

[**RequestedItem**](RequestedItem.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Requested item was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSeason

> Season updateSeason(seasonId, season)



Update a single Season

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the Season
    seasonId: 56,
    // Season | Season attributes to update
    season: ...,
  } satisfies UpdateSeasonRequest;

  try {
    const data = await api.updateSeason(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **seasonId** | `number` | ID of the Season | [Defaults to `undefined`] |
| **season** | [Season](Season.md) | Season attributes to update | |

### Return type

[**Season**](Season.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Season was updated |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to update the Season |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userMe

> User userMe()



Retrieve a single user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UserMeRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.userMe();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyUserIntercollegiateAccess

> VerifyUserIntercollegiateAccess200Response verifyUserIntercollegiateAccess(userEmail)



Verifies whether the user has intercollegiate access based on their email.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { VerifyUserIntercollegiateAccessRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // string | The email of the user whose intercollegiate access is being verified.
    userEmail: userEmail_example,
  } satisfies VerifyUserIntercollegiateAccessRequest;

  try {
    const data = await api.verifyUserIntercollegiateAccess(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userEmail** | `string` | The email of the user whose intercollegiate access is being verified. | [Defaults to `undefined`] |

### Return type

[**VerifyUserIntercollegiateAccess200Response**](VerifyUserIntercollegiateAccess200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response with the access granted status |  -  |
| **401** | Unauthorized |  -  |
| **404** | User Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

