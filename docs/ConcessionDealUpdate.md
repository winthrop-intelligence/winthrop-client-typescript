
# ConcessionDealUpdate

Concessions deals (WINAD-10685).

## Properties

Name | Type
------------ | -------------
`totalGuar` | [DealUpdateAmount](DealUpdateAmount.md)
`annualGuar` | [DealUpdateAmount](DealUpdateAmount.md)
`partner` | [DealUpdatePartner](DealUpdatePartner.md)

## Example

```typescript
import type { ConcessionDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "totalGuar": null,
  "annualGuar": null,
  "partner": null,
} satisfies ConcessionDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConcessionDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


