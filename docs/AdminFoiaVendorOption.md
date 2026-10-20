
# AdminFoiaVendorOption


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`status` | string
`updatedAt` | Date
`requestedItemId` | number
`deals` | [Array&lt;AdminFoiaVendorOptionDealsInner&gt;](AdminFoiaVendorOptionDealsInner.md)

## Example

```typescript
import type { AdminFoiaVendorOption } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "status": null,
  "updatedAt": null,
  "requestedItemId": null,
  "deals": null,
} satisfies AdminFoiaVendorOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaVendorOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


