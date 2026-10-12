
# AdminInvoiceRow

One row, whichever of the two things it actually is: a real Invoice (Sent/Paid/All) or a subscription_year with no sent/paid invoice yet (Not sent, and the same rows again inside All). `key` is stable either way — \"invoice-<id>\" once an Invoice exists for the row (even an unsent draft), \"syear-<id>\" otherwise. 

## Properties

Name | Type
------------ | -------------
`key` | string
`accountId` | number
`accountName` | string
`legacy` | boolean
`yearNumber` | number
`amountCents` | number
`hasPrice` | boolean
`dueDate` | Date
`sentAt` | Date
`sentLabel` | string
`statusKind` | string
`statusLabel` | string
`action` | [AdminInvoiceRowAction](AdminInvoiceRowAction.md)

## Example

```typescript
import type { AdminInvoiceRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "accountId": null,
  "accountName": null,
  "legacy": null,
  "yearNumber": null,
  "amountCents": null,
  "hasPrice": null,
  "dueDate": null,
  "sentAt": null,
  "sentLabel": null,
  "statusKind": null,
  "statusLabel": null,
  "action": null,
} satisfies AdminInvoiceRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


