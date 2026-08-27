
# ScheduleIntentDetail

A private /schedules grid marker (WINAD-9646). NOT a public Games Wanted post — never appears in the /game_posts feed, the school-detail badge, or the digest email.

## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`sportId` | number
`date` | Date
`gameTypes` | [Array&lt;ContactSearchCoachOptionsSportsInner&gt;](ContactSearchCoachOptionsSportsInner.md)

## Example

```typescript
import type { ScheduleIntentDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "sportId": null,
  "date": null,
  "gameTypes": null,
} satisfies ScheduleIntentDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleIntentDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


