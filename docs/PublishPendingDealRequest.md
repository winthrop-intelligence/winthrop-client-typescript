
# PublishPendingDealRequest

The body of PATCH /deals/{dealId} (WINAD-10699) plus vendor_id; see POST /deals/{dealId}/publish.

## Properties

Name | Type
------------ | -------------
`deal` | [PublishPendingDealRequestDeal](PublishPendingDealRequestDeal.md)
`dealDetail` | [PublishPendingDealRequestDealDetail](PublishPendingDealRequestDealDetail.md)
`changeNote` | string

## Example

```typescript
import type { PublishPendingDealRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "deal": null,
  "dealDetail": null,
  "changeNote": null,
} satisfies PublishPendingDealRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishPendingDealRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


