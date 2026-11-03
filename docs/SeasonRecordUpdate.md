
# SeasonRecordUpdate

Only the fields in the body change; an explicit null clears a field. wins, losses and ties are the season totals: when regular_season_* and postseason_* are set they must add up to them (422). conference_position must not be larger than conference_num_positions. An optional change_note is stored on the audit version.

## Properties

Name | Type
------------ | -------------
`wins` | number
`losses` | number
`ties` | number
`conferenceWins` | number
`conferenceLosses` | number
`conferenceTies` | number
`conferencePosition` | number
`conferenceNumPositions` | number
`homeWins` | number
`homeLosses` | number
`awayWins` | number
`awayLosses` | number
`neutralWins` | number
`neutralLosses` | number
`nonDivisionWins` | number
`nonDivisionLosses` | number
`asr` | number
`apr` | number
`coachApr` | number
`rpi` | number
`prevRpi` | number
`netRank` | number
`prevNetRank` | number
`apRank` | number
`prevApRank` | number
`cfpRank` | number
`torvikRank` | number
`sosRanking` | number
`nonConferenceSosRanking` | number
`conferenceSosRanking` | number
`recruitRanking` | number
`attendance` | number
`regularSeasonWins` | number
`regularSeasonLosses` | number
`regularSeasonTies` | number
`postseasonWins` | number
`postseasonLosses` | number
`description` | string
`sos` | number
`offensiveEfficiency` | number
`defensiveEfficiency` | number
`rankingThroughDate` | Date
`conferenceRegularSeasonChampion` | boolean
`conferenceTournamentChampion` | boolean
`changeNote` | string

## Example

```typescript
import type { SeasonRecordUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
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
  "cfpRank": null,
  "torvikRank": null,
  "sosRanking": null,
  "nonConferenceSosRanking": null,
  "conferenceSosRanking": null,
  "recruitRanking": null,
  "attendance": null,
  "regularSeasonWins": null,
  "regularSeasonLosses": null,
  "regularSeasonTies": null,
  "postseasonWins": null,
  "postseasonLosses": null,
  "description": null,
  "sos": null,
  "offensiveEfficiency": null,
  "defensiveEfficiency": null,
  "rankingThroughDate": null,
  "conferenceRegularSeasonChampion": null,
  "conferenceTournamentChampion": null,
  "changeNote": null,
} satisfies SeasonRecordUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeasonRecordUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


