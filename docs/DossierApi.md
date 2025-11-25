# .DossierApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**universityDossierReportDossierWinadIdGet**](DossierApi.md#universityDossierReportDossierWinadIdGet) | **GET** /dossier/{winad_id}/ | University Dossier Report


# **universityDossierReportDossierWinadIdGet**
> DossierReportResponse universityDossierReportDossierWinadIdGet()


### Example


```typescript
import { createConfiguration, DossierApi } from '';
import type { DossierApiUniversityDossierReportDossierWinadIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DossierApi(configuration);

const request: DossierApiUniversityDossierReportDossierWinadIdGetRequest = {
  
  winadId: 1,
};

const data = await apiInstance.universityDossierReportDossierWinadIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **winadId** | [**number**] |  | defaults to undefined


### Return type

**DossierReportResponse**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not Found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


