
# GamePostEnrichment

WINAD: one row of the deferred per-card blocks returned by POST /game_post_searches/enrichment, keyed by [school_id, sport_id] so the client merges it onto every feed card sharing that pair. Shapes mirror GamePostSearchResult exactly (the feed omits overlap/guarantee/schedule_intents under q[defer_enrichment] and this endpoint fills them in a beat later).

## Properties

Name | Type
------------ | -------------
`schoolId` | number
`sportId` | number
`scheduleIntents` | [Array&lt;GamePostEnrichmentScheduleIntentsInner&gt;](GamePostEnrichmentScheduleIntentsInner.md)
`overlap` | [GamePostEnrichmentOverlap](GamePostEnrichmentOverlap.md)
`guarantee` | [GamePostEnrichmentGuarantee](GamePostEnrichmentGuarantee.md)

## Example

```typescript
import type { GamePostEnrichment } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "sportId": null,
  "scheduleIntents": null,
  "overlap": null,
  "guarantee": null,
} satisfies GamePostEnrichment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostEnrichment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


