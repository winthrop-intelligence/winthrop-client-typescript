# ReportingApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCoachContractRequests**](ReportingApi.md#getcoachcontractrequests) | **GET** /api/v1/reports/coach_contract_requests |  |
| [**getCoachHistory**](ReportingApi.md#getcoachhistory) | **GET** /api/v1/reports/coach_history |  |
| [**getConferenceships**](ReportingApi.md#getconferenceships) | **GET** /api/v1/reports/conferenceships |  |
| [**getFoiaDetails**](ReportingApi.md#getfoiadetails) | **GET** /api/v1/reports/foia_details |  |
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

> object getInvoices(page, q)



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

**object**

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

