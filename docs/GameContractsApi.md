# GameContractsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyGameContract**](GameContractsApi.md#applygamecontract) | **POST** /api/v1/game_contracts/apply |  |



## applyGameContract

> GameContractApplyResponse applyGameContract(plan, rawContractFile)



Atomically apply an approved game contract review plan — creates one RawContract for the uploaded PDF, one GameContract per approved action, and links each contract to its approved existing Games. Supported game_type values are Guarantee, Neutral, Tournament, and Exhibition; neutral-site Tournament occurrences may omit the home school (home_school_id null, away_school_id required).

### Example

```ts
import {
  Configuration,
  GameContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { ApplyGameContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GameContractsApi(config);

  const body = {
    // string | JSON-encoded game-contract-entry-winad-plan/v1 review plan
    plan: plan_example,
    // Blob | The approved source contract PDF
    rawContractFile: BINARY_DATA_HERE,
  } satisfies ApplyGameContractRequest;

  try {
    const data = await api.applyGameContract(body);
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
| **plan** | `string` | JSON-encoded game-contract-entry-winad-plan/v1 review plan | [Defaults to `undefined`] |
| **rawContractFile** | `Blob` | The approved source contract PDF | [Defaults to `undefined`] |

### Return type

[**GameContractApplyResponse**](GameContractApplyResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The approved plan was applied, or an exact retry was already applied |  -  |
| **409** | A referenced Game changed after review, disappeared, or already has a GameContract |  -  |
| **422** | Invalid plan, PDF, hashes, or GameContract values |  -  |
| **503** | The configured game contract apply automation actor is unavailable |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

