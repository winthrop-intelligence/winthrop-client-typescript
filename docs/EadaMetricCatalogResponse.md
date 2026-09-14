
# EadaMetricCatalogResponse


## Properties

Name | Type
------------ | -------------
`meta` | [Meta](Meta.md)
`catalogVersion` | number
`data` | [Array&lt;EadaMetricCatalogEntry&gt;](EadaMetricCatalogEntry.md)
`derivedMetrics` | [Array&lt;EadaDerivedMetric&gt;](EadaDerivedMetric.md)

## Example

```typescript
import type { EadaMetricCatalogResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "catalogVersion": null,
  "data": null,
  "derivedMetrics": null,
} satisfies EadaMetricCatalogResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EadaMetricCatalogResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


