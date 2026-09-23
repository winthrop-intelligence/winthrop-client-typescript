
# AdminInvoiceFormHints

\"From schedule: …\" text per field, null where there is nothing to say.

## Properties

Name | Type
------------ | -------------
`invoiceDate` | string
`description` | string
`amountCents` | string
`dueDate` | string
`dueDateNotes` | string
`purchaseOrderNumber` | string

## Example

```typescript
import type { AdminInvoiceFormHints } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "invoiceDate": null,
  "description": null,
  "amountCents": null,
  "dueDate": null,
  "dueDateNotes": null,
  "purchaseOrderNumber": null,
} satisfies AdminInvoiceFormHints

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceFormHints
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


