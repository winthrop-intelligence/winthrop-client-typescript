
# UpdateAdminSeasonStatsRequestSeason

Any subset of the editable season stat fields, as strings; an empty string clears the value

## Properties

Name | Type
------------ | -------------
`description` | string
`wins` | string
`losses` | string
`ties` | string
`conferenceWins` | string
`conferenceLosses` | string
`conferenceTies` | string
`conferencePosition` | string
`conferenceNumPositions` | string
`homeWins` | string
`homeLosses` | string
`awayWins` | string
`awayLosses` | string
`neutralWins` | string
`neutralLosses` | string
`nonDivisionWins` | string
`nonDivisionLosses` | string
`asr` | string
`apr` | string
`coachApr` | string
`rpi` | string
`prevRpi` | string
`netRank` | string
`prevNetRank` | string
`apRank` | string
`prevApRank` | string
`torvikRank` | string
`sos` | string
`sosRanking` | string
`nonConferenceSosRanking` | string
`conferenceSosRanking` | string
`rankingThroughDate` | string
`attendance` | string
`recruitRanking` | string
`offensiveEfficiency` | string
`defensiveEfficiency` | string

## Example

```typescript
import type { UpdateAdminSeasonStatsRequestSeason } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "wins": null,
  "losses": null,
  "ties": null,
  "conferenceWins": null,
  "conferenceLosses": null,
  "conferenceTies": null,
  "conferencePosition": null,
  "conferenceNumPositions": null,
  "homeWins": null,
  "homeLosses": null,
  "awayWins": null,
  "awayLosses": null,
  "neutralWins": null,
  "neutralLosses": null,
  "nonDivisionWins": null,
  "nonDivisionLosses": null,
  "asr": null,
  "apr": null,
  "coachApr": null,
  "rpi": null,
  "prevRpi": null,
  "netRank": null,
  "prevNetRank": null,
  "apRank": null,
  "prevApRank": null,
  "torvikRank": null,
  "sos": null,
  "sosRanking": null,
  "nonConferenceSosRanking": null,
  "conferenceSosRanking": null,
  "rankingThroughDate": null,
  "attendance": null,
  "recruitRanking": null,
  "offensiveEfficiency": null,
  "defensiveEfficiency": null,
} satisfies UpdateAdminSeasonStatsRequestSeason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAdminSeasonStatsRequestSeason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


