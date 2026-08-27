
# BulkUpdateGamePostSearchesRequest


## Properties

Name | Type
------------ | -------------
`publishGroupId` | string
`description` | string
`posts` | [Array&lt;BulkUpdateGamePostSearchesRequestPostsInner&gt;](BulkUpdateGamePostSearchesRequestPostsInner.md)
`seasonStart` | Date
`seasonEnd` | Date
`intents` | [Array&lt;BulkCreateGamePostSearchesRequestIntentsInner&gt;](BulkCreateGamePostSearchesRequestIntentsInner.md)

## Example

```typescript
import type { BulkUpdateGamePostSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "publishGroupId": null,
  "description": null,
  "posts": null,
  "seasonStart": null,
  "seasonEnd": null,
  "intents": null,
} satisfies BulkUpdateGamePostSearchesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateGamePostSearchesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


