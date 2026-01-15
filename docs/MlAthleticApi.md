# MlAthleticApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthCheck**](MlAthleticApi.md#healthcheck) | **GET** /ml-athletic/health_check |  |
| [**predict**](MlAthleticApi.md#predict) | **POST** /ml-athletic/predict |  |



## healthCheck

> HealthCheckSuccess healthCheck()



Check if the model is loaded and the API is running.

### Example

```ts
import {
  Configuration,
  MlAthleticApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { HealthCheckRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new MlAthleticApi(config);

  try {
    const data = await api.healthCheck();
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

[**HealthCheckSuccess**](HealthCheckSuccess.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model is loaded |  -  |
| **503** | Failed to load model |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## predict

> PredictSuccess predict(predictBody)



Classify a job post as athletic or not.

### Example

```ts
import {
  Configuration,
  MlAthleticApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { PredictRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new MlAthleticApi(config);

  const body = {
    // PredictBody (optional)
    predictBody: ...,
  } satisfies PredictRequest;

  try {
    const data = await api.predict(body);
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
| **predictBody** | [PredictBody](PredictBody.md) |  | [Optional] |

### Return type

[**PredictSuccess**](PredictSuccess.md)

### Authorization

[Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job Post classified |  -  |
| **404** | Not Found |  -  |
| **401** | Unauthorized |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

