
# AdminPosition

A per-coach, per-season position assignment

## Properties

Name | Type
------------ | -------------
`id` | number
`seasonId` | number
`coachId` | number
`title` | string
`departing` | boolean
`departingSetAt` | Date
`departureOn` | Date
`departureReason` | string
`departureSourceUrl` | string
`creationReason` | string
`creationReasonUpdatedAt` | Date
`articleLink` | string
`articleTitle` | string
`articleDescription` | string
`articleSiteName` | string
`articlePublishTime` | Date
`articleImageUrl` | string
`compensationId` | number
`positionTypeIds` | Array&lt;number&gt;
`positionTypesNameDisplay` | string
`season` | [AdminPositionSeasonSummary](AdminPositionSeasonSummary.md)
`coach` | [AdminPositionCoachSummary](AdminPositionCoachSummary.md)
`compensation` | [AdminPositionCompensationSummary](AdminPositionCompensationSummary.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminPosition } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "seasonId": null,
  "coachId": null,
  "title": null,
  "departing": null,
  "departingSetAt": null,
  "departureOn": null,
  "departureReason": null,
  "departureSourceUrl": null,
  "creationReason": null,
  "creationReasonUpdatedAt": null,
  "articleLink": null,
  "articleTitle": null,
  "articleDescription": null,
  "articleSiteName": null,
  "articlePublishTime": null,
  "articleImageUrl": null,
  "compensationId": null,
  "positionTypeIds": null,
  "positionTypesNameDisplay": null,
  "season": null,
  "coach": null,
  "compensation": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminPosition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPosition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


