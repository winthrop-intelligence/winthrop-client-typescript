
# SchoolDepartmentGuarantees


## Properties

Name | Type
------------ | -------------
`school` | [SchoolDepartmentGuaranteesSchool](SchoolDepartmentGuaranteesSchool.md)
`conference` | [SchoolDepartmentFinancialsConference](SchoolDepartmentFinancialsConference.md)
`seasonYear` | number
`latestFiledYear` | number
`selectedYear` | number
`availableYears` | Array&lt;number&gt;
`quadrant` | [DepartmentGuaranteesQuadrant](DepartmentGuaranteesQuadrant.md)
`filedLine` | [DepartmentGuaranteesFiledLine](DepartmentGuaranteesFiledLine.md)
`committedOut` | [DepartmentGuaranteesCommittedSide](DepartmentGuaranteesCommittedSide.md)
`committedIn` | [DepartmentGuaranteesCommittedSide](DepartmentGuaranteesCommittedSide.md)
`sports` | [Array&lt;DepartmentGuaranteesSportLedger&gt;](DepartmentGuaranteesSportLedger.md)
`market` | [DepartmentGuaranteesMarket](DepartmentGuaranteesMarket.md)
`trend` | [Array&lt;DepartmentGuaranteesTrendEntry&gt;](DepartmentGuaranteesTrendEntry.md)

## Example

```typescript
import type { SchoolDepartmentGuarantees } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "conference": null,
  "seasonYear": null,
  "latestFiledYear": null,
  "selectedYear": null,
  "availableYears": null,
  "quadrant": null,
  "filedLine": null,
  "committedOut": null,
  "committedIn": null,
  "sports": null,
  "market": null,
  "trend": null,
} satisfies SchoolDepartmentGuarantees

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolDepartmentGuarantees
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


