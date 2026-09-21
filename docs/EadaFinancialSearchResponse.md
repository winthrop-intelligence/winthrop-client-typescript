
# EadaFinancialSearchResponse


## Properties

Name | Type
------------ | -------------
`meta` | [Meta](Meta.md)
`grain` | string
`year` | number
`data` | [Array&lt;EadaFinancialSearchResultRow&gt;](EadaFinancialSearchResultRow.md)

## Example

```typescript
import type { EadaFinancialSearchResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "grain": null,
  "year": null,
  "data": null,
} satisfies EadaFinancialSearchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EadaFinancialSearchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


