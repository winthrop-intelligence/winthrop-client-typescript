
# AthleticProfileShowSportFinancialsEadaSportLine

This program\'s money as the school\'s federal EADA filing reports it (WINAD-10403). Present only for private schools, which file no NCAA FRS sport split and never will — for them this is the sport\'s money, not a substitute for a filing that is still coming. Null for public schools, and for a private school with no matched EADA sport row or no EADA grant.

## Properties

Name | Type
------------ | -------------
`fiscalYear` | number
`expenseCents` | number
`revenueCents` | number
`operatingExpenseCents` | number
`participants` | number

## Example

```typescript
import type { AthleticProfileShowSportFinancialsEadaSportLine } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "fiscalYear": null,
  "expenseCents": null,
  "revenueCents": null,
  "operatingExpenseCents": null,
  "participants": null,
} satisfies AthleticProfileShowSportFinancialsEadaSportLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportFinancialsEadaSportLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


