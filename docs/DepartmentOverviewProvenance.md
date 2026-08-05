
# DepartmentOverviewProvenance


## Properties

Name | Type
------------ | -------------
`filingYear` | number
`cohortSize` | number
`reportingCount` | number
`nonReporting` | [Array&lt;DepartmentOverviewNonReportingSchool&gt;](DepartmentOverviewNonReportingSchool.md)

## Example

```typescript
import type { DepartmentOverviewProvenance } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "filingYear": null,
  "cohortSize": null,
  "reportingCount": null,
  "nonReporting": null,
} satisfies DepartmentOverviewProvenance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewProvenance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


