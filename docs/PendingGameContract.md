
# PendingGameContract


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`schoolName` | string
`foiaLabelId` | number
`filename` | string
`driveId` | string
`createdAt` | Date
`sha256` | string
`ocrTextReady` | boolean
`pending` | boolean

## Example

```typescript
import type { PendingGameContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "schoolName": null,
  "foiaLabelId": null,
  "filename": null,
  "driveId": null,
  "createdAt": null,
  "sha256": null,
  "ocrTextReady": null,
  "pending": null,
} satisfies PendingGameContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingGameContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


