
# UpdateSubscriptionAcceptanceRequest


## Properties

Name | Type
------------ | -------------
`acceptanceToken` | string
`subscription` | [UpdateSubscriptionAcceptanceRequestSubscription](UpdateSubscriptionAcceptanceRequestSubscription.md)

## Example

```typescript
import type { UpdateSubscriptionAcceptanceRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "acceptanceToken": null,
  "subscription": null,
} satisfies UpdateSubscriptionAcceptanceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSubscriptionAcceptanceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


