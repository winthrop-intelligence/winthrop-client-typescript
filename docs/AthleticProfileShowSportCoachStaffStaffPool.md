
# AthleticProfileShowSportCoachStaffStaffPool

Assistant pool vs the cohort. Null when compensation is not permitted, and null when the school has no complete pool — a pool is a total only when every assistant on the roster carries a filed salary for the season (WINAD-10443).

## Properties

Name | Type
------------ | -------------
`poolCents` | number
`cohortSize` | number
`cohortRank` | number
`medianCents` | number

## Example

```typescript
import type { AthleticProfileShowSportCoachStaffStaffPool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "poolCents": null,
  "cohortSize": null,
  "cohortRank": null,
  "medianCents": null,
} satisfies AthleticProfileShowSportCoachStaffStaffPool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportCoachStaffStaffPool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


