
# RequestedItemReviewContextDocument


## Properties

Name | Type
------------ | -------------
`id` | number
`label` | string
`hasFile` | boolean
`fileName` | string
`contentType` | string
`byteSize` | number

## Example

```typescript
import type { RequestedItemReviewContextDocument } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 4,
  "label": Contract for Jane Smith, July 1, 2024 - June 30, 2026,
  "hasFile": null,
  "fileName": contract.pdf,
  "contentType": application/pdf,
  "byteSize": null,
} satisfies RequestedItemReviewContextDocument

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequestedItemReviewContextDocument
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


