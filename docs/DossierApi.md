# DossierApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**universityDossierReportDossierWinadIdGet**](DossierApi.md#universitydossierreportdossierwinadidget) | **GET** /dossier/{winad_id}/ | University Dossier Report |



## universityDossierReportDossierWinadIdGet

> DossierReportResponse universityDossierReportDossierWinadIdGet(winadId)

University Dossier Report

### Example

```ts
import {
  Configuration,
  DossierApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UniversityDossierReportDossierWinadIdGetRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DossierApi(config);

  const body = {
    // number
    winadId: 56,
  } satisfies UniversityDossierReportDossierWinadIdGetRequest;

  try {
    const data = await api.universityDossierReportDossierWinadIdGet(body);
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
| **winadId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**DossierReportResponse**](DossierReportResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

