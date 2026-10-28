# ContractsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createContractDirectUpload**](ContractsApi.md#createcontractdirectuploadoperation) | **POST** /api/v1/contracts/direct_uploads |  |
| [**createPendingContract**](ContractsApi.md#creatependingcontract) | **POST** /api/v1/contracts |  |
| [**deletePendingContract**](ContractsApi.md#deletependingcontract) | **DELETE** /api/v1/contracts/{contractId} |  |
| [**getCompensationVerificationStatus**](ContractsApi.md#getcompensationverificationstatus) | **GET** /api/v1/compensation_verification_status | Verification status of every compensation row of some schools in one season |
| [**getContractHistory**](ContractsApi.md#getcontracthistory) | **GET** /api/v1/contract_history |  |
| [**listContractVerifications**](ContractsApi.md#listcontractverifications) | **GET** /api/v1/contract_verifications | List verification events across contracts |
| [**publishPendingContract**](ContractsApi.md#publishpendingcontractoperation) | **POST** /api/v1/contracts/{contractId}/publish |  |
| [**replaceContractFile**](ContractsApi.md#replacecontractfile) | **PUT** /api/v1/contracts/{contractId}/file |  |
| [**swapContractRawContracts**](ContractsApi.md#swapcontractrawcontractsoperation) | **POST** /api/v1/contracts/swap_raw_contracts |  |
| [**updateContract**](ContractsApi.md#updatecontractoperation) | **PATCH** /api/v1/contracts/{contractId} |  |



## createContractDirectUpload

> CreateContractDirectUpload200Response createContractDirectUpload(createContractDirectUploadRequest)



WINAD-10744: step 1 of filing a pending contract PDF over the gateway\&#39;s 1 MiB body limit. Creates the storage blob and returns the URL and headers to PUT the PDF bytes to, plus &#x60;signed_id&#x60; to send as &#x60;file_signed_id&#x60; to POST /contracts. Same payload as Active Storage\&#39;s direct upload, behind the OAuth token. &#x60;winad_write&#x60; scope. Only application/pdf is accepted (422 otherwise), and byte_size must be 1 to 26214400 (25 MiB, the same limit as the Drive source). The returned &#x60;signed_id&#x60; is single-purpose and expires after 2 hours; filing it later is refused with 422 (errors.file_signed_id). When the contract is filed the stored bytes are checked against the declared byte_size and checksum (422, code checksum_mismatch) and then as a PDF (422, code invalid_pdf). 

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateContractDirectUploadOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // CreateContractDirectUploadRequest
    createContractDirectUploadRequest: ...,
  } satisfies CreateContractDirectUploadOperationRequest;

  try {
    const data = await api.createContractDirectUpload(body);
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
| **createContractDirectUploadRequest** | [CreateContractDirectUploadRequest](CreateContractDirectUploadRequest.md) |  | |

### Return type

[**CreateContractDirectUpload200Response**](CreateContractDirectUpload200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Blob created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Not a PDF or invalid blob |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPendingContract

> PendingContractCreated createPendingContract(coachId, fileSignedId, file, sourceDriveFileId, expectedSha256, driveId, text, contractTerms, changeNote)



File a PDF on a coach as a pending contract. Creates a RawContract with the PDF attached and a Contract with pending true (no dates) in one transaction; nothing is created if the request is refused. Requires the winad_write scope and a manage-level user. The PDF must really be a PDF (its bytes are checked, not its name).  WINAD-10744: a third input, &#x60;file_signed_id&#x60;, is the signed id of a PDF the client sent straight to storage with POST /contracts/direct_uploads (no gateway body limit); it is read back, checked as a PDF and attached. A blob that is unknown, was never uploaded, is already in use, is not a PDF or fails its checksum is refused with 422 (errors.file_signed_id; code invalid_input or invalid_pdf), and a non-PDF blob is purged.  Send the PDF by EXACTLY ONE of the inputs (WINAD-10673). A request with neither or with both is refused with 422 (errors.file and errors.source_drive_file_id, code invalid_input) before anything is read or downloaded.  1. &#x60;file&#x60;: a multipart upload of the PDF, as before. Larger bodies than the API gateway\&#39;s request limit (1 MiB by default) cannot take this route. 2. &#x60;source_drive_file_id&#x60; plus &#x60;expected_sha256&#x60;: the server downloads the PDF from Google Drive with its own credentials, so the bytes never pass through the gateway. &#x60;source_drive_file_id&#x60; is a bare Drive file id (letters, digits, \&quot;-\&quot; and \&quot;_\&quot;, 10 to 200 characters), never a URL. &#x60;expected_sha256&#x60; (the 64 hexadecimal characters of the SHA-256 of the reviewed PDF, any case) is required with it and refused with a direct file: if the Drive file\&#39;s bytes hash differently the request is refused (checksum_mismatch), so changed content never replaces reviewed bytes. The file must be a stored PDF the service account can read (a Google Docs document is refused) and at most 25 MiB; the download must finish within 60 seconds (10 seconds to connect, 30 per read).  &#x60;drive_id&#x60; keeps its meaning and is independent of &#x60;source_drive_file_id&#x60;: it is the ORIGINAL source identity, unique per coach (a second request with the same drive_id for the coach is refused with 422 errors.drive_id, whichever Drive file or upload it carries). They may differ, for example when the final composed PDF is a different Drive file from the original. The schema treats a field that is present as sent: leave out the inputs you do not use rather than sending them empty (the server itself tolerates an empty optional field as \&quot;not sent\&quot;). Only &#x60;drive_id&#x60; deduplicates: a Drive-source request without drive_id is not deduplicated, exactly like a direct upload without drive_id.  The request stays synchronous. Order of work: authorization, change_note, coach and input checks, then the Drive download, hash and PDF check (no database lock is held meanwhile), then the same transaction, locks, uniqueness and stored-file cleanup as a direct upload. Nothing is created and no file is left behind by any refusal. The response and the pending visibility are the same for both inputs; &#x60;filename&#x60; is the Drive file\&#39;s name for a Drive source.  Refusals of the Drive source carry a stable machine-readable &#x60;code&#x60; next to &#x60;errors&#x60;: invalid_input (422, a malformed param or the wrong number of inputs), source_unavailable (422, the Drive file does not exist or is not shared with the service account), source_too_large (422), invalid_pdf (422, the bytes are not a PDF or the Drive file is a Google document), checksum_mismatch (422, the message names the hash the Drive file really has), source_timeout and source_error (503 with a Retry-After header: Drive was slow, down or throttling, refused the download, cut the connection before the whole file arrived, or the service credentials failed; the same request may be repeated unchanged, nothing was created). 

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
    // string | Signed id returned by POST /contracts/direct_uploads after the PDF bytes were PUT to the returned URL. Exactly one of file, source_drive_file_id and file_signed_id is required. (optional)
    fileSignedId: fileSignedId_example,
    // Blob | The contract PDF as a multipart upload. Exactly one of file and source_drive_file_id is required. (optional)
    file: BINARY_DATA_HERE,
    // string | Google Drive file id of the PDF to download (not a URL; an id with a slash, a dot or a scheme is refused). Exactly one of file and source_drive_file_id is required, and expected_sha256 goes with it. NOT the deduplication id, see drive_id. (optional)
    sourceDriveFileId: sourceDriveFileId_example,
    // string | SHA-256 (64 hexadecimal characters, any case) of the PDF that was reviewed. Required with source_drive_file_id, refused with file. The request is refused with checksum_mismatch when the downloaded bytes hash differently. (optional)
    expectedSha256: expectedSha256_example,
    // string | Optional original Google Drive id of the source document, the contract\\\'s deduplication identity; must be unique for the coach. Independent of source_drive_file_id, which may be a different (final) Drive file. (optional)
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
| **fileSignedId** | `string` | Signed id returned by POST /contracts/direct_uploads after the PDF bytes were PUT to the returned URL. Exactly one of file, source_drive_file_id and file_signed_id is required. | [Optional] [Defaults to `undefined`] |
| **file** | `Blob` | The contract PDF as a multipart upload. Exactly one of file and source_drive_file_id is required. | [Optional] [Defaults to `undefined`] |
| **sourceDriveFileId** | `string` | Google Drive file id of the PDF to download (not a URL; an id with a slash, a dot or a scheme is refused). Exactly one of file and source_drive_file_id is required, and expected_sha256 goes with it. NOT the deduplication id, see drive_id. | [Optional] [Defaults to `undefined`] |
| **expectedSha256** | `string` | SHA-256 (64 hexadecimal characters, any case) of the PDF that was reviewed. Required with source_drive_file_id, refused with file. The request is refused with checksum_mismatch when the downloaded bytes hash differently. | [Optional] [Defaults to `undefined`] |
| **driveId** | `string` | Optional original Google Drive id of the source document, the contract\\\&#39;s deduplication identity; must be unique for the coach. Independent of source_drive_file_id, which may be a different (final) Drive file. | [Optional] [Defaults to `undefined`] |
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
| **422** | The upload was refused (unknown coach, neither or both of file and source_drive_file_id, malformed source_drive_file_id or expected_sha256, non-PDF file, a file name with a NUL character or bytes that are not UTF-8, duplicate drive_id, invalid contract_terms, or a Drive file that is missing, too large, not a PDF or does not match expected_sha256). Drive-source refusals carry a &#x60;code&#x60;. Nothing was created. |  -  |
| **503** | The Drive source could not be read right now (code source_timeout or source_error). Retry the same request after the number of seconds in the Retry-After header. Nothing was created. |  * Retry-After - Seconds to wait before repeating the request <br>  |

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


## getCompensationVerificationStatus

> GetCompensationVerificationStatus200Response getCompensationVerificationStatus(season, schoolIds, conferenceId, status, q, page, perPage)

Verification status of every compensation row of some schools in one season

Computed on request (WINAD-10682), so there is no ETag. One row per compensation row whose school is in &#x60;school_ids&#x60; (or is a member of &#x60;conference_id&#x60;\&#39;s primary conference) and whose &#x60;year&#x60; is &#x60;season&#x60;, so a season is the season-ending year, as in &#x60;ContractVerification.seasons&#x60; (2025-26 is 2026). &#x60;status&#x60;, first match wins:  * &#x60;unlinked&#x60;: the row has no contract (the contract and event fields are null). * &#x60;not_verified&#x60;: it has a contract but no verification event covers the season. * &#x60;mismatch&#x60;, &#x60;could_not_verify&#x60;, &#x60;revoked&#x60;: the latest event covering the season has that result. * &#x60;changed_since_verified&#x60;: the latest covering event is &#x60;passed&#x60;, but the row was edited after it   (&#x60;changed_since&#x60; says how). * &#x60;verified&#x60;: the latest covering event is &#x60;passed&#x60; and nothing changed since.  The latest covering event is the newest (verified_at DESC, id DESC) event on the row\&#39;s contract whose &#x60;seasons&#x60; include the season: the same rule as &#x60;meta.verified_seasons&#x60; of GET /raw_contracts/{id}/verifications, so a row is &#x60;verified&#x60; or &#x60;changed_since_verified&#x60; exactly when its season is in that list.  &#x60;changed_since&#x60; lists, in time order, every change strictly after the event\&#39;s &#x60;verified_at&#x60; to: the row\&#39;s base salary, talent fee, one-time bonus or deferred amount (&#x60;base_salary_cents&#x60;, &#x60;talent_fee&#x60;, &#x60;one_time_bonus_cents&#x60;, &#x60;deferred_comp_cents&#x60;); its &#x60;year&#x60;, &#x60;coach_id&#x60;, &#x60;school_id&#x60;, &#x60;contract_id&#x60; or &#x60;contract_status_id&#x60;; the row being created (&#x60;row&#x60;); a position linked to the row (&#x60;position.season_id&#x60;, &#x60;position.coach_id&#x60;, &#x60;position.compensation_id&#x60;); the contract moving to another coach (&#x60;contract.coach_id&#x60;); the PDF being replaced (&#x60;raw_contract.file&#x60;) and the school filed on it (&#x60;raw_contract.school_id&#x60;). A version whose saved data cannot be read is reported as field &#x60;unreadable&#x60;. It is empty unless the status is &#x60;changed_since_verified&#x60;.  The rows that make up the contract\&#39;s season count too, so a row that was deleted, or unlinked or moved out of the season after the event, changes every row still in that contract and season, even though those rows were not touched. They are reconstructed from the history of every row that is or was in the contract: &#x60;row&#x60; with &#x60;old&#x60; &#x60;compensation &lt;id&gt;&#x60; and &#x60;new&#x60; null (a row deleted from the season), &#x60;row&#x60; with &#x60;old&#x60; null and &#x60;new&#x60; &#x60;created&#x60; (a row created in it, or the same entry for the row itself), &#x60;contract_id&#x60; with the old and new contract id (a row linked to or unlinked from the contract, null for none) and &#x60;year&#x60; with the old and new season (a row moved into or out of the season). A row that was deleted, unlinked or moved before the event does not count, nor does a row of another contract or another season of the contract. Not detectable: a position taken off the row. Each entry names the person who made the change (&#x60;user&#x60;; null for an edit with no recorded author), so the endpoint needs the ability to update contracts: a customer gets 403.  &#x60;counts_by_status&#x60; in &#x60;meta&#x60; covers the whole scope, before &#x60;status[]&#x60; and &#x60;q&#x60;. &#x60;status[]&#x60; keeps only those statuses. &#x60;q&#x60; takes the Ransack filters of GET /contract_verifications (without its school and season scopes) and applies them to the event in force only, never to older events; a row with no event (&#x60;not_verified&#x60;, &#x60;unlinked&#x60;) is not removed by &#x60;q&#x60;, so &#x60;q[verified_at_lt]&#x3D;2026-09-15&#x60; is \&quot;not verified, or verified before 9-15\&quot; in one call; add &#x60;status[]&#x3D;verified&#x60; to keep only the rows that have an event. A hidden coach\&#39;s rows are left out for a caller who cannot manage coaches. Rows are ordered by school, coach, compensation id. The whole scope is computed on every page; a Big Ten season is a few pages of 500 to 1000.  A 400 is &#x60;{ \&quot;errors\&quot;: { \&quot;&lt;parameter&gt;\&quot;: [\&quot;...\&quot;] } }&#x60;, keyed by the parameter that is missing or invalid: &#x60;season&#x60;, &#x60;school_ids&#x60; (also when both or neither of &#x60;school_ids&#x60; and &#x60;conference_id&#x60; are given, or more than 300 schools), &#x60;conference_id&#x60;, &#x60;status&#x60;, or &#x60;q&#x60; (the shared UnknownRansackCondition answer, WINAD-10681: a condition that is unknown, outside the allowlist or has no predicate). A malformed &#x60;page&#x60; or &#x60;per_page&#x60; is a 400 too. 

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCompensationVerificationStatusRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | Season-ending year, a positive whole number.
    season: 56,
    // Array<number> | The schools to read, as school_ids[]=1&school_ids[]=2 or a comma separated list. At most 300. Give exactly one of school_ids and conference_id. (optional)
    schoolIds: ...,
    // number | The schools whose primary conference this is (not schools that play one sport in it). At most 300 schools; an unknown conference is 400. (optional)
    conferenceId: 56,
    // Array<CompensationVerificationStatusValue> | Keep only rows with these statuses (status[]=verified&status[]=not_verified). (optional)
    status: ...,
    // object | Ransack filters on the verification event in force, for example q[verified_at_lt]=2026-09-15T00:00:00Z, q[method_eq]=agent, q[agent_run_id_start]=astra or q[batch_id_eq]=big-ten-2025-a. Same allowlist as GET /contract_verifications, without its bulk-only school scopes; a condition outside it, or one with no predicate, is a 400 naming it (`errors.q`, WINAD-10681). (optional)
    q: Object,
    // number | results page to retrieve. At most 2147483647 (a signed 32-bit integer); a larger value, like 0 or a non-number, is a 400 with `Invalid pagination parameter: page`. (optional)
    page: 56,
    // number | Page size, capped at 1000; defaults to 500. (optional)
    perPage: 56,
  } satisfies GetCompensationVerificationStatusRequest;

  try {
    const data = await api.getCompensationVerificationStatus(body);
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
| **season** | `number` | Season-ending year, a positive whole number. | [Defaults to `undefined`] |
| **schoolIds** | `Array<number>` | The schools to read, as school_ids[]&#x3D;1&amp;school_ids[]&#x3D;2 or a comma separated list. At most 300. Give exactly one of school_ids and conference_id. | [Optional] |
| **conferenceId** | `number` | The schools whose primary conference this is (not schools that play one sport in it). At most 300 schools; an unknown conference is 400. | [Optional] [Defaults to `undefined`] |
| **status** | `Array<CompensationVerificationStatusValue>` | Keep only rows with these statuses (status[]&#x3D;verified&amp;status[]&#x3D;not_verified). | [Optional] |
| **q** | `object` | Ransack filters on the verification event in force, for example q[verified_at_lt]&#x3D;2026-09-15T00:00:00Z, q[method_eq]&#x3D;agent, q[agent_run_id_start]&#x3D;astra or q[batch_id_eq]&#x3D;big-ten-2025-a. Same allowlist as GET /contract_verifications, without its bulk-only school scopes; a condition outside it, or one with no predicate, is a 400 naming it (&#x60;errors.q&#x60;, WINAD-10681). | [Optional] [Defaults to `undefined`] |
| **page** | `number` | results page to retrieve. At most 2147483647 (a signed 32-bit integer); a larger value, like 0 or a non-number, is a 400 with &#x60;Invalid pagination parameter: page&#x60;. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Page size, capped at 1000; defaults to 500. | [Optional] [Defaults to `500`] |

### Return type

[**GetCompensationVerificationStatus200Response**](GetCompensationVerificationStatus200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | One page of rows |  -  |
| **400** | A &#x60;q[...]&#x60; condition names an attribute, association path, predicate or scope the resource does not expose, or names an attribute without a predicate (&#x60;q[name]&#x3D;x&#x60; instead of &#x60;q[name_eq]&#x3D;x&#x60; or &#x60;q[name_cont]&#x3D;x&#x60;, and a &#x60;q[c]&#x60; list entry without &#x60;p&#x60;). The search is refused instead of silently ignoring the condition, which would return the unfiltered collection. &#x60;errors.q&#x60; has one entry per bad condition: &#x60;unknown condition: &lt;name&gt;&#x60;, or &#x60;condition has no predicate: &lt;name&gt; (use &lt;name&gt;_eq, &lt;name&gt;_cont, ...)&#x60;. Sorting (&#x60;q[s]&#x60;), the combinator (&#x60;q[m]&#x60;), groups (&#x60;q[g]&#x60;) and a condition whose value is blank are not refused. A 400 on these operations can also be an invalid pagination parameter, or a &#x60;q&#x60; of the wrong shape (&#x60;Unexpected format for q param: ...&#x60;: &#x60;q&#x60; must be a hash, a JSON object string, or absent, and &#x60;q[c]&#x60; and &#x60;q[g]&#x60; a hash or a list of hashes, so &#x60;q[]&#x3D;x&#x60; and &#x60;q[c]&#x3D;x&#x60; are refused instead of returning the unfiltered collection); for these &#x60;errors&#x60; is a list of messages. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Missing winad_read scope, or not permitted to update contracts (staff only) |  -  |

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


## listContractVerifications

> ListContractVerifications200Response listContractVerifications(page, perPage, q)

List verification events across contracts

The verification history of many contracts in one request (WINAD-10680), instead of one GET /raw_contracts/{id}/verifications per document. Read-only. Each row is exactly what the per-contract read returns for the same event (the ContractVerification schema); that endpoint is unchanged. There is no &#x60;verified_seasons&#x60; in the meta, since that is a per-contract summary; derive it from the events, newest first (a season counts as verified when its latest event is &#x60;passed&#x60;).  Ordering is always verified_at DESC, id DESC, so pages never overlap or skip. Ransack filters, with the same allowlist as the per-contract read (id, contract_id, raw_contract_id, coach_id, verified_by_id, verified_at, result, method, agent_run_id, evidence_url, created_at, batch_id, code_version; association traversal and predicates on &#x60;seasons&#x60; are not available; a filter outside the allowlist, or an attribute without a predicate, is a 400 naming it, WINAD-10681). Examples: everything verified on 2026-10-10 is &#x60;q[verified_at_gteq]&#x3D;2026-10-10&amp;q[verified_at_lt]&#x3D;2026-10-11&#x60;, one posting batch is &#x60;q[batch_id_eq]&#x3D;...&#x60;, runs of one bot are &#x60;q[agent_run_id_start]&#x3D;...&#x60;. Three filters exist only here: &#x60;q[contract_school_id_eq]&#x60; and &#x60;q[contract_school_id_in][]&#x60; keep the events of contracts whose coach has (or had) a position at that school, as the contracts index\&#39;s &#x60;contract_school_id_eq&#x60; does, and &#x60;q[seasons_contains]&#x3D;2025&#x60; keeps the events whose &#x60;seasons&#x60; include that year (one whole number, within the 32-bit range; anything else is 400 &#x60;errors.q.seasons_contains&#x60;). A list filter takes at most 1000 values (more is 422 &#x60;errors.q.&lt;filter&gt;&#x60;; a comma separated string counts the same). Ids go in the query string, so for a larger set page through &#x60;contract_school_id_in&#x60; or a smaller &#x60;contract_id_in&#x60; slice. For a season-by-season status per compensation row use GET /compensation_verification_status.  Visibility is the per-contract read\&#39;s, applied to every contract in one query: only events of contracts whose RawContract the caller may read, and that the contracts API serves them, are returned (a hidden coach\&#39;s contracts and pending contracts are left out for anyone who cannot manage coaches, with the counts to match). A contract with no document is not listed. A caller who may not read documents at all gets 403. 

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { ListContractVerificationsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | results page to retrieve. At most 2147483647 (a signed 32-bit integer); a larger value, like 0 or a non-number, is a 400 with `Invalid pagination parameter: page`. (optional)
    page: 56,
    // number | Page size, capped at 500; defaults to 100. (optional)
    perPage: 56,
    // ListContractVerificationsQParameter | Ransack filters, for example q[contract_id_in][]=1&q[contract_id_in][]=2, q[contract_school_id_eq]=7, q[result_eq]=passed, q[seasons_contains]=2025, q[batch_id_eq]=big-ten-2025-a, q[code_version_start]=0c2950e or q[s]=verified_at asc. At most 1000 values in any list. (optional)
    q: ...,
  } satisfies ListContractVerificationsRequest;

  try {
    const data = await api.listContractVerifications(body);
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
| **page** | `number` | results page to retrieve. At most 2147483647 (a signed 32-bit integer); a larger value, like 0 or a non-number, is a 400 with &#x60;Invalid pagination parameter: page&#x60;. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Page size, capped at 500; defaults to 100. | [Optional] [Defaults to `100`] |
| **q** | [](.md) | Ransack filters, for example q[contract_id_in][]&#x3D;1&amp;q[contract_id_in][]&#x3D;2, q[contract_school_id_eq]&#x3D;7, q[result_eq]&#x3D;passed, q[seasons_contains]&#x3D;2025, q[batch_id_eq]&#x3D;big-ten-2025-a, q[code_version_start]&#x3D;0c2950e or q[s]&#x3D;verified_at asc. At most 1000 values in any list. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListContractVerifications200Response**](ListContractVerifications200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | One page of events |  -  |
| **304** | Nothing in the page has changed (ETag) |  -  |
| **400** | A &#x60;q[...]&#x60; condition names an attribute, association path, predicate or scope the resource does not expose, or names an attribute without a predicate (&#x60;q[name]&#x3D;x&#x60; instead of &#x60;q[name_eq]&#x3D;x&#x60; or &#x60;q[name_cont]&#x3D;x&#x60;, and a &#x60;q[c]&#x60; list entry without &#x60;p&#x60;). The search is refused instead of silently ignoring the condition, which would return the unfiltered collection. &#x60;errors.q&#x60; has one entry per bad condition: &#x60;unknown condition: &lt;name&gt;&#x60;, or &#x60;condition has no predicate: &lt;name&gt; (use &lt;name&gt;_eq, &lt;name&gt;_cont, ...)&#x60;. Sorting (&#x60;q[s]&#x60;), the combinator (&#x60;q[m]&#x60;), groups (&#x60;q[g]&#x60;) and a condition whose value is blank are not refused. A 400 on these operations can also be an invalid pagination parameter, or a &#x60;q&#x60; of the wrong shape (&#x60;Unexpected format for q param: ...&#x60;: &#x60;q&#x60; must be a hash, a JSON object string, or absent, and &#x60;q[c]&#x60; and &#x60;q[g]&#x60; a hash or a list of hashes, so &#x60;q[]&#x3D;x&#x60; and &#x60;q[c]&#x3D;x&#x60; are refused instead of returning the unfiltered collection); for these &#x60;errors&#x60; is a list of messages. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Missing winad_read scope, or not permitted to read documents |  -  |
| **422** | A list filter has more than 1000 values (errors.q.&lt;filter&gt;) |  -  |

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
| **422** | Missing or non-PDF file, a file name with a NUL character or bytes that are not UTF-8 (errors.file), a contract with no PDF record, a PDF another record uses, or an invalid change_note (errors.change_note). The old file is untouched. |  -  |
| **409** | The contract was moved to another coach again and again while the request waited for its locks (errors.contract). Nothing was written; reload the contract and retry. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## swapContractRawContracts

> SwapContractRawContracts200Response swapContractRawContracts(swapContractRawContractsRequest)



Exchange the RawContracts (PDFs) of two published coach contracts in one transaction (WINAD-10727), for documents filed crossed: each contract\&#39;s pay rows are right and each holds the other\&#39;s PDF. Afterwards each contract holds the other\&#39;s former RawContract. Same refusals as PATCH /contracts/{contractId} raw_contract_id: 422 (errors keyed by contract_ids or contract_&lt;id&gt;) when contract_ids is not two different positive integers, a contract is pending, or a document is a vendor deal\&#39;s or not a COACH contract document; any refusal leaves both contracts unchanged. Verification events and pay rows are not touched. The optional top-level change_note is stored on both contracts\&#39; versions. Requires winad_write and a manage-level user with a user-backed OAuth token. 

### Example

```ts
import {
  Configuration,
  ContractsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { SwapContractRawContractsOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // SwapContractRawContractsRequest
    swapContractRawContractsRequest: ...,
  } satisfies SwapContractRawContractsOperationRequest;

  try {
    const data = await api.swapContractRawContracts(body);
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
| **swapContractRawContractsRequest** | [SwapContractRawContractsRequest](SwapContractRawContractsRequest.md) |  | |

### Return type

[**SwapContractRawContracts200Response**](SwapContractRawContracts200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The contracts and the RawContract each holds now |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope, not a manage-level user, or a token with no user) |  -  |
| **404** | A contract was not found |  -  |
| **409** | A contract was moved to another coach again and again while the request waited for its locks. Nothing was written. |  -  |
| **422** | Refused (see the description). Nothing was written. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContract

> Contract updateContract(contractId, updateContractRequest)



Edit a published contract\&#39;s start_on, end_on, executed_on, expires_on, at_will, contingent_change, coach_id and raw_contract_id (WINAD-10631, WINAD-10639, WINAD-10727). Only supplied fields change; linked compensations are unchanged. Pending contracts are published, not edited (use POST /contracts/{contractId}/publish); the only fields a pending contract accepts are the owner fields coach_id, contractable_id and contractable_type (WINAD-10739), so a contract saved without a contractable_type can be repaired before it is published. Dates must be YYYY-MM-DD and flags JSON true or false (the same rules as publish). Setting at_will true requires end_on null; send both fields to clear a stored end date. The at-will/end-date rule is checked only when either field is supplied, allowing start-only corrections on legacy rows. end_on, executed_on and expires_on can be cleared with null. coach_id moves the contract to another coach, in the same transaction as the other fields. A move is refused with 422 (errors.coach_id) when the coach does not exist or is not visible to the caller, or while any compensation, any position of those compensations, any verification event still in force (the newest event of a season is not a revocation; a contract whose seasons are all revoked can move and keeps its events unchanged) or any earned incentive still links to the contract (an earned incentive links through its raw_contract_id or its ended_by_contract_id being the contract\&#39;s RawContract): the body then also lists linked_compensation_ids, linked_position_ids, linked_verification_ids and linked_earned_incentive_ids, and nothing is written. Never move those rows from the API; a person unlinks or moves them first. Sending the coach it already has is a no-op. A move also files the contract\&#39;s PDF under the new coach\&#39;s current school (raw_contracts.school_id, the school the pending upload sets, null when the new coach has no current position), in the same transaction. A PDF that another record also uses (another contract, a game contract, a deal and so on) or a financial report is left unchanged, and so is the school when the move is refused or the coach is unchanged. The school change is a RawContract entry in GET /contract_history, under the new coach, with the change_note and the user, and the response body is unchanged. raw_contract_id changes which RawContract (PDF) the contract holds (WINAD-10727), for a document filed on the wrong contract; linked pay rows and verification events are not touched (events stay recorded against the coach and RawContract they were made for). It is refused with 422 (errors.raw_contract_id) when the RawContract does not exist, is a vendor deal\&#39;s document (deal_id set), is not of the COACH contract type, or is already held by another contract (the message names it; use POST /contracts/swap_raw_contracts to exchange two). It is also refused when the document it replaces belongs to a hidden coach and no other record would hold it afterwards (it would become readable by customers). The contract itself must not be pending. Sending the RawContract it already holds is a no-op. Each change creates a PaperTrail version with the authenticated user (whodunnit) and the optional top-level change_note (at most 500 characters). Identical values are a no-op and create no version, so no note is stored. Requires winad_write and a manage-level user with a user-backed OAuth token. Every edit takes the locks of a coach move (the contract\&#39;s coach, the coach it moves to, then the contract), so it never overlaps a move or a verification being recorded for the contract. A request that waits for them sees the contract as the other write left it. Only a contract that keeps moving while the locks are taken is refused with 409. 

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
| **422** | Pending contract, no updatable fields, unknown or mis-typed field, change_note that is not a string (errors.change_note), bad date, at_will with end_on, missing required date, start after end, or a refused coach move (errors.coach_id, with the linked_*_ids lists, earned incentives included). Nothing was written. |  -  |
| **409** | The contract was moved to another coach again and again while the request waited for its locks (errors.contract). Nothing was written; reload the contract and retry. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

