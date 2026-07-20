
# JobAccepted


## Properties

Name | Type
------------ | -------------
`jobId` | string
`status` | string
`statusUrl` | string
`resultUrl` | string

## Example

```typescript
import type { JobAccepted } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "jobId": null,
  "status": null,
  "statusUrl": null,
  "resultUrl": null,
} satisfies JobAccepted

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobAccepted
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


