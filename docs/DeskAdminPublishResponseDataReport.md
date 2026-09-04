
# DeskAdminPublishResponseDataReport


## Properties

Name | Type
------------ | -------------
`uuid` | string
`title` | string
`publishedAt` | Date
`versionNumber` | number
`artifactKinds` | Array&lt;string&gt;

## Example

```typescript
import type { DeskAdminPublishResponseDataReport } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "uuid": null,
  "title": null,
  "publishedAt": null,
  "versionNumber": null,
  "artifactKinds": null,
} satisfies DeskAdminPublishResponseDataReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminPublishResponseDataReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


