
# DepartmentCoachesBasis


## Properties

Name | Type
------------ | -------------
`payrollCents` | number
`payrollSource` | string
`payrollFiscalYear` | number
`compFiscalYear` | number
`seatsWithComp` | number
`seatsPendingVerification` | number
`contractsOnFile` | number

## Example

```typescript
import type { DepartmentCoachesBasis } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "payrollCents": null,
  "payrollSource": null,
  "payrollFiscalYear": null,
  "compFiscalYear": null,
  "seatsWithComp": null,
  "seatsPendingVerification": null,
  "contractsOnFile": null,
} satisfies DepartmentCoachesBasis

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachesBasis
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


