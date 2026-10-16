
# DepartmentAdministratorsScorecard

The administrators\' scorecard uses FRS support-staff payroll for public subjects and EADA expense not allocated by team for private subjects. Money reads the fiscal year before the selected season; only the current season may fall back one year. Cup standings read only the selected season. Missing standings produce a gap, including for the current season; the financial-year fallback never applies to results.

## Properties

Name | Type
------------ | -------------
`spendBasis` | string
`spendFiscalYear` | number
`resultsYear` | number
`spendLine` | string
`metric` | string
`cohortSize` | number
`points` | [Array&lt;DepartmentAdministratorsScorecardPoint&gt;](DepartmentAdministratorsScorecardPoint.md)
`unplotted` | [Array&lt;QuadrantUnplottedSchool&gt;](QuadrantUnplottedSchool.md)

## Example

```typescript
import type { DepartmentAdministratorsScorecard } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "spendBasis": null,
  "spendFiscalYear": null,
  "resultsYear": null,
  "spendLine": null,
  "metric": null,
  "cohortSize": null,
  "points": null,
  "unplotted": null,
} satisfies DepartmentAdministratorsScorecard

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentAdministratorsScorecard
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


