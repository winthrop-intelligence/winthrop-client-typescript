
# AdminIncomeReportListMeta


## Properties

Name | Type
------------ | -------------
`currentPage` | number
`totalPages` | number
`totalEntries` | number
`nextPage` | number
`previousPage` | number
`contractStatusOptions` | [Array&lt;AdminIncomeReportContractStatusSummary&gt;](AdminIncomeReportContractStatusSummary.md)

## Example

```typescript
import type { AdminIncomeReportListMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "currentPage": null,
  "totalPages": null,
  "totalEntries": null,
  "nextPage": null,
  "previousPage": null,
  "contractStatusOptions": null,
} satisfies AdminIncomeReportListMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminIncomeReportListMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


