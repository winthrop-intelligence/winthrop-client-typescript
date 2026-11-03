
# ContractCreateOnRawContract

WINAD-10747. Files a published contract on a RawContract that is already in WinAD (no upload).

## Properties

Name | Type
------------ | -------------
`rawContractId` | number
`coachId` | number
`contractableType` | string
`startOn` | Date
`endOn` | Date
`schoolId` | number
`changeNote` | string

## Example

```typescript
import type { ContractCreateOnRawContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "rawContractId": null,
  "coachId": null,
  "contractableType": null,
  "startOn": null,
  "endOn": null,
  "schoolId": null,
  "changeNote": null,
} satisfies ContractCreateOnRawContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContractCreateOnRawContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


