# OcrApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createJobOcrV1JobsPost**](OcrApi.md#createjobocrv1jobspost) | **POST** /ocr/v1/jobs | Submit an OCR job for a Google Drive file |
| [**jobResultOcrV1JobsJobIdResultGet**](OcrApi.md#jobresultocrv1jobsjobidresultget) | **GET** /ocr/v1/jobs/{job_id}/result | Fetch the full result |
| [**jobStatusBatchOcrV1JobsGet**](OcrApi.md#jobstatusbatchocrv1jobsget) | **GET** /ocr/v1/jobs | Poll many jobs in one request |
| [**jobStatusOcrV1JobsJobIdGet**](OcrApi.md#jobstatusocrv1jobsjobidget) | **GET** /ocr/v1/jobs/{job_id} | Poll one job |



## createJobOcrV1JobsPost

> JobAccepted createJobOcrV1JobsPost(createJobJson)

Submit an OCR job for a Google Drive file

The service downloads the file with its service account and OCRs every page through Mistral. Returns 202 with a job id to poll. Resubmitting an identical file (same client, same resolved policy) resolves to the prior result during preparation instead of re-paying for OCR; pass options.force to reprocess.

### Example

```ts
import {
  Configuration,
  OcrApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateJobOcrV1JobsPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OcrApi(config);

  const body = {
    // CreateJobJson
    createJobJson: ...,
  } satisfies CreateJobOcrV1JobsPostRequest;

  try {
    const data = await api.createJobOcrV1JobsPost(body);
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
| **createJobJson** | [CreateJobJson](CreateJobJson.md) |  | |

### Return type

[**JobAccepted**](JobAccepted.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **422** | Invalid profile or options |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## jobResultOcrV1JobsJobIdResultGet

> JobResult jobResultOcrV1JobsJobIdResultGet(jobId)

Fetch the full result

### Example

```ts
import {
  Configuration,
  OcrApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { JobResultOcrV1JobsJobIdResultGetRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OcrApi(config);

  const body = {
    // string
    jobId: jobId_example,
  } satisfies JobResultOcrV1JobsJobIdResultGetRequest;

  try {
    const data = await api.jobResultOcrV1JobsJobIdResultGet(body);
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
| **jobId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**JobResult**](JobResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## jobStatusBatchOcrV1JobsGet

> JobStatusBatch jobStatusBatchOcrV1JobsGet(ids)

Poll many jobs in one request

Comma-separated &#x60;ids&#x60; (e.g. &#x60;?ids&#x3D;a,b,c&#x60;). Returns the status of the caller\&#39;s own jobs among them; unknown, expired, or other clients\&#39; ids come back in &#x60;not_found&#x60;. At most 100 ids per call.

### Example

```ts
import {
  Configuration,
  OcrApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { JobStatusBatchOcrV1JobsGetRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OcrApi(config);

  const body = {
    // string
    ids: ids_example,
  } satisfies JobStatusBatchOcrV1JobsGetRequest;

  try {
    const data = await api.jobStatusBatchOcrV1JobsGet(body);
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
| **ids** | `string` |  | [Defaults to `undefined`] |

### Return type

[**JobStatusBatch**](JobStatusBatch.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Missing or too many ids |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## jobStatusOcrV1JobsJobIdGet

> JobStatus jobStatusOcrV1JobsJobIdGet(jobId)

Poll one job

### Example

```ts
import {
  Configuration,
  OcrApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { JobStatusOcrV1JobsJobIdGetRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OcrApi(config);

  const body = {
    // string
    jobId: jobId_example,
  } satisfies JobStatusOcrV1JobsJobIdGetRequest;

  try {
    const data = await api.jobStatusOcrV1JobsJobIdGet(body);
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
| **jobId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**JobStatus**](JobStatus.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

