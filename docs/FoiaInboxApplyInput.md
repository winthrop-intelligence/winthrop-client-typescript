
# FoiaInboxApplyInput


## Properties

Name | Type
------------ | -------------
`mailbox` | string
`gmailMessageId` | string
`gmailThreadId` | string
`runId` | string
`foiaRequestId` | number
`schoolId` | number
`decisionSha256` | string
`expectedRequest` | [FoiaInboxApplyInputExpectedRequest](FoiaInboxApplyInputExpectedRequest.md)
`effects` | [FoiaInboxEffects](FoiaInboxEffects.md)

## Example

```typescript
import type { FoiaInboxApplyInput } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "mailbox": null,
  "gmailMessageId": null,
  "gmailThreadId": null,
  "runId": null,
  "foiaRequestId": null,
  "schoolId": null,
  "decisionSha256": null,
  "expectedRequest": null,
  "effects": null,
} satisfies FoiaInboxApplyInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaInboxApplyInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


