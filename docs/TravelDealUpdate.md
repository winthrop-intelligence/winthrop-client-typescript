
# TravelDealUpdate

Travel deals (WINAD-10740). A Travel deal is one of three subtypes and each subtype has its own columns. Every field is optional and null means not stated (never 0); an empty string also clears the text fields (daily_rate_rule, aircraft) but is refused for numbers. travel_subtype is required (in the body, or already stored) whenever any other field is sent. A column that does not apply to the effective subtype (the one in the body, else the stored one) is refused with 422 naming the field and the subtype. Agency columns are management_fee, agent_ticket_fee, included_transactions, onsite_agents and after_hours_fee; Bus Charter columns are rate_per_mile, daily_rate, daily_rate_rule and driver_overnight; Air Charter columns are price_per_round_trip, aircraft and round_trips.

## Properties

Name | Type
------------ | -------------
`travelSubtype` | string
`managementFee` | [DealUpdateAmount](DealUpdateAmount.md)
`agentTicketFee` | [DealUpdateAmount](DealUpdateAmount.md)
`includedTransactions` | [DealUpdateCount](DealUpdateCount.md)
`onsiteAgents` | [DealUpdateOnsiteAgents](DealUpdateOnsiteAgents.md)
`afterHoursFee` | [DealUpdateAmount](DealUpdateAmount.md)
`ratePerMile` | [DealUpdateAmount](DealUpdateAmount.md)
`dailyRate` | [DealUpdateAmount](DealUpdateAmount.md)
`dailyRateRule` | string
`driverOvernight` | [DealUpdateAmount](DealUpdateAmount.md)
`pricePerRoundTrip` | [DealUpdateAmount](DealUpdateAmount.md)
`aircraft` | string
`roundTrips` | [DealUpdateCount](DealUpdateCount.md)

## Example

```typescript
import type { TravelDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "travelSubtype": null,
  "managementFee": null,
  "agentTicketFee": null,
  "includedTransactions": null,
  "onsiteAgents": null,
  "afterHoursFee": null,
  "ratePerMile": null,
  "dailyRate": null,
  "dailyRateRule": null,
  "driverOvernight": null,
  "pricePerRoundTrip": null,
  "aircraft": null,
  "roundTrips": null,
} satisfies TravelDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TravelDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


