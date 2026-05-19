
# ScheduleGridScheduleIntent

A private single-day /schedules grid marker (WINAD-9646). Not a public Games Wanted post.

## Properties

Name | Type
------------ | -------------
`id` | number
`date` | Date
`gameTypes` | Array&lt;string&gt;
`createdBySchoolId` | number
`schoolEntered` | boolean

## Example

```typescript
import type { ScheduleGridScheduleIntent } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "date": null,
  "gameTypes": null,
  "createdBySchoolId": null,
  "schoolEntered": null,
} satisfies ScheduleGridScheduleIntent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleGridScheduleIntent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


