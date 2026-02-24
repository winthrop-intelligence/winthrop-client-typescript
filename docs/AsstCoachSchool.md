
# AsstCoachSchool


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`poolTotal` | number
`coaches` | [Array&lt;AsstCoachEntry&gt;](AsstCoachEntry.md)

## Example

```typescript
import type { AsstCoachSchool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "schoolName": null,
  "poolTotal": null,
  "coaches": null,
} satisfies AsstCoachSchool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AsstCoachSchool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


