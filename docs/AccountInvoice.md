
# AccountInvoice


## Properties

Name | Type
------------ | -------------
`id` | number
`invoiceDate` | Date
`description` | string
`amountCents` | number
`purchaseOrderNumber` | string
`dueDate` | Date
`dueDateNotes` | string
`paymentReceived` | Date
`status` | string
`reminders` | boolean
`subscriptionId` | number
`createdByName` | string

## Example

```typescript
import type { AccountInvoice } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "invoiceDate": null,
  "description": null,
  "amountCents": null,
  "purchaseOrderNumber": null,
  "dueDate": null,
  "dueDateNotes": null,
  "paymentReceived": null,
  "status": null,
  "reminders": null,
  "subscriptionId": null,
  "createdByName": null,
} satisfies AccountInvoice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountInvoice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


