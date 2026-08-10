
# AdminIncomeReportList


## Properties

Name | Type
------------ | -------------
`meta` | [AdminIncomeReportListMeta](AdminIncomeReportListMeta.md)
`data` | [Array&lt;AdminIncomeReport&gt;](AdminIncomeReport.md)

## Example

```typescript
import type { AdminIncomeReportList } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies AdminIncomeReportList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminIncomeReportList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


