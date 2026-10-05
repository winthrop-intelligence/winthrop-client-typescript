
# UpdateDealRequestDealDetail

Fields must belong to the existing deal type.

## Properties

Name | Type
------------ | -------------
`cashAnnualAvg` | [DealUpdateAmount](DealUpdateAmount.md)
`prodAllotAnnualAvg` | [DealUpdateAmount](DealUpdateAmount.md)
`minPurchaseObl` | [DealUpdateAmount](DealUpdateAmount.md)
`signingBonus` | [DealUpdateAmount](DealUpdateAmount.md)
`contingentBonus` | boolean
`sports` | [Array&lt;ApparelDealUpdateSportsInner&gt;](ApparelDealUpdateSportsInner.md)
`grf` | [DealUpdateAmount](DealUpdateAmount.md)
`bha` | [DealUpdateAmount](DealUpdateAmount.md)
`additionalRev` | [DealUpdateAmount](DealUpdateAmount.md)
`revSharePercent` | [MultimediaDealUpdateRevSharePercent](MultimediaDealUpdateRevSharePercent.md)

## Example

```typescript
import type { UpdateDealRequestDealDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "cashAnnualAvg": null,
  "prodAllotAnnualAvg": null,
  "minPurchaseObl": null,
  "signingBonus": null,
  "contingentBonus": null,
  "sports": null,
  "grf": null,
  "bha": null,
  "additionalRev": null,
  "revSharePercent": null,
} satisfies UpdateDealRequestDealDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDealRequestDealDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


