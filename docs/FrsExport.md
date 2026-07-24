
# FrsExport


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`status` | string
`statusDetail` | string
`sportNames` | Array&lt;string&gt;
`includedSchoolNames` | Array&lt;string&gt;
`selectedCount` | number
`includedCount` | number
`financialYear` | number
`createdAt` | Date
`downloadUrl` | string
`config` | [FrsExportConfig](FrsExportConfig.md)

## Example

```typescript
import type { FrsExport } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "status": null,
  "statusDetail": null,
  "sportNames": null,
  "includedSchoolNames": null,
  "selectedCount": null,
  "includedCount": null,
  "financialYear": null,
  "createdAt": null,
  "downloadUrl": null,
  "config": null,
} satisfies FrsExport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FrsExport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


