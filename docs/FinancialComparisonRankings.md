
# FinancialComparisonRankings

Rankings for each supported financial source. A source is omitted when it has no matching rows. Explicit source properties keep each array\'s ranked-row decoder available to generated clients.

## Properties

Name | Type
------------ | -------------
`eada` | [Array&lt;FinancialComparisonRankedRow&gt;](FinancialComparisonRankedRow.md)
`ncaaFrs` | [Array&lt;FinancialComparisonRankedRow&gt;](FinancialComparisonRankedRow.md)

## Example

```typescript
import type { FinancialComparisonRankings } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "eada": null,
  "ncaaFrs": null,
} satisfies FinancialComparisonRankings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialComparisonRankings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


