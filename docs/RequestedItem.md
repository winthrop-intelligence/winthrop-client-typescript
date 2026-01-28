
# RequestedItem


## Properties

Name | Type
------------ | -------------
`id` | number
`foiaRequestId` | number
`requestableId` | number
`requestableType` | string
`received` | boolean
`createdAt` | Date
`updatedAt` | Date
`coachId` | number
`status` | string

## Example

```typescript
import type { RequestedItem } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "foiaRequestId": 2,
  "requestableId": 3,
  "requestableType": null,
  "received": false,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "coachId": 4,
  "status": null,
} satisfies RequestedItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequestedItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


