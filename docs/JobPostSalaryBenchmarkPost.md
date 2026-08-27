
# JobPostSalaryBenchmarkPost


## Properties

Name | Type
------------ | -------------
`id` | number
`remoteId` | number
`title` | string
`school` | string
`schoolWinadId` | number
`postedAt` | Date
`salary` | string
`postedMinSalary` | number
`postedMaxSalary` | number
`payPeriod` | string
`annualizedMin` | number
`annualizedMax` | number
`annualizedMidpoint` | number
`normalizationNote` | string
`sourceUrl` | string
`url` | string
`departments` | Array&lt;string&gt;
`sports` | Array&lt;string&gt;
`outlierSide` | string

## Example

```typescript
import type { JobPostSalaryBenchmarkPost } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "remoteId": null,
  "title": null,
  "school": null,
  "schoolWinadId": null,
  "postedAt": null,
  "salary": null,
  "postedMinSalary": null,
  "postedMaxSalary": null,
  "payPeriod": null,
  "annualizedMin": null,
  "annualizedMax": null,
  "annualizedMidpoint": null,
  "normalizationNote": null,
  "sourceUrl": null,
  "url": null,
  "departments": null,
  "sports": null,
  "outlierSide": null,
} satisfies JobPostSalaryBenchmarkPost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostSalaryBenchmarkPost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


