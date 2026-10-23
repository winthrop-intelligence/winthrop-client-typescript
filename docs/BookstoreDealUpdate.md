
# BookstoreDealUpdate

Bookstore deals (WINAD-10685).

## Properties

Name | Type
------------ | -------------
`guaranteedAmtYearOne` | [DealUpdateAmount](DealUpdateAmount.md)
`capitalImprovement` | [DealUpdateAmount](DealUpdateAmount.md)
`signingBonus` | [DealUpdateAmount](DealUpdateAmount.md)
`threshold1` | [DealUpdateAmount](DealUpdateAmount.md)
`allocPercent1` | [DealUpdatePercent](DealUpdatePercent.md)
`threshold2` | [DealUpdateAmount](DealUpdateAmount.md)
`allocPercent2` | [DealUpdatePercent](DealUpdatePercent.md)
`threshold3` | [DealUpdateAmount](DealUpdateAmount.md)
`allocPercent3` | [DealUpdatePercent](DealUpdatePercent.md)
`threshold4` | [DealUpdateAmount](DealUpdateAmount.md)
`allocPercent4` | [DealUpdatePercent](DealUpdatePercent.md)
`threshold5` | [DealUpdateAmount](DealUpdateAmount.md)
`allocPercent5` | [DealUpdatePercent](DealUpdatePercent.md)
`threshold6` | [DealUpdateAmount](DealUpdateAmount.md)
`allocPercent6` | [DealUpdatePercent](DealUpdatePercent.md)

## Example

```typescript
import type { BookstoreDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "guaranteedAmtYearOne": null,
  "capitalImprovement": null,
  "signingBonus": null,
  "threshold1": null,
  "allocPercent1": null,
  "threshold2": null,
  "allocPercent2": null,
  "threshold3": null,
  "allocPercent3": null,
  "threshold4": null,
  "allocPercent4": null,
  "threshold5": null,
  "allocPercent5": null,
  "threshold6": null,
  "allocPercent6": null,
} satisfies BookstoreDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BookstoreDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


