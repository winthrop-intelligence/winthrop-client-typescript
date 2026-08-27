
# GadCohortSummary

NCAA cohort median / mean / min / max / count benchmark. Returned only when include_cohort_summary=true and sport is provided.

## Properties

Name | Type
------------ | -------------
`sport` | [GadSchoolSummarySport](GadSchoolSummarySport.md)
`buyerCohort` | string
`sellerCohort` | string
`buyerFilters` | [GadCohortSummaryBuyerFilters](GadCohortSummaryBuyerFilters.md)
`sellerFilters` | [GadCohortSummarySellerFilters](GadCohortSummarySellerFilters.md)
`seasonWindow` | string
`seasonFilterApplied` | string
`medianAmountCents` | number
`meanAmountCents` | number
`minAmountCents` | number
`maxAmountCents` | number
`totalAmountCents` | number
`agreementCount` | number
`permissionFilteredCount` | number
`sourceUpdatedAt` | Date
`caveats` | Array&lt;string&gt;

## Example

```typescript
import type { GadCohortSummary } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sport": null,
  "buyerCohort": null,
  "sellerCohort": null,
  "buyerFilters": null,
  "sellerFilters": null,
  "seasonWindow": null,
  "seasonFilterApplied": null,
  "medianAmountCents": null,
  "meanAmountCents": null,
  "minAmountCents": null,
  "maxAmountCents": null,
  "totalAmountCents": null,
  "agreementCount": null,
  "permissionFilteredCount": null,
  "sourceUpdatedAt": null,
  "caveats": null,
} satisfies GadCohortSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GadCohortSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


