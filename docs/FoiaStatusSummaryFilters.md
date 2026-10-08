
# FoiaStatusSummaryFilters

Applied filters; active_labels_only is always true, excluding archived labels.

## Properties

Name | Type
------------ | -------------
`foiaLabelId` | number
`activeLabelsOnly` | boolean

## Example

```typescript
import type { FoiaStatusSummaryFilters } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "foiaLabelId": null,
  "activeLabelsOnly": null,
} satisfies FoiaStatusSummaryFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaStatusSummaryFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


