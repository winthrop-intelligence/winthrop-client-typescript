
# ScheduleGridScheduleTournament

A private single-day /schedules grid multi-team event (MTE) placeholder (WINAD-9818). Rendered as \"Tournament Name (MTE)\" in the cell.

## Properties

Name | Type
------------ | -------------
`id` | number
`date` | Date
`name` | string

## Example

```typescript
import type { ScheduleGridScheduleTournament } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "date": null,
  "name": null,
} satisfies ScheduleGridScheduleTournament

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleGridScheduleTournament
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


