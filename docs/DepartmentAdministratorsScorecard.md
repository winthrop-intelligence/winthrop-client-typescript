
# DepartmentAdministratorsScorecard

The administrators\' scorecard. The x-axis is the FRS support-staff payroll for the filing year; the y-axis is the Directors\' Cup season the cohort actually has on file, which may be labelled by the following year, so both are reported

## Properties

Name | Type
------------ | -------------
`spendFiscalYear` | number
`resultsYear` | number
`spendLine` | string
`metric` | string
`cohortSize` | number
`points` | [Array&lt;DepartmentAdministratorsScorecardPoint&gt;](DepartmentAdministratorsScorecardPoint.md)
`unplotted` | [Array&lt;DepartmentOverviewUnplottedSchool&gt;](DepartmentOverviewUnplottedSchool.md)

## Example

```typescript
import type { DepartmentAdministratorsScorecard } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
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


