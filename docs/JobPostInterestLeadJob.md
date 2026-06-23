
# JobPostInterestLeadJob


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`slug` | string
`url` | string
`postedAt` | Date
`expiredAt` | Date
`school` | [JobSchool](JobSchool.md)

## Example

```typescript
import type { JobPostInterestLeadJob } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "title": Head Coach, Basketball,
  "slug": head-coach-basketball-1,
  "url": https://app.example.com/job/head-coach-basketball-1.json,
  "postedAt": 2026-06-01T00:00Z,
  "expiredAt": 2026-07-01T00:00Z,
  "school": null,
} satisfies JobPostInterestLeadJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostInterestLeadJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


