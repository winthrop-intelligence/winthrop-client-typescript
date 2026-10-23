# DealsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPendingDeal**](DealsApi.md#creatependingdeal) | **POST** /api/v1/deals |  |
| [**deletePendingDeal**](DealsApi.md#deletependingdeal) | **DELETE** /api/v1/deals/{dealId} |  |
| [**publishPendingDeal**](DealsApi.md#publishpendingdealoperation) | **POST** /api/v1/deals/{dealId}/publish |  |



## createPendingDeal

> PendingDealCreated createPendingDeal(schoolId, dealType, file, vendorId, driveId, changeNote)



File a vendor deal PDF as a PENDING deal (WINAD-10698), the vendor counterpart of POST /contracts. In one transaction this creates a Deal with pending true (no dates, verified false, the optional vendor attached) and its RawContract (a vendor DEAL document linked to the deal and filed under the school, with the PDF attached); nothing is created and no file is left behind if the request is refused. The PDF must really be a PDF (its bytes are checked, not its name) and its file name at most 255 characters. The automatic OCR runs once after the upload; read the text with GET /raw_contracts/{raw_contractId}/ocr_text (Mistral on the first call, cached afterwards).  A pending deal is internal-only: it is not returned to customers by any search, list, show, export or MCP tool, and its PDF cannot be read by them. Staff list the pending deals with GET /deals?q[pending_eq]&#x3D;true (or GET /deal_searches?q[pending_eq]&#x3D;true) and delete one with DELETE /deals/{dealId}. Publishing is a separate operation. A pending deal does not change the school\&#39;s deal status.  &#x60;deal_type&#x60; is one of Apparel, MMR (multimedia rights), Pouring, Concessions, Ticketing, Outsourced Ticketing, Trademark or Bookstore (case, spaces and underscores do not matter), or the exact DealType name such as ApparelDealType. &#x60;drive_id&#x60; is the original Google Drive id of the source document, stored on the RawContract; a second request with the same drive_id for a deal of the same school is refused with 422 errors.drive_id. Requires the winad_write scope and a manage-level user (client-credentials service tokens included). 

### Example

```ts
import {
  Configuration,
  DealsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreatePendingDealRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // number | The school the deal is filed under
    schoolId: 56,
    // string | Apparel, MMR, Pouring, Concessions, Ticketing, Outsourced Ticketing, Trademark or Bookstore (or the DealType name).
    dealType: dealType_example,
    // Blob | The contract PDF as a multipart upload.
    file: BINARY_DATA_HERE,
    // number | Optional. An existing vendor, attached to the deal. (optional)
    vendorId: 56,
    // string | Optional original Google Drive id of the source document; unique per school among deals. (optional)
    driveId: driveId_example,
    // string | Optional. Why this change is being made, for the internal audit history. It is stored on every audit version this write creates, the records it saves as side effects included. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (a NUL character included) or is longer is refused with 422 (errors.change_note) before anything is written. Never returned by the write. (optional)
    changeNote: changeNote_example,
  } satisfies CreatePendingDealRequest;

  try {
    const data = await api.createPendingDeal(body);
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
| **schoolId** | `number` | The school the deal is filed under | [Defaults to `undefined`] |
| **dealType** | `string` | Apparel, MMR, Pouring, Concessions, Ticketing, Outsourced Ticketing, Trademark or Bookstore (or the DealType name). | [Defaults to `undefined`] |
| **file** | `Blob` | The contract PDF as a multipart upload. | [Defaults to `undefined`] |
| **vendorId** | `number` | Optional. An existing vendor, attached to the deal. | [Optional] [Defaults to `undefined`] |
| **driveId** | `string` | Optional original Google Drive id of the source document; unique per school among deals. | [Optional] [Defaults to `undefined`] |
| **changeNote** | `string` | Optional. Why this change is being made, for the internal audit history. It is stored on every audit version this write creates, the records it saves as side effects included. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (a NUL character included) or is longer is refused with 422 (errors.change_note) before anything is written. Never returned by the write. | [Optional] [Defaults to `undefined`] |

### Return type

[**PendingDealCreated**](PendingDealCreated.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The pending deal was created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope or not permitted to create deals) |  -  |
| **422** | The upload was refused (unknown school or vendor, unsupported deal type, missing or non-PDF file, a file name over 255 characters, with a NUL character or bytes that are not UTF-8, duplicate drive_id, invalid change_note). Nothing was created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePendingDeal

> deletePendingDeal(dealId, changeNote)



Delete a vendor deal, only while it is pending (WINAD-10698). Also deletes its RawContract and the stored PDF (the file, its blob and attachment), so no file is left behind. A published deal, or a PDF that a coach contract or another record still uses, is refused with 422 and nothing is deleted. A pending deal is not found (404) for a caller who cannot read it. Requires the winad_write scope and a manage-level user.

### Example

```ts
import {
  Configuration,
  DealsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeletePendingDealRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // number | ID of the pending Deal to delete
    dealId: 56,
    // string | Optional. Why the record is being deleted, for the internal audit history; stored on every audit version the delete creates. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (a NUL character included) or is longer is refused with 422 (errors.change_note) before anything is deleted. Never returned. (optional)
    changeNote: changeNote_example,
  } satisfies DeletePendingDealRequest;

  try {
    const data = await api.deletePendingDeal(body);
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
| **dealId** | `number` | ID of the pending Deal to delete | [Defaults to `undefined`] |
| **changeNote** | `string` | Optional. Why the record is being deleted, for the internal audit history; stored on every audit version the delete creates. At most 500 characters after trimming; blank is the same as omitted; a value that is not text (a NUL character included) or is longer is refused with 422 (errors.change_note) before anything is deleted. Never returned. | [Optional] [Defaults to `undefined`] |

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
| **204** | The pending deal, its RawContract and its file were deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope or not permitted to delete deals) |  -  |
| **404** | Not Found |  -  |
| **422** | The deal is not pending (errors.base), its PDF is used by another record, or change_note is not text or is longer than 500 characters (errors.change_note). Nothing was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishPendingDeal

> DealUpdateResult publishPendingDeal(dealId, publishPendingDealRequest)



Publish a pending vendor deal with the fields a person approved (WINAD-10699), the vendor counterpart of POST /contracts/{contractId}/publish. The deal is the one POST /deals filed from a vendor PDF (WINAD-10698); read the PDF text with GET /raw_contracts/{raw_contractId}/ocr_text, prepare the fields, have a person approve them, then send them here in ONE call. In one transaction, under the deal\&#39;s row lock, this validates every field first and then writes the deal fields, the deal type\&#39;s deal_detail and sets pending to false. If anything is refused nothing is written and the deal stays pending, so the request can be corrected and retried. Once published the deal appears in customer searches and its PDF becomes readable, like any deal entered in the admin, and the school\&#39;s deal status is updated.  The body is the body of PATCH /deals/{dealId} (&#x60;deal&#x60; and &#x60;deal_detail&#x60;), checked by the same code: the same detail fields for every deal type (Apparel, MMR, Pouring, Concessions, Ticketing, Outsourced Ticketing, Trademark, Bookstore, NIL, Video Mgmt), the same value rules, and an unknown field or one that belongs to another deal type is a 422 naming it (for example &#x60;deal_detail.srf&#x60;). Dates are plain calendar dates, strictly YYYY-MM-DD (WINAD-10687), stored as midnight UTC with no time-zone shift: send &#x60;start_on&#x60; / &#x60;end_on&#x60;, or &#x60;start_at&#x60; / &#x60;end_at&#x60; with the same plain date (a datetime is refused with 422; a &#x60;_at&#x60; and &#x60;_on&#x60; field of the same side together are refused). Also accepted in &#x60;deal&#x60;: &#x60;vendor_id&#x60;, the id of an existing vendor, which replaces the vendor the upload attached, and &#x60;autorenew&#x60;. &#x60;verified&#x60; and &#x60;archived&#x60; are not part of a publish and are refused.  A published deal minimally needs its school and deal type (set by the upload), an end date (&#x60;deal.end_on&#x60;) and at least one vendor (&#x60;deal.vendor_id&#x60;, unless the upload attached one). The start date, the detail values and the &#x60;change_note&#x60; are optional. A deal that is not pending (already published, entered in the admin, or published by an earlier call) is refused with 422 &#x60;errors.base&#x60;, so a second publish never changes anything. All problems are reported together, keyed by field path (&#x60;deal.end_on&#x60;, &#x60;deal.vendor_id&#x60;, &#x60;deal_detail.partner&#x60;, &#x60;base&#x60;). The change is audited with the acting user, the API client and the optional &#x60;change_note&#x60;, on the deal and on the detail it creates. The response is the published deal read back, in the shape of the PATCH response (&#x60;pending&#x60; is false). A pending deal is not found (404) for a caller who cannot read it. Requires the winad_write scope and a manage-level user (client-credentials service tokens included, as for POST /deals). 

### Example

```ts
import {
  Configuration,
  DealsApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { PublishPendingDealOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // number | ID of the pending Deal to publish
    dealId: 56,
    // PublishPendingDealRequest
    publishPendingDealRequest: ...,
  } satisfies PublishPendingDealOperationRequest;

  try {
    const data = await api.publishPendingDeal(body);
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
| **dealId** | `number` | ID of the pending Deal to publish | [Defaults to `undefined`] |
| **publishPendingDealRequest** | [PublishPendingDealRequest](PublishPendingDealRequest.md) |  | |

### Return type

[**DealUpdateResult**](DealUpdateResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deal was published and is read back from the database, with decimal fields returned as decimal strings. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden (missing winad_write scope or not permitted to update deals) |  -  |
| **404** | Not Found (no such deal, or a pending one for a caller who cannot read it) |  -  |
| **422** | The deal is not pending (errors.base), a field or value was refused (unknown or other-type fields, bad dates, a missing end date or vendor) or change_note is not text or is longer than 500 characters (errors.change_note). Nothing was written and the deal is still pending. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

