
# AdminInvoiceCreateInvoiceRecipientEdits

What the operator changed in the prefilled recipient list. Omitted, the invoice goes to the account\'s current contacts.

## Properties

Name | Type
------------ | -------------
`removed` | Array&lt;string&gt;
`added` | [Array&lt;AdminInvoiceCreateInvoiceRecipientEditsAddedInner&gt;](AdminInvoiceCreateInvoiceRecipientEditsAddedInner.md)

## Example

```typescript
import type { AdminInvoiceCreateInvoiceRecipientEdits } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "removed": null,
  "added": null,
} satisfies AdminInvoiceCreateInvoiceRecipientEdits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceCreateInvoiceRecipientEdits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


