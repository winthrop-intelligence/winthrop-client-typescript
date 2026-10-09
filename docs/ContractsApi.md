# ContractsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPendingContract**](ContractsApi.md#creatependingcontract) | **POST** /api/v1/contracts |  |
| [**deletePendingContract**](ContractsApi.md#deletependingcontract) | **DELETE** /api/v1/contracts/{contractId} |  |
| [**publishPendingContract**](ContractsApi.md#publishpendingcontractoperation) | **POST** /api/v1/contracts/{contractId}/publish |  |
| [**updateContract**](ContractsApi.md#updatecontractoperation) | **PATCH** /api/v1/contracts/{contractId} |  |



## createPendingContract

> PendingContractCreated createPendingContract(coachId, file, driveId, text, contractTerms)



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
    // string | Optional structured terms read from the contract, as a JSON-encoded ContractTerms object (see PATCH /raw_contracts/{id}/contract_terms). Stored on the RawContract in the same transaction; an invalid document refuses the upload with errors keyed contract_terms, contract_terms.schema, contract_terms.source.run_id, and so on. Accepted from service (client-credentials) tokens like the rest of the upload; the audit version then records no person. (optional)
    contractTerms: contractTerms_example,
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
| **contractTerms** | `string` | Optional structured terms read from the contract, as a JSON-encoded ContractTerms object (see PATCH /raw_contracts/{id}/contract_terms). Stored on the RawContract in the same transaction; an invalid document refuses the upload with errors keyed contract_terms, contract_terms.schema, contract_terms.source.run_id, and so on. Accepted from service (client-credentials) tokens like the rest of the upload; the audit version then records no person. | [Optional] [Defaults to `undefined`] |

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
| **422** | The upload was refused (unknown coach, missing or non-PDF file, duplicate drive_id, invalid contract_terms). Nothing was created. |  -  |

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


## publishPendingContract

> PublishedContract publishPendingContract(contractId, publishPendingContractRequest)



Publish a pending contract (WINAD-10559). In one transaction, under the coach lock, this sets the contract\&#39;s dates, writes one compensation per year (creating the later-year positions the coach needs) and sets pending to false. If anything fails nothing is written and the contract stays pending, so the request can be corrected and retried.  The rules are the CSV compensation uploader\&#39;s: the coach must have a position at each school in the first year listed for it, later years get positions created from it, a school can appear once per coach and year, a yearly or 990 compensation needs a base_salary and an hourly one needs a comment, and a private school\&#39;s compensation must be 990. A compensation that already exists for the coach, school and year is updated and linked to this contract.  Money is in dollars (a number, or a string such as \&quot;$1,234.50\&quot; with either no thousands separators or correctly placed ones; \&quot;500,00\&quot; is refused), converted to cents like the CSV. Flags are JSON booleans. Unknown fields, at the top level or in a row, are refused with 422 rather than ignored. Errors are keyed by attribute for the contract fields (start_on, end_on, at_will, executed_on, compensations) and as compensations[n] (n &#x3D; the row\&#39;s position in the request, from 0) for a row; row messages name fields by their CSV column, for example \&quot;Base Salary\&quot;. Requires the winad_write scope and a manage-level user. 

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { PublishPendingContractOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the pending contract to publish
    contractId: 56,
    // PublishPendingContractRequest
    publishPendingContractRequest: ...,
  } satisfies PublishPendingContractOperationRequest;

  try {
    const data = await api.publishPendingContract(body);
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
| **contractId** | `number` | ID of the pending contract to publish | [Defaults to `undefined`] |
| **publishPendingContractRequest** | [PublishPendingContractRequest](PublishPendingContractRequest.md) |  | |

### Return type

[**PublishedContract**](PublishedContract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The contract was published and its compensations written |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope or not permitted to update contracts) |  -  |
| **404** | Not Found |  -  |
| **422** | The contract is not pending, or the dates or a compensation row were refused. Nothing was written and the contract is still pending. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContract

> Contract updateContract(contractId, updateContractRequest)



Edit a published contract\&#39;s start_on, end_on and at_will (WINAD-10631). Only supplied fields change; linked compensations are unchanged. Pending contracts are published, not edited (use POST /contracts/{contractId}/publish). Dates must be YYYY-MM-DD. Setting at_will true requires end_on null; send both fields to clear a stored end date. The at-will/end-date rule is checked only when either field is supplied, allowing start-only corrections on legacy rows. Each change creates a PaperTrail version with the authenticated user (whodunnit) and the optional top-level change_note. Identical values are a no-op and create no version, so no note is stored. Requires winad_write and a manage-level user with a user-backed OAuth token. 

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateContractOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the published contract to update
    contractId: 56,
    // UpdateContractRequest
    updateContractRequest: ...,
  } satisfies UpdateContractOperationRequest;

  try {
    const data = await api.updateContract(body);
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
| **contractId** | `number` | ID of the published contract to update | [Defaults to `undefined`] |
| **updateContractRequest** | [UpdateContractRequest](UpdateContractRequest.md) |  | |

### Return type

[**Contract**](Contract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated contract, re-read from the database |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope, not a manage-level user, or a client-credentials token with no user: Updating contracts requires a user-backed OAuth token) |  -  |
| **404** | Not Found |  -  |
| **422** | Pending contract, no updatable fields, unknown or mis-typed field, change_note that is not a string (errors.change_note), bad date, at_will with end_on, missing required date, or start after end. Nothing was written. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

