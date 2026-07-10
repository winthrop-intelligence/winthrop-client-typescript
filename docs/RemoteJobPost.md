
# RemoteJobPost

Full Central Jobs job post snapshot. Required nullable fields must be sent with null when blank.

## Properties

Name | Type
------------ | -------------
`id` | number
`uid` | string
`title` | string
`link` | string
`workType` | string
`descriptionMd` | string
`salarySummary` | string
`schoolId` | number
`expired` | boolean
`createdAt` | Date
`updatedAt` | Date
`annualSalary` | number
`minSalary` | number
`maxSalary` | number
`payPeriod` | string
`requiredYearsOfExperience` | number

## Example

```typescript
import type { RemoteJobPost } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 11222,
  "uid": remote-job-uid,
  "title": Assistant Coach,
  "link": https://example.com/jobs/assistant-coach,
  "workType": full time,
  "descriptionMd": Lead practices,
  "salarySummary": $40,000,
  "schoolId": 12345,
  "expired": false,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "annualSalary": 40000,
  "minSalary": 35000,
  "maxSalary": 45000,
  "payPeriod": annual,
  "requiredYearsOfExperience": 2,
} satisfies RemoteJobPost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RemoteJobPost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


