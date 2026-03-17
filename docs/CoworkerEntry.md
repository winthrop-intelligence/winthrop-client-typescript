
# CoworkerEntry


## Properties

Name | Type
------------ | -------------
`coachId` | number
`name` | string
`initials` | string
`avatarUrl` | string
`positionTypeName` | string
`startYear` | number
`endYear` | number
`currentPositionTitle` | string
`currentSchoolName` | string
`salaryCents` | number
`coachFriendlyId` | string

## Example

```typescript
import type { CoworkerEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "name": null,
  "initials": null,
  "avatarUrl": null,
  "positionTypeName": null,
  "startYear": null,
  "endYear": null,
  "currentPositionTitle": null,
  "currentSchoolName": null,
  "salaryCents": null,
  "coachFriendlyId": null,
} satisfies CoworkerEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoworkerEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


