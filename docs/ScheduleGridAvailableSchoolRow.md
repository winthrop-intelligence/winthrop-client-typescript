
# ScheduleGridAvailableSchoolRow

Candidate school returned by the available-schools finder

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`shortName` | string
`logoUrl` | string
`primaryContactName` | string
`primaryContactPhone` | string
`subdivisionName` | string
`rank` | number
`distanceMiles` | number
`nearestPost` | [ScheduleGridAvailableSchoolPost](ScheduleGridAvailableSchoolPost.md)

## Example

```typescript
import type { ScheduleGridAvailableSchoolRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "shortName": null,
  "logoUrl": null,
  "primaryContactName": null,
  "primaryContactPhone": null,
  "subdivisionName": null,
  "rank": null,
  "distanceMiles": null,
  "nearestPost": null,
} satisfies ScheduleGridAvailableSchoolRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleGridAvailableSchoolRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


