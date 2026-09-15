
# PublishAdminDeskReportRequest

First publication sends body_html and optional note/change_note/renotify fields. Publishing a new version requires update, a JSON-encoded DeskAdminReportPublishUpdate; top-level publication fields are ignored when update is present. File uploads require multipart/form-data and travel in downloads[pdf], downloads[xlsx] and downloads[pptx]. An update without new files may also send the JSON-encoded update field as application/json. 

## Properties

Name | Type
------------ | -------------
`bodyHtml` | string
`note` | string
`changeNote` | string
`renotify` | boolean
`update` | string
`downloadsPdf` | Blob
`downloadsXlsx` | Blob
`downloadsPptx` | Blob

## Example

```typescript
import type { PublishAdminDeskReportRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "bodyHtml": null,
  "note": null,
  "changeNote": null,
  "renotify": null,
  "update": null,
  "downloadsPdf": null,
  "downloadsXlsx": null,
  "downloadsPptx": null,
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


