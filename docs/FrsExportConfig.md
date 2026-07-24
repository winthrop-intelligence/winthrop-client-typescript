
# FrsExportConfig


## Properties

Name | Type
------------ | -------------
`scopeMode` | string
`conferenceId` | number
`schoolGroupId` | number
`schoolIds` | Array&lt;number&gt;
`sportIds` | Array&lt;number&gt;
`financialYear` | number
`filename` | string
`seededFromConferenceId` | number

## Example

```typescript
import type { FrsExportConfig } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "scopeMode": null,
  "conferenceId": null,
  "schoolGroupId": null,
  "schoolIds": null,
  "sportIds": null,
  "financialYear": null,
  "filename": null,
  "seededFromConferenceId": null,
} satisfies FrsExportConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FrsExportConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


