
# JobPostInterestLeadCandidate


## Properties

Name | Type
------------ | -------------
`id` | number
`email` | string
`firstName` | string
`lastName` | string
`claimedCoachId` | string
`claimedProfileUrl` | string

## Example

```typescript
import type { JobPostInterestLeadCandidate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1001,
  "email": candidate@example.com,
  "firstName": Jane,
  "lastName": Doe,
  "claimedCoachId": 183810,
  "claimedProfileUrl": https://app.example.com/jane-doe-183810,
} satisfies JobPostInterestLeadCandidate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostInterestLeadCandidate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


