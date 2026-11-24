
# FoiaFollowupSentEventRequest


## Properties

Name | Type
------------ | -------------
`cycle` | [FoiaFollowupSentEventRequestCycle](FoiaFollowupSentEventRequestCycle.md)
`expectedStatus` | string
`processedOn` | Date
`idempotencyKey` | string

## Example

```typescript
import type { FoiaFollowupSentEventRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "cycle": null,
  "expectedStatus": null,
  "processedOn": null,
  "idempotencyKey": null,
} satisfies FoiaFollowupSentEventRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaFollowupSentEventRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


