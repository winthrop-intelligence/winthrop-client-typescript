
# ContactSearchEntry


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`coachId` | number
`sportId` | number
`coachName` | string
`sportNameDisplay` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ContactSearchEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "schoolId": 2,
  "coachId": 3,
  "sportId": 4,
  "coachName": John Smith,
  "sportNameDisplay": Basketball Men's,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
} satisfies ContactSearchEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContactSearchEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


