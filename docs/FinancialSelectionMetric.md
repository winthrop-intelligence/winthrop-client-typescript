
# FinancialSelectionMetric

WINAD-10369\'s shared self-describing metric shape (Financials::Metric) — the one row shape returned regardless of whether it came from EADA or NCAA/FRS, each carrying its own source and year so a consumer that flattens results across sources never loses provenance.

## Properties

Name | Type
------------ | -------------
`source` | string
`year` | number
`grain` | string
`canonicalMetricId` | string
`nativeMetricId` | string
`label` | string
`value` | number
`unit` | string
`comparabilityState` | string
`counterpartNote` | string
`gender` | string
`mappingStatus` | string
`sportCode` | string
`sportName` | string

## Example

```typescript
import type { FinancialSelectionMetric } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "source": null,
  "year": null,
  "grain": institution_year,
  "canonicalMetricId": null,
  "nativeMetricId": null,
  "label": null,
  "value": null,
  "unit": usd,
  "comparabilityState": null,
  "counterpartNote": null,
  "gender": null,
  "mappingStatus": null,
  "sportCode": null,
  "sportName": null,
} satisfies FinancialSelectionMetric

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialSelectionMetric
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


