
# RecruitingConferenceEntry


## Properties

Name | Type
------------ | -------------
`schoolName` | string
`schoolId` | number
`classRank` | number
`conferenceRecord` | string
`overallRecord` | string
`postseason` | string

## Example

```typescript
import type { RecruitingConferenceEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolName": null,
  "schoolId": null,
  "classRank": null,
  "conferenceRecord": null,
  "overallRecord": null,
  "postseason": null,
} satisfies RecruitingConferenceEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecruitingConferenceEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


