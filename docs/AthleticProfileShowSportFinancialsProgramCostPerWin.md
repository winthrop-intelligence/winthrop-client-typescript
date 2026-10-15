
# AthleticProfileShowSportFinancialsProgramCostPerWin

Private schools only — the program\'s EADA expense over the selected season\'s wins, against the FRS filers\' program expense per win on the scatter\'s fiscal year. Replaces cost_per_win on the private sport Financials tab.

## Properties

Name | Type
------------ | -------------
`fiscalYear` | number
`expenseCents` | number
`wins` | number
`perWinCents` | number
`marginCents` | number
`cohortMedianPerWinCents` | number
`cohortSize` | number
`cheapest` | [AthleticProfileShowSportFinancialsProgramCostPerWinCheapest](AthleticProfileShowSportFinancialsProgramCostPerWinCheapest.md)

## Example

```typescript
import type { AthleticProfileShowSportFinancialsProgramCostPerWin } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "fiscalYear": null,
  "expenseCents": null,
  "wins": null,
  "perWinCents": null,
  "marginCents": null,
  "cohortMedianPerWinCents": null,
  "cohortSize": null,
  "cheapest": null,
} satisfies AthleticProfileShowSportFinancialsProgramCostPerWin

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportFinancialsProgramCostPerWin
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


