
# MergeCoach200Response


## Properties

Name | Type
------------ | -------------
`id` | number
`status` | string
`primaryCoachId` | number
`duplicateCoachId` | number
`failureReason` | string

## Example

```typescript
import type { MergeCoach200Response } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "primaryCoachId": null,
  "duplicateCoachId": null,
  "failureReason": null,
} satisfies MergeCoach200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MergeCoach200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


