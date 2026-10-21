
# AdminSportPosition


## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`coachName` | string
`schoolId` | number
`schoolName` | string
`year` | number

## Example

```typescript
import type { AdminSportPosition } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "coachId": null,
  "coachName": null,
  "schoolId": null,
  "schoolName": null,
  "year": null,
} satisfies AdminSportPosition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSportPosition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


