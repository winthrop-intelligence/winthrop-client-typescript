
# ScheduleGridView

Schedule grid payload for a single sport and season

## Properties

Name | Type
------------ | -------------
`year` | number
`sportId` | number
`seasonStart` | Date
`seasonEnd` | Date
`schools` | [Array&lt;ScheduleGridSchool&gt;](ScheduleGridSchool.md)
`games` | { [key: string]: Array&lt;ScheduleGridGame&gt;; }
`gamePosts` | { [key: string]: Array&lt;ScheduleGridGamePost&gt;; }

## Example

```typescript
import type { ScheduleGridView } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": 2026,
  "sportId": null,
  "seasonStart": null,
  "seasonEnd": null,
  "schools": null,
  "games": null,
  "gamePosts": null,
} satisfies ScheduleGridView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleGridView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


