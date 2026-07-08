
# JobPostSalaryBenchmarkSample


## Properties

Name | Type
------------ | -------------
`totalMatchingPosts` | number
`postsWithStructuredSalary` | number
`postsWithSalaryTextOnly` | number
`postsWithoutSalary` | number

## Example

```typescript
import type { JobPostSalaryBenchmarkSample } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "totalMatchingPosts": 12,
  "postsWithStructuredSalary": 7,
  "postsWithSalaryTextOnly": 3,
  "postsWithoutSalary": 2,
} satisfies JobPostSalaryBenchmarkSample

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostSalaryBenchmarkSample
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


