
# PostseasonResultInput

Give exactly one of bowl_game_id and tournament_round_id. The write replaces the season\'s row.

## Properties

Name | Type
------------ | -------------
`seasonId` | number
`bowlGameId` | number
`tournamentRoundId` | number
`won` | boolean
`changeNote` | string

## Example

```typescript
import type { PostseasonResultInput } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonId": null,
  "bowlGameId": null,
  "tournamentRoundId": null,
  "won": null,
  "changeNote": null,
} satisfies PostseasonResultInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostseasonResultInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


