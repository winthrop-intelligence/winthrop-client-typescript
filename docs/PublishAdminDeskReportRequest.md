
# PublishAdminDeskReportRequest


## Properties

Name | Type
------------ | -------------
`bodyHtml` | string
`note` | string
`changeNote` | string
`renotify` | boolean

## Example

```typescript
import type { PublishAdminDeskReportRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "bodyHtml": null,
  "note": null,
  "changeNote": null,
  "renotify": null,
} satisfies PublishAdminDeskReportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishAdminDeskReportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


