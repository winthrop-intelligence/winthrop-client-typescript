
# AdminInvoiceForm

The invoice form/detail (WINAD-10496) — same shape whether it\'s an unsaved prefill, a draft, or sent/paid.

## Properties

Name | Type
------------ | -------------
`id` | number
`subscriptionId` | number
`subscriptionYearId` | number
`accountId` | number
`accountName` | string
`subscriptionTypeName` | string
`yearNumber` | number
`yearsTotal` | number
`serviceStart` | Date
`serviceEnd` | Date
`invoiceDate` | Date
`description` | string
`amountCents` | number
`dueDate` | Date
`dueDateNotes` | string
`purchaseOrderNumber` | string
`notes` | string
`reminders` | boolean
`persisted` | boolean
`sentAt` | Date
`status` | string
`paymentReceived` | Date
`legacy` | boolean
`hints` | [AdminInvoiceFormHints](AdminInvoiceFormHints.md)
`recipients` | [Array&lt;AdminInvoiceFormRecipientsInner&gt;](AdminInvoiceFormRecipientsInner.md)
`accountContacts` | [Array&lt;AdminInvoiceFormAccountContactsInner&gt;](AdminInvoiceFormAccountContactsInner.md)
`defaultMessage` | string
`schedule` | [Array&lt;AdminInvoiceFormScheduleInner&gt;](AdminInvoiceFormScheduleInner.md)
`servicePeriods` | [Array&lt;AdminInvoiceFormServicePeriodsInner&gt;](AdminInvoiceFormServicePeriodsInner.md)

## Example

```typescript
import type { AdminInvoiceForm } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "subscriptionId": null,
  "subscriptionYearId": null,
  "accountId": null,
  "accountName": null,
  "subscriptionTypeName": null,
  "yearNumber": null,
  "yearsTotal": null,
  "serviceStart": null,
  "serviceEnd": null,
  "invoiceDate": null,
  "description": null,
  "amountCents": null,
  "dueDate": null,
  "dueDateNotes": null,
  "purchaseOrderNumber": null,
  "notes": null,
  "reminders": null,
  "persisted": null,
  "sentAt": null,
  "status": null,
  "paymentReceived": null,
  "legacy": null,
  "hints": null,
  "recipients": null,
  "accountContacts": null,
  "defaultMessage": null,
  "schedule": null,
  "servicePeriods": null,
} satisfies AdminInvoiceForm

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceForm
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


