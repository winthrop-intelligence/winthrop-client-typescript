
# DepartmentCoachPay


## Properties

Name | Type
------------ | -------------
`amountCents` | number
`basis` | string
`basisFiscalYear` | number
`pendingVerification` | boolean
`hasFiledContract` | boolean
`rank` | number
`cohortSize` | number
`partialCohort` | boolean
`rankWithheldReason` | string

## Example

```typescript
import type { DepartmentCoachPay } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "amountCents": null,
  "basis": null,
  "basisFiscalYear": null,
  "pendingVerification": null,
  "hasFiledContract": null,
  "rank": null,
  "cohortSize": null,
  "partialCohort": null,
  "rankWithheldReason": null,
} satisfies DepartmentCoachPay

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachPay
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


