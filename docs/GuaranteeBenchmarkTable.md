
# GuaranteeBenchmarkTable

NCAA guarantee benchmark table for one basketball sport, grouped by basketball conference tier (high_major / upper_mid_major / mid_major / low_major — WINAD-10023). When sport_id is missing/unknown/non-basketball the `error` block is returned instead of `tiers`.

## Properties

Name | Type
------------ | -------------
`sport` | [GadSchoolSummarySport](GadSchoolSummarySport.md)
`yourTier` | string
`seasonWindow` | string
`seasons` | Array&lt;number&gt;
`tiers` | [Array&lt;GuaranteeBenchmarkTier&gt;](GuaranteeBenchmarkTier.md)
`error` | [GuaranteeBenchmarkError](GuaranteeBenchmarkError.md)

## Example

```typescript
import type { GuaranteeBenchmarkTable } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sport": null,
  "yourTier": null,
  "seasonWindow": null,
  "seasons": null,
  "tiers": null,
  "error": null,
} satisfies GuaranteeBenchmarkTable

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuaranteeBenchmarkTable
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


