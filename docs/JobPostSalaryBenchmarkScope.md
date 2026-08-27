
# JobPostSalaryBenchmarkScope


## Properties

Name | Type
------------ | -------------
`roleQuery` | string
`roleTerms` | Array&lt;string&gt;
`department` | string
`sport` | string
`conference` | string
`division` | string
`schoolQuery` | string
`peerSet` | Array&lt;string&gt;
`dateWindow` | [JobPostSalaryBenchmarkScopeDateWindow](JobPostSalaryBenchmarkScopeDateWindow.md)
`salaryBasis` | string
`responseFormat` | string

## Example

```typescript
import type { JobPostSalaryBenchmarkScope } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "roleQuery": athletics HR,
  "roleTerms": null,
  "department": Human Resources,
  "sport": null,
  "conference": SEC,
  "division": Division I,
  "schoolQuery": null,
  "peerSet": null,
  "dateWindow": null,
  "salaryBasis": posted_range,
  "responseFormat": concise,
} satisfies JobPostSalaryBenchmarkScope

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostSalaryBenchmarkScope
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


