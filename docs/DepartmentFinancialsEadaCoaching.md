
# DepartmentFinancialsEadaCoaching

EADA institution-wide coaching aggregates. Public federal data, so it is not subject to NCAA cashflow suppression and is present for private schools too

## Properties

Name | Type
------------ | -------------
`year` | number
`totalSalaryPoolCents` | number
`headCoach` | [DepartmentFinancialsEadaRole](DepartmentFinancialsEadaRole.md)
`assistantCoach` | [DepartmentFinancialsEadaRole](DepartmentFinancialsEadaRole.md)

## Example

```typescript
import type { DepartmentFinancialsEadaCoaching } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "totalSalaryPoolCents": null,
  "headCoach": null,
  "assistantCoach": null,
} satisfies DepartmentFinancialsEadaCoaching

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentFinancialsEadaCoaching
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


