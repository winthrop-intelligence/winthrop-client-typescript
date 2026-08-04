
# CompensationComparisonCohortStats

Stats cover the full pre-cap candidate set; min/median/max/average are computed over rows with comp_status=included only, and denominator_rule spells out every exclusion.

## Properties

Name | Type
------------ | -------------
`includedCount` | number
`noRoleMatchCount` | number
`schoolNotAccessibleCount` | number
`missingCompensationCount` | number
`zeroOrVolunteerCount` | number
`compRedactedCount` | number
`matchTypeCounts` | { [key: string]: number; }
`minCents` | number
`maxCents` | number
`averageCents` | number
`medianCents` | number
`denominatorRule` | string

## Example

```typescript
import type { CompensationComparisonCohortStats } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "includedCount": null,
  "noRoleMatchCount": null,
  "schoolNotAccessibleCount": null,
  "missingCompensationCount": null,
  "zeroOrVolunteerCount": null,
  "compRedactedCount": null,
  "matchTypeCounts": null,
  "minCents": null,
  "maxCents": null,
  "averageCents": null,
  "medianCents": null,
  "denominatorRule": null,
} satisfies CompensationComparisonCohortStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationComparisonCohortStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


