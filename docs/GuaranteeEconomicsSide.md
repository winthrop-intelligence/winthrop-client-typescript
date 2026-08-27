
# GuaranteeEconomicsSide

One side (host = school paid as home team; travel = school was paid as visitor) of the guarantee economics. Null when there are no qualifying money games in the window or the caller lacks guarantee aggregate access.

## Properties

Name | Type
------------ | -------------
`medianCents` | number
`count` | number
`gadFilters` | { [key: string]: any; }

## Example

```typescript
import type { GuaranteeEconomicsSide } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "medianCents": null,
  "count": null,
  "gadFilters": null,
} satisfies GuaranteeEconomicsSide

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuaranteeEconomicsSide
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


