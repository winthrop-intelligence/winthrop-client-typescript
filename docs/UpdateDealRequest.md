
# UpdateDealRequest


## Properties

Name | Type
------------ | -------------
`deal` | [UpdateDealRequestDeal](UpdateDealRequestDeal.md)
`dealDetail` | [UpdateDealRequestDealDetail](UpdateDealRequestDealDetail.md)

## Example

```typescript
import type { UpdateDealRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "deal": null,
  "dealDetail": null,
} satisfies UpdateDealRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDealRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


