
# DepartmentOverviewResultsQuadrant

One fiscal year of spending against the selected Directors\' Cup season. Fiscal year is season ending year minus one; only the current season may fall back one year. Private subjects use EADA for all peers; public subjects prefer FRS per dot.

## Properties

Name | Type
------------ | -------------
`eadaFallbackCount` | number
`basis` | string
`spendYear` | number
`resultsYear` | number
`metric` | string
`cohortSize` | number
`points` | [Array&lt;DepartmentOverviewQuadrantPoint&gt;](DepartmentOverviewQuadrantPoint.md)
`unplotted` | [Array&lt;DepartmentOverviewUnplottedSchool&gt;](DepartmentOverviewUnplottedSchool.md)

## Example

```typescript
import type { DepartmentOverviewResultsQuadrant } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "eadaFallbackCount": null,
  "basis": null,
  "spendYear": null,
  "resultsYear": null,
  "metric": null,
  "cohortSize": null,
  "points": null,
  "unplotted": null,
} satisfies DepartmentOverviewResultsQuadrant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewResultsQuadrant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


