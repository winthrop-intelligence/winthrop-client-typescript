
# CompensationComparisonResult


## Properties

Name | Type
------------ | -------------
`resolvedScope` | [CompensationComparisonResolvedScope](CompensationComparisonResolvedScope.md)
`rows` | [Array&lt;CompensationComparisonRow&gt;](CompensationComparisonRow.md)
`cohortStats` | [CompensationComparisonCohortStats](CompensationComparisonCohortStats.md)
`compVisibility` | [CompensationComparisonCompVisibility](CompensationComparisonCompVisibility.md)
`warnings` | Array&lt;string&gt;

## Example

```typescript
import type { CompensationComparisonResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "resolvedScope": null,
  "rows": null,
  "cohortStats": null,
  "compVisibility": null,
  "warnings": null,
} satisfies CompensationComparisonResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationComparisonResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


