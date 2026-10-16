
# AdminInvoiceCreate

A new invoice always starts from a schedule year. Its recipients are the account\'s invoice contacts as they are when it is saved, with the form\'s recipient_edits applied, so a contact who changed while the form was open is not copied onto it. 

## Properties

Name | Type
------------ | -------------
`invoice` | [AdminInvoiceCreateInvoice](AdminInvoiceCreateInvoice.md)

## Example

```typescript
import type { AdminInvoiceCreate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "invoice": null,
} satisfies AdminInvoiceCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


