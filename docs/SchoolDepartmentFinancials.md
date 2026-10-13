
# SchoolDepartmentFinancials


## Properties

Name | Type
------------ | -------------
`school` | [SchoolDepartmentOverviewSchool](SchoolDepartmentOverviewSchool.md)
`conference` | [SchoolDepartmentOverviewConference](SchoolDepartmentOverviewConference.md)
`latestFiledYear` | number
`selectedYear` | number
`availableYears` | Array&lt;number&gt;
`quadrant` | [DepartmentFinancialsQuadrant](DepartmentFinancialsQuadrant.md)
`netResult` | [DepartmentFinancialsNetResult](DepartmentFinancialsNetResult.md)
`ranks` | [Array&lt;DepartmentFinancialsRankLine&gt;](DepartmentFinancialsRankLine.md)
`ranksFiledCount` | number
`revenue` | [DepartmentFinancialsLedger](DepartmentFinancialsLedger.md)
`expenses` | [DepartmentFinancialsLedger](DepartmentFinancialsLedger.md)
`trend` | [Array&lt;DepartmentFinancialsTrendEntry&gt;](DepartmentFinancialsTrendEntry.md)
`officers990Count` | number
`eadaLedger` | [DepartmentFinancialsEadaLedger](DepartmentFinancialsEadaLedger.md)
`eadaCoaching` | [DepartmentFinancialsEadaCoaching](DepartmentFinancialsEadaCoaching.md)

## Example

```typescript
import type { SchoolDepartmentFinancials } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "conference": null,
  "latestFiledYear": null,
  "selectedYear": null,
  "availableYears": null,
  "quadrant": null,
  "netResult": null,
  "ranks": null,
  "ranksFiledCount": null,
  "revenue": null,
  "expenses": null,
  "trend": null,
  "officers990Count": null,
  "eadaLedger": null,
  "eadaCoaching": null,
} satisfies SchoolDepartmentFinancials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolDepartmentFinancials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


