
# AdminFoiaRequestFinancialYear


## Properties

Name | Type
------------ | -------------
`year` | number
`ncaaFinancialReportAvailable` | boolean
`ncaaFinancialReportFilename` | string
`ncaaStatusId` | number
`ncaaStatusAttached` | boolean
`auditedFinancialReportAvailable` | boolean
`auditedFinancialReportFilename` | string
`auditedStatusLabel` | string
`auditedStatusId` | number
`auditedStatusAttached` | boolean

## Example

```typescript
import type { AdminFoiaRequestFinancialYear } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "ncaaFinancialReportAvailable": null,
  "ncaaFinancialReportFilename": null,
  "ncaaStatusId": null,
  "ncaaStatusAttached": null,
  "auditedFinancialReportAvailable": null,
  "auditedFinancialReportFilename": null,
  "auditedStatusLabel": null,
  "auditedStatusId": null,
  "auditedStatusAttached": null,
} satisfies AdminFoiaRequestFinancialYear

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaRequestFinancialYear
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


