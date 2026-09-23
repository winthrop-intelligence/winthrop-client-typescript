
# NewerSeasonContext


## Properties

Name | Type
------------ | -------------
`year` | number
`schoolId` | number
`schoolName` | string
`schoolShortName` | string
`conferenceName` | string
`positionTitle` | string
`compensationCents` | number

## Example

```typescript
import type { NewerSeasonContext } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "schoolId": null,
  "schoolName": null,
  "schoolShortName": null,
  "conferenceName": null,
  "positionTitle": null,
  "compensationCents": null,
} satisfies NewerSeasonContext

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewerSeasonContext
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


