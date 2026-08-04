
# JobPostInterestLead


## Properties

Name | Type
------------ | -------------
`id` | number
`message` | string
`submittedAt` | Date
`recruiterEmailEnqueuedAt` | Date
`candidate` | [JobPostInterestLeadCandidate](JobPostInterestLeadCandidate.md)
`job` | [JobPostInterestLeadJob](JobPostInterestLeadJob.md)

## Example

```typescript
import type { JobPostInterestLead } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "message": I'd love to learn more about this role.,
  "submittedAt": 2026-06-22T14:03Z,
  "recruiterEmailEnqueuedAt": 2026-06-22T14:03:01Z,
  "candidate": null,
  "job": null,
} satisfies JobPostInterestLead

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostInterestLead
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


