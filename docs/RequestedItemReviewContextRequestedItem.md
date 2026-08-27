
# RequestedItemReviewContextRequestedItem


## Properties

Name | Type
------------ | -------------
`id` | number
`status` | string
`requestableId` | number
`requestableType` | string
`typeDisplay` | string
`title` | string

## Example

```typescript
import type { RequestedItemReviewContextRequestedItem } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "status": null,
  "requestableId": 2,
  "requestableType": null,
  "typeDisplay": Coach (compensation),
  "title": 2024: Jane Smith (Basketball - Head Coach),
} satisfies RequestedItemReviewContextRequestedItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequestedItemReviewContextRequestedItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


