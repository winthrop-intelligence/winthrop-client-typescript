
# DeskReportActivity


## Properties

Name | Type
------------ | -------------
`meta` | [DeskReportActivityMeta](DeskReportActivityMeta.md)
`data` | [Array&lt;DeskActivityViewer&gt;](DeskActivityViewer.md)
`summary` | [DeskActivitySummary](DeskActivitySummary.md)
`periodTotals` | [DeskActivitySummary](DeskActivitySummary.md)
`error` | [DeskReportActivityError](DeskReportActivityError.md)

## Example

```typescript
import type { DeskReportActivity } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
  "summary": null,
  "periodTotals": null,
  "error": null,
} satisfies DeskReportActivity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskReportActivity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


