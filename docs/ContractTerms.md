
# ContractTerms

One document of structured terms per RawContract (WINAD-10633). Only `schema` and `source` are required and checked; every other key is a term, in a shape set by `schema`, and is stored as sent. Each term carries the quote and page number it was read from in the contract\'s OCR text. 

## Properties

Name | Type
------------ | -------------
`schema` | string
`source` | [ContractTermsSource](ContractTermsSource.md)

## Example

```typescript
import type { ContractTerms } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schema": null,
  "source": null,
} satisfies ContractTerms

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContractTerms
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


