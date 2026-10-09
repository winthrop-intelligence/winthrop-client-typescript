
# DeskQueueEngagement


## Properties

Name | Type
------------ | -------------
`reportUuid` | string
`status` | string
`uniqueViewers` | number
`totalOpens` | number
`lastViewedAt` | Date
`refreshedAt` | Date
`period` | [DeskQueueEngagementPeriod](DeskQueueEngagementPeriod.md)
`coverage` | [DeskQueueEngagementCoverage](DeskQueueEngagementCoverage.md)
`error` | [DeskQueueEngagementError](DeskQueueEngagementError.md)

## Example

```typescript
import type { DeskQueueEngagement } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "reportUuid": null,
  "status": null,
  "uniqueViewers": null,
  "totalOpens": null,
  "lastViewedAt": null,
  "refreshedAt": null,
  "period": null,
  "coverage": null,
  "error": null,
} satisfies DeskQueueEngagement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskQueueEngagement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


