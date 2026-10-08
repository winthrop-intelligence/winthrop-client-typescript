
# FoiaStatusSummaryTotals


## Properties

Name | Type
------------ | -------------
`activeLabelCount` | number
`activeCount` | number
`closedCount` | number
`totalCount` | number
`activePercentage` | number
`overdueForUpdateCount` | number
`needsFollowUpCount` | number
`completeButActiveCount` | number

## Example

```typescript
import type { FoiaStatusSummaryTotals } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "activeLabelCount": null,
  "activeCount": null,
  "closedCount": null,
  "totalCount": null,
  "activePercentage": null,
  "overdueForUpdateCount": null,
  "needsFollowUpCount": null,
  "completeButActiveCount": null,
} satisfies FoiaStatusSummaryTotals

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaStatusSummaryTotals
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


