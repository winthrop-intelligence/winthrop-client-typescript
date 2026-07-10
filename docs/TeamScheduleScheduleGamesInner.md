
# TeamScheduleScheduleGamesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`gameDate` | Date
`gameDateDisplay` | string
`opponentId` | number
`opponentName` | string
`opponentScheduleProfileEligible` | boolean
`location` | string
`city` | string
`stateName` | string
`opponentRpi` | number
`opponentAvgRpi` | number
`opponentNetRank` | number
`opponentAvgNetRank` | number
`opponentApRank` | number
`opponentAvgApRank` | number
`inConference` | boolean
`hasContract` | boolean
`compensationCents` | number
`compensationDirection` | string
`gameContractId` | number
`result` | string
`score` | string
`overtime` | number

## Example

```typescript
import type { TeamScheduleScheduleGamesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "gameDate": null,
  "gameDateDisplay": null,
  "opponentId": null,
  "opponentName": null,
  "opponentScheduleProfileEligible": null,
  "location": null,
  "city": null,
  "stateName": null,
  "opponentRpi": null,
  "opponentAvgRpi": null,
  "opponentNetRank": null,
  "opponentAvgNetRank": null,
  "opponentApRank": null,
  "opponentAvgApRank": null,
  "inConference": null,
  "hasContract": null,
  "compensationCents": null,
  "compensationDirection": null,
  "gameContractId": null,
  "result": null,
  "score": null,
  "overtime": null,
} satisfies TeamScheduleScheduleGamesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleScheduleGamesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


