
# FinancialComparison

Only present when metric was given. blended_ranking combines every source\'s values into one ranked list, but only when Financials::Comparability marks this canonical metric catalog-approved (comparability_state mergeable) for cross-source blending — no dollar-valued metric is mergeable in the catalog today, so blended_ranking is null with a blended_reason for every current financial metric. ranking_by_source is always populated — one ranking per source, kept visibly separate.

## Properties

Name | Type
------------ | -------------
`metric` | string
`mergeableAcrossSources` | boolean
`blendedRanking` | [Array&lt;FinancialComparisonRankedRow&gt;](FinancialComparisonRankedRow.md)
`blendedReason` | string
`rankingBySource` | { [key: string]: Array&lt;FinancialComparisonRankedRow&gt;; }

## Example

```typescript
import type { FinancialComparison } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "metric": null,
  "mergeableAcrossSources": null,
  "blendedRanking": null,
  "blendedReason": null,
  "rankingBySource": null,
} satisfies FinancialComparison

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialComparison
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


