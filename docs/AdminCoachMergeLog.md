
# AdminCoachMergeLog


## Properties

Name | Type
------------ | -------------
`id` | number
`primaryCoachId` | number
`duplicateCoachId` | number
`status` | string
`failureReason` | string
`createdAt` | Date
`user` | [ContactSearchCoachOptionsCoachesInner](ContactSearchCoachOptionsCoachesInner.md)

## Example

```typescript
import type { AdminCoachMergeLog } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "primaryCoachId": null,
  "duplicateCoachId": null,
  "status": null,
  "failureReason": null,
  "createdAt": null,
  "user": null,
} satisfies AdminCoachMergeLog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCoachMergeLog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


