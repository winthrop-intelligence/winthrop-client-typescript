# .ReportingApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCoachContractRequests**](ReportingApi.md#getCoachContractRequests) | **GET** /api/v1/reports/coach_contract_requests | 
[**getCoachHistory**](ReportingApi.md#getCoachHistory) | **GET** /api/v1/reports/coach_history | 
[**getConferenceships**](ReportingApi.md#getConferenceships) | **GET** /api/v1/reports/conferenceships | 
[**getFoiaDetails**](ReportingApi.md#getFoiaDetails) | **GET** /api/v1/reports/foia_details | 
[**getGames**](ReportingApi.md#getGames) | **GET** /api/v1/reports/games | 
[**getInvoices**](ReportingApi.md#getInvoices) | **GET** /api/v1/reports/invoices | 
[**getSchoolContractRequests**](ReportingApi.md#getSchoolContractRequests) | **GET** /api/v1/reports/school_contract_requests | 
[**getSchoolsFinancialsQc**](ReportingApi.md#getSchoolsFinancialsQc) | **GET** /api/v1/financials_qc | 
[**getSubscriptions**](ReportingApi.md#getSubscriptions) | **GET** /api/v1/reports/subscriptions | 


# **getCoachContractRequests**
> any getCoachContractRequests()

Retrieve some or all coach contract requests

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetCoachContractRequestsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetCoachContractRequestsRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getCoachContractRequests(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**any**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Coach contract requests were found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCoachHistory**
> any getCoachHistory()

Retrieve some or all coach history

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetCoachHistoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetCoachHistoryRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getCoachHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**any**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Coach history was found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConferenceships**
> any getConferenceships()

Retrieve some or all conferenceships

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetConferenceshipsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetConferenceshipsRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getConferenceships(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**any**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Conferenceships were found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFoiaDetails**
> any getFoiaDetails()

Retrieve some or all foia details

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetFoiaDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetFoiaDetailsRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getFoiaDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**any**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Foia details were found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGames**
> any getGames()

Retrieve some or all games

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetGamesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetGamesRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getGames(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**any**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Games were found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getInvoices**
> any getInvoices()

Retrieve some or all client invoices

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetInvoicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetInvoicesRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getInvoices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**any**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invoices were found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSchoolContractRequests**
> any getSchoolContractRequests()

Retrieve some or all school contract requests

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetSchoolContractRequestsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetSchoolContractRequestsRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getSchoolContractRequests(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**any**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | School contract requests were found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSchoolsFinancialsQc**
> FinancialQc getSchoolsFinancialsQc()

Retrieve schools with thier financials qc

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetSchoolsFinancialsQcRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetSchoolsFinancialsQcRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getSchoolsFinancialsQc(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**FinancialQc**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | some schools with thier financials qc report |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubscriptions**
> any getSubscriptions()

Retrieve subscriptions

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiGetSubscriptionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiGetSubscriptionsRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getSubscriptions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**any**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | some subscriptions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


