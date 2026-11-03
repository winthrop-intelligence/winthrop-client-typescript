
# DealVerification


## Properties

Name | Type
------------ | -------------
`id` | number
`dealId` | number
`verifiedAt` | Date
`result` | string
`method` | string
`verifiedById` | number
`agentRunId` | string
`evidenceUrl` | string
`reason` | string
`approvalQuote` | string
`batchId` | string
`codeVersion` | string
`createdAt` | Date

## Example

```typescript
import type { DealVerification } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "dealId": null,
  "verifiedAt": null,
  "result": null,
  "method": null,
  "verifiedById": null,
  "agentRunId": null,
  "evidenceUrl": null,
  "reason": null,
  "approvalQuote": null,
  "batchId": null,
  "codeVersion": null,
  "createdAt": null,
} satisfies DealVerification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DealVerification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


