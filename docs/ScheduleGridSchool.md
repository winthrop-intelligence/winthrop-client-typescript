
# ScheduleGridSchool

One of the up-to-twelve schools rendered as a column on the schedule grid

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`shortName` | string
`logoUrl` | string
`primaryContactName` | string
`primaryContactEmail` | string
`primaryContactPhone` | string
`primaryContactMobilePhone` | string
`primaryContactSchedulingPhone` | string
`primaryContactSchedulingPhoneDial` | string
`rank` | number
`scheduleProfileEligible` | boolean

## Example

```typescript
import type { ScheduleGridSchool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "shortName": null,
  "logoUrl": null,
  "primaryContactName": null,
  "primaryContactEmail": null,
  "primaryContactPhone": null,
  "primaryContactMobilePhone": null,
  "primaryContactSchedulingPhone": null,
  "primaryContactSchedulingPhoneDial": null,
  "rank": null,
  "scheduleProfileEligible": null,
} satisfies ScheduleGridSchool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleGridSchool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


