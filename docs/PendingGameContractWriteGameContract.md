
# PendingGameContractWriteGameContract


## Properties

Name | Type
------------ | -------------
`homeSchoolId` | number
`awaySchoolId` | number
`sportId` | number
`gameType` | string
`gameDate` | Date
`gameDateTbd` | string
`compCents` | number
`compTbd` | boolean
`variable` | boolean
`cancelFeeCents` | number
`signedOn` | Date
`offSiteLocation` | string
`verified` | boolean

## Example

```typescript
import type { PendingGameContractWriteGameContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "homeSchoolId": null,
  "awaySchoolId": null,
  "sportId": null,
  "gameType": null,
  "gameDate": null,
  "gameDateTbd": null,
  "compCents": null,
  "compTbd": null,
  "variable": null,
  "cancelFeeCents": null,
  "signedOn": null,
  "offSiteLocation": null,
  "verified": null,
} satisfies PendingGameContractWriteGameContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingGameContractWriteGameContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


