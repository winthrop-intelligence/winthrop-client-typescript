# .MlAthleticApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthCheck**](MlAthleticApi.md#healthCheck) | **GET** /ml-athletic/health_check | 
[**predict**](MlAthleticApi.md#predict) | **POST** /ml-athletic/predict | 


# **healthCheck**
> HealthCheckSuccess healthCheck()

Check if the model is loaded and the API is running.

### Example


```typescript
import { createConfiguration, MlAthleticApi } from '';

const configuration = createConfiguration();
const apiInstance = new MlAthleticApi(configuration);

const request = {};

const data = await apiInstance.healthCheck(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**HealthCheckSuccess**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model is loaded |  -  |
**503** | Failed to load model |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **predict**
> PredictSuccess predict()

Classify a job post as athletic or not.

### Example


```typescript
import { createConfiguration, MlAthleticApi } from '';
import type { MlAthleticApiPredictRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MlAthleticApi(configuration);

const request: MlAthleticApiPredictRequest = {
  
  predictBody: {
    title: "Assistant Athletic Trainer",
    description: "JobPost description here",
  },
};

const data = await apiInstance.predict(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predictBody** | **PredictBody**|  |


### Return type

**PredictSuccess**

### Authorization

[Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job Post classified |  -  |
**404** | Not Found |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


