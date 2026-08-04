
# DepartmentOverviewFlowSummary


## Properties

Name | Type
------------ | -------------
`earns` | [DepartmentFinancialsRankLine](DepartmentFinancialsRankLine.md)
`spends` | [DepartmentFinancialsRankLine](DepartmentFinancialsRankLine.md)
`keeps` | [DepartmentFinancialsRankLine](DepartmentFinancialsRankLine.md)
`debtShare` | number

## Example

```typescript
import type { DepartmentOverviewFlowSummary } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "earns": null,
  "spends": null,
  "keeps": null,
  "debtShare": null,
} satisfies DepartmentOverviewFlowSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewFlowSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


