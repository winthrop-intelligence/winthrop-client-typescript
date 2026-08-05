
# DepartmentOverviewResultsGap

Present when the results lens has no data for the selected year, so the page can explain the omission instead of rendering an empty comparison

## Properties

Name | Type
------------ | -------------
`lens` | string
`year` | number
`latestAvailableYear` | number

## Example

```typescript
import type { DepartmentOverviewResultsGap } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "lens": null,
  "year": null,
  "latestAvailableYear": null,
} satisfies DepartmentOverviewResultsGap

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewResultsGap
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


