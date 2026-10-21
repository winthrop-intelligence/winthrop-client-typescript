
# MassCreatePositionsRequest


## Properties

Name | Type
------------ | -------------
`coachId` | number
`schoolId` | number
`sportIds` | Array&lt;number&gt;
`positionTypeIds` | Array&lt;number&gt;
`positionTitle` | string
`massStartYear` | number
`massEndYear` | number

## Example

```typescript
import type { MassCreatePositionsRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "schoolId": null,
  "sportIds": null,
  "positionTypeIds": null,
  "positionTitle": null,
  "massStartYear": null,
  "massEndYear": null,
} satisfies MassCreatePositionsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MassCreatePositionsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


