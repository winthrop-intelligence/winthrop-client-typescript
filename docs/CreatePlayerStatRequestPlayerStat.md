
# CreatePlayerStatRequestPlayerStat


## Properties

Name | Type
------------ | -------------
`playerId` | number
`schoolId` | number
`sportId` | number
`year` | number
`eligibilityYear` | number
`eligible` | string
`recruitYear` | boolean
`transferYear` | boolean
`lastSeason` | boolean
`position` | string
`playerNumber` | number
`averageStars` | number
`overallRanking` | number
`positionRanking` | number
`points` | number
`rebounds` | number
`assists` | number
`games` | number
`minutes` | number
`fieldGoalsMade` | number
`fieldGoalsAttempted` | number
`freeThrowsMade` | number
`freeThrowsAttempted` | number
`threePointersMade` | number
`threePointersAttempted` | number
`offensiveRebounds` | number
`defensiveRebounds` | number
`steals` | number
`blocks` | number
`turnovers` | number
`personalFouls` | number

## Example

```typescript
import type { CreatePlayerStatRequestPlayerStat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "playerId": null,
  "schoolId": null,
  "sportId": null,
  "year": null,
  "eligibilityYear": null,
  "eligible": null,
  "recruitYear": null,
  "transferYear": null,
  "lastSeason": null,
  "position": null,
  "playerNumber": null,
  "averageStars": null,
  "overallRanking": null,
  "positionRanking": null,
  "points": null,
  "rebounds": null,
  "assists": null,
  "games": null,
  "minutes": null,
  "fieldGoalsMade": null,
  "fieldGoalsAttempted": null,
  "freeThrowsMade": null,
  "freeThrowsAttempted": null,
  "threePointersMade": null,
  "threePointersAttempted": null,
  "offensiveRebounds": null,
  "defensiveRebounds": null,
  "steals": null,
  "blocks": null,
  "turnovers": null,
  "personalFouls": null,
} satisfies CreatePlayerStatRequestPlayerStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePlayerStatRequestPlayerStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


