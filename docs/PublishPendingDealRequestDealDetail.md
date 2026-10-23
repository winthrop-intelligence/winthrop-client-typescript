
# PublishPendingDealRequestDealDetail

Fields must belong to the deal\'s type (see the schema of that type). Money fields take at most two decimals up to 999,999,999.99; percent fields 0 through 100.

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
`totalGuar` | [DealUpdateAmount](DealUpdateAmount.md)
`annualGuar` | [DealUpdateAmount](DealUpdateAmount.md)
`partner` | [DealUpdatePartner](DealUpdatePartner.md)
`srf` | [DealUpdateAmount](DealUpdateAmount.md)
`avgAnnualProd` | [DealUpdateAmount](DealUpdateAmount.md)
`sla` | [DealUpdateAmount](DealUpdateAmount.md)
`license` | [DealUpdateAmount](DealUpdateAmount.md)
`maintenance` | [DealUpdateAmount](DealUpdateAmount.md)
`acctMgr` | [DealUpdateAmount](DealUpdateAmount.md)
`totalRevPercent` | [DealUpdatePercent](DealUpdatePercent.md)
`newRevPercent` | [DealUpdatePercent](DealUpdatePercent.md)
`renewalRevPercent` | [DealUpdatePercent](DealUpdatePercent.md)
`annualFee` | [DealUpdateAmount](DealUpdateAmount.md)
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
`guaranteedAmtYearOne` | [DealUpdateAmount](DealUpdateAmount.md)
`capitalImprovement` | [DealUpdateAmount](DealUpdateAmount.md)
`annualHostFee` | [DealUpdateAmount](DealUpdateAmount.md)

## Example

```typescript
import type { PublishPendingDealRequestDealDetail } from '@winthrop-intelligence/winthrop-client-typescript'

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
  "totalGuar": null,
  "annualGuar": null,
  "partner": null,
  "srf": null,
  "avgAnnualProd": null,
  "sla": null,
  "license": null,
  "maintenance": null,
  "acctMgr": null,
  "totalRevPercent": null,
  "newRevPercent": null,
  "renewalRevPercent": null,
  "annualFee": null,
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
  "guaranteedAmtYearOne": null,
  "capitalImprovement": null,
  "annualHostFee": null,
} satisfies PublishPendingDealRequestDealDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishPendingDealRequestDealDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


