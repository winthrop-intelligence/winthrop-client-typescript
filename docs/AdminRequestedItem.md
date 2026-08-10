
# AdminRequestedItem


## Properties

Name | Type
------------ | -------------
`id` | number
`foiaRequestId` | number
`requestableId` | number
`requestableType` | string
`coachId` | number
`status` | string
`createdAt` | Date
`updatedAt` | Date
`title` | string
`typeDisplay` | string
`hasNote` | boolean

## Example

```typescript
import type { AdminRequestedItem } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "foiaRequestId": null,
  "requestableId": null,
  "requestableType": null,
  "coachId": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
  "title": null,
  "typeDisplay": null,
  "hasNote": null,
} satisfies AdminRequestedItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminRequestedItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


