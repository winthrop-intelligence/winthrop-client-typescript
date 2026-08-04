
# JobResult


## Properties

Name | Type
------------ | -------------
`jobId` | string
`ocrRunId` | string
`status` | string
`profile` | string
`policyVersion` | string
`sourceSha256` | string
`text` | string
`textSha256` | string
`pages` | [Array&lt;PageResult&gt;](PageResult.md)
`missingPages` | Array&lt;number&gt;
`summary` | { [key: string]: any; }

## Example

```typescript
import type { JobResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "jobId": null,
  "ocrRunId": null,
  "status": null,
  "profile": null,
  "policyVersion": null,
  "sourceSha256": null,
  "text": null,
  "textSha256": null,
  "pages": null,
  "missingPages": null,
  "summary": null,
} satisfies JobResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


