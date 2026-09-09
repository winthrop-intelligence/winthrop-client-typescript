
# DepartmentOverviewPrivateSnapshot

The department\'s shape in the EADA figures its filing breaks out (WINAD-10390) — total expenses and revenue, plus the two sports the filing breaks out — from the same ledger the Financials tab reads. Four lines at most, and about half of filers state fewer: the ledger keeps only what the filing reports a positive figure for, so a department that sponsors no football has no football line. Null when no EADA report is on file.

## Properties

Name | Type
------------ | -------------
`year` | number
`lines` | [Array&lt;DepartmentOverviewPrivateSnapshotLine&gt;](DepartmentOverviewPrivateSnapshotLine.md)

## Example

```typescript
import type { DepartmentOverviewPrivateSnapshot } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "lines": null,
} satisfies DepartmentOverviewPrivateSnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewPrivateSnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


