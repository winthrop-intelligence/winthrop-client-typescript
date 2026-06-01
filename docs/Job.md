
# Job


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`description` | string
`jobUrl` | string
`postedAt` | Date
`createdAt` | Date
`school` | [JobSchool](JobSchool.md)
`departments` | [Array&lt;JobDepartment&gt;](JobDepartment.md)
`sports` | [Array&lt;JobSport&gt;](JobSport.md)
`candidates` | [Array&lt;JobCandidate&gt;](JobCandidate.md)

## Example

```typescript
import type { Job } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "title": John,
  "description": John,
  "jobUrl": https://job-url.com,
  "postedAt": 2019-01-01T00:00Z,
  "createdAt": 2019-01-01T00:00Z,
  "school": null,
  "departments": null,
  "sports": null,
  "candidates": null,
} satisfies Job

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Job
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


