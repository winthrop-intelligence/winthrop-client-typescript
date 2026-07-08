
# JobPostSalaryBenchmarkSalaryBasisNotes


## Properties

Name | Type
------------ | -------------
`sourceBasis` | string
`normalization` | string
`annualizationMultipliers` | object
`normalizedPosts` | number
`salaryBasis` | string
`summaryBasis` | string

## Example

```typescript
import type { JobPostSalaryBenchmarkSalaryBasisNotes } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sourceBasis": Posted job salary fields, not executed WinAD compensation data,
  "normalization": null,
  "annualizationMultipliers": null,
  "normalizedPosts": null,
  "salaryBasis": posted_range,
  "summaryBasis": annualized_values,
} satisfies JobPostSalaryBenchmarkSalaryBasisNotes

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostSalaryBenchmarkSalaryBasisNotes
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


