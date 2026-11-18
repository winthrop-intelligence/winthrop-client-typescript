
# AdminArchiveTransferRequest


## Properties

Name | Type
------------ | -------------
`id` | number
`tableName` | string
`maxRows` | number
`maxMinutes` | number
`state` | string
`outcome` | string
`results` | [{ [key: string]: AdminArchiveTransferRequestResultsValue; }](AdminArchiveTransferRequestResultsValue.md)
`stopRequestedAt` | Date
`startedAt` | Date
`finishedAt` | Date
`errorMessage` | string
`createdAt` | Date
`requestedBy` | [AdminArchiveTransferRequestRequestedBy](AdminArchiveTransferRequestRequestedBy.md)

## Example

```typescript
import type { AdminArchiveTransferRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tableName": null,
  "maxRows": null,
  "maxMinutes": null,
  "state": null,
  "outcome": null,
  "results": null,
  "stopRequestedAt": null,
  "startedAt": null,
  "finishedAt": null,
  "errorMessage": null,
  "createdAt": null,
  "requestedBy": null,
} satisfies AdminArchiveTransferRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminArchiveTransferRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


