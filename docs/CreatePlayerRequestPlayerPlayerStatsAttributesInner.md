
# CreatePlayerRequestPlayerPlayerStatsAttributesInner


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`sportId` | number
`year` | number
`eligibilityYear` | number
`position` | string
`eligible` | string
`recruitYear` | boolean
`transferYear` | boolean
`lastSeason` | boolean
`playerNumber` | number
`averageStars` | number
`overallRanking` | number
`positionRanking` | number
`points` | number
`rebounds` | number
`assists` | number

## Example

```typescript
import type { CreatePlayerRequestPlayerPlayerStatsAttributesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "sportId": null,
  "year": null,
  "eligibilityYear": null,
  "position": null,
  "eligible": null,
  "recruitYear": null,
  "transferYear": null,
  "lastSeason": null,
  "playerNumber": null,
  "averageStars": null,
  "overallRanking": null,
  "positionRanking": null,
  "points": null,
  "rebounds": null,
  "assists": null,
} satisfies CreatePlayerRequestPlayerPlayerStatsAttributesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePlayerRequestPlayerPlayerStatsAttributesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


