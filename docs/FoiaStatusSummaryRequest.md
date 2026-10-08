
# FoiaStatusSummaryRequest


## Properties

Name | Type
------------ | -------------
`foiaRequestId` | number
`foiaRequestAdminUrl` | string
`schoolId` | number
`schoolName` | string
`foiaLabelId` | number
`foiaLabelName` | string
`lifecycleStatus` | string
`requestStatus` | string
`nextUpdateDueOn` | Date
`followUpDueOn` | Date
`updatedBySchool` | Date
`updatedByWi` | Date
`lastProcessedFollowup` | Date
`requestedItems` | [Array&lt;FoiaStatusSummaryRequestedItem&gt;](FoiaStatusSummaryRequestedItem.md)
`activeHoldReason` | string
`activeHoldJustified` | boolean
`activeHoldNoteId` | number
`activeHoldNoteExcerpt` | string
`flags` | [FoiaStatusSummaryFlags](FoiaStatusSummaryFlags.md)
`flagReasons` | Array&lt;string&gt;
`dataGaps` | Array&lt;string&gt;

## Example

```typescript
import type { FoiaStatusSummaryRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "foiaRequestId": null,
  "foiaRequestAdminUrl": null,
  "schoolId": null,
  "schoolName": null,
  "foiaLabelId": null,
  "foiaLabelName": null,
  "lifecycleStatus": null,
  "requestStatus": null,
  "nextUpdateDueOn": null,
  "followUpDueOn": null,
  "updatedBySchool": null,
  "updatedByWi": null,
  "lastProcessedFollowup": null,
  "requestedItems": null,
  "activeHoldReason": null,
  "activeHoldJustified": null,
  "activeHoldNoteId": null,
  "activeHoldNoteExcerpt": null,
  "flags": null,
  "flagReasons": null,
  "dataGaps": null,
} satisfies FoiaStatusSummaryRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaStatusSummaryRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


