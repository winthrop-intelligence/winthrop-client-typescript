
# PersonAssignment

One position in a person summary (WINAD-10522). Lists are ranked by the lowest non-null position-type ord (unranked last), then sport name, school name, title and position ID.

## Properties

Name | Type
------------ | -------------
`positionId` | number
`year` | number
`schoolId` | number
`schoolName` | string
`schoolShortName` | string
`sportId` | number
`sportName` | string
`title` | string

## Example

```typescript
import type { PersonAssignment } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "positionId": null,
  "year": null,
  "schoolId": null,
  "schoolName": null,
  "schoolShortName": null,
  "sportId": null,
  "sportName": null,
  "title": null,
} satisfies PersonAssignment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonAssignment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


