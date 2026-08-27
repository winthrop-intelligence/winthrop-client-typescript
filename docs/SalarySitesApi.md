# SalarySitesApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSalarySiteAssociations**](SalarySitesApi.md#getsalarysiteassociations) | **GET** /api/v1/salary_site_associations |  |



## getSalarySiteAssociations

> SalarySiteAssociationsResponse getSalarySiteAssociations(schoolIds, page, perPage)



Retrieve every School↔Site association scoped to salary sites, for a given set of school IDs

### Example

```ts
import {
  Configuration,
  SalarySitesApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSalarySiteAssociationsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SalarySitesApi(config);

  const body = {
    // Array<number> | 1 to 100 unique positive school IDs
    schoolIds: ...,
    // number | results page to retrieve. (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies GetSalarySiteAssociationsRequest;

  try {
    const data = await api.getSalarySiteAssociations(body);
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
| **schoolIds** | `Array<number>` | 1 to 100 unique positive school IDs | |
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**SalarySiteAssociationsResponse**](SalarySiteAssociationsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Salary site associations |  -  |
| **400** | Invalid or missing school_ids filter, or invalid pagination parameter |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

