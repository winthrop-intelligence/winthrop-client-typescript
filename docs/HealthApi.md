# HealthApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthHealthGet**](HealthApi.md#healthhealthget) | **GET** /ocr/health | Health |
| [**pingPingGet**](HealthApi.md#pingpingget) | **GET** /ocr/ping | Ping |



## healthHealthGet

> object healthHealthGet()

Health

Unauthenticated readiness probe: can the service actually serve?  Verifies the Redis store (job state + Celery broker). Returns 503 when Redis is unreachable so K8s pulls the pod from rotation and uptime monitors alert.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { HealthHealthGetRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new HealthApi(config);

  try {
    const data = await api.healthHealthGet();
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

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pingPingGet

> object pingPingGet()

Ping

Unauthenticated liveness probe: is the process responsive?

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { PingPingGetRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new HealthApi(config);

  try {
    const data = await api.pingPingGet();
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

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

