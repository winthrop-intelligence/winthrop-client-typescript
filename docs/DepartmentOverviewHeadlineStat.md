
# DepartmentOverviewHeadlineStat


## Properties

Name | Type
------------ | -------------
`key` | string
`label` | string
`amountCents` | number
`rank` | number
`cohortSize` | number
`partialCohort` | boolean
`neighbour` | [DepartmentOverviewNeighbour](DepartmentOverviewNeighbour.md)

## Example

```typescript
import type { DepartmentOverviewHeadlineStat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "label": null,
  "amountCents": null,
  "rank": null,
  "cohortSize": null,
  "partialCohort": null,
  "neighbour": null,
} satisfies DepartmentOverviewHeadlineStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewHeadlineStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


