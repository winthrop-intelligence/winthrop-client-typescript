
# ExecutiveSearchDealUpdate

Executive Search deals (WINAD-10742). Every field is optional and null clears it; blank means not stated, never 0.

## Properties

Name | Type
------------ | -------------
`positionId` | number
`searchScope` | string
`searchFee` | [DealUpdateAmount](DealUpdateAmount.md)
`feeBasis` | string
`feePercent` | [DealUpdatePercent](DealUpdatePercent.md)
`guaranteeMonths` | [DealUpdateMonths](DealUpdateMonths.md)
`expenseTerms` | string
`annualRetainer` | [DealUpdateAmount](DealUpdateAmount.md)

## Example

```typescript
import type { ExecutiveSearchDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "positionId": null,
  "searchScope": null,
  "searchFee": null,
  "feeBasis": null,
  "feePercent": null,
  "guaranteeMonths": null,
  "expenseTerms": null,
  "annualRetainer": null,
} satisfies ExecutiveSearchDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExecutiveSearchDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


