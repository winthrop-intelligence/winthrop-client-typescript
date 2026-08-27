
# GamePostEnrichmentOverlap

Availability overlap between the requesting viewer\'s own school and this posting school for the sport (AvailabilityOverlapMatcher). Same shape as GamePostSearchResult.overlap: when the viewer has no school or no dates line up, total is 0 with an empty line_ups array (the no-overlap state).

## Properties

Name | Type
------------ | -------------
`total` | number
`strongCount` | number
`rollupText` | string
`lineUps` | [Array&lt;GamePostEnrichmentOverlapLineUpsInner&gt;](GamePostEnrichmentOverlapLineUpsInner.md)

## Example

```typescript
import type { GamePostEnrichmentOverlap } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "total": null,
  "strongCount": null,
  "rollupText": null,
  "lineUps": null,
} satisfies GamePostEnrichmentOverlap

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostEnrichmentOverlap
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


