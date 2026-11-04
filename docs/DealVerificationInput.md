
# DealVerificationInput


## Properties

Name | Type
------------ | -------------
`verifiedAt` | Date
`result` | string
`method` | string
`agentRunId` | string
`evidenceUrl` | string
`batchId` | string
`codeVersion` | string

## Example

```typescript
import type { DealVerificationInput } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "verifiedAt": null,
  "result": null,
  "method": null,
  "agentRunId": null,
  "evidenceUrl": null,
  "batchId": null,
  "codeVersion": null,
} satisfies DealVerificationInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DealVerificationInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


