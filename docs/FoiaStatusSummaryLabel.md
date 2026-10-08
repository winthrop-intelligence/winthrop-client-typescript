
# FoiaStatusSummaryLabel


## Properties

Name | Type
------------ | -------------
`foiaLabelId` | number
`foiaLabelName` | string
`activeCount` | number
`closedCount` | number
`totalCount` | number
`activePercentage` | number
`overdueForUpdateCount` | number
`overdueForUpdateRequestIds` | Array&lt;number&gt;
`needsFollowUpCount` | number
`needsFollowUpRequestIds` | Array&lt;number&gt;
`completeButActiveCount` | number
`completeButActiveRequestIds` | Array&lt;number&gt;

## Example

```typescript
import type { FoiaStatusSummaryLabel } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "foiaLabelId": null,
  "foiaLabelName": null,
  "activeCount": null,
  "closedCount": null,
  "totalCount": null,
  "activePercentage": null,
  "overdueForUpdateCount": null,
  "overdueForUpdateRequestIds": null,
  "needsFollowUpCount": null,
  "needsFollowUpRequestIds": null,
  "completeButActiveCount": null,
  "completeButActiveRequestIds": null,
} satisfies FoiaStatusSummaryLabel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaStatusSummaryLabel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


