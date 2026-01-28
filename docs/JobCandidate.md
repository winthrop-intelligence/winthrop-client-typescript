
# JobCandidate


## Properties

Name | Type
------------ | -------------
`coachId` | string
`id` | number
`favoriteId` | number
`createdById` | number
`createdAt` | Date
`shortlisted` | boolean

## Example

```typescript
import type { JobCandidate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": 183810,
  "id": 183810,
  "favoriteId": 183810,
  "createdById": 183810,
  "createdAt": 2019-01-01T00:00Z,
  "shortlisted": true,
} satisfies JobCandidate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobCandidate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


