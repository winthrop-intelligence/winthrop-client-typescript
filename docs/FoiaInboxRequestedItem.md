
# FoiaInboxRequestedItem


## Properties

Name | Type
------------ | -------------
`requestedItemId` | number
`requestableType` | string
`requestableId` | number
`typeDisplay` | string
`title` | string
`status` | string
`coachId` | number
`coachName` | string
`note` | string
`createdAt` | Date
`updatedAt` | Date
`requestableData` | [FoiaInboxRequestableData](FoiaInboxRequestableData.md)

## Example

```typescript
import type { FoiaInboxRequestedItem } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "requestedItemId": null,
  "requestableType": null,
  "requestableId": null,
  "typeDisplay": null,
  "title": null,
  "status": null,
  "coachId": null,
  "coachName": null,
  "note": null,
  "createdAt": null,
  "updatedAt": null,
  "requestableData": null,
} satisfies FoiaInboxRequestedItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaInboxRequestedItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


