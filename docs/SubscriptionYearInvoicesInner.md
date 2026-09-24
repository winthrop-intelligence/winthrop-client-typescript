
# SubscriptionYearInvoicesInner


## Properties

Name | Type
------------ | -------------
`subscriptionYearId` | number
`invoiceId` | number
`state` | string
`sentAt` | Date
`paymentReceived` | Date

## Example

```typescript
import type { SubscriptionYearInvoicesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "subscriptionYearId": null,
  "invoiceId": null,
  "state": null,
  "sentAt": null,
  "paymentReceived": null,
} satisfies SubscriptionYearInvoicesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriptionYearInvoicesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


