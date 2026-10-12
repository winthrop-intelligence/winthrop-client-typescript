
# TeamSeasonResult

One result of a team\'s season (WINAD-10636), shared by every coach of that team. school_id, sport_id and season_year come from the season row.

## Properties

Name | Type
------------ | -------------
`id` | number
`seasonId` | number
`schoolId` | number
`sportId` | number
`seasonYear` | number
`resultName` | string
`resultValue` | string
`details` | { [key: string]: any; }
`sourceUrl` | string
`quote` | string
`seasonAnchor` | string
`verificationMethod` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { TeamSeasonResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "seasonId": 12345,
  "schoolId": 678,
  "sportId": 2,
  "seasonYear": 2023,
  "resultName": ncaa_stage_reached,
  "resultValue": first_round,
  "details": {"seed":12,"bid":"auto","round_label":"First Round"},
  "sourceUrl": null,
  "quote": null,
  "seasonAnchor": null,
  "verificationMethod": two_lanes_agree,
  "createdAt": 2026-10-12T00:00Z,
  "updatedAt": 2026-10-12T00:00Z,
} satisfies TeamSeasonResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamSeasonResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


