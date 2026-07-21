
# GuaranteeEconomicsBatch

Batch guarantee economics (WINAD-10147) — the shared season window plus one entry per requested [school_id, sport_id] pair. Each pair\'s host/travel reuse GuaranteeEconomicsSide, so the same client view feeds GuaranteeChips whether it was singular- or batch-sourced.

## Properties

Name | Type
------------ | -------------
`seasonWindow` | string
`seasons` | Array&lt;number&gt;
`pairs` | [Array&lt;GuaranteeEconomicsBatchPair&gt;](GuaranteeEconomicsBatchPair.md)

## Example

```typescript
import type { GuaranteeEconomicsBatch } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonWindow": null,
  "seasons": null,
  "pairs": null,
} satisfies GuaranteeEconomicsBatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuaranteeEconomicsBatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


