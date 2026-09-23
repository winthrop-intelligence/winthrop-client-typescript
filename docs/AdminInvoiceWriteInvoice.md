
# AdminInvoiceWriteInvoice


## Properties

Name | Type
------------ | -------------
`subscriptionYearId` | number
`invoiceDate` | Date
`description` | string
`amountCents` | number
`dueDate` | Date
`dueDateNotes` | string
`purchaseOrderNumber` | string
`notes` | string
`reminders` | boolean

## Example

```typescript
import type { AdminInvoiceWriteInvoice } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "subscriptionYearId": null,
  "invoiceDate": null,
  "description": null,
  "amountCents": null,
  "dueDate": null,
  "dueDateNotes": null,
  "purchaseOrderNumber": null,
  "notes": null,
  "reminders": null,
} satisfies AdminInvoiceWriteInvoice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceWriteInvoice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


