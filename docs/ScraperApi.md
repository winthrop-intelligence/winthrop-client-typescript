# ScraperApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listScrapers**](ScraperApi.md#listscrapers) | **GET** /ondemand-scrapers/ | List all available scrapers |
| [**runScraper**](ScraperApi.md#runscraper) | **POST** /ondemand-scrapers/run/{command} | Run a scraper |



## listScrapers

> Array&lt;Scraper&gt; listScrapers()

List all available scrapers

Root endpoint

### Example

```ts
import {
  Configuration,
  ScraperApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { ListScrapersRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ScraperApi(config);

  try {
    const data = await api.listScrapers();
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

[**Array&lt;Scraper&gt;**](Scraper.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of available scrapers |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## runScraper

> runScraper(command, body)

Run a scraper

Run a specified scraper with given arguments

### Example

```ts
import {
  Configuration,
  ScraperApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { RunScraperRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ScraperApi(config);

  const body = {
    // string | The name of the scraper to run
    command: command_example,
    // object (optional)
    body: Object,
  } satisfies RunScraperRequest;

  try {
    const data = await api.runScraper(body);
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
| **command** | `string` | The name of the scraper to run | [Defaults to `undefined`] |
| **body** | `object` |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The scraper was successfully started |  -  |
| **401** | Unauthorized |  -  |
| **404** | The specified scraper was not found |  -  |
| **422** | The specified scraper was found, but the arguments were invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

