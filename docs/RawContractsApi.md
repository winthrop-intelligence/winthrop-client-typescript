# RawContractsApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getRawContractContractTerms**](RawContractsApi.md#getrawcontractcontractterms) | **GET** /api/v1/raw_contracts/{raw_contractId}/contract_terms |  |
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


## updateRawContractContractTerms

> RawContractTerms updateRawContractContractTerms(rawContractId, contractTerms)



Replace the whole contract_terms document on a RawContract (WINAD-10633). The body is the document itself: a JSON object with a &#x60;schema&#x60; string (for example \&quot;ticketing-terms-v1\&quot; or \&quot;coach-terms-v1\&quot;) and a &#x60;source&#x60; object (&#x60;rendition_sha256&#x60;, &#x60;run_id&#x60;, &#x60;extracted_at&#x60;, &#x60;method&#x60;). Every other key is a term and is stored as sent; terms are not validated beyond the envelope. &#x60;source.rendition_sha256&#x60; is the SHA-256 (hex) of the OCR text the terms were read from (the &#x60;text&#x60; returned by GET /raw_contracts/{id}/ocr_text); when that text later changes, &#x60;contract_terms_stale&#x60; is true.  Every change is recorded in the audit trail (who, old and new value, when), so this requires the winad_write scope and a user-backed token (client-credentials tokens are refused) with permission to update the RawContract. 

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
| **422** | The body is not a JSON object, or &#x60;schema&#x60; or &#x60;source&#x60; is missing or invalid. Nothing was changed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

