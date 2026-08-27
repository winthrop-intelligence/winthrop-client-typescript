
# AthleticProfileShowSportFinancials

Financials tab payload for a sport scope; null for ADMIN scope. Missing or hidden values are null, never zero.

## Properties

Name | Type
------------ | -------------
`seasonYear` | number
`conferenceName` | string
`quadrant` | [AthleticProfileShowSportFinancialsQuadrant](AthleticProfileShowSportFinancialsQuadrant.md)
`frsSplit` | [AthleticProfileShowSportFinancialsFrsSplit](AthleticProfileShowSportFinancialsFrsSplit.md)
`costBuild` | [AthleticProfileShowSportFinancialsCostBuild](AthleticProfileShowSportFinancialsCostBuild.md)
`costPerWin` | [AthleticProfileShowSportFinancialsCostPerWin](AthleticProfileShowSportFinancialsCostPerWin.md)
`deptLine` | [AthleticProfileShowSportFinancialsDeptLine](AthleticProfileShowSportFinancialsDeptLine.md)
`asOf` | Date

## Example

```typescript
import type { AthleticProfileShowSportFinancials } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonYear": null,
  "conferenceName": null,
  "quadrant": null,
  "frsSplit": null,
  "costBuild": null,
  "costPerWin": null,
  "deptLine": null,
  "asOf": null,
} satisfies AthleticProfileShowSportFinancials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportFinancials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


