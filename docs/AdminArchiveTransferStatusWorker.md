
# AdminArchiveTransferStatusWorker

The archive copy job\'s last check-in; null when it has never checked in.

## Properties

Name | Type
------------ | -------------
`checkedAt` | Date
`copyEnabled` | boolean
`writerConfigured` | boolean
`stale` | boolean
`ready` | boolean

## Example

```typescript
import type { AdminArchiveTransferStatusWorker } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "checkedAt": null,
  "copyEnabled": null,
  "writerConfigured": null,
  "stale": null,
  "ready": null,
} satisfies AdminArchiveTransferStatusWorker

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminArchiveTransferStatusWorker
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


