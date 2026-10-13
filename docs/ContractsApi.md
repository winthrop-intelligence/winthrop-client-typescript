# ContractsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPendingContract**](ContractsApi.md#creatependingcontract) | **POST** /api/v1/contracts |  |
| [**deletePendingContract**](ContractsApi.md#deletependingcontract) | **DELETE** /api/v1/contracts/{contractId} |  |
| [**getContractHistory**](ContractsApi.md#getcontracthistory) | **GET** /api/v1/contract_history |  |
| [**publishPendingContract**](ContractsApi.md#publishpendingcontractoperation) | **POST** /api/v1/contracts/{contractId}/publish |  |
| [**replaceContractFile**](ContractsApi.md#replacecontractfile) | **PUT** /api/v1/contracts/{contractId}/file |  |
| [**updateContract**](ContractsApi.md#updatecontractoperation) | **PATCH** /api/v1/contracts/{contractId} |  |



## createPendingContract

> PendingContractCreated createPendingContract(coachId, file, driveId, text, contractTerms, changeNote)



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
    // string | Optional. Why this change is being made, for the internal audit history. It is stored on every audit version this write creates, the records it saves as side effects included, and read back through GET /contract_history. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (a NUL character included) or is longer is refused with 422 (errors.change_note) before anything is written. Never returned by the write. (optional)
    changeNote: changeNote_example,
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
| **changeNote** | `string` | Optional. Why this change is being made, for the internal audit history. It is stored on every audit version this write creates, the records it saves as side effects included, and read back through GET /contract_history. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (a NUL character included) or is longer is refused with 422 (errors.change_note) before anything is written. Never returned by the write. | [Optional] [Defaults to `undefined`] |

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

> deletePendingContract(contractId, changeNote)



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
    // string | Optional. Why the record is being deleted, for the internal audit history; stored on every audit version the delete creates and read back through GET /contract_history. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (a NUL character included) or is longer is refused with 422 (errors.change_note) before anything is deleted. Never returned. (optional)
    changeNote: changeNote_example,
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
| **changeNote** | `string` | Optional. Why the record is being deleted, for the internal audit history; stored on every audit version the delete creates and read back through GET /contract_history. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (a NUL character included) or is longer is refused with 422 (errors.change_note) before anything is deleted. Never returned. | [Optional] [Defaults to `undefined`] |

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
| **422** | The contract is not pending, its PDF is used by another record, or change_note is not text or is longer than 500 characters (errors.change_note). Nothing was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContractHistory

> ContractHistoryCollection getContractHistory(contractId, rawContractId, coachId, page, perPage)



The change history of a contract and everything under it (WINAD-10638): the contract, its compensations, the positions linked to them, its verification events and the replacements of its PDF (WINAD-10639, item_type RawContract, one &#x60;file&#x60; change with the old and new file), newest first (created_at, then id, descending). Read it before changing a record: it includes edits staff made in the admin UI since your last run, which have no change_note and no oauth_application.  Give exactly one of contract_id or raw_contract_id (otherwise 400); coach_id optionally keeps only the versions recorded for that coach. Each entry names the record (item_type and item_id), the event (create, update or destroy), every changed field with its old and new value (a create has no old values; a destroy\&#39;s old values are the row as it was deleted, so a deleted compensation can be read back), who made the change, the OAuth app for an API write, when, and the change_note the API write gave.  It exposes editors and internal notes, so it needs the winad_read scope and permission to update the contract (staff); other users get 403. A contract the caller may not see (a hidden coach\&#39;s, or a pending one for a non-manager) is 404.  The history outlives the contract. After a contract is deleted (a pending contract through DELETE /contracts/{id}, say) contract_id still returns its kept versions, the destroy and its change_note included. Who may read a deleted contract\&#39;s history is decided from the row as it was deleted (its destroy version): a caller who cannot manage coaches gets 404 when the contract was pending, when its coach was hidden or no longer exists, or when that destroy version was not kept and so the owner is unknown. raw_contract_id does not find deleted contracts or documents; look those up by contract_id.  A raw_contract_id returns the combined history of every contract that uses the document (a PDF can be shared by several), merged and ordered newest first. Contracts the caller may not see are left out without a word, and it is 404 when none is left. coach_id applies across all of them before paging. 

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContractHistoryRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | The contract, which may have been deleted since if its versions were kept. Exactly one of contract_id and raw_contract_id is required. (optional)
    contractId: 56,
    // number | The document. Returns the combined history of every contract that uses it (live contracts only). Exactly one of contract_id and raw_contract_id is required. (optional)
    rawContractId: 56,
    // number | Keep only the versions recorded for this coach. A version carries the coach its record has after the change, so moving a contract to another coach (WINAD-10639) shows the move under the new coach, while the old coach keeps what was recorded before it. (optional)
    coachId: 56,
    // number | results page to retrieve. At most 2147483647 (a signed 32-bit integer); a larger value, like 0 or a non-number, is a 400 with `Invalid pagination parameter: page`. (optional)
    page: 56,
    // number | Page size, capped at 100; defaults to 35. (optional)
    perPage: 56,
  } satisfies GetContractHistoryRequest;

  try {
    const data = await api.getContractHistory(body);
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
| **contractId** | `number` | The contract, which may have been deleted since if its versions were kept. Exactly one of contract_id and raw_contract_id is required. | [Optional] [Defaults to `undefined`] |
| **rawContractId** | `number` | The document. Returns the combined history of every contract that uses it (live contracts only). Exactly one of contract_id and raw_contract_id is required. | [Optional] [Defaults to `undefined`] |
| **coachId** | `number` | Keep only the versions recorded for this coach. A version carries the coach its record has after the change, so moving a contract to another coach (WINAD-10639) shows the move under the new coach, while the old coach keeps what was recorded before it. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | results page to retrieve. At most 2147483647 (a signed 32-bit integer); a larger value, like 0 or a non-number, is a 400 with &#x60;Invalid pagination parameter: page&#x60;. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Page size, capped at 100; defaults to 35. | [Optional] [Defaults to `35`] |

### Return type

[**ContractHistoryCollection**](ContractHistoryCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The history, newest first |  -  |
| **400** | Not exactly one of contract_id and raw_contract_id, an id that is not a whole number, or a malformed page parameter |  -  |
| **401** | Unauthorized |  -  |
| **403** | Missing winad_read scope, or not permitted to update contracts |  -  |
| **404** | No such contract (neither a live one nor one with kept versions), no contract uses the document, or none is visible to the caller |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishPendingContract

> PublishedContract publishPendingContract(contractId, publishPendingContractRequest)



Publish a pending contract (WINAD-10559). In one transaction, under the coach lock, this sets the contract\&#39;s dates, writes one compensation per year (creating the later-year positions the coach needs) and sets pending to false. If anything fails nothing is written and the contract stays pending, so the request can be corrected and retried.  The rules are the CSV compensation uploader\&#39;s: the coach must have a position at each school in the first year listed for it, later years get positions created from it, a school can appear once per coach and year, a yearly or 990 compensation needs a base_salary and an hourly one needs a comment, and a private school\&#39;s compensation must be 990. A compensation that already exists for the coach, school and year is updated and linked to this contract.  Money is in dollars (a number, or a string such as \&quot;$1,234.50\&quot; with either no thousands separators or correctly placed ones; \&quot;500,00\&quot; is refused), converted to cents like the CSV. Flags are JSON booleans. Unknown fields, at the top level or in a row, are refused with 422 rather than ignored. Errors are keyed by attribute for the contract fields (start_on, end_on, at_will, executed_on, expires_on, contingent_change, compensations) and as compensations[n] (n &#x3D; the row\&#39;s position in the request, from 0) for a row; row messages name fields by their CSV column, for example \&quot;Base Salary\&quot;. Requires the winad_write scope and a manage-level user. 

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


## replaceContractFile

> ContractFileReplaced replaceContractFile(contractId, file, changeNote)



Replace the PDF of an existing contract, pending or published (WINAD-10639). Send multipart/form-data with the new PDF as &#x60;file&#x60; and an optional &#x60;change_note&#x60;. The old file (and its OCR copy) is replaced, not kept as an attachment, the stored text is cleared and OCR runs again, as for an upload in the admin UI. The contract\&#39;s structured terms are not touched (they read as stale against the new text).  The file must really be a PDF (its bytes are checked, not its name). The replacement is recorded in the change history (GET /contract_history) as a RawContract entry with a &#x60;file&#x60; change, the acting user, the API client and the change_note. A PDF that another record also uses is refused. The swap takes the locks of a coach move (the contract\&#39;s coach, then the contract, then its RawContract), so it never deadlocks with a move or a verification, and the change history entry names the coach the contract has when the file is swapped. Requires winad_write, a manage-level user with a user-backed OAuth token. 

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { ReplaceContractFileRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | ID of the contract whose PDF is replaced
    contractId: 56,
    // Blob | The new contract PDF
    file: BINARY_DATA_HERE,
    // string | Optional. Why this change is being made, for the internal audit history. It is stored on every audit version this write creates and read back through GET /contract_history. At most 500 characters after trimming; blank is the same as omitted; a value that is not text or is longer is refused with 422 (errors.change_note) before anything is written. Never returned by the write. (optional)
    changeNote: changeNote_example,
  } satisfies ReplaceContractFileRequest;

  try {
    const data = await api.replaceContractFile(body);
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
| **contractId** | `number` | ID of the contract whose PDF is replaced | [Defaults to `undefined`] |
| **file** | `Blob` | The new contract PDF | [Defaults to `undefined`] |
| **changeNote** | `string` | Optional. Why this change is being made, for the internal audit history. It is stored on every audit version this write creates and read back through GET /contract_history. At most 500 characters after trimming; blank is the same as omitted; a value that is not text or is longer is refused with 422 (errors.change_note) before anything is written. Never returned by the write. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContractFileReplaced**](ContractFileReplaced.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The file was replaced and OCR queued |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope, not a manage-level user, or a client-credentials token with no user) |  -  |
| **404** | Not Found (no such contract, a hidden coach\&#39;s, or a pending one for a non-manager), or the contract was deleted while the request ran |  -  |
| **422** | Missing or non-PDF file, a contract with no PDF record, a PDF another record uses, or an invalid change_note (errors.change_note). The old file is untouched. |  -  |
| **409** | The contract was moved to another coach again and again while the request waited for its locks (errors.contract). Nothing was written; reload the contract and retry. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContract

> Contract updateContract(contractId, updateContractRequest)



Edit a published contract\&#39;s start_on, end_on, executed_on, expires_on, at_will, contingent_change and coach_id (WINAD-10631, WINAD-10639). Only supplied fields change; linked compensations are unchanged. Pending contracts are published, not edited (use POST /contracts/{contractId}/publish). Dates must be YYYY-MM-DD and flags JSON true or false (the same rules as publish). Setting at_will true requires end_on null; send both fields to clear a stored end date. The at-will/end-date rule is checked only when either field is supplied, allowing start-only corrections on legacy rows. end_on, executed_on and expires_on can be cleared with null. coach_id moves the contract to another coach, in the same transaction as the other fields. A move is refused with 422 (errors.coach_id) when the coach does not exist or is not visible to the caller, or while any compensation, any position of those compensations or any verification event still links to the contract: the body then also lists linked_compensation_ids, linked_position_ids and linked_verification_ids, and nothing is written. Never move those rows from the API; a person unlinks or moves them first. Sending the coach it already has is a no-op. A move also files the contract\&#39;s PDF under the new coach\&#39;s current school (raw_contracts.school_id, the school the pending upload sets, null when the new coach has no current position), in the same transaction. A PDF that another record also uses (another contract, a game contract, a deal and so on) or a financial report is left unchanged, and so is the school when the move is refused or the coach is unchanged. The school change is a RawContract entry in GET /contract_history, under the new coach, with the change_note and the user, and the response body is unchanged. Each change creates a PaperTrail version with the authenticated user (whodunnit) and the optional top-level change_note (at most 500 characters). Identical values are a no-op and create no version, so no note is stored. Requires winad_write and a manage-level user with a user-backed OAuth token. Every edit takes the locks of a coach move (the contract\&#39;s coach, the coach it moves to, then the contract), so it never overlaps a move or a verification being recorded for the contract. A request that waits for them sees the contract as the other write left it. Only a contract that keeps moving while the locks are taken is refused with 409. 

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
| **422** | Pending contract, no updatable fields, unknown or mis-typed field, change_note that is not a string (errors.change_note), bad date, at_will with end_on, missing required date, start after end, or a refused coach move (errors.coach_id, with the linked_*_ids lists). Nothing was written. |  -  |
| **409** | The contract was moved to another coach again and again while the request waited for its locks (errors.contract). Nothing was written; reload the contract and retry. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

