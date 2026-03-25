
# RecordPositionEntry


## Properties

Name | Type
------------ | -------------
`sport` | string
`yearStr` | string
`schoolName` | string
`schoolId` | number
`positionSport` | string
`record` | string
`rpi` | string
`aprAsr` | string
`coachApr` | number
`departing` | boolean
`usNews` | string
`directorsCup` | string

## Example

```typescript
import type { RecordPositionEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sport": null,
  "yearStr": null,
  "schoolName": null,
  "schoolId": null,
  "positionSport": null,
  "record": null,
  "rpi": null,
  "aprAsr": null,
  "coachApr": null,
  "departing": null,
  "usNews": null,
  "directorsCup": null,
} satisfies RecordPositionEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecordPositionEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


