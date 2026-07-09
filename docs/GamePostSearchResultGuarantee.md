
# GamePostSearchResultGuarantee

WINAD-10054: the school\'s 3-yr median guarantee economics (from SchoolGuaranteeEconomicsBatchQuery) — what it typically receives when it travels and pays when it hosts, in cents. Medians/estimates, labelled \"3-yr median\" in the UI (rounded, e.g. $90K), never a hard quote. Each side is null when the school has no qualifying history; the whole block is null when it has neither, or when the viewer lacks the guarantee- aggregate grant — the UI hides the chip rather than showing $0.

## Properties

Name | Type
------------ | -------------
`hostMedianCents` | number
`hostSampleSize` | number
`travelMedianCents` | number
`travelSampleSize` | number

## Example

```typescript
import type { GamePostSearchResultGuarantee } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "hostMedianCents": null,
  "hostSampleSize": null,
  "travelMedianCents": null,
  "travelSampleSize": null,
} satisfies GamePostSearchResultGuarantee

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostSearchResultGuarantee
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


