
# OutTicketingDealUpdate

Outsourced Ticketing deals (WINAD-10685).

## Properties

Name | Type
------------ | -------------
`totalRevPercent` | [DealUpdatePercent](DealUpdatePercent.md)
`newRevPercent` | [DealUpdatePercent](DealUpdatePercent.md)
`renewalRevPercent` | [DealUpdatePercent](DealUpdatePercent.md)
`annualFee` | [DealUpdateAmount](DealUpdateAmount.md)

## Example

```typescript
import type { OutTicketingDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "totalRevPercent": null,
  "newRevPercent": null,
  "renewalRevPercent": null,
  "annualFee": null,
} satisfies OutTicketingDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutTicketingDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


