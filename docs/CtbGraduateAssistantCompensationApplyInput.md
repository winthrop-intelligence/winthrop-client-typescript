
# CtbGraduateAssistantCompensationApplyInput


## Properties

Name | Type
------------ | -------------
`reviewSeriesId` | string
`reviewRevisionSha256` | string
`decisionSha256` | string
`foiaRequestId` | number
`schoolId` | number
`requestedItemId` | number
`compensationId` | number
`role` | string
`actions` | Set&lt;string&gt;
`requestedItemNote` | string
`compensationComment` | string
`positionIds` | Set&lt;number&gt;
`expectedRequest` | [CtbCompensationExpectedRequest](CtbCompensationExpectedRequest.md)
`expectedRequestedItem` | [FoiaInboxExpectedRequestedItem](FoiaInboxExpectedRequestedItem.md)
`expectedCompensation` | [FoiaInboxExpectedCompensation](FoiaInboxExpectedCompensation.md)

## Example

```typescript
import type { CtbGraduateAssistantCompensationApplyInput } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "reviewSeriesId": null,
  "reviewRevisionSha256": null,
  "decisionSha256": null,
  "foiaRequestId": null,
  "schoolId": null,
  "requestedItemId": null,
  "compensationId": null,
  "role": null,
  "actions": null,
  "requestedItemNote": null,
  "compensationComment": null,
  "positionIds": null,
  "expectedRequest": null,
  "expectedRequestedItem": null,
  "expectedCompensation": null,
} satisfies CtbGraduateAssistantCompensationApplyInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CtbGraduateAssistantCompensationApplyInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


