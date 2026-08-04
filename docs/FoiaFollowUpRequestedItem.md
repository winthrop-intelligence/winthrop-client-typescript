
# FoiaFollowUpRequestedItem


## Properties

Name | Type
------------ | -------------
`requestedItemId` | number
`requestableType` | string
`requestableId` | number
`requestableData` | [FoiaFollowUpRequestableData](FoiaFollowUpRequestableData.md)
`typeDisplay` | string
`title` | string
`status` | string
`createdAt` | Date
`updatedAt` | Date
`statusChangedAt` | Date
`previousStatus` | string
`receivedAt` | Date
`coachId` | number
`coachName` | string
`riNoteId` | number
`note` | string
`noteUpdatedAt` | Date

## Example

```typescript
import type { FoiaFollowUpRequestedItem } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "requestedItemId": null,
  "requestableType": null,
  "requestableId": null,
  "requestableData": null,
  "typeDisplay": null,
  "title": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
  "statusChangedAt": null,
  "previousStatus": null,
  "receivedAt": null,
  "coachId": null,
  "coachName": null,
  "riNoteId": null,
  "note": null,
  "noteUpdatedAt": null,
} satisfies FoiaFollowUpRequestedItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaFollowUpRequestedItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


