
# AdminArchiveTransferTableRun

The table\'s latest transfer run; null before the first.

## Properties

Name | Type
------------ | -------------
`id` | number
`state` | string
`active` | boolean
`strategy` | string
`cutoffAt` | Date
`startedAt` | Date
`heartbeatAt` | Date
`finishedAt` | Date
`errorMessage` | string
`progressPercent` | number
`counts` | [AdminArchiveTransferTableRunCounts](AdminArchiveTransferTableRunCounts.md)
`speed` | [AdminArchiveTransferTableRunSpeed](AdminArchiveTransferTableRunSpeed.md)
`activeSeconds` | number
`leftBehind` | [Array&lt;AdminArchiveTransferTableRunLeftBehindInner&gt;](AdminArchiveTransferTableRunLeftBehindInner.md)
`conflictIds` | Array&lt;number&gt;

## Example

```typescript
import type { AdminArchiveTransferTableRun } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "state": null,
  "active": null,
  "strategy": null,
  "cutoffAt": null,
  "startedAt": null,
  "heartbeatAt": null,
  "finishedAt": null,
  "errorMessage": null,
  "progressPercent": null,
  "counts": null,
  "speed": null,
  "activeSeconds": null,
  "leftBehind": null,
  "conflictIds": null,
} satisfies AdminArchiveTransferTableRun

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminArchiveTransferTableRun
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


