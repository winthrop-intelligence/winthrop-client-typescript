
# AthleticProfileShowSportOverview


## Properties

Name | Type
------------ | -------------
`seasonYear` | number
`conferenceName` | string
`resultsLens` | string
`seasons` | [Array&lt;AthleticProfileShowSportOverviewSeasonsInner&gt;](AthleticProfileShowSportOverviewSeasonsInner.md)
`headCoach` | [AthleticProfileShowSportOverviewHeadCoach](AthleticProfileShowSportOverviewHeadCoach.md)
`payLadder` | [Array&lt;AthleticProfileShowSportOverviewPayLadderInner&gt;](AthleticProfileShowSportOverviewPayLadderInner.md)
`quadrantPoints` | [Array&lt;AthleticProfileShowSportOverviewQuadrantPointsInner&gt;](AthleticProfileShowSportOverviewQuadrantPointsInner.md)
`guarantees` | [AthleticProfileShowSportOverviewGuarantees](AthleticProfileShowSportOverviewGuarantees.md)
`asOf` | Date

## Example

```typescript
import type { AthleticProfileShowSportOverview } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonYear": null,
  "conferenceName": null,
  "resultsLens": null,
  "seasons": null,
  "headCoach": null,
  "payLadder": null,
  "quadrantPoints": null,
  "guarantees": null,
  "asOf": null,
} satisfies AthleticProfileShowSportOverview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportOverview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


