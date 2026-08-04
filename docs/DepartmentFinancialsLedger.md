
# DepartmentFinancialsLedger


## Properties

Name | Type
------------ | -------------
`totalCents` | number
`lines` | [Array&lt;DepartmentFinancialsLedgerLine&gt;](DepartmentFinancialsLedgerLine.md)

## Example

```typescript
import type { DepartmentFinancialsLedger } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "totalCents": null,
  "lines": null,
} satisfies DepartmentFinancialsLedger

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentFinancialsLedger
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


