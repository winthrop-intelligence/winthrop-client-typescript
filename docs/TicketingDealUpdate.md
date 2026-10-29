
# TicketingDealUpdate

Ticketing deals (WINAD-10685).

## Properties

Name | Type
------------ | -------------
`license` | [DealUpdateAmount](DealUpdateAmount.md)
`maintenance` | [DealUpdateAmount](DealUpdateAmount.md)
`acctMgr` | [DealUpdateAmount](DealUpdateAmount.md)

## Example

```typescript
import type { TicketingDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "license": null,
  "maintenance": null,
  "acctMgr": null,
} satisfies TicketingDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TicketingDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


