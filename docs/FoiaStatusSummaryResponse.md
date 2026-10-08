
# FoiaStatusSummaryResponse


## Properties

Name | Type
------------ | -------------
`meta` | [FoiaStatusSummaryMeta](FoiaStatusSummaryMeta.md)
`totals` | [FoiaStatusSummaryTotals](FoiaStatusSummaryTotals.md)
`labels` | [Array&lt;FoiaStatusSummaryLabel&gt;](FoiaStatusSummaryLabel.md)
`data` | [Array&lt;FoiaStatusSummaryRequest&gt;](FoiaStatusSummaryRequest.md)

## Example

```typescript
import type { FoiaStatusSummaryResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "totals": null,
  "labels": null,
  "data": null,
} satisfies FoiaStatusSummaryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaStatusSummaryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


