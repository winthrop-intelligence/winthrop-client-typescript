
# GetAdminDeskReportActivity200Response


## Properties

Name | Type
------------ | -------------
`kind` | string
`meta` | [DeskReportDownloadActivityMeta](DeskReportDownloadActivityMeta.md)
`data` | [Array&lt;DeskActivityDownload&gt;](DeskActivityDownload.md)
`summary` | [DeskActivityDownloadSummary](DeskActivityDownloadSummary.md)
`periodTotals` | [DeskActivityDownloadSummary](DeskActivityDownloadSummary.md)
`error` | [DeskReportActivityError](DeskReportActivityError.md)

## Example

```typescript
import type { GetAdminDeskReportActivity200Response } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "kind": null,
  "meta": null,
  "data": null,
  "summary": null,
  "periodTotals": null,
  "error": null,
} satisfies GetAdminDeskReportActivity200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAdminDeskReportActivity200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


