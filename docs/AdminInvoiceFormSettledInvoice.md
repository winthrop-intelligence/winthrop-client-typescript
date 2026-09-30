
# AdminInvoiceFormSettledInvoice

Prefill only. A pending, sent or paid invoice that already bills this subscription year, so the form can warn before a second one is created. Null otherwise.

## Properties

Name | Type
------------ | -------------
`id` | number
`state` | string

## Example

```typescript
import type { AdminInvoiceFormSettledInvoice } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "state": null,
} satisfies AdminInvoiceFormSettledInvoice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoiceFormSettledInvoice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


