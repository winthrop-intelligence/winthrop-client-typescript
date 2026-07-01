
# FoiaFollowUpRecentReceivedItem


## Properties

Name | Type
------------ | -------------
`requestedItemId` | number
`requestableType` | string
`requestableId` | number
`requestableData` | [FoiaFollowUpRequestableData](FoiaFollowUpRequestableData.md)
`title` | string
`status` | string
`statusChangedAt` | Date
`receivedAt` | Date
`previousStatus` | string
`coachId` | number
`coachName` | string

## Example

```typescript
import type { FoiaFollowUpRecentReceivedItem } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "requestedItemId": null,
  "requestableType": null,
  "requestableId": null,
  "requestableData": null,
  "title": null,
  "status": null,
  "statusChangedAt": null,
  "receivedAt": null,
  "previousStatus": null,
  "coachId": null,
  "coachName": null,
} satisfies FoiaFollowUpRecentReceivedItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaFollowUpRecentReceivedItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


