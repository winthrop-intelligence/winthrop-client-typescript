
# DepartmentGuaranteesSportLedger


## Properties

Name | Type
------------ | -------------
`sportId` | number
`sportKey` | string
`sportName` | string
`agreementCount` | number
`outCount` | number
`outTotalCents` | number
`outMedianCents` | number
`agreements` | [Array&lt;DepartmentGuaranteesAgreement&gt;](DepartmentGuaranteesAgreement.md)

## Example

```typescript
import type { DepartmentGuaranteesSportLedger } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportId": null,
  "sportKey": null,
  "sportName": null,
  "agreementCount": null,
  "outCount": null,
  "outTotalCents": null,
  "outMedianCents": null,
  "agreements": null,
} satisfies DepartmentGuaranteesSportLedger

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentGuaranteesSportLedger
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


