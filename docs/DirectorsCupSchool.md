
# DirectorsCupSchool


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`rankings` | { [key: string]: number | null; }

## Example

```typescript
import type { DirectorsCupSchool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "schoolName": null,
  "rankings": null,
} satisfies DirectorsCupSchool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DirectorsCupSchool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


