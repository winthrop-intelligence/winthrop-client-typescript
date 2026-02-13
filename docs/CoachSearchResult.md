
# CoachSearchResult


## Properties

Name | Type
------------ | -------------
`id` | number
`firstName` | string
`lastName` | string
`schoolName` | string
`schoolId` | number
`conferenceName` | string
`conferenceId` | number
`divisionName` | string
`divisionId` | number
`year` | number
`positionTypes` | Array&lt;string&gt;
`compensationCents` | number
`baseSalaryCents` | number
`adjustedCompCents` | number
`contractExpiresOn` | Date
`avatarUrl` | string

## Example

```typescript
import type { CoachSearchResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": null,
  "lastName": null,
  "schoolName": null,
  "schoolId": null,
  "conferenceName": null,
  "conferenceId": null,
  "divisionName": null,
  "divisionId": null,
  "year": null,
  "positionTypes": null,
  "compensationCents": null,
  "baseSalaryCents": null,
  "adjustedCompCents": null,
  "contractExpiresOn": null,
  "avatarUrl": null,
} satisfies CoachSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


