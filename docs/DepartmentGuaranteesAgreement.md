
# DepartmentGuaranteesAgreement


## Properties

Name | Type
------------ | -------------
`gameContractId` | number
`direction` | string
`opponent` | [DepartmentGuaranteesAgreementOpponent](DepartmentGuaranteesAgreementOpponent.md)
`gameDate` | Date
`gameDateTbd` | string
`compCents` | number
`compTbd` | boolean
`hasDocument` | boolean
`belongsToSeries` | boolean

## Example

```typescript
import type { DepartmentGuaranteesAgreement } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "gameContractId": null,
  "direction": null,
  "opponent": null,
  "gameDate": null,
  "gameDateTbd": null,
  "compCents": null,
  "compTbd": null,
  "hasDocument": null,
  "belongsToSeries": null,
} satisfies DepartmentGuaranteesAgreement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentGuaranteesAgreement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


