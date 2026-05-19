
# UpdateScheduleIntentRequestScheduleIntent

Only game-type designations are mutable. sport_id and date identify the cell and are immutable after creation (WINAD-9646 security).

## Properties

Name | Type
------------ | -------------
`gameTypeIds` | Array&lt;number&gt;

## Example

```typescript
import type { UpdateScheduleIntentRequestScheduleIntent } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "gameTypeIds": null,
} satisfies UpdateScheduleIntentRequestScheduleIntent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateScheduleIntentRequestScheduleIntent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


