# PendingGameContractsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPendingGameContract**](PendingGameContractsApi.md#creatependinggamecontract) | **POST** /api/v1/pending_game_contracts |  |
| [**deletePendingGameContract**](PendingGameContractsApi.md#deletependinggamecontract) | **DELETE** /api/v1/pending_game_contracts/{raw_contractId} |  |
| [**getPendingGameContracts**](PendingGameContractsApi.md#getpendinggamecontracts) | **GET** /api/v1/pending_game_contracts |  |
| [**publishPendingGameContract**](PendingGameContractsApi.md#publishpendinggamecontractoperation) | **POST** /api/v1/pending_game_contracts/{raw_contractId}/publish |  |



## createPendingGameContract

> PendingGameContract createPendingGameContract(schoolId, foiaLabelId, driveId, text, file, sourceDriveFileId, expectedSha256, fileSignedId)



File a guarantee PDF as a pending GAME RawContract (WINAD-10815), the game counterpart of POST /contracts (coach) and POST /deals (vendor). The PDF comes from exactly one of &#x60;file&#x60; (multipart), &#x60;source_drive_file_id&#x60; with &#x60;expected_sha256&#x60; (a Google Drive file, downloaded and verified by WinAD) or &#x60;file_signed_id&#x60; (a blob sent straight to storage with POST /contracts/direct_uploads), with the same PDF checks and refusal codes as POST /contracts. &#x60;school_id&#x60; is the school whose FOIA request produced the PDF. Optional &#x60;foia_label_id&#x60; (kept for the list filter), &#x60;drive_id&#x60; (the source Drive file) and &#x60;text&#x60; (the splitter\&#39;s Mistral text, pages separated by a form feed; without it the one OCR job is queued).  The RawContract is pending and internal-only (the same rule as a pending coach contract\&#39;s PDF: only super admins and service tokens can read its record, file or text) and has no GameContracts. A second PDF of the same school with the same &#x60;drive_id&#x60; or the same SHA-256 is refused with 422 (&#x60;errors.drive_id&#x60; / &#x60;errors.file&#x60;, code &#x60;duplicate&#x60;) and nothing is stored. Requires winad_write and a manage-level user. 

### Example

```ts
import {
  Configuration,
  PendingGameContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreatePendingGameContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PendingGameContractsApi(config);

  const body = {
    // number
    schoolId: 56,
    // number (optional)
    foiaLabelId: 56,
    // string | The original source Drive file id, the per-school duplicate key. (optional)
    driveId: driveId_example,
    // string | Mistral OCR markdown of the PDF; stored as the RawContract text so no second OCR runs. (optional)
    text: text_example,
    // Blob (optional)
    file: BINARY_DATA_HERE,
    // string (optional)
    sourceDriveFileId: sourceDriveFileId_example,
    // string | SHA-256 of the Drive file; only with source_drive_file_id. (optional)
    expectedSha256: expectedSha256_example,
    // string | Signed id from POST /contracts/direct_uploads. (optional)
    fileSignedId: fileSignedId_example,
  } satisfies CreatePendingGameContractRequest;

  try {
    const data = await api.createPendingGameContract(body);
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
| **schoolId** | `number` |  | [Defaults to `undefined`] |
| **foiaLabelId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **driveId** | `string` | The original source Drive file id, the per-school duplicate key. | [Optional] [Defaults to `undefined`] |
| **text** | `string` | Mistral OCR markdown of the PDF; stored as the RawContract text so no second OCR runs. | [Optional] [Defaults to `undefined`] |
| **file** | `Blob` |  | [Optional] [Defaults to `undefined`] |
| **sourceDriveFileId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **expectedSha256** | `string` | SHA-256 of the Drive file; only with source_drive_file_id. | [Optional] [Defaults to `undefined`] |
| **fileSignedId** | `string` | Signed id from POST /contracts/direct_uploads. | [Optional] [Defaults to `undefined`] |

### Return type

[**PendingGameContract**](PendingGameContract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The pending guarantee PDF was filed. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope or not a manage-level user) |  -  |
| **422** | Unknown school or label, an invalid input combination or PDF, a checksum mismatch, or a duplicate. Nothing was stored. |  -  |
| **503** | Google Drive was temporarily unavailable (&#x60;source_timeout&#x60;, &#x60;source_error&#x60;); retry unchanged after Retry-After. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePendingGameContract

> deletePendingGameContract(rawContractId, expectedSha256)



Delete a pending guarantee PDF (cruft or a duplicate) and its stored file (WINAD-10815). The request carries &#x60;expected_sha256&#x60; (query or body), the digest of the PDF the caller reviewed. Inside the deletion transaction WinAD rechecks that the document is a GAME RawContract, still pending and that its stored PDF has that digest, and refuses on any mismatch, so a replacement PDF filed under the id and a PDF published a moment ago both survive. A document with GameContracts or used by another record is never deleted. Requires winad_write and a manage-level user. 

### Example

```ts
import {
  Configuration,
  PendingGameContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeletePendingGameContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PendingGameContractsApi(config);

  const body = {
    // number
    rawContractId: 56,
    // string
    expectedSha256: expectedSha256_example,
  } satisfies DeletePendingGameContractRequest;

  try {
    const data = await api.deletePendingGameContract(body);
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
| **rawContractId** | `number` |  | [Defaults to `undefined`] |
| **expectedSha256** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Deleted. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Not a pending GAME PDF, a malformed digest (&#x60;errors.expected_sha256&#x60;), a digest that does not match the stored PDF (code &#x60;checksum_mismatch&#x60;) or a PDF another record uses. Nothing was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPendingGameContracts

> PendingGameContractCollection getPendingGameContracts(schoolId, foiaLabelId, page, perPage)



List the pending guarantee (GAME) PDFs, across schools (WINAD-10815), oldest first, filterable by school and FOIA label. Each row has the RawContract id, school, filename, created_at, the SHA-256 of the stored PDF and whether its OCR text is ready (&#x60;ocr_text_ready&#x60;); read the text itself with GET /raw_contracts/{raw_contractId}/ocr_text. A PDF published with every occurrence skipped is not listed. Requires winad_read and a manage-level user (client-credentials service tokens included). 

### Example

```ts
import {
  Configuration,
  PendingGameContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetPendingGameContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PendingGameContractsApi(config);

  const body = {
    // number (optional)
    schoolId: 56,
    // number (optional)
    foiaLabelId: 56,
    // number | results page to retrieve. At most 2147483647 (a signed 32-bit integer); a larger value, like 0 or a non-number, is a 400 with `Invalid pagination parameter: page`. (optional)
    page: 56,
    // number | number of results per page. At most 2147483647 (a larger value is a 400 with `Invalid pagination parameter: per_page`); most endpoints also cap it at 100. (optional)
    perPage: 56,
  } satisfies GetPendingGameContractsRequest;

  try {
    const data = await api.getPendingGameContracts(body);
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
| **schoolId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **foiaLabelId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **page** | `number` | results page to retrieve. At most 2147483647 (a signed 32-bit integer); a larger value, like 0 or a non-number, is a 400 with &#x60;Invalid pagination parameter: page&#x60;. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. At most 2147483647 (a larger value is a 400 with &#x60;Invalid pagination parameter: per_page&#x60;); most endpoints also cap it at 100. | [Optional] [Defaults to `20`] |

### Return type

[**PendingGameContractCollection**](PendingGameContractCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The pending guarantee PDFs. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_read scope or not a manage-level user) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishPendingGameContract

> PendingGameContractReceipt publishPendingGameContract(rawContractId, publishPendingGameContractRequest)



Publish a pending guarantee PDF (WINAD-10815) in ONE transaction: one GameContract per written occurrence, each linked to its existing Game(s), and pending cleared. It uses the RawContract that already exists (no second upload). The body is the per-occurrence plan of POST /game_contracts/apply (&#x60;game_ids&#x60;, &#x60;expected_games&#x60;, &#x60;game_contract&#x60;, with &#x60;occurrence_id&#x60; for &#x60;action_id&#x60;) plus the source binding &#x60;raw_contract_id&#x60; (must equal the path id) and &#x60;expected_sha256&#x60; (the stored PDF\&#39;s digest). The Game snapshot also carries &#x60;neutral&#x60;, rechecked in the transaction. &#x60;game_contract.verified&#x60; is optional and may only be false: published rows stay unverified.  &#x60;occurrences&#x60; lists every reviewed occurrence of the PDF, non-empty with unique &#x60;occurrence_id&#x60;s, each exactly one disposition: a write (&#x60;game_ids&#x60;, &#x60;expected_games&#x60;, &#x60;game_contract&#x60;) or &#x60;skip&#x60; with a &#x60;reason&#x60;. The client guarantees the list is complete against the PDF; the server cannot know the true count. A write needs an existing Game (creating one while publishing awaits WINAD-10376: until then a write with a missing Game is refused with 409 and the PDF stays pending); a skip needs none. A PDF where every occurrence is skipped is valid: it creates no rows, is marked processed and stays internal-only to customers. A PDF with at least one write becomes customer-visible through its GameContracts. Linking a Game keeps the standard side effects, including marking its FOIA requested items received.  Under the RawContract\&#39;s row lock WinAD rechecks that it is still a pending GAME PDF with the stored digest, and under the Games\&#39; locks that each still matches its snapshot (&#x60;neutral&#x60; included) and has no GameContract. Any refusal writes nothing and leaves the PDF pending. The receipt (RawContract id and, per occurrence, the occurrence id with the Game and GameContract ids, or the approved skip reason) is stored in the same transaction: an identical retry returns the original receipt (&#x60;status: already_published&#x60;) and writes nothing; a different request for a published PDF is refused. Requires winad_write and a manage-level user. 

### Example

```ts
import {
  Configuration,
  PendingGameContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { PublishPendingGameContractOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PendingGameContractsApi(config);

  const body = {
    // number
    rawContractId: 56,
    // PublishPendingGameContractRequest
    publishPendingGameContractRequest: ...,
  } satisfies PublishPendingGameContractOperationRequest;

  try {
    const data = await api.publishPendingGameContract(body);
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
| **rawContractId** | `number` |  | [Defaults to `undefined`] |
| **publishPendingGameContractRequest** | [PublishPendingGameContractRequest](PublishPendingGameContractRequest.md) |  | |

### Return type

[**PendingGameContractReceipt**](PendingGameContractReceipt.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Published, or an identical retry of a publish that already succeeded. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | A Game changed after review (including &#x60;neutral&#x60;), already has a GameContract or does not exist. Nothing was written. |  -  |
| **422** | Invalid body, a PDF that is not pending or whose digest changed, or a GameContract the model refuses. Nothing was written and the PDF is still pending. |  -  |
| **503** | The automation actor used for the audit trail is unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

