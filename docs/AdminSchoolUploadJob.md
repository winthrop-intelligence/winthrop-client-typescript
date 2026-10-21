
# AdminSchoolUploadJob

One in-progress/enqueued update_school_info_importer Sidekiq job

## Properties

Name | Type
------------ | -------------
`jobId` | string
`arguments` | Array&lt;any&gt;
`enqueuedAt` | Date
`status` | string

## Example

```typescript
import type { AdminSchoolUploadJob } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "jobId": null,
  "arguments": null,
  "enqueuedAt": null,
  "status": null,
} satisfies AdminSchoolUploadJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSchoolUploadJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


