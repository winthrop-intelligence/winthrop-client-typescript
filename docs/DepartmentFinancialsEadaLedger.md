
# DepartmentFinancialsEadaLedger

The EADA ledger for a school. Public federal data, so it is present for private schools that file no FRS report. Lines the source does not report are omitted rather than returned as zero

## Properties

Name | Type
------------ | -------------
`year` | number
`basis` | string
`comparableWithFrs` | boolean
`lines` | [Array&lt;DepartmentFinancialsEadaLedgerLine&gt;](DepartmentFinancialsEadaLedgerLine.md)

## Example

```typescript
import type { DepartmentFinancialsEadaLedger } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "basis": null,
  "comparableWithFrs": null,
  "lines": null,
} satisfies DepartmentFinancialsEadaLedger

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentFinancialsEadaLedger
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


