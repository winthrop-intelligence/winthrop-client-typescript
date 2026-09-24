
# AdminInvoiceWrite

POST requires subscription_year_id (a new invoice always starts from a schedule year). PATCH accepts it to move the invoice to another year of the same subscription; a year from any other subscription, or one that no longer exists, is refused with 422. 

## Properties

Name | Type
------------ | -------------
`invoice` | [AdminInvoiceWriteInvoice](AdminInvoiceWriteInvoice.md)

## Example

```typescript
import type { AdminInvoiceWrite } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "invoice": null,
} satisfies AdminInvoiceWrite

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceWrite
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


