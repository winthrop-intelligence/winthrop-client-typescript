
# CreateFrsExportRequest


## Properties

Name | Type
------------ | -------------
`scopeMode` | string
`conferenceId` | number
`schoolGroupId` | number
`financialYear` | number
`filename` | string
`seededFromConferenceId` | number
`schoolIds` | Array&lt;number&gt;
`sportIds` | Array&lt;number&gt;

## Example

```typescript
import type { CreateFrsExportRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "scopeMode": null,
  "conferenceId": null,
  "schoolGroupId": null,
  "financialYear": null,
  "filename": null,
  "seededFromConferenceId": null,
  "schoolIds": null,
  "sportIds": null,
} satisfies CreateFrsExportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFrsExportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


