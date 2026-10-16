
# AthleticProfileShowSportCoachStaffStaffPool

Assistant pool vs the conference cohort, on one basis for every school. FRS assistant coaching totals (EXP_ASSISTANT_COACHES plus third party) when the subject and every cohort school filed them for the season; otherwise complete contract pools (every assistant priced, WINAD-10443) when every school has one. Null when no basis covers every school — the comparison is never shown over partial or mixed pools (WINAD-10444) — and for a private school.

## Properties

Name | Type
------------ | -------------
`poolCents` | number
`basis` | string
`fiscalYear` | number
`cohortSize` | number
`cohortRank` | number
`medianCents` | number

## Example

```typescript
import type { AthleticProfileShowSportCoachStaffStaffPool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "poolCents": null,
  "basis": null,
  "fiscalYear": null,
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


