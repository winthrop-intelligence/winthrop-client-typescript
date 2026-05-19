
# InvoiceReportRow


## Properties

Name | Type
------------ | -------------
`id` | number
`invoiceDate` | Date
`dueDate` | Date
`paymentReceived` | Date
`status` | string
`amountDollars` | object
`notes` | string
`account` | [InvoiceReportAccount](InvoiceReportAccount.md)

## Example

```typescript
import type { InvoiceReportRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "invoiceDate": null,
  "dueDate": null,
  "paymentReceived": null,
  "status": null,
  "amountDollars": null,
  "notes": null,
  "account": null,
} satisfies InvoiceReportRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceReportRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


