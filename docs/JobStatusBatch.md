
# JobStatusBatch


## Properties

Name | Type
------------ | -------------
`jobs` | [Array&lt;JobStatus&gt;](JobStatus.md)
`notFound` | Array&lt;string&gt;

## Example

```typescript
import type { JobStatusBatch } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "jobs": null,
  "notFound": null,
} satisfies JobStatusBatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobStatusBatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


