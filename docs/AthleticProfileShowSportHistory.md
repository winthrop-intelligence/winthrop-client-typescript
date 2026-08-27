
# AthleticProfileShowSportHistory

History tab payload for a sport scope (WINAD-10210); null for ADMIN scope. A decade of seasons with the head-coach seat per year and filed spend where present. Transitions never carry a dollar amount — WinAD stores termination agreements as documents only. Missing values are null, never zero.

## Properties

Name | Type
------------ | -------------
`seasonYear` | number
`conferenceName` | string
`resultsLens` | string
`seasons` | [Array&lt;AthleticProfileShowSportHistorySeasonsInner&gt;](AthleticProfileShowSportHistorySeasonsInner.md)
`churn` | [AthleticProfileShowSportHistoryChurn](AthleticProfileShowSportHistoryChurn.md)
`asOf` | Date

## Example

```typescript
import type { AthleticProfileShowSportHistory } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonYear": null,
  "conferenceName": null,
  "resultsLens": null,
  "seasons": null,
  "churn": null,
  "asOf": null,
} satisfies AthleticProfileShowSportHistory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportHistory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


