
# SchoolDepartmentOverview


## Properties

Name | Type
------------ | -------------
`school` | [SchoolDepartmentOverviewSchool](SchoolDepartmentOverviewSchool.md)
`conference` | [SchoolDepartmentOverviewConference](SchoolDepartmentOverviewConference.md)
`latestFiledYear` | number
`selectedYear` | number
`availableYears` | Array&lt;number&gt;
`resultsQuadrant` | [DepartmentOverviewResultsQuadrant](DepartmentOverviewResultsQuadrant.md)
`headlineStats` | [Array&lt;DepartmentOverviewHeadlineStat&gt;](DepartmentOverviewHeadlineStat.md)
`flowSummary` | [DepartmentOverviewFlowSummary](DepartmentOverviewFlowSummary.md)
`topRevenueLines` | [Array&lt;DepartmentOverviewTopLine&gt;](DepartmentOverviewTopLine.md)
`topExpenseLines` | [Array&lt;DepartmentOverviewTopLine&gt;](DepartmentOverviewTopLine.md)
`dollarShares` | [DepartmentOverviewDollarShares](DepartmentOverviewDollarShares.md)
`provenance` | [DepartmentOverviewProvenance](DepartmentOverviewProvenance.md)
`resultsGap` | [DepartmentOverviewResultsGap](DepartmentOverviewResultsGap.md)
`eadaCoaching` | [DepartmentFinancialsEadaCoaching](DepartmentFinancialsEadaCoaching.md)

## Example

```typescript
import type { SchoolDepartmentOverview } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "conference": null,
  "latestFiledYear": null,
  "selectedYear": null,
  "availableYears": null,
  "resultsQuadrant": null,
  "headlineStats": null,
  "flowSummary": null,
  "topRevenueLines": null,
  "topExpenseLines": null,
  "dollarShares": null,
  "provenance": null,
  "resultsGap": null,
  "eadaCoaching": null,
} satisfies SchoolDepartmentOverview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolDepartmentOverview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


