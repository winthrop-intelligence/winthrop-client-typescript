
# PouringDealUpdate

Pouring Rights deals (WINAD-10685). The guarantee is srf. Pouring has no total_guar or annual_guar and does NOT accept them, unlike Concessions; sending either is refused with 422. This is deliberate (pending confirmation from the ticket owner that srf is the intended Pouring guarantee).

## Properties

Name | Type
------------ | -------------
`srf` | [DealUpdateAmount](DealUpdateAmount.md)
`avgAnnualProd` | [DealUpdateAmount](DealUpdateAmount.md)
`sla` | [DealUpdateAmount](DealUpdateAmount.md)
`signingBonus` | [DealUpdateAmount](DealUpdateAmount.md)
`partner` | [DealUpdatePartner](DealUpdatePartner.md)

## Example

```typescript
import type { PouringDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "srf": null,
  "avgAnnualProd": null,
  "sla": null,
  "signingBonus": null,
  "partner": null,
} satisfies PouringDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PouringDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


