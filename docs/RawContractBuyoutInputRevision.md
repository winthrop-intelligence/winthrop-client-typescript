
# RawContractBuyoutInputRevision


## Properties

Name | Type
------------ | -------------
`id` | number
`rawContractId` | number
`userId` | number
`changeNote` | string
`createdAt` | Date
`document` | [BuyoutInputs](BuyoutInputs.md)

## Example

```typescript
import type { RawContractBuyoutInputRevision } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "rawContractId": null,
  "userId": null,
  "changeNote": null,
  "createdAt": null,
  "document": null,
} satisfies RawContractBuyoutInputRevision

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RawContractBuyoutInputRevision
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


