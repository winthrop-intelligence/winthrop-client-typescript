
# DepartmentCoachesPortfolioShape


## Properties

Name | Type
------------ | -------------
`outperforming` | [DepartmentCoachesShapeEntry](DepartmentCoachesShapeEntry.md)
`inLine` | [DepartmentCoachesShapeEntry](DepartmentCoachesShapeEntry.md)
`underdelivering` | [DepartmentCoachesShapeEntry](DepartmentCoachesShapeEntry.md)

## Example

```typescript
import type { DepartmentCoachesPortfolioShape } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "outperforming": null,
  "inLine": null,
  "underdelivering": null,
} satisfies DepartmentCoachesPortfolioShape

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachesPortfolioShape
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


