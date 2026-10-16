
# AdminInvoiceRowAction

kind: create_invoice (subscription_year_id) | review_and_send (subscription_id, invoice_id) | open_invoice (subscription_id, invoice_id) | open_subscription (subscription_id). The frontend follows this to the matching page/action. 

## Properties

Name | Type
------------ | -------------
`kind` | string
`label` | string
`subscriptionId` | number
`invoiceId` | number
`subscriptionYearId` | number

## Example

```typescript
import type { AdminInvoiceRowAction } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "kind": null,
  "label": null,
  "subscriptionId": null,
  "invoiceId": null,
  "subscriptionYearId": null,
} satisfies AdminInvoiceRowAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceRowAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


