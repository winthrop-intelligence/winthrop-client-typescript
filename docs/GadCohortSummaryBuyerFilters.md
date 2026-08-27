
# GadCohortSummaryBuyerFilters

Resolved buyer-side conference/division/subdivision IDs that were applied.

## Properties

Name | Type
------------ | -------------
`conferenceId` | number
`divisionId` | number
`subdivisionId` | number

## Example

```typescript
import type { GadCohortSummaryBuyerFilters } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "conferenceId": null,
  "divisionId": null,
  "subdivisionId": null,
} satisfies GadCohortSummaryBuyerFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GadCohortSummaryBuyerFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


