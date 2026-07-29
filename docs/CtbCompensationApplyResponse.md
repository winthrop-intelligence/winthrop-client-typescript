
# CtbCompensationApplyResponse


## Properties

Name | Type
------------ | -------------
`reviewSeriesId` | string
`reviewRevisionSha256` | string
`decisionSha256` | string
`requestSha256` | string
`foiaRequestId` | number
`schoolId` | number
`requestedItemId` | number
`compensationId` | number
`status` | string
`result` | [CtbCompensationAppliedException](CtbCompensationAppliedException.md)

## Example

```typescript
import type { CtbCompensationApplyResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "reviewSeriesId": null,
  "reviewRevisionSha256": null,
  "decisionSha256": null,
  "requestSha256": null,
  "foiaRequestId": null,
  "schoolId": null,
  "requestedItemId": null,
  "compensationId": null,
  "status": null,
  "result": null,
} satisfies CtbCompensationApplyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CtbCompensationApplyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


