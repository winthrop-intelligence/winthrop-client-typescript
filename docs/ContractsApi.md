# ContractsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPendingContract**](ContractsApi.md#creatependingcontract) | **POST** /api/v1/contracts |  |
| [**deletePendingContract**](ContractsApi.md#deletependingcontract) | **DELETE** /api/v1/contracts/{contractId} |  |



## createPendingContract

> PendingContractCreated createPendingContract(coachId, file, driveId, text)



Upload a PDF to a coach as a pending contract. Creates a RawContract with the file attached and a Contract with pending true (no dates) in one transaction; nothing is created if the request is refused. Requires the winad_write scope and a manage-level user. The file must really be a PDF (its bytes are checked, not its name).

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreatePendingContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContractsApi(config);

  const body = {
    // number | The coach the contract is filed on
    coachId: 56,
    // Blob | The contract PDF
    file: BINARY_DATA_HERE,
    // string | Optional Google Drive id; must be unique for the coach (optional)
    driveId: driveId_example,
    // string | Optional Mistral markdown already produced for this PDF, pages separated by a form feed line (\\\"\\\\n\\\\f\\\\n\\\"). When present it is stored as the contract text and no automatic OCR is queued; when absent one automatic OCR job is queued. (optional)
    text: text_example,
  } satisfies CreatePendingContractRequest;

  try {
    const data = await api.createPendingContract(body);
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
| **coachId** | `number` | The coach the contract is filed on | [Defaults to `undefined`] |
| **file** | `Blob` | The contract PDF | [Defaults to `undefined`] |
| **driveId** | `string` | Optional Google Drive id; must be unique for the coach | [Optional] [Defaults to `undefined`] |
| **text** | `string` | Optional Mistral markdown already produced for this PDF, pages separated by a form feed line (\\\&quot;\\\\n\\\\f\\\\n\\\&quot;). When present it is stored as the contract text and no automatic OCR is queued; when absent one automatic OCR job is queued. | [Optional] [Defaults to `undefined`] |

### Return type

[**PendingContractCreated**](PendingContractCreated.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The pending contract was created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope or not permitted to create contracts) |  -  |
| **422** | The upload was refused (unknown coach, missing or non-PDF file, duplicate drive_id). Nothing was created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePendingContract

> deletePendingContract(contractId)



Delete a contract, only while it is pending. Also deletes its RawContract and the stored PDF, so no file is left behind. A published contract, or a PDF that another record still uses, is refused. Requires the winad_write scope and a manage-level user.

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeletePendingContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContractsApi(config);

  const body = {
    // number | ID of the pending contract to delete
    contractId: 56,
  } satisfies DeletePendingContractRequest;

  try {
    const data = await api.deletePendingContract(body);
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
| **contractId** | `number` | ID of the pending contract to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The pending contract, its RawContract and its file were deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope or not permitted to delete contracts) |  -  |
| **404** | Not Found |  -  |
| **422** | The contract is not pending, or its PDF is used by another record. Nothing was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

