
# TeamSchedulePlayerData


## Properties

Name | Type
------------ | -------------
`hasPlayerData` | boolean
`seasonLabel` | string
`importDate` | string
`returningPct` | [TeamSchedulePlayerDataReturningPct](TeamSchedulePlayerDataReturningPct.md)
`returningPlayers` | [Array&lt;TeamSchedulePlayerDataReturningPlayersInner&gt;](TeamSchedulePlayerDataReturningPlayersInner.md)
`departingPlayers` | [Array&lt;TeamSchedulePlayerDataReturningPlayersInner&gt;](TeamSchedulePlayerDataReturningPlayersInner.md)
`recruits` | [Array&lt;TeamSchedulePlayerDataRecruitsInner&gt;](TeamSchedulePlayerDataRecruitsInner.md)
`transfers` | [Array&lt;TeamSchedulePlayerDataTransfersInner&gt;](TeamSchedulePlayerDataTransfersInner.md)

## Example

```typescript
import type { TeamSchedulePlayerData } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "hasPlayerData": null,
  "seasonLabel": null,
  "importDate": null,
  "returningPct": null,
  "returningPlayers": null,
  "departingPlayers": null,
  "recruits": null,
  "transfers": null,
} satisfies TeamSchedulePlayerData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamSchedulePlayerData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


