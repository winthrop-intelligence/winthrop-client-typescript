# CtbApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyCtbCompensation**](CtbApi.md#applyctbcompensation) | **POST** /api/v1/ctb_compensation_apply |  |



## applyCtbCompensation

> CtbCompensationApplyResponse applyCtbCompensation(ctbCompensationApplyRequest)



Atomically apply one reviewed CTB compensation availability exception

### Example

```ts
import {
  Configuration,
  CtbApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { ApplyCtbCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CtbApi(config);

  const body = {
    // CtbCompensationApplyRequest
    ctbCompensationApplyRequest: ...,
  } satisfies ApplyCtbCompensationRequest;

  try {
    const data = await api.applyCtbCompensation(body);
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
| **ctbCompensationApplyRequest** | [CtbCompensationApplyRequest](CtbCompensationApplyRequest.md) |  | |

### Return type

[**CtbCompensationApplyResponse**](CtbCompensationApplyResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The reviewed CTB decision was applied or was already present |  -  |
| **409** | Reviewed WinAD state changed and the selected final state is not fully present |  -  |
| **422** | Invalid or inconsistent CTB compensation effect |  -  |
| **503** | The configured CTB automation actor is unavailable |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

