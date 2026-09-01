
# EadaNormalizedMetric

One self-describing EADA metric — WINAD-10370\'s normalized shape, driven by the WINAD-10371 catalog (Eada::MetricCatalog).

## Properties

Name | Type
------------ | -------------
`source` | string
`year` | number
`reportType` | string
`grain` | string
`family` | string
`metric` | string
`canonicalMetricId` | string
`sourceField` | string
`label` | string
`definition` | string
`value` | number
`unit` | string
`gender` | string
`comparabilityState` | string
`ncaaCounterpart` | string
`mappingStatus` | string
`sportCode` | string
`sportName` | string

## Example

```typescript
import type { EadaNormalizedMetric } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "source": eada,
  "year": null,
  "reportType": null,
  "grain": institution_year,
  "family": coaching,
  "metric": null,
  "canonicalMetricId": null,
  "sourceField": null,
  "label": null,
  "definition": null,
  "value": null,
  "unit": usd,
  "gender": null,
  "comparabilityState": null,
  "ncaaCounterpart": null,
  "mappingStatus": null,
  "sportCode": null,
  "sportName": null,
} satisfies EadaNormalizedMetric

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EadaNormalizedMetric
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


