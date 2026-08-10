
# AdminRiNote


## Properties

Name | Type
------------ | -------------
`id` | number
`requestedItemId` | number
`note` | string
`userId` | number
`createdAt` | Date
`updatedAt` | Date
`userName` | string

## Example

```typescript
import type { AdminRiNote } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "requestedItemId": null,
  "note": null,
  "userId": null,
  "createdAt": null,
  "updatedAt": null,
  "userName": null,
} satisfies AdminRiNote

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminRiNote
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


