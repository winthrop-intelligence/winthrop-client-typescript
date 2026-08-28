
# EadaMetricCatalogEntry


## Properties

Name | Type
------------ | -------------
`sourceKey` | string
`reportType` | string
`label` | string
`description` | string
`dataType` | string
`unit` | string
`reportingGrain` | string
`genderDimension` | string
`nullZeroSemantics` | string
`sourceSection` | string
`canonicalMetricId` | string
`supportedAggregations` | Array&lt;string&gt;
`ncaaCounterpart` | string
`comparabilityState` | string
`rationale` | string

## Example

```typescript
import type { EadaMetricCatalogEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sourceKey": null,
  "reportType": null,
  "label": null,
  "description": null,
  "dataType": null,
  "unit": null,
  "reportingGrain": null,
  "genderDimension": null,
  "nullZeroSemantics": null,
  "sourceSection": null,
  "canonicalMetricId": null,
  "supportedAggregations": null,
  "ncaaCounterpart": null,
  "comparabilityState": null,
  "rationale": null,
} satisfies EadaMetricCatalogEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EadaMetricCatalogEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


