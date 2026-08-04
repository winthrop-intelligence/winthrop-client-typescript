
# JobStatus


## Properties

Name | Type
------------ | -------------
`jobId` | string
`status` | string
`profile` | string
`pageCount` | number
`progress` | [JobProgress](JobProgress.md)
`createdAt` | string
`completedAt` | string
`uploadedFileId` | string
`error` | string

## Example

```typescript
import type { JobStatus } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "jobId": null,
  "status": null,
  "profile": null,
  "pageCount": null,
  "progress": null,
  "createdAt": null,
  "completedAt": null,
  "uploadedFileId": null,
  "error": null,
} satisfies JobStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


