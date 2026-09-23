
# CreateSubscriptionRequestSubscription


## Properties

Name | Type
------------ | -------------
`accountId` | number
`subscriptionTypeId` | number
`startAt` | Date
`endAt` | Date
`notes` | string
`autorenew` | boolean
`sendRenewal` | boolean
`subscriptionYearsAttributes` | [Array&lt;CreateSubscriptionRequestSubscriptionSubscriptionYearsAttributesInner&gt;](CreateSubscriptionRequestSubscriptionSubscriptionYearsAttributesInner.md)

## Example

```typescript
import type { CreateSubscriptionRequestSubscription } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "accountId": null,
  "subscriptionTypeId": null,
  "startAt": null,
  "endAt": null,
  "notes": null,
  "autorenew": null,
  "sendRenewal": null,
  "subscriptionYearsAttributes": null,
} satisfies CreateSubscriptionRequestSubscription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSubscriptionRequestSubscription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


