
# GuaranteeEconomicsBatchPair

One requested pair\'s guarantee economics. host/travel are null both for \"no qualifying money games\" and for \"caller lacks guarantee aggregate access\" — deliberately indistinguishable, exactly like the singular endpoint.

## Properties

Name | Type
------------ | -------------
`schoolId` | number
`sportId` | number
`host` | [GuaranteeEconomicsSide](GuaranteeEconomicsSide.md)
`travel` | [GuaranteeEconomicsSide](GuaranteeEconomicsSide.md)

## Example

```typescript
import type { GuaranteeEconomicsBatchPair } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "sportId": null,
  "host": null,
  "travel": null,
} satisfies GuaranteeEconomicsBatchPair

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuaranteeEconomicsBatchPair
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


