
# AdminPlayerStat


## Properties

Name | Type
------------ | -------------
`id` | number
`position` | string
`playerNumber` | number
`averageStars` | number
`overallRanking` | number
`positionRanking` | number
`points` | number
`rebounds` | number
`assists` | number
`eligibilityYear` | number
`eligibilityYearStr` | string
`eligible` | string
`recruitYear` | boolean
`transferYear` | boolean
`lastSeason` | boolean
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
`createdAt` | Date
`updatedAt` | Date
`player` | [AdminPlayerStatPlayer](AdminPlayerStatPlayer.md)
`season` | [AdminPlayerStatSeason](AdminPlayerStatSeason.md)

## Example

```typescript
import type { AdminPlayerStat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "position": null,
  "playerNumber": null,
  "averageStars": null,
  "overallRanking": null,
  "positionRanking": null,
  "points": null,
  "rebounds": null,
  "assists": null,
  "eligibilityYear": null,
  "eligibilityYearStr": null,
  "eligible": null,
  "recruitYear": null,
  "transferYear": null,
  "lastSeason": null,
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
  "createdAt": null,
  "updatedAt": null,
  "player": null,
  "season": null,
} satisfies AdminPlayerStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPlayerStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


