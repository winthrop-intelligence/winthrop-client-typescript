
# GamePostScheduleSummary


## Properties

Name | Type
------------ | -------------
`wantedDatesCount` | number
`scheduledGames` | [Array&lt;GamePostScheduleGame&gt;](GamePostScheduleGame.md)
`pendingWindows` | [Array&lt;GamePostPendingWindow&gt;](GamePostPendingWindow.md)

## Example

```typescript
import type { GamePostScheduleSummary } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "wantedDatesCount": null,
  "scheduledGames": null,
  "pendingWindows": null,
} satisfies GamePostScheduleSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostScheduleSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


