
# AthleticProfileShowSportGuarantees

Guarantees tab payload for a sport scope (WINAD-10209); null for ADMIN scope or without game-contract access. Every amount comes from a filed agreement — duplicate filings are included, never merged. Missing values are null, never zero.

## Properties

Name | Type
------------ | -------------
`seasonYear` | number
`conferenceName` | string
`sportId` | number
`basketball` | boolean
`resultsLens` | string
`agreements` | [Array&lt;AthleticProfileShowSportGuaranteesAgreementsInner&gt;](AthleticProfileShowSportGuaranteesAgreementsInner.md)
`agreementWindow` | [AthleticProfileShowSportGuaranteesAgreementWindow](AthleticProfileShowSportGuaranteesAgreementWindow.md)
`summary` | [AthleticProfileShowSportGuaranteesSummary](AthleticProfileShowSportGuaranteesSummary.md)
`quadrant` | [AthleticProfileShowSportGuaranteesQuadrant](AthleticProfileShowSportGuaranteesQuadrant.md)
`asOf` | Date

## Example

```typescript
import type { AthleticProfileShowSportGuarantees } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonYear": null,
  "conferenceName": null,
  "sportId": null,
  "basketball": null,
  "resultsLens": null,
  "agreements": null,
  "agreementWindow": null,
  "summary": null,
  "quadrant": null,
  "asOf": null,
} satisfies AthleticProfileShowSportGuarantees

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportGuarantees
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


