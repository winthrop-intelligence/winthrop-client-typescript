
# BuyoutInputs

One checked buyout-inputs document per coach contract (WINAD-10717, schema buyout-inputs-v1). Only `schema`, `rc` and `as_of` are required and checked here; the rest (terms_version, terms_revision, inputs, outside_facts, qa, ...) is validated against data-quality/data/schemas/buyout-inputs-v1.schema.json and stored as sent.

## Properties

Name | Type
------------ | -------------
`schema` | string
`rc` | number
`asOf` | Date

## Example

```typescript
import type { BuyoutInputs } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schema": null,
  "rc": null,
  "asOf": null,
} satisfies BuyoutInputs

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BuyoutInputs
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


