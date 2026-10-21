
# CreateAdminPositionRequestPositionDeparture

WINAD-10656 departure details, read when position.departing is ticked. `on` is required to set departing (and to edit an already-departing position\'s details); reason and source_url are optional. Omitted on an already-departing position, the recorded details are kept.

## Properties

Name | Type
------------ | -------------
`on` | Date
`reason` | string
`sourceUrl` | string

## Example

```typescript
import type { CreateAdminPositionRequestPositionDeparture } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "on": null,
  "reason": null,
  "sourceUrl": null,
} satisfies CreateAdminPositionRequestPositionDeparture

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminPositionRequestPositionDeparture
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


