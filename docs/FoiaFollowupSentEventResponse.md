
# FoiaFollowupSentEventResponse


## Properties

Name | Type
------------ | -------------
`foiaRequestId` | number
`idempotencyKey` | string
`before` | [FoiaFollowupSentEventSnapshot](FoiaFollowupSentEventSnapshot.md)
`after` | [FoiaFollowupSentEventSnapshot](FoiaFollowupSentEventSnapshot.md)

## Example

```typescript
import type { FoiaFollowupSentEventResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "foiaRequestId": null,
  "idempotencyKey": null,
  "before": null,
  "after": null,
} satisfies FoiaFollowupSentEventResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaFollowupSentEventResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


