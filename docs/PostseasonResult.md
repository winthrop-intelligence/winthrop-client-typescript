
# PostseasonResult

The furthest postseason stage a season reached (one row per season). Either the bowl_game_* or the tournament_* fields are set.

## Properties

Name | Type
------------ | -------------
`id` | number
`seasonId` | number
`schoolId` | number
`sportId` | number
`seasonYear` | number
`bowlGameId` | number
`bowlGameName` | string
`tournamentRoundId` | number
`tournamentRoundName` | string
`round` | number
`tournamentId` | number
`tournamentName` | string
`won` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { PostseasonResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "seasonId": null,
  "schoolId": null,
  "sportId": null,
  "seasonYear": null,
  "bowlGameId": null,
  "bowlGameName": null,
  "tournamentRoundId": null,
  "tournamentRoundName": null,
  "round": null,
  "tournamentId": null,
  "tournamentName": null,
  "won": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies PostseasonResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostseasonResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


