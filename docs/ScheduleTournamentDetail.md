
# ScheduleTournamentDetail

A private /schedules grid multi-team event (MTE) placeholder (WINAD-9818). Distinct from Game (no opponent FK — opponents may be unknown when the event is added) and from ScheduleIntent (availability markers). One row per (school, sport, date).

## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`sportId` | number
`date` | Date
`name` | string

## Example

```typescript
import type { ScheduleTournamentDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "sportId": null,
  "date": null,
  "name": null,
} satisfies ScheduleTournamentDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleTournamentDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


