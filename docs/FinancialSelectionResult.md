
# FinancialSelectionResult

One source\'s resolved report for the requested school/grain/year (Financials::SourceSelection::Result) — never a row assembled from unrelated line items across two reports.

## Properties

Name | Type
------------ | -------------
`source` | string
`year` | number
`grain` | string
`available` | boolean
`fallbackReason` | string
`comparabilitySummary` | string
`metrics` | [Array&lt;FinancialSelectionMetric&gt;](FinancialSelectionMetric.md)

## Example

```typescript
import type { FinancialSelectionResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "source": null,
  "year": null,
  "grain": null,
  "available": null,
  "fallbackReason": null,
  "comparabilitySummary": null,
  "metrics": null,
} satisfies FinancialSelectionResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialSelectionResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


