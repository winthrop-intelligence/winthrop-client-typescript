
# PositionDepartureRequest

Full replacement, not a partial update. Omitted optional details become null. When departing is false, departure_on must be omitted or null; reason, source URL, and approval quote can be supplied as context for clearing the departure.

## Properties

Name | Type
------------ | -------------
`departing` | boolean
`departureOn` | Date
`departureReason` | string
`departureSourceUrl` | string
`approvalQuote` | string
`changeNote` | string

## Example

```typescript
import type { PositionDepartureRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "departing": null,
  "departureOn": null,
  "departureReason": null,
  "departureSourceUrl": null,
  "approvalQuote": null,
  "changeNote": null,
} satisfies PositionDepartureRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PositionDepartureRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


