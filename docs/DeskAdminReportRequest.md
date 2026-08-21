
# DeskAdminReportRequest


## Properties

Name | Type
------------ | -------------
`uuid` | string
`status` | string
`requesterName` | string
`body` | string
`receivedAt` | Date
`clockPaused` | boolean

## Example

```typescript
import type { DeskAdminReportRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "uuid": null,
  "status": null,
  "requesterName": null,
  "body": null,
  "receivedAt": null,
  "clockPaused": null,
} satisfies DeskAdminReportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminReportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


