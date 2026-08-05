
# DepartmentCoachResult


## Properties

Name | Type
------------ | -------------
`seasonYear` | number
`wins` | number
`losses` | number
`conferenceWins` | number
`conferenceLosses` | number
`metric` | string
`metricRank` | number
`metricYear` | number
`postseason` | string
`champion` | boolean
`finishRank` | number
`finishCohort` | number

## Example

```typescript
import type { DepartmentCoachResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonYear": null,
  "wins": null,
  "losses": null,
  "conferenceWins": null,
  "conferenceLosses": null,
  "metric": null,
  "metricRank": null,
  "metricYear": null,
  "postseason": null,
  "champion": null,
  "finishRank": null,
  "finishCohort": null,
} satisfies DepartmentCoachResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


