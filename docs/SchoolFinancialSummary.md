
# SchoolFinancialSummary


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`year` | number
`years` | Array&lt;number&gt;
`schoolInfo` | [SchoolInfo](SchoolInfo.md)
`studentFeePerStudent` | number
`ncaaReportId` | number
`auditedReportId` | number
`revenues` | [Array&lt;SchoolFinancialGroup&gt;](SchoolFinancialGroup.md)
`expenses` | [Array&lt;SchoolFinancialGroup&gt;](SchoolFinancialGroup.md)

## Example

```typescript
import type { SchoolFinancialSummary } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "schoolName": null,
  "year": null,
  "years": null,
  "schoolInfo": null,
  "studentFeePerStudent": null,
  "ncaaReportId": null,
  "auditedReportId": null,
  "revenues": null,
  "expenses": null,
} satisfies SchoolFinancialSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolFinancialSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


