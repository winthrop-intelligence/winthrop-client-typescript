
# ConferencePositionEntry


## Properties

Name | Type
------------ | -------------
`yearStr` | string
`schoolName` | string
`schoolId` | number
`sport` | string
`position` | string
`record` | string
`conferenceRecord` | string
`postseason` | string

## Example

```typescript
import type { ConferencePositionEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "yearStr": null,
  "schoolName": null,
  "schoolId": null,
  "sport": null,
  "position": null,
  "record": null,
  "conferenceRecord": null,
  "postseason": null,
} satisfies ConferencePositionEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConferencePositionEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


