
# TeamScheduleSearchResult

Enriched team schedule search result with contacts, RPI, returning percentages, and guarantee data

## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`shortName` | string
`city` | string
`stateName` | string
`conferenceName` | string
`conferenceId` | number
`divisionId` | number
`sportId` | number
`sportName` | string
`lastRpi` | number
`avgRpi` | number
`distance` | number
`avgGuaranteePaidCents` | number
`avgGuaranteeReceivedCents` | number
`previousSeasonRecord` | string
`nonConfGamesCurrent` | number
`nonConfGamesNext` | number
`schoolLogoUrl` | string
`filTeamId` | string
`returningPtsPct` | number
`returningRebPct` | number
`returningAstPct` | number
`contacts` | [Array&lt;TeamScheduleContact&gt;](TeamScheduleContact.md)
`homeContracts` | [TeamScheduleSearchResultHomeContracts](TeamScheduleSearchResultHomeContracts.md)
`awayContracts` | [TeamScheduleSearchResultAwayContracts](TeamScheduleSearchResultAwayContracts.md)

## Example

```typescript
import type { TeamScheduleSearchResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "schoolName": null,
  "shortName": null,
  "city": null,
  "stateName": null,
  "conferenceName": null,
  "conferenceId": null,
  "divisionId": null,
  "sportId": null,
  "sportName": null,
  "lastRpi": null,
  "avgRpi": null,
  "distance": null,
  "avgGuaranteePaidCents": null,
  "avgGuaranteeReceivedCents": null,
  "previousSeasonRecord": null,
  "nonConfGamesCurrent": null,
  "nonConfGamesNext": null,
  "schoolLogoUrl": null,
  "filTeamId": null,
  "returningPtsPct": null,
  "returningRebPct": null,
  "returningAstPct": null,
  "contacts": null,
  "homeContracts": null,
  "awayContracts": null,
} satisfies TeamScheduleSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


