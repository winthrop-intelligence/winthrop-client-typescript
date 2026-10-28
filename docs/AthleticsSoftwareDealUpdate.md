
# AthleticsSoftwareDealUpdate

Athletics Software deals (WINAD-10741). Every field is optional and null or blank means not stated (never 0). Prices only compare within the same vendor and bundle, so send products and sports with the fees.

## Properties

Name | Type
------------ | -------------
`products` | string
`sports` | [Array&lt;ApparelDealUpdateSportsInner&gt;](ApparelDealUpdateSportsInner.md)
`allSports` | boolean
`annualFee` | [DealUpdateAmount](DealUpdateAmount.md)
`finalYearFee` | [DealUpdateAmount](DealUpdateAmount.md)
`implementationFee` | [DealUpdateAmount](DealUpdateAmount.md)

## Example

```typescript
import type { AthleticsSoftwareDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "products": null,
  "sports": null,
  "allSports": null,
  "annualFee": null,
  "finalYearFee": null,
  "implementationFee": null,
} satisfies AthleticsSoftwareDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticsSoftwareDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


