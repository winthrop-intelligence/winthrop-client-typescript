
# RequestedItemReviewContextFoiaRequest


## Properties

Name | Type
------------ | -------------
`id` | number
`label` | string
`adminUrl` | string

## Example

```typescript
import type { RequestedItemReviewContextFoiaRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 3,
  "label": Spring 2026 Batch A,
  "adminUrl": https://winad-hq.com/old/admin/foia_requests/3#requested_item_1,
} satisfies RequestedItemReviewContextFoiaRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequestedItemReviewContextFoiaRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


