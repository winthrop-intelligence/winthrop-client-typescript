
# TournamentRound


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`round` | number
`tournamentId` | number
`tournamentName` | string
`sportId` | number
`sportName` | string
`sportNameDisplay` | string

## Example

```typescript
import type { TournamentRound } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "round": null,
  "tournamentId": null,
  "tournamentName": null,
  "sportId": null,
  "sportName": null,
  "sportNameDisplay": null,
} satisfies TournamentRound

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TournamentRound
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


