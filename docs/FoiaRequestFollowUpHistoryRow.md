
# FoiaRequestFollowUpHistoryRow

A single FOIA request follow-up-related change event sourced from PaperTrail versions.

## Properties

Name | Type
------------ | -------------
`foiaRequestId` | number
`schoolId` | number
`schoolName` | string
`foiaLabelId` | number
`foiaLabelName` | string
`changedAt` | Date
`changedByUserId` | number
`changedByUserName` | string
`previousStatus` | string
`newStatus` | string
`previousUpdatedByWi` | Date
`newUpdatedByWi` | Date
`previousFollowUpDate` | Date
`newFollowUpDate` | Date
`previousLastProcessedFollowup` | Date
`newLastProcessedFollowup` | Date

## Example

```typescript
import type { FoiaRequestFollowUpHistoryRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "foiaRequestId": null,
  "schoolId": null,
  "schoolName": null,
  "foiaLabelId": null,
  "foiaLabelName": null,
  "changedAt": null,
  "changedByUserId": null,
  "changedByUserName": null,
  "previousStatus": null,
  "newStatus": null,
  "previousUpdatedByWi": null,
  "newUpdatedByWi": null,
  "previousFollowUpDate": null,
  "newFollowUpDate": null,
  "previousLastProcessedFollowup": null,
  "newLastProcessedFollowup": null,
} satisfies FoiaRequestFollowUpHistoryRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaRequestFollowUpHistoryRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


