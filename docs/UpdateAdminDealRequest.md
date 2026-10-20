
# UpdateAdminDealRequest


## Properties

Name | Type
------------ | -------------
`changeNote` | string
`deal` | [UpdateAdminDealRequestDeal](UpdateAdminDealRequestDeal.md)

## Example

```typescript
import type { UpdateAdminDealRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "changeNote": null,
  "deal": null,
} satisfies UpdateAdminDealRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAdminDealRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


