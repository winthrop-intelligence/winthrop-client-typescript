
# AdminPlayerStatSummary


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
`eligible` | string
`recruitYear` | boolean
`transferYear` | boolean
`lastSeason` | boolean
`seasonId` | number
`seasonSchool` | string
`seasonSport` | string
`seasonYear` | number

## Example

```typescript
import type { AdminPlayerStatSummary } from '@winthrop-intelligence/winthrop-client-typescript'

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
  "eligible": null,
  "recruitYear": null,
  "transferYear": null,
  "lastSeason": null,
  "seasonId": null,
  "seasonSchool": null,
  "seasonSport": null,
  "seasonYear": null,
} satisfies AdminPlayerStatSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPlayerStatSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


