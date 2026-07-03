# ReportingApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCoachContractRequests**](ReportingApi.md#getcoachcontractrequests) | **GET** /api/v1/reports/coach_contract_requests |  |
| [**getCoachHistory**](ReportingApi.md#getcoachhistory) | **GET** /api/v1/reports/coach_history |  |
| [**getConferenceships**](ReportingApi.md#getconferenceships) | **GET** /api/v1/reports/conferenceships |  |
| [**getFoiaDetails**](ReportingApi.md#getfoiadetails) | **GET** /api/v1/reports/foia_details |  |
| [**getFoiaFollowUpReport**](ReportingApi.md#getfoiafollowupreport) | **GET** /api/v1/reports/foia_follow_up_report |  |
| [**getFoiaRequestedItemStatusBreakdown**](ReportingApi.md#getfoiarequesteditemstatusbreakdown) | **GET** /api/v1/reports/foia_requested_item_status_breakdown |  |
| [**getGames**](ReportingApi.md#getgames) | **GET** /api/v1/reports/games |  |
| [**getInvoices**](ReportingApi.md#getinvoices) | **GET** /api/v1/reports/invoices |  |
| [**getSchoolContractRequests**](ReportingApi.md#getschoolcontractrequests) | **GET** /api/v1/reports/school_contract_requests |  |
| [**getSchoolsFinancialsQc**](ReportingApi.md#getschoolsfinancialsqc) | **GET** /api/v1/financials_qc |  |
| [**getSubscriptions**](ReportingApi.md#getsubscriptions) | **GET** /api/v1/reports/subscriptions |  |



## getCoachContractRequests

> object getCoachContractRequests(page, q)



Retrieve some or all coach contract requests

### Example

```ts
import {
  Configuration,
  ReportingApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachContractRequestsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCoachContractRequestsRequest;

  try {
    const data = await api.getCoachContractRequests(body);
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach contract requests were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachHistory

> object getCoachHistory(page, q)



Retrieve some or all coach history

### Example

```ts
import {
  Configuration,
  ReportingApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachHistoryRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCoachHistoryRequest;

  try {
    const data = await api.getCoachHistory(body);
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach history was found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceships

> object getConferenceships(page, q)



Retrieve some or all conferenceships

### Example

```ts
import {
  Configuration,
  ReportingApi,
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
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferenceships were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaDetails

> object getFoiaDetails(page, q)



Retrieve some or all foia details

### Example

```ts
import {
  Configuration,
  ReportingApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaDetailsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetFoiaDetailsRequest;

  try {
    const data = await api.getFoiaDetails(body);
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia details were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaFollowUpReport

> FoiaFollowUpReportResponse getFoiaFollowUpReport(scope, page, perPage, sortBy, foiaLabelId, schoolId, state, followUpDateLte, includeNotDue, showProcessedToday, includeDirectContact)



Retrieve read-only FOIA follow-up rows for Codex follow-up drafting and FOIA freshness dashboards

### Example

```ts
import {
  Configuration,
  ReportingApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaFollowUpReportRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ReportingApi(config);

  const body = {
    // 'due_followup_queue' | 'freshness_dashboard'
    scope: scope_example,
    // number | Results page to retrieve. (optional)
    page: 56,
    // number | Number of rows per page. Values above 200 are capped at 200. (optional)
    perPage: 56,
    // 'follow_up_date_asc' | 'follow_up_date_desc' | 'date_sent_asc' | 'date_sent_desc' | 'updated_by_school_asc' | 'updated_by_school_desc' | 'updated_by_wi_asc' | 'updated_by_wi_desc' | 'id_asc' | 'id_desc' | Sort field with optional _asc or _desc suffix. (optional)
    sortBy: sortBy_example,
    // number (optional)
    foiaLabelId: 56,
    // number (optional)
    schoolId: 56,
    // string | School state id, abbreviation, or display name. (optional)
    state: state_example,
    // Date (optional)
    followUpDateLte: 2013-10-20,
    // boolean (optional)
    includeNotDue: true,
    // 'false' | 'true' | 'all' (optional)
    showProcessedToday: showProcessedToday_example,
    // boolean (optional)
    includeDirectContact: true,
  } satisfies GetFoiaFollowUpReportRequest;

  try {
    const data = await api.getFoiaFollowUpReport(body);
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
| **scope** | `due_followup_queue`, `freshness_dashboard` |  | [Defaults to `undefined`] [Enum: due_followup_queue, freshness_dashboard] |
| **page** | `number` | Results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Number of rows per page. Values above 200 are capped at 200. | [Optional] [Defaults to `40`] |
| **sortBy** | `follow_up_date_asc`, `follow_up_date_desc`, `date_sent_asc`, `date_sent_desc`, `updated_by_school_asc`, `updated_by_school_desc`, `updated_by_wi_asc`, `updated_by_wi_desc`, `id_asc`, `id_desc` | Sort field with optional _asc or _desc suffix. | [Optional] [Defaults to `&#39;follow_up_date_asc&#39;`] [Enum: follow_up_date_asc, follow_up_date_desc, date_sent_asc, date_sent_desc, updated_by_school_asc, updated_by_school_desc, updated_by_wi_asc, updated_by_wi_desc, id_asc, id_desc] |
| **foiaLabelId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **schoolId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **state** | `string` | School state id, abbreviation, or display name. | [Optional] [Defaults to `undefined`] |
| **followUpDateLte** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **includeNotDue** | `boolean` |  | [Optional] [Defaults to `false`] |
| **showProcessedToday** | `false`, `true`, `all` |  | [Optional] [Defaults to `&#39;false&#39;`] [Enum: false, true, all] |
| **includeDirectContact** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**FoiaFollowUpReportResponse**](FoiaFollowUpReportResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | FOIA follow-up report rows were found |  -  |
| **400** | Invalid report parameters |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaRequestedItemStatusBreakdown

> FoiaRequestedItemStatusBreakdownResponse getFoiaRequestedItemStatusBreakdown(groupBy, period, updatedAtGte, updatedAtLte, foiaLabelId, schoolId, state, includeDirectContact)



Retrieve read-only grouped requested-item status counts for FOIA freshness reporting widgets

### Example

```ts
import {
  Configuration,
  ReportingApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaRequestedItemStatusBreakdownRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ReportingApi(config);

  const body = {
    // string | Comma-separated grouping dimensions. Defaults to both dimensions. (optional)
    groupBy: groupBy_example,
    // 'day' | 'week' | 'month' | Calendar bucket size for the updated_period dimension. Weeks are ISO weeks starting Monday. (optional)
    period: period_example,
    // Date | Include items updated on or after this date. (optional)
    updatedAtGte: 2013-10-20,
    // Date | Include items updated on or before this date. (optional)
    updatedAtLte: 2013-10-20,
    // number (optional)
    foiaLabelId: 56,
    // number (optional)
    schoolId: 56,
    // string | School state id, abbreviation, or display name. (optional)
    state: state_example,
    // boolean (optional)
    includeDirectContact: true,
  } satisfies GetFoiaRequestedItemStatusBreakdownRequest;

  try {
    const data = await api.getFoiaRequestedItemStatusBreakdown(body);
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
| **groupBy** | `string` | Comma-separated grouping dimensions. Defaults to both dimensions. | [Optional] [Defaults to `&#39;updated_period,requestable_type&#39;`] |
| **period** | `day`, `week`, `month` | Calendar bucket size for the updated_period dimension. Weeks are ISO weeks starting Monday. | [Optional] [Defaults to `&#39;day&#39;`] [Enum: day, week, month] |
| **updatedAtGte** | `Date` | Include items updated on or after this date. | [Optional] [Defaults to `undefined`] |
| **updatedAtLte** | `Date` | Include items updated on or before this date. | [Optional] [Defaults to `undefined`] |
| **foiaLabelId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **schoolId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **state** | `string` | School state id, abbreviation, or display name. | [Optional] [Defaults to `undefined`] |
| **includeDirectContact** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**FoiaRequestedItemStatusBreakdownResponse**](FoiaRequestedItemStatusBreakdownResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Grouped requested-item status counts were found |  -  |
| **400** | Invalid report parameters |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGames

> object getGames(page, q)



Retrieve some or all games

### Example

```ts
import {
  Configuration,
  ReportingApi,
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
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Games were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInvoices

> InvoiceReportResult getInvoices(page, q)



Retrieve some or all client invoices

### Example

```ts
import {
  Configuration,
  ReportingApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetInvoicesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetInvoicesRequest;

  try {
    const data = await api.getInvoices(body);
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**InvoiceReportResult**](InvoiceReportResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invoices were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolContractRequests

> object getSchoolContractRequests(page, q)



Retrieve some or all school contract requests

### Example

```ts
import {
  Configuration,
  ReportingApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolContractRequestsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSchoolContractRequestsRequest;

  try {
    const data = await api.getSchoolContractRequests(body);
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School contract requests were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolsFinancialsQc

> FinancialQc getSchoolsFinancialsQc(page, q)



Retrieve schools with thier financials qc

### Example

```ts
import {
  Configuration,
  ReportingApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolsFinancialsQcRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSchoolsFinancialsQcRequest;

  try {
    const data = await api.getSchoolsFinancialsQc(body);
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialQc**](FinancialQc.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | some schools with thier financials qc report |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubscriptions

> object getSubscriptions(page, q)



Retrieve subscriptions

### Example

```ts
import {
  Configuration,
  ReportingApi,
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
  const api = new ReportingApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
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
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | some subscriptions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

