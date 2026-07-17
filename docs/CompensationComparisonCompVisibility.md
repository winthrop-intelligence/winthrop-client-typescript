
# CompensationComparisonCompVisibility

Class-level capability flags: whether the caller\'s account can see coach / administrator compensation at all, and whether administrator records were searched. Per-row visibility is carried by each row\'s comp_status (comp_redacted) and the cohort comp_redacted_count.

## Properties

Name | Type
------------ | -------------
`coachCompensation` | boolean
`administratorCompensation` | boolean
`administratorRecordsSearched` | boolean

## Example

```typescript
import type { CompensationComparisonCompVisibility } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachCompensation": null,
  "administratorCompensation": null,
  "administratorRecordsSearched": null,
} satisfies CompensationComparisonCompVisibility

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationComparisonCompVisibility
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


