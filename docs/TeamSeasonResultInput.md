
# TeamSeasonResultInput

Body of PUT /team_season_results, sent flat at the top level of the JSON body. Give season_id, or school_id, sport_id and season_year. Every result field is replaced; one left out is stored as null.

## Properties

Name | Type
------------ | -------------
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
`changeNote` | string

## Example

```typescript
import type { TeamSeasonResultInput } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonId": 12345,
  "schoolId": 678,
  "sportId": 2,
  "seasonYear": 2023,
  "resultName": ncaa_stage_reached,
  "resultValue": first_round,
  "details": null,
  "sourceUrl": null,
  "quote": null,
  "seasonAnchor": null,
  "verificationMethod": null,
  "changeNote": null,
} satisfies TeamSeasonResultInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamSeasonResultInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


