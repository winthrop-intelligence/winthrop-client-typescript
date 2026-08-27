
# AthleticProfileShowSportGuaranteesAgreementWindow

The span of seasons the agreements array covers (WINAD-10281). Football books guarantee games years ahead, so its ledger runs two seasons back from the current season through the last season with a filed agreement, and does not follow the season toggle. Every other sport covers the selected season alone. Derived, never fixed — a newly filed agreement a season further out extends to_year with no code change.

## Properties

Name | Type
------------ | -------------
`fromYear` | number
`toYear` | number
`multiSeason` | boolean

## Example

```typescript
import type { AthleticProfileShowSportGuaranteesAgreementWindow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "fromYear": null,
  "toYear": null,
  "multiSeason": null,
} satisfies AthleticProfileShowSportGuaranteesAgreementWindow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportGuaranteesAgreementWindow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


