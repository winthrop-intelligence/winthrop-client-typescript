
# DepartmentFinancialsQuadrant


## Properties

Name | Type
------------ | -------------
`cohortSize` | number
`points` | [Array&lt;DepartmentFinancialsQuadrantPoint&gt;](DepartmentFinancialsQuadrantPoint.md)
`unplotted` | [Array&lt;DepartmentFinancialsUnplottedSchool&gt;](DepartmentFinancialsUnplottedSchool.md)

## Example

```typescript
import type { DepartmentFinancialsQuadrant } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "cohortSize": null,
  "points": null,
  "unplotted": null,
} satisfies DepartmentFinancialsQuadrant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentFinancialsQuadrant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


