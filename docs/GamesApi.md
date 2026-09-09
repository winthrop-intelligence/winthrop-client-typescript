# GamesApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGameContractHistory**](GamesApi.md#getgamecontracthistory) | **GET** /api/v1/games/{gameId}/contract_history |  |
| [**getGameContractHistoryFile**](GamesApi.md#getgamecontracthistoryfile) | **GET** /api/v1/games/{gameId}/contract_history/{revisionId}/file |  |



## getGameContractHistory

> GameContractHistory getGameContractHistory(gameId)



The retained amendment chain for a Game, plus the contract currently linked to it. A Game that has never been amended returns a single current entry with a null revision_id.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameContractHistoryRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GamesApi(config);

  const body = {
    // number
    gameId: 56,
  } satisfies GetGameContractHistoryRequest;

  try {
    const data = await api.getGameContractHistory(body);
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
| **gameId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**GameContractHistory**](GameContractHistory.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Game\&#39;s contract history |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | No such Game |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameContractHistoryFile

> Blob getGameContractHistoryFile(gameId, revisionId)



The original, unwatermarked PDF retained for one superseded contract revision, returned directly with a 200 rather than a redirect to external storage. Scoped to the Game in the path - a revision belonging to another Game is never served.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameContractHistoryFileRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GamesApi(config);

  const body = {
    // number
    gameId: 56,
    // number
    revisionId: 56,
  } satisfies GetGameContractHistoryFileRequest;

  try {
    const data = await api.getGameContractHistoryFile(body);
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
| **gameId** | `number` |  | [Defaults to `undefined`] |
| **revisionId** | `number` |  | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The retained original PDF bytes |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | No such revision for this Game, or its retained bytes are missing |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

