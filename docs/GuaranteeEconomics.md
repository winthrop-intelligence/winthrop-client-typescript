
# GuaranteeEconomics

Per-school guarantee economics over the last three completed seasons (WINAD-10005). host/travel are null both for \"no qualifying money games\" and for \"caller lacks guarantee aggregate access\" — deliberately indistinguishable. When params are missing/invalid the `error` block is returned instead.

## Properties

Name | Type
------------ | -------------
`school` | [GadSchoolSummarySport](GadSchoolSummarySport.md)
`sport` | [GadSchoolSummarySport](GadSchoolSummarySport.md)
`seasonWindow` | string
`seasons` | Array&lt;number&gt;
`host` | [GuaranteeEconomicsSide](GuaranteeEconomicsSide.md)
`travel` | [GuaranteeEconomicsSide](GuaranteeEconomicsSide.md)
`error` | [GuaranteeEconomicsError](GuaranteeEconomicsError.md)

## Example

```typescript
import type { GuaranteeEconomics } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "sport": null,
  "seasonWindow": null,
  "seasons": null,
  "host": null,
  "travel": null,
  "error": null,
} satisfies GuaranteeEconomics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuaranteeEconomics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


