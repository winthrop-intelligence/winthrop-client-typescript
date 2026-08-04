
# ScheduleUpdate

One school\'s most-recent schedule change for the \"Recently Updated\" dashboard module (WINAD-9930). Counts are aggregated over the 24h window ending at updated_at; the row text is assembled client-side.

## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`schoolLogoUrl` | string
`rank` | number
`gamesAdded` | number
`singleGameDate` | Date
`datesAdded` | number
`dealType` | string
`dealTypeCount` | number
`updatedAt` | Date
`scheduleProfileEligible` | boolean

## Example

```typescript
import type { ScheduleUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "schoolName": null,
  "schoolLogoUrl": null,
  "rank": null,
  "gamesAdded": null,
  "singleGameDate": null,
  "datesAdded": null,
  "dealType": null,
  "dealTypeCount": null,
  "updatedAt": null,
  "scheduleProfileEligible": null,
} satisfies ScheduleUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


