
# JobPostSalaryBenchmark


## Properties

Name | Type
------------ | -------------
`resolvedScope` | [JobPostSalaryBenchmarkScope](JobPostSalaryBenchmarkScope.md)
`sample` | [JobPostSalaryBenchmarkSample](JobPostSalaryBenchmarkSample.md)
`postedSalarySummary` | [JobPostSalarySummary](JobPostSalarySummary.md)
`salaryBasisNotes` | [JobPostSalaryBenchmarkSalaryBasisNotes](JobPostSalaryBenchmarkSalaryBasisNotes.md)
`representativePosts` | [Array&lt;JobPostSalaryBenchmarkPost&gt;](JobPostSalaryBenchmarkPost.md)
`outliers` | [Array&lt;JobPostSalaryBenchmarkPost&gt;](JobPostSalaryBenchmarkPost.md)
`coverageNotes` | Array&lt;string&gt;
`provenance` | [JobPostSalaryBenchmarkProvenance](JobPostSalaryBenchmarkProvenance.md)
`whyEmpty` | string
`relaxationSuggestions` | Array&lt;string&gt;

## Example

```typescript
import type { JobPostSalaryBenchmark } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "resolvedScope": null,
  "sample": null,
  "postedSalarySummary": null,
  "salaryBasisNotes": null,
  "representativePosts": null,
  "outliers": null,
  "coverageNotes": null,
  "provenance": null,
  "whyEmpty": no_matching_posts,
  "relaxationSuggestions": null,
} satisfies JobPostSalaryBenchmark

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostSalaryBenchmark
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


