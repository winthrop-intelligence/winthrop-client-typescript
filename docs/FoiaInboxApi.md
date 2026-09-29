# FoiaInboxApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyFoiaInbox**](FoiaInboxApi.md#applyfoiainbox) | **POST** /api/v1/foia_inbox_apply |  |
| [**getFoiaInboxCandidates**](FoiaInboxApi.md#getfoiainboxcandidates) | **GET** /api/v1/foia_inbox_candidates |  |



## applyFoiaInbox

> FoiaInboxApplyResponse applyFoiaInbox(foiaInboxApplyRequest)



Atomically apply one approved Gmail message decision to one FOIA request. A retry whose selected final state is already present returns already_applied without duplicating effects.

### Example

```ts
import {
  Configuration,
  FoiaInboxApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { ApplyFoiaInboxRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FoiaInboxApi(config);

  const body = {
    // FoiaInboxApplyRequest
    foiaInboxApplyRequest: ...,
  } satisfies ApplyFoiaInboxRequest;

  try {
    const data = await api.applyFoiaInbox(body);
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
| **foiaInboxApplyRequest** | [FoiaInboxApplyRequest](FoiaInboxApplyRequest.md) |  | |

### Return type

[**FoiaInboxApplyResponse**](FoiaInboxApplyResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The approved decision was applied, or its selected final state was already present |  -  |
| **409** | Reviewed state changed and the selected final state is not already present |  -  |
| **422** | Invalid or inconsistent effect bundle |  -  |
| **503** | The configured FOIA inbox automation actor is unavailable |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaInboxCandidates

> FoiaInboxCandidatesResponse getFoiaInboxCandidates(page, perPage, schoolId, foiaRequestId, ifNoneMatch)



Retrieve active FOIA requests on active labels for explainable inbox matching

### Example

```ts
import {
  Configuration,
  FoiaInboxApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaInboxCandidatesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FoiaInboxApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number (optional)
    perPage: 56,
    // number (optional)
    schoolId: 56,
    // number (optional)
    foiaRequestId: 56,
    // string | ETag from a previous response; when it still matches, the server responds 304 Not Modified instead of re-sending the payload. (optional)
    ifNoneMatch: ifNoneMatch_example,
  } satisfies GetFoiaInboxCandidatesRequest;

  try {
    const data = await api.getFoiaInboxCandidates(body);
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
| **perPage** | `number` |  | [Optional] [Defaults to `100`] |
| **schoolId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **foiaRequestId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **ifNoneMatch** | `string` | ETag from a previous response; when it still matches, the server responds 304 Not Modified instead of re-sending the payload. | [Optional] [Defaults to `undefined`] |

### Return type

[**FoiaInboxCandidatesResponse**](FoiaInboxCandidatesResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active FOIA inbox matching candidates |  * ETag - Entity tag for the current candidate page; send it back via If-None-Match for conditional requests. <br>  |
| **304** | Not Modified — the candidate page matching the ETag supplied in If-None-Match is still current; no body is returned. |  -  |
| **400** | Invalid filter or pagination parameter |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

