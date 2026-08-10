
# GameContractApplyResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`status` | string
`reviewSeriesId` | string
`reviewRevisionSha256` | string
`decisionSha256` | string
`requestSha256` | string
`actor` | [GameContractApplyResponseActor](GameContractApplyResponseActor.md)
`rawContractId` | number
`actions` | [{ [key: string]: GameContractApplyResponseActionsValue; }](GameContractApplyResponseActionsValue.md)
`sourceDocument` | [GameContractApplyResponseSourceDocument](GameContractApplyResponseSourceDocument.md)
`pdfProcessing` | [GameContractApplyResponsePdfProcessing](GameContractApplyResponsePdfProcessing.md)

## Example

```typescript
import type { GameContractApplyResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "status": null,
  "reviewSeriesId": null,
  "reviewRevisionSha256": null,
  "decisionSha256": null,
  "requestSha256": null,
  "actor": null,
  "rawContractId": null,
  "actions": null,
  "sourceDocument": null,
  "pdfProcessing": null,
} satisfies GameContractApplyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameContractApplyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


