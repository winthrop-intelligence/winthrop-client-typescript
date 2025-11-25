# .ScraperApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listScrapers**](ScraperApi.md#listScrapers) | **GET** /ondemand-scrapers/ | List all available scrapers
[**runScraper**](ScraperApi.md#runScraper) | **POST** /ondemand-scrapers/run/{command} | Run a scraper


# **listScrapers**
> Array<Scraper> listScrapers()

Root endpoint

### Example


```typescript
import { createConfiguration, ScraperApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScraperApi(configuration);

const request = {};

const data = await apiInstance.listScrapers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Scraper>**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of available scrapers |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **runScraper**
> void runScraper()

Run a specified scraper with given arguments

### Example


```typescript
import { createConfiguration, ScraperApi } from '';
import type { ScraperApiRunScraperRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScraperApi(configuration);

const request: ScraperApiRunScraperRequest = {
    // The name of the scraper to run
  command: "command_example",
  
  body: {},
};

const data = await apiInstance.runScraper(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **command** | [**string**] | The name of the scraper to run | defaults to undefined


### Return type

**void**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The scraper was successfully started |  -  |
**401** | Unauthorized |  -  |
**404** | The specified scraper was not found |  -  |
**422** | The specified scraper was found, but the arguments were invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


