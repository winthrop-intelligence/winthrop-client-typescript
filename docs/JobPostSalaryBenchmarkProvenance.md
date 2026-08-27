
# JobPostSalaryBenchmarkProvenance


## Properties

Name | Type
------------ | -------------
`asOf` | Date
`source` | string
`sourceBasis` | string
`sourceUpdatedAt` | Date
`confidence` | string
`permissionFilteredCount` | number

## Example

```typescript
import type { JobPostSalaryBenchmarkProvenance } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "asOf": null,
  "source": wi_jobs.job_posts,
  "sourceBasis": posted_salary,
  "sourceUpdatedAt": null,
  "confidence": null,
  "permissionFilteredCount": null,
} satisfies JobPostSalaryBenchmarkProvenance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostSalaryBenchmarkProvenance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


