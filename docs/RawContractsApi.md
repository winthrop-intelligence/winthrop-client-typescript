# RawContractsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getRawContractContractTerms**](RawContractsApi.md#getrawcontractcontractterms) | **GET** /api/v1/raw_contracts/{raw_contractId}/contract_terms |  |
| [**regenerateRawContractOcrText**](RawContractsApi.md#regeneraterawcontractocrtext) | **POST** /api/v1/raw_contracts/{raw_contractId}/ocr_text/regenerate |  |
| [**replaceRawContractFile**](RawContractsApi.md#replacerawcontractfile) | **PUT** /api/v1/raw_contracts/{raw_contractId}/file |  |
| [**updateRawContractContractTerms**](RawContractsApi.md#updaterawcontractcontractterms) | **PATCH** /api/v1/raw_contracts/{raw_contractId}/contract_terms |  |



## getRawContractContractTerms

> RawContractTerms getRawContractContractTerms(rawContractId)



Return the structured contract terms stored on a RawContract (WINAD-10633), and whether the contract\&#39;s OCR text has changed since they were read (contract_terms_stale).

### Example

```ts
import {
  Configuration,
  RawContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRawContractContractTermsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RawContractsApi(config);

  const body = {
    // number | ID of the RawContract
    rawContractId: 56,
  } satisfies GetRawContractContractTermsRequest;

  try {
    const data = await api.getRawContractContractTerms(body);
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
| **rawContractId** | `number` | ID of the RawContract | [Defaults to `undefined`] |

### Return type

[**RawContractTerms**](RawContractTerms.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The stored terms (contract_terms is null when none have been stored) |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (insufficient scope, or a document the user cannot read) |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## regenerateRawContractOcrText

> RegenerateRawContractOcrText200Response regenerateRawContractOcrText(rawContractId)



Re-run Mistral OCR on a raw contract\&#39;s PDF (WINAD-10683). Queues RawContractOcrJob, which replaces the stored OCR &#x60;text&#x60; with page-separated Mistral text (pages joined by \&quot;\\n\\f\\n\&quot;); the contract\&#39;s text state reads &#x60;processing&#x60; until the job finishes. Poll GET /raw_contracts/{raw_contractId}/ocr_text for the result. Use it to refresh text stored before the page separator existed. Admin (manage) users only; a token with any scope is accepted, and the endpoint does not take &#x60;change_note&#x60;. &#x60;POST /raw_contracts/{raw_contractId}/unstract_pdf_text&#x60; is the deprecated alias of this endpoint. 

### Example

```ts
import {
  Configuration,
  RawContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { RegenerateRawContractOcrTextRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RawContractsApi(config);

  const body = {
    // number | ID of the RawContract
    rawContractId: 56,
  } satisfies RegenerateRawContractOcrTextRequest;

  try {
    const data = await api.regenerateRawContractOcrText(body);
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
| **rawContractId** | `number` | ID of the RawContract | [Defaults to `undefined`] |

### Return type

[**RegenerateRawContractOcrText200Response**](RegenerateRawContractOcrText200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Text extraction queued |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (the user may not manage raw contracts) |  -  |
| **404** | Not Found |  -  |
| **422** | No file attached to the raw contract |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceRawContractFile

> RawContract replaceRawContractFile(rawContractId, file, changeNote)



Replace the PDF of a vendor deal\&#39;s RawContract (WINAD-10684). Send multipart/form-data with the new PDF as &#x60;file&#x60; and an optional &#x60;change_note&#x60;. The RawContract keeps its id and its &#x60;deal_id&#x60; link. The old file (and its OCR copy) is replaced, not kept as an attachment; the stored text is cleared and Mistral OCR is queued once, the way the admin\&#39;s Re-extract does, so &#x60;text&#x60; (and GET /raw_contracts/{id}/ocr_text) reflect the new file once the extraction finishes. The structured &#x60;contract_terms&#x60; are not touched (they read as stale against the new text). &#x60;asset_file_name&#x60;, &#x60;asset_file_size&#x60; and &#x60;asset_content_type&#x60; are set from the new file and &#x60;updated_at&#x60; moves, so the response shows the new file name, size and time.  Vendor RawContracts only: a RawContract with no deal, one that belongs to a coach contract (use PUT /contracts/{contractId}/file) or one that a game contract, income report, termination agreement, subscription or system setting also uses is refused with 422 (errors.base) and nothing changes. The file must really be a PDF (its bytes are checked, not its name).  The replacement is recorded as exactly one PaperTrail version of the RawContract (no empty touch versions) with a &#x60;file&#x60; change (filename, byte_size, checksum and content_type, old and new) together with the legacy file columns, the acting user, the API client and the change_note. It is not linked to a contract, so GET /contract_history does not list it. Requires winad_write and a user-backed OAuth token (client-credentials tokens are refused) with permission to update the RawContract. 

### Example

```ts
import {
  Configuration,
  RawContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { ReplaceRawContractFileRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RawContractsApi(config);

  const body = {
    // number | ID of the vendor deal\'s RawContract whose PDF is replaced
    rawContractId: 56,
    // Blob | The new contract PDF
    file: BINARY_DATA_HERE,
    // string | Optional. Why this change is being made, for the internal audit history. It is stored on every audit version this write creates. At most 500 characters after trimming; blank is the same as omitted; a value that is not text or is longer is refused with 422 (errors.change_note) before anything is written. Never returned by the write. (optional)
    changeNote: changeNote_example,
  } satisfies ReplaceRawContractFileRequest;

  try {
    const data = await api.replaceRawContractFile(body);
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
| **rawContractId** | `number` | ID of the vendor deal\&#39;s RawContract whose PDF is replaced | [Defaults to `undefined`] |
| **file** | `Blob` | The new contract PDF | [Defaults to `undefined`] |
| **changeNote** | `string` | Optional. Why this change is being made, for the internal audit history. It is stored on every audit version this write creates. At most 500 characters after trimming; blank is the same as omitted; a value that is not text or is longer is refused with 422 (errors.change_note) before anything is written. Never returned by the write. | [Optional] [Defaults to `undefined`] |

### Return type

[**RawContract**](RawContract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The file was replaced and OCR queued. The RawContract is returned as by GET /raw_contracts/{raw_contractId}. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope, a client-credentials token with no user, or not permitted to update the RawContract) |  -  |
| **404** | Not Found (no such RawContract, or a coach contract\&#39;s document the caller may not see, or the RawContract was deleted while the request ran). The body is a short &#x60;error&#x60; message naming the model and id; it never repeats the caller\&#39;s visibility rule. |  -  |
| **422** | Missing or non-PDF file, a file name longer than 255 characters (counted after Active Storage\&#39;s sanitiser; the legacy &#x60;asset_file_name&#x60; column holds 255) or with a NUL character or bytes that are not UTF-8 (all errors.file), a RawContract that is not a vendor deal\&#39;s (errors.base), or an invalid change_note (errors.change_note). The old file is untouched and nothing is stored. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRawContractContractTerms

> RawContractTerms updateRawContractContractTerms(rawContractId, contractTerms, changeNote)



Replace the whole contract_terms document on a RawContract (WINAD-10633). The body is the document itself: a JSON object with a &#x60;schema&#x60; string (for example \&quot;ticketing-terms-v1\&quot; or \&quot;coach-terms-v1\&quot;) and a &#x60;source&#x60; object (&#x60;rendition_sha256&#x60;, &#x60;run_id&#x60;, &#x60;extracted_at&#x60;, &#x60;method&#x60;). Every other key is a term and is stored as sent; terms are not validated beyond the envelope. &#x60;source.rendition_sha256&#x60; is the SHA-256 (hex) of the OCR text the terms were read from (the &#x60;text&#x60; returned by GET /raw_contracts/{id}/ocr_text); when that text later changes, &#x60;contract_terms_stale&#x60; is true.  Every change is recorded in the audit trail (who, old and new value, when, and the optional change_note query parameter as the reason), so this requires the winad_write scope and a user-backed token (client-credentials tokens are refused) with permission to update the RawContract. 

### Example

```ts
import {
  Configuration,
  RawContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateRawContractContractTermsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RawContractsApi(config);

  const body = {
    // number | ID of the RawContract
    rawContractId: 56,
    // ContractTerms
    contractTerms: ...,
    // string | Optional. Why the terms are being written, for the internal audit history; stored on the audit version this write creates (GET /contract_history does not list RawContract versions, so it is not shown there). It is a query parameter because the request body is the terms document: a `change_note` key in the body is stored as a term and never used as the note. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (change_note[]=a, change_note[k]=v, or containing a NUL character) or is longer is refused with 422 (errors.change_note) before anything is written. Never returned. (optional)
    changeNote: changeNote_example,
  } satisfies UpdateRawContractContractTermsRequest;

  try {
    const data = await api.updateRawContractContractTerms(body);
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
| **rawContractId** | `number` | ID of the RawContract | [Defaults to `undefined`] |
| **contractTerms** | [ContractTerms](ContractTerms.md) |  | |
| **changeNote** | `string` | Optional. Why the terms are being written, for the internal audit history; stored on the audit version this write creates (GET /contract_history does not list RawContract versions, so it is not shown there). It is a query parameter because the request body is the terms document: a &#x60;change_note&#x60; key in the body is stored as a term and never used as the note. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (change_note[]&#x3D;a, change_note[k]&#x3D;v, or containing a NUL character) or is longer is refused with 422 (errors.change_note) before anything is written. Never returned. | [Optional] [Defaults to `undefined`] |

### Return type

[**RawContractTerms**](RawContractTerms.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The terms were stored |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope, client-credentials token, or not permitted to update the RawContract) |  -  |
| **404** | Not Found |  -  |
| **422** | The body is not a JSON object, &#x60;schema&#x60; or &#x60;source&#x60; is missing or invalid, or the change_note query parameter is not text or is longer than 500 characters (errors.change_note). Nothing was changed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

