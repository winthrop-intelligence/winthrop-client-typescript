
# GamePostSearchResultOverlap

WINAD-10052/10053: availability overlap between the requesting viewer\'s own school and this posting school for the sport, computed by AvailabilityOverlapMatcher. Both sides are read from schedule_intents, so every lined-up date is a subset of the availability the card shows. When present and the viewer has no school (e.g. a super-admin or conference account) or no dates line up, total is 0 with an empty line_ups array (the no-overlap state, never an error). WINAD: OMITTED when q[defer_enrichment] is set (the dashboard feed) — deferred to POST /game_post_searches/enrichment so the feed cards paint first. Present on the inline path (the show page\'s post_details response).

## Properties

Name | Type
------------ | -------------
`total` | number
`strongCount` | number
`rollupText` | string
`lineUps` | [Array&lt;GamePostSearchResultOverlapLineUpsInner&gt;](GamePostSearchResultOverlapLineUpsInner.md)

## Example

```typescript
import type { GamePostSearchResultOverlap } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "total": null,
  "strongCount": null,
  "rollupText": null,
  "lineUps": null,
} satisfies GamePostSearchResultOverlap

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostSearchResultOverlap
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


