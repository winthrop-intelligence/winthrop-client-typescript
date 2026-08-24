
# DeskAdminPublishResponseData

The 06.4 receipt (DeskPublishReceipt) plus the version minted — never the body

## Properties

Name | Type
------------ | -------------
`report` | [DeskAdminPublishResponseDataReport](DeskAdminPublishResponseDataReport.md)
`client` | string
`turnaroundLabel` | string
`requesterName` | string
`version` | [DeskAdminVersion](DeskAdminVersion.md)
`notified` | boolean
`notifiedCount` | number
`notifiedNames` | Array&lt;string&gt;
`notifyFailed` | boolean
`warnings` | [Array&lt;DeskFinding&gt;](DeskFinding.md)

## Example

```typescript
import type { DeskAdminPublishResponseData } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "report": null,
  "client": null,
  "turnaroundLabel": null,
  "requesterName": null,
  "version": null,
  "notified": null,
  "notifiedCount": null,
  "notifiedNames": null,
  "notifyFailed": null,
  "warnings": null,
} satisfies DeskAdminPublishResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminPublishResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


