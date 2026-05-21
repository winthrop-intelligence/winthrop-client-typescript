
# AccountDetail


## Properties

Name | Type
------------ | -------------
`id` | number
`accountableType` | string
`associatedName` | string
`emailDomain` | string
`originalContractDate` | Date
`billingAddresses` | [Array&lt;AccountBillingAddress&gt;](AccountBillingAddress.md)
`subscriptions` | [Array&lt;AccountSubscription&gt;](AccountSubscription.md)
`invoices` | [Array&lt;AccountInvoice&gt;](AccountInvoice.md)

## Example

```typescript
import type { AccountDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountableType": null,
  "associatedName": null,
  "emailDomain": null,
  "originalContractDate": null,
  "billingAddresses": null,
  "subscriptions": null,
  "invoices": null,
} satisfies AccountDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


