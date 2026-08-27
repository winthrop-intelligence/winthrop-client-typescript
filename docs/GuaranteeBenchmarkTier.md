
# GuaranteeBenchmarkTier

Per-tier guarantee benchmark. paid_out aggregates contracts where the tier is the home/buyer side; received where it is the away/seller side.

## Properties

Name | Type
------------ | -------------
`tier` | string
`paidOut` | [GuaranteeBenchmarkStats](GuaranteeBenchmarkStats.md)
`received` | [GuaranteeBenchmarkStats](GuaranteeBenchmarkStats.md)

## Example

```typescript
import type { GuaranteeBenchmarkTier } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "tier": null,
  "paidOut": null,
  "received": null,
} satisfies GuaranteeBenchmarkTier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuaranteeBenchmarkTier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


